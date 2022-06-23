import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import { getDoc, doc } from "firebase/firestore";
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const firebaseProduct = { id: doc.id, ...doc.data()}
            setProduct(firebaseProduct)
            console.log(firebaseProduct)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) return <LoadingSpinner/>

    return(
        <>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer