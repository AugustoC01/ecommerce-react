import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId ? (
        query(collection(db, 'products'), where('category', '==', categoryId) )
    ) : (collection(db, 'products'))

    getDocs(collectionRef).then(response => {
      const firebaseProducts = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setProducts(firebaseProducts)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

  if(loading) return <LoadingSpinner />
  
  return(
    <div className='itemList-container'>
      {products.length > 0 
        ? <ItemList products={products} />
        : <h1>No hay productos</h1>}
    </div>
  )
}

export default ItemListContainer