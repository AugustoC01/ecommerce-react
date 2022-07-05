import './Cart.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import EmptyCart from '../EmptyCart/EmptyCart';

const Cart = () => {
    const { cart, totalToPay, clearCart } = useContext(CartContext)

    if(cart.length === 0) return <EmptyCart />

    return(
        <div>
            <h1 className='cart-title'>Items del carrito</h1>
            <div className='cart-container'>{cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}</div>
            <h1 className='cart-total'>Total: ${totalToPay()}</h1>
            <button onClick={clearCart} className='violet-btn clear-btn'>Vaciar carrito</button>
            <Link to='/checkout' className='violet-btn checkout-btn'>Finalizar compra</Link>
        </div>
    )
}

export default Cart