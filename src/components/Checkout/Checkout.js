import './Checkout.css'
import { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import EmptyMsg from '../EmptyMsg/EmptyMsg';
import { useCart } from '../../Context/CartContext';
import { useNotification } from '../../notification/Notification'

import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore';
import { db } from '../../services/firebase/index'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { cart, totalToPay, clearCart } = useCart()
  const setNotification = useNotification()

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
        `Su orden se genero correctamente. El id de su orden es: ${id}`,
        'https://c.tenor.com/Rho9PlHA0ZQAAAAi/kikicat-kikiapp.gif',
        8
      )
    }).catch(error => {
      if(error.type === 'out_of_stock') {
        setNotification(
          'error', 
          'Hay productos que no tienen stock',
          'https://c.tenor.com/WOwfrVTrn9wAAAAi/kikiapp-kikicat.gif',
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

  if(cart.length === 0) return <EmptyMsg message={'El carrito esta vacio...'} img={'https://c.tenor.com/TzCy1obiigsAAAAi/kikicat-kikiapp.gif'}/>

  return (
    <div className='checkout-container'>
      <h1 className='checkout-title'>Ingrese sus datos de contacto:</h1>
      <CheckoutForm AddOrder={handleCheckout}/>
  </div>
  );
};

export default Checkout;