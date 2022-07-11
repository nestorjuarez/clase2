import React, {useState, useEffect} from 'react'
import {Spinner} from 'reactstrap'
import Item from '../Item'
import {useParams} from 'react-router-dom';


export const ItemDetail = () => {

const [product, setProduct] = useState(null);
const [itemVisible, setItemVisible] = useState(false);

const params = useParams();


useEffect(()=>{
  const getProducto = async()=>{
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
        const data= await response.json();
        setProduct(data)
        setItemVisible(true);
    } catch (error) {
        console.log('se produjo el siguiente error:'+error);
    }


  }

  getProducto();


},[params])


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

