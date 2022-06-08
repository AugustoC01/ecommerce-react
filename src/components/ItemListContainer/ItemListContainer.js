import "./ItemListContainer.css";
import { getProducts } from "../../asyncmock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()
  useEffect(() => {
    getProducts(categoryId).then(response => {
      setProducts(response)
    })
  }, [categoryId])

  return(
    <div>
      <h1 className="greeting">{props.greeting}</h1>
      {products.length > 0 
        ? <ItemList products={products}/>
        : <h1>No hay productos</h1>}

    </div>
  )
}

export default ItemListContainer