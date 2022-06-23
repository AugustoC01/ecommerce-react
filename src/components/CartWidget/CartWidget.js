import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getItemsQuantity } = useContext(CartContext)
  const itemsQuantity = getItemsQuantity()

  if (itemsQuantity === 0) return

  return( 
    <Link to='/cart' className='cartWidget-container'>
      <img src="/images/cart.png" alt="cartLogo" className='cart-img' />
      <h1 className='cart-count'>{itemsQuantity}</h1>
    </Link>
  )
};

export default CartWidget;