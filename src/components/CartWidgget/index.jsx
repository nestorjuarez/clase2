import React, { useContext } from "react";
import {MdShoppingCart} from 'react-icons/md'
import { Shop } from "../../Context/ShopContext";
// FaShoppingCart
const Cartwidgget = ()=>{

    const {cart} = useContext(Shop)
    return(
        <div>
            <MdShoppingCart size={32} style={{position: 'absolute', right: '5%', marginTop:'1%'}}/>
            {cart.length && <span style={{position:'absolute', right: '3%', marginTop:'1%'}}>({cart.length})</span>}
        </div>
        
    );
}

export default Cartwidgget