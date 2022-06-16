import React from "react";
const ItemListContainer = ({greeting})=>{
    return(
        <div>
            <h5>{greeting}</h5>
            <img src="images/mascotas.jpg" alt="" />
        </div>
    );
}


export default ItemListContainer;