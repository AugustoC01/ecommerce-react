import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {
  const { getItemsQuantity } = useContext(CartContext)
  const itemsQuantity = getItemsQuantity()

  if (itemsQuantity === 0) return

  return( 
    <div className='cart-container'>
      <img src="/images/cart.png" alt="cartLogo" className='cart-img' />
      <h1 className='cart-count'>{itemsQuantity}</h1>
    </div>
  )
};

export default CartWidget;