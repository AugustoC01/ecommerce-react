import "./CartWidget.css";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getItemsQuantity } = useCart()
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