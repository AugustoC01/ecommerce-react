import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"

function App() {

  const handleAdd = (count) => {
    console.log(count)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido a nuestro sitio!'/>}/>
          {/* <ItemCount initial={0} stock={10} onAdd={handleAdd}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;