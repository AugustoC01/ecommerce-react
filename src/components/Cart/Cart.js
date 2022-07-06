import './Cart.css'
import { Link } from "react-router-dom";
import { useCart } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import EmptyMsg from '../EmptyMsg/EmptyMsg';

const Cart = () => {
    const { cart, totalToPay, clearCart } = useCart()

    if(cart.length === 0) return <EmptyMsg message={'El carrito esta vacio...'} img={'https://c.tenor.com/TzCy1obiigsAAAAi/kikicat-kikiapp.gif'}/>

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