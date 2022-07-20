import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Input from './components/input';
import ItemListContainer from './components/containers';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemDetail } from './components/ItemDetails';
import NotFound from './components/NotFound/inddex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartTerminarCompra from './components/containers/CartTerminarCompra';
import { ShopProvider } from './Context/ShopContext';
import { LoadingComponent } from './components/LoadingComponent';
function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
      <NavBar/>
        <div className='container'>
        <LoadingComponent/>


         
          <Routes>
             <Route path='/' element={<ItemListContainer/>}/>
             <Route path='/products/category/:categoryId' element={<ItemListContainer/>}/>
             <Route path='/detail/:productId' element={<ItemDetail/>}/>
             <Route path='/cart/' element={<CartTerminarCompra/>}/>
             <Route path='*' element={<NotFound/>}/>
             
             
          </Routes>
          {/* <ItemDetail greeting="Hola Productos"/> */}

      </div>
    </BrowserRouter>
    
    </ShopProvider>
    
    
  );
}

export default App;
