import React, { useState, useEffect }from "react";
import ItemList from "../ItemList";


const ItemListContainer = ({greeting})=>{

    const [productos, setProductos] = useState(null);
    const [itemVisible, setItemVisible] = useState(false);


   useEffect(() => {

      
       const getProducts = async() => {
           try{
               
              const response = await fetch('https://fakestoreapi.com/products');
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
       
   },[]);
    return(
        <div >
            {greeting}
            {/* <ItemCount stock={5} initial={1}></ItemCount> */}
            {
              itemVisible ? <ItemList products={productos}/> : null
            }
        </div>
    );
}


export default ItemListContainer;