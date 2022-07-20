import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import {Spinner} from 'reactstrap'
import {useParams} from 'react-router-dom';
import ModalConEscape from "../ModalConEsc";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({greeting})=>{

    const [productos, setProductos] = useState(null);
    const [itemVisible, setItemVisible] = useState(false);
    const [url, setUrl] = useState('https://fakestoreapi.com/products')
    const [modalVisible, setModalVisible] = useState(true)
    const params = useParams();
    
    

   useEffect(() => {

    
       const getProducts = async() => {
           try{
            const queryproducts=[];
            const q= params.categoryId ? query(collection(db, "products"), where("category", "==", params.categoryId)) : query(collection(db, "products"))
            // const q = query(collection(db, "products"))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
              queryproducts.push({id: doc.id, ...doc.data()})
            });

            setProductos(queryproducts)

            // const miurl= params.categoryId ? 'https://fakestoreapi.com/products/category/'+params.categoryId : 'https://fakestoreapi.com/products'
            // setUrl(miurl)
               
            //   const response = await fetch(url);
            //   const data = await response.json();
            //   setProductos(data);
              setItemVisible(true);

           }catch(error){
              console.log('Hubo un error: '+ error);
           }
       }
       setTimeout(() => {
        getProducts();    
       }, 5000);
       
   },[params,url]);


    return(
        <div >
            {greeting}
            {
            
            
              itemVisible ? <ItemList products={productos}/> : <Spinner color="primary">
              Loading...
            </Spinner>
            
            
            }
        </div>
    );
}


export default ItemListContainer;