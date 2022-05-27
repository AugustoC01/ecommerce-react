import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3 className='titulo-ecom'>Titulo Ecommerce</h3>
      <a className='btn-nav' href='./'>Monitores</a>
      <a className='btn-nav' href='./'>Teclados</a>
      <a className='btn-nav' href='./'>Keycaps</a>
      <a className='btn-nav' href='./'>Mouse</a>
      <a className='btn-nav' href='./'>Pads</a>
      <a className='btn-nav' href='./'>Auriculares</a>
      <CartWidget />
    </nav>
  );
};

export default NavBar;