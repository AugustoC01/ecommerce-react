import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const ItemDetail = ({ id, name, price, img, description, stock }) => {

    const { addItem } = useContext(CartContext)

    const handleAdd = (quantity) => {
        addItem({ id, name, price, quantity })
    }

    return(                                                                                 
        <div className='container'>
            <div className='img-container'>
                <img src={img} alt={name} className='item-img'/>
            </div>
            <div className='info-container'>
                <h2 className='item-name'>{name}</h2>
                <h2 className='item-price'>${price}</h2>
                <p className='item-desc'>{description}</p>
                <ItemCount stock={stock} Add={handleAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail