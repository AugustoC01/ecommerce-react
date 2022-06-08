import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return(
        <li>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </li>
    )
}

export default Item