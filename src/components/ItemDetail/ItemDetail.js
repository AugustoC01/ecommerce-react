import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, price, img, description }) => {
    return(
        <div className='container'>
            <div className='img-container'>
                <img src={img} alt={name} className='item-img'/>
            </div>
            <div className='info-container'>
                <h2 className='item-name'>{name}</h2>
                <h2 className='item-price'>${price}</h2>
                <p className='item-desc'>{description}</p>
                <ItemCount initial={0} stock={10} />
            </div>
        </div>
    )
}

export default ItemDetail