import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return(
        <li className='Item-container'>
            <img src={img} alt={name} className='Item-img'/>
            <div className='Item-info'>
                <h1 className='Item-name'>{name}</h1>
                <h3 className='Item-prc'>${price}</h3>
                <Link to={`/detail/${id}`} className='Item-btn'>Ver detalle</Link>
            </div>
        </li>
    )
}

export default Item