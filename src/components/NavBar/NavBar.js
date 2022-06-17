import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <h3 className='title-ecom'>Aincrad System</h3>
      </Link>
      <div className='categories'>
        <NavLink to='/category/monitor' className={({ isActive }) => isActive ? 'btn-nav-act' : 'btn-nav'}>Monitores</NavLink>
        <NavLink to='/category/teclado' className={({ isActive }) => isActive ? 'btn-nav-act' : 'btn-nav'}>Teclados</NavLink>
        <NavLink to='/category/keycaps' className={({ isActive }) => isActive ? 'btn-nav-act' : 'btn-nav'}>Keycaps</NavLink>
        <NavLink to='/category/mouse' className={({ isActive }) => isActive ? 'btn-nav-act' : 'btn-nav'}>Mouse</NavLink>
        <NavLink to='/category/mousepad' className={({ isActive }) => isActive ? 'btn-nav-act' : 'btn-nav'}>Pads</NavLink>
        <NavLink to='/category/auricular' className={({ isActive }) => isActive ? 'btn-nav-act' : 'btn-nav'}>Auriculares</NavLink>
      </div>
      <div className='cart'>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;