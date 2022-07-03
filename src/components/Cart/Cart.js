import './Cart.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalToPay, clearCart } = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div className='emptyCart-container'>
                <h1 className='cart-title'>El carrito esta vacio...</h1>
                <img src='https://c.tenor.com/TzCy1obiigsAAAAi/kikicat-kikiapp.gif' className='emptyCart-img' alt='carrito-vacio-img'/>
                <Link to={'/'} className='violet-btn empty-btn'>Volver a inicio</Link>
            </div>
        )
    }

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