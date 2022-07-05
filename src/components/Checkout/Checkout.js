import './Checkout.css'
import { useState, useContext } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import EmptyCart from '../EmptyCart/EmptyCart';
import CartContext from '../../Context/CartContext';
import NotificationContext from '../../notification/Notification';

import { addDoc, collection, updateDoc, doc, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore';
import { db } from '../../services/firebase/index'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { cart, totalToPay, clearCart } = useContext(CartContext)
  const setNotification = useContext(NotificationContext)

const handleCheckout = (buyerData) => {
  setLoading(true)
  const day = new Date()
  const today = `${day.getDate()}/${day.getMonth()+1}/${day.getFullYear()}`
  const newOrder = {
    buyerData,
    date: today,
    items: cart,
    total: totalToPay()
  }
    
  const batch = writeBatch(db)

  const ids = cart.map(prod => prod.id)

  const outOfStock = []

  const collectionRef = collection(db, 'products')

  getDocs(query(collectionRef, where(documentId(), 'in', ids)))
    .then(response => {
      response.docs.forEach(doc => {
        const dataDoc = doc.data()

        const prod = cart.find(prod => prod.id === doc.id)
        const prodQuantity = prod.quantity 

        if(dataDoc.stock >= prodQuantity) {
          batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })
    }).then(() => {
      if(outOfStock.length === 0) {
        const collectionRef = collection(db, 'orders')
        return addDoc(collectionRef, newOrder)
      } else {
        return Promise.reject({ type: 'out_of_stock', products: outOfStock })
      }
    }).then(({ id }) => {
      batch.commit()
      clearCart()
      setNotification(
        'success', 
        `Su orden se genero correctamente.
         El id de su orden es: ${id}`,
        'https://c.tenor.com/J8IE5IfN3ocAAAAC/kikicat-kikiapp.gif',
        5
      )
    }).catch(error => {
      if(error.type === 'out_of_stock') {
        setNotification(
          'error', 
          'Hay productos que no tienen stock',
          'https://c.tenor.com/jBJAcvRVPfAAAAAC/kikicat-kikiapp.gif',
          3
        )
      } else {
        console.log(error)
      }  
    }).finally(() => {
      setLoading(false)
    })
};

  if(loading) {
    return <LoadingSpinner />
  }

  if(cart.length === 0) return <EmptyCart />

  return (
    <div className='checkout-container'>
      <h1 className='checkout-title'>Ingrese sus datos de contacto:</h1>
      <CheckoutForm AddOrder={handleCheckout}/>
  </div>
  );
};

export default Checkout;