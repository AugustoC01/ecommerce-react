import './ItemCart.css'
import { useCart } from '../../Context/CartContext'

const ItemCart = ({ id, name, price, quantity }) => {
    const { removeItem } = useCart()

    return(
        <div className='itemCart-card'>
            <div className='itemCart-info'>
                <h1 className='itemCart-title'>{name}</h1>
                <h1 className='itemCart-quantity'>Cantidad: {quantity}</h1>
                <h1 className='itemCart-price'>${price}</h1>
                <h1 className='itemCart-sub'>Subtotal: ${quantity*price}</h1>
            </div>
            <button onClick={() => {removeItem(id)}} className='violet-btn itemCart-btn'>Eliminar</button>
        </div>
    )
}

export default ItemCart