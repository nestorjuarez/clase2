import React from 'react'
import {useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './stylecard.css'
const Item = ({producto})=> {

  const navigate = useNavigate()

  const handleDetail = ()=>{
    navigate(`/detail/${producto.id}`)
  }
   
  return (
     
       
                    <Card style={{ width: '18rem' }}
                    onClick={handleDetail}>
                            <Card.Img variant="top" src={producto.image} className="CardImg" />
                            <Card.Body >
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Text>
                                
                                  `${producto.price}` 
                                 
                                </Card.Text>
                               

                        </Card.Body>

                    </Card>


          
  )
}

export default Item;
