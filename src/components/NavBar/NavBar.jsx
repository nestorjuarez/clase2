import React, { useContext } from 'react';
import './NavBar.css';
import Cartwidgget from '../CartWidgget/index';
import {Link} from 'react-router-dom'
import {Shop} from '../../Context/ShopContext.js'

const NavBar = ()=>{

    const {estadoA} = useContext(Shop)

    console.log(estadoA)
    return (
        <div>
             <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products/category/electronics'>Electronics</Link></li>
                <li><Link to='/products/category/jewelery'>Jewelery</Link></li>
                <li><Link to="/products/category/women's clothing">Women's Clothing</Link></li>
                <li><Link to="/products/category/men's clothing">Men's Clothing</Link></li>
                <Cartwidgget/>
              </ul>
        </div>
   
    )
}

export default NavBar;