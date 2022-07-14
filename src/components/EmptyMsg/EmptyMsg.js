import './EmptyMsg.css';
import { Link } from 'react-router-dom';

const EmptyMsg = ({ message, img }) => {
  return (
    <div className='empty-container'>
      <h1 className='empty-title'>{message}</h1>
      <img src={img} className='empty-img' alt='carrito-vacio-img' />
      <Link to={'/'} className='violet-btn empty-btn'>
        Volver a inicio
      </Link>
    </div>
  );
};

export default EmptyMsg;
