import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Input from './components/input';
import ItemListContainer from './components/containers';
function App() {
  return (
    <div>
      
        <NavBar/>
        {/* <Input valorPlaceholder={"este es la entrada una"}/>
        <Input valorPlaceholder={"otro titulo"}/> */}
        <ItemListContainer greeting="Mascotas"/>

    </div>
    
  );
}

export default App;
