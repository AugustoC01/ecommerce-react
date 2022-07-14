import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, price, img, description, stock }) => {
  const [itemAdded, setItemAdded] = useState(0);

  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    if (quantity !== 0) {
      addItem({ id, name, price, quantity });
      setItemAdded(quantity);
    }
  };

  return (
    <div className='itemDetail-container'>
      <div className='img-container'>
        <img src={img} alt={name} className='item-img' />
      </div>
      <div className='info-container'>
        <h2 className='item-name'>{name}</h2>
        <h2 className='item-price'>${price}</h2>
        <p className='item-desc'>{description}</p>
        {itemAdded === 0 ? (
          stock !== 0 ? (
            <ItemCount stock={stock} Add={handleAdd} />
          ) : (
            <h1 className='item-out-stock'>Articulo sin stock</h1>
          )
        ) : (
          <div className='item-added-container'>
            <h1 className='item-added-info'>{`Se agrego ${itemAdded} ${name}`}</h1>
            <Link to='/cart' className='violet-btn link-cart'>
              Terminar compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
