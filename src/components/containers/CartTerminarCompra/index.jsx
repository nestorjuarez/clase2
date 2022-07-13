import React, { useContext } from 'react'
import { Shop } from '../../../Context/ShopContext';
import ListGroup from 'react-bootstrap/ListGroup'
import {TiDelete} from 'react-icons/ti'

import Button from 'react-bootstrap/Button';


const CartTerminarCompra = () => {

  const {cart, setCart} = useContext(Shop)
 
  return (
      <div>
           <ListGroup variant="flush">
           {
              cart.map(producto => {
                return <ListGroup.Item key={producto.id}>{producto.title} <img src={producto.image} width='50px'alt=""/><TiDelete size={32} onClick={()=>{alert('borrar el id '+producto.id)}}></TiDelete></ListGroup.Item>
              })
          }
          </ListGroup>
          <Button variant="outline-danger" onClick={()=>setCart([])}>Vaciar Carrito</Button>
      </div>
     
    
  )
}
export default CartTerminarCompra;
