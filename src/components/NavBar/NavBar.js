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
      </Link>
      <div className='categories'> 
        {navBarCategories.map((cat) => 
          (<NavLink to={`/category/${cat}`} key={cat} className={({ isActive }) =>
            isActive 
              ? 'btn-nav-act'
              : 'btn-nav'
            }>{cat}</NavLink>
          ))}
      </div>
      <div className='cart'>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
