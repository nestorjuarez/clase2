import React, { useContext } from 'react'
import Item from '../Item'
import { Shop } from '../../Context/ShopContext.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({products})=> {
    const stylitos = {
        top:"5px",
       
      };

      const {setEstadoA} = useContext(Shop)

    //   const handleStateChange = ()=>{

    //       setEstadoA('cambio de Valor')
    //   }
 return (
    <div>
         <Container>
      <Row >
       {
        products.map((product) =>{
            return (
                <Col md="auto">
                <Item producto={product}/>
                </Col>
            )
        })}
        <button onClick={()=>setEstadoA('cambio de valor')}>Cambiar context</button>
       </Row>
       <br />
   </Container>

    </div>
   
  )
}

export default ItemList