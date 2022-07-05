import React, {useState, useEffect} from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from '../Item'

export const ItemDetail = () => {

const [product, setProduct] = useState(null);
const [itemVisible, setItemVisible] = useState(false);

useEffect(()=>{
  const getProducto = async()=>{
    try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data= await response.json();
        setProduct(data)
        setItemVisible(true);
    } catch (error) {
        console.log('se produjo el siguiente error:'+error);
    }


  }

  getProducto();


},[])


  return (
    <div>
        
       {
       itemVisible ? <Item producto={product}/>: <Spinner color="primary">
       Loading...
     </Spinner>

        
        }
    </div>
  )
}

