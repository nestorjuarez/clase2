import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Input from './components/input';
import ItemListContainer from './components/containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetail } from './components/ItemDetails';
function App() {
  return (
    <div>
      
        <NavBar/>
        {/* <Input valorPlaceholder={"este es la entrada una"}/>
        <Input valorPlaceholder={"otro titulo"}/> */}
        <ItemDetail greeting="Hola Productos"/>

    </div>
    
  );
}

export default App;
