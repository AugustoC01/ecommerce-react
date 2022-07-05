import './EmptyCart.css'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return(
    <div className='emptyCart-container'>
        <h1 className='emptyCart-title'>El carrito esta vacio...</h1>
        <img src='https://c.tenor.com/TzCy1obiigsAAAAi/kikicat-kikiapp.gif' className='emptyCart-img' alt='carrito-vacio-img'/>
        <Link to={'/'} className='violet-btn emptyCart-btn'>Volver a inicio</Link>
    </div>
  )
}

export default EmptyCart