import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route> 
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;