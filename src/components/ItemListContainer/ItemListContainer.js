import "./ItemListContainer.css";
import { getProducts } from "../../asyncmock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
  useEffect(() => {
    setLoading(true)
    
    getProducts(categoryId).then(response => {
      setProducts(response)
    }).finally(() => {
        setLoading(false)})
  }, [categoryId])

  if(loading){
    return(
      <div className="loading-spinner"> </div>
    )
  }

  return(
    <div className="container">
      {products.length > 0 
        ? <ItemList products={products}/>
        : <h1>No hay productos</h1>}

    </div>
  )
}

export default ItemListContainer