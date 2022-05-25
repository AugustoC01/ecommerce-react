import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav>
            <h3>Titulo Ecommerce</h3>
            <button>Monitores</button>
            <button>Teclados</button>
            <button>Keycaps</button>
            <button>Mouse</button>
            <button>Pads</button>
            <button>Auriculares</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar