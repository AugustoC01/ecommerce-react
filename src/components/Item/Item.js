import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return(
        <li className='card-container'>
            <img src={img} alt={name} className='card-img'/>
            <div className='card-info'>
                <h1 className='card-name'>{name}</h1>
                <h3 className='card-price'>${price}</h3>
            </div>
            <Link to={`/detail/${id}`} className='card-btn'>Ver detalle</Link>
        </li>
    )
}

export default Item