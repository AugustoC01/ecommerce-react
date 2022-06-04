import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"

function App() {

  const handleAdd = (count) => {
    console.log(count)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenido a nuestro sitio!'/>
      <ItemCount initial={0} stock={10} onAdd={handleAdd}/>
    </div>
  );
}

export default App;