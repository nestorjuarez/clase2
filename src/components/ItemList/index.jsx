import React from 'react'
import Item from '../Item'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({products})=> {
    const stylitos = {
        top:"5px",
       
      };

 return (
    
    <Container>
      <Row style={stylitos}>
       {
        products.map(product =>{
            return (
                <Col md="auto">
                <Item producto={product}/>
                </Col>
            )
        })
       }
       </Row>
       <br />
   </Container>
  )
}

export default ItemList