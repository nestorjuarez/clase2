import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import {Spinner} from 'reactstrap'
import {useParams} from 'react-router-dom';
import ModalConEscape from "../ModalConEsc";

const ItemListContainer = ({greeting})=>{

    const [productos, setProductos] = useState(null);
    const [itemVisible, setItemVisible] = useState(false);
    const [url, setUrl] = useState('https://fakestoreapi.com/products')
    const [modalVisible, setModalVisible] = useState(true)
    const params = useParams();
    console.log(params.categoryId);
    

   useEffect(() => {

    
       const getProducts = async() => {
           try{
            const miurl= params.categoryId ? 'https://fakestoreapi.com/products/category/'+params.categoryId : 'https://fakestoreapi.com/products'
            setUrl(miurl)
            console.log(url)
               
              const response = await fetch(url);
              const data = await response.json();
              setProductos(data);
              setItemVisible(true);

           }catch(error){
              console.log('Hubo un error: '+ error);
           }
       }
       setTimeout(() => {
        getProducts();    
       }, 5000);
       
   },[params,url]);

//    useEffect(()=>{
//      if(params?.categoryId){
//          const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
//          setProductos(productosFiltrados)
//      }
     
//    },[params, productos])
    return(
        <div >
            {greeting}
            {/* <ItemCount stock={5} initial={1}></ItemCount> */}
            {
                // true ? 
                //   modalVisible && <ModalConEscape handleClose={setModalVisible}/>
                //   :  <Spinner animation="border" variant="warning" />
            
            
              itemVisible ? <ItemList products={productos}/> : <Spinner color="primary">
              Loading...
            </Spinner>
            
            
            }
        </div>
    );
}


export default ItemListContainer;