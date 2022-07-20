import React, {useState, useContext, Children} from 'react'
import {useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Shop } from '../../Context/ShopContext.js'

import './stylecard.css'
import { CardFooter } from 'reactstrap';
import Button from 'react-bootstrap/Button';

import ButtonCount from '../ButtonCount';
const Item = ({producto})=> {

  const [qtyAdded, setQtyAdded] = useState(0)
  const navigate = useNavigate()
  const {addItem} = useContext(Shop)
  const handleDetail = ()=>{
    navigate(`/detail/${producto.id}`)
    
    
  }

  

  const handleConfirm = (qty)=>{
    setQtyAdded(qty)
    
  }

  const handleTerminate = ()=>{
    addItem(producto, qtyAdded)
    navigate('/cart')
  }
   
  console.log(qtyAdded);
  return (
           <div>
              <Card style={{ width: '18rem' }}
                    onClick={handleDetail}>
                            <Card.Img variant="top" src={producto.image} className="CardImg" />
                            <Card.Body >
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Text>
                                
                                  ${producto.price}  |  stock : {producto.rating.count}
                                 
                                </Card.Text>
                               

                        </Card.Body>
                       

                    </Card>
                    {!qtyAdded ? 
                      <ButtonCount onConfirm={handleConfirm} maxQuantity={producto.rating.count} variant="success"/> :
                      <button variant="outline-info" onClick={handleTerminate}>Terminar Compra</button>
                       
                     }

           </div>
       
                   


          
  )
}

export default Item;
