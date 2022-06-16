import React from 'react';
import './NavBar.css';
import Cartwidgget from '../CartWidgget';

const NavBar = ()=>{
    return (
    <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
        <Cartwidgget/>
    </ul>
    )
}

export default NavBar;