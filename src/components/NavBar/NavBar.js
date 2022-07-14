import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const navBarCategories = [
    'monitores',
    'teclados',
    'keycaps',
    'mouse',
    'pads',
    'auriculares',
  ];

  return (
    <nav>
      <Link to='/'>
        <h3 className='title-ecom'>Aincrad System</h3>
        <img src='icon.png' className='icon-ecom' alt='icon' />
      </Link>
      <div className='categories'>
        {navBarCategories.map((category) => (
          <NavLink
            to={`/category/${category}`}
            key={category}
            className={({ isActive }) =>
              isActive ? 'btn-nav-act' : 'btn-nav'
            }>
            {category}
          </NavLink>
        ))}
      </div>
      <div className='cart'>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
