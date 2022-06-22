import React, { useState }from "react";
import ItemCount from "../ItemCount";
const ItemListContainer = ()=>{

   

    return(
        <div style={{backgroundColor:"#C0E881"}}>
          
            <ItemCount stock={5} initial={1}></ItemCount>
           
        </div>
    );
}


export default ItemListContainer;