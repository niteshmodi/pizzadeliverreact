import React from 'react';
import "./Navbar.css";

import { Button } from 'react-bootstrap';
import bground from "../assets/images/bg.png"
import logo from "../assets/images/pizza-shop.png"
const Naavbar = () => {
  return (
    <>
      <div className='navvbar' >
        <div className='content'>
             <div className='logo'>
             <img src={logo} alt="" />
              </div>

           <div className='sidebar'>
           <div className='bn'>
           <div className='btnn'>
            <span>Home</span>
            </div>
           </div>
           <div className='bn'>
           <div className='btnn'>
            <span>Menu</span>
            </div>
           </div>
           <div className='bn'>
           <div className='btnn'>
            <span>About</span>
            </div>
           </div>
            
            
           
           </div>
            
        </div>
        
      </div>
      
      
    </>
  );
}

export default Naavbar;


