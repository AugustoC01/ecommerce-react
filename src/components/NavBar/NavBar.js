import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <h3 className='title-ecom'>Titulo Ecommerce</h3>
      </Link>
      <Link to='/category/monitor' className='btn-nav'>Monitores</Link>
      <Link to='/category/teclado' className='btn-nav'>Teclados</Link>
      <Link to='/category/keycaps' className='btn-nav'>Keycaps</Link>
      <Link to='/category/mouse' className='btn-nav'>Mouse</Link>
      <Link to='/category/mousepad' className='btn-nav'>Pads</Link>
      <Link to='/category/auricular' className='btn-nav'>Auriculares</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;