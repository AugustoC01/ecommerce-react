import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img, description }) => {
    return(
        <>
            <h2>{name}</h2>
            <h2>${price}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
        </>
    )
}

export default ItemDetail