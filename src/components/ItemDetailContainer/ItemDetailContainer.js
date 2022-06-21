import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()
    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) return <LoadingSpinner/>

    return(
        <>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer