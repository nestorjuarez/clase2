import React, {useState, useEffect} from 'react'
import {Spinner} from 'reactstrap'
import Item from '../Item'
import {useParams} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config.js';


export const ItemDetail = () => {

const [product, setProduct] = useState(null);
const [itemVisible, setItemVisible] = useState(false);

const params = useParams();


useEffect(()=>{
  const getProducto = async()=>{
    try {
      const docRef = doc(db, "products", params.productId);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.id)
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {id: docSnap.id, ...docSnap.data()}
        setProduct(productDetail)
        setItemVisible(true);
        // console.log(product)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }


        // const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
        // const data= await response.json();
      
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

