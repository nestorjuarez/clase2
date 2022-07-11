import React, { useState } from 'react';
import './styles.css';
const ItemCount = ({stock, initial}) => {

    const [cont, setCont] = useState(initial);
    

    function onAdd(num){
        let res = cont + num;
        if (res>stock){
           res=5;
        }
        if (res<initial){
            res=1;
        }
        return setCont(res);
        
    }
    return (
        <div className='micontainer'>
            <button className='btnizq' onClick={()=>onAdd(+1)}>+</button>
            <button className='btncenter'>{cont}</button>
            <button className='btnder' onClick={()=>onAdd(-1)}>-</button>
        </div>
    );
}

export default ItemCount;