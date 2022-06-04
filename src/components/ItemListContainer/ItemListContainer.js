import "./ItemListContainer.css";
import { getProducts } from "../../asyncmock";
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response)
    })
  })

  return(
    <div>
      <h1 className="greeting">{props.greeting}</h1>
      <ul>
          {products.map( prod => <li key={prod.id}>{prod.name}</li>)}
      </ul>
    </div>
  )
};

export default ItemListContainer;