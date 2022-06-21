import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
    const [itemAdded, setItemAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleAdd = (quantity) => {
        addItem({ id, name, price, quantity })
        setItemAdded(quantity)
    }

    return(                                                                                 
        <div className='itemDetail-container'>
            <div className='img-container'>
                <img src={img} alt={name} className='item-img'/>
            </div>
            <div className='info-container'>
                <h2 className='item-name'>{name}</h2>
                <h2 className='item-price'>${price}</h2>
                <p className='item-desc'>{description}</p>
                {itemAdded === 0
                    ? <ItemCount stock={stock} Add={handleAdd}/>
                    : <Link to='/cart' className='violet-btn link-cart'>Terminar compra</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail