import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct } from '../../services/firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useAsync } from '../../hooks/useAsync'

import { getDoc, doc } from "firebase/firestore";
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const { isLoading, data, error } = useAsync(() => getProduct(productId), [productId])

    if (isLoading) return <LoadingSpinner/>

    if(error) return <h1>Hubo un error</h1>

    return(
        <ItemDetail {...data}/>
    )
}

export default ItemDetailContainer