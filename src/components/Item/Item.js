import './Item.css'

const Item = ({ name, img, price }) => {
    return(
        <li>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <h3>${price}</h3>
        </li>
    )
}

export default Item