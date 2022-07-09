import React from 'react';
import './NavBar.css';
import Cartwidgget from '../CartWidgget';
import {Link} from 'react-router-dom'

const NavBar = ()=>{
    return (
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products/category/electronics'>Electronics</Link></li>
        <li><Link to='/products/category/jewelery'>Jewelery</Link></li>
        <li><Link to="/products/category/women's clothing">Women's Clothing</Link></li>
        <li><Link to="/products/category/men's clothing">Men's Clothing</Link></li>


        <Cartwidgget/>
    </ul>
    )
}

export default NavBar;