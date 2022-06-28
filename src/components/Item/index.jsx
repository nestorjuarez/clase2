import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './stylecard.css'
const Item = ({producto})=> {
  return (
     
   
       
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={producto.image} className="CardImg" />
                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Text>
                                
                                  `${producto.price}` 
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                        </Card.Body>
                    </Card>
          
  )
}

export default Item;
