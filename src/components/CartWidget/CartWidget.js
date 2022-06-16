import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {

  const { getItemsQuantity } = useContext(CartContext)

  return( 
    <div className="cart-container">
      <img src="/images/cart.png" alt="cartLogo" className="cartImg" />
      <h1 className="cartCount">{getItemsQuantity()}</h1>
    </div>
  )
};

export default CartWidget;