import React from 'react';
import "./Navbar.css";

import { Button } from 'react-bootstrap';
import bground from "../assets/images/bg.png"
import logo from "../assets/images/pizza-shop.png"
import{ Link} from "react-router-dom"
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
           <Link to="/" className='btnn' >
            Home
            </Link>
           </div>
           <div className='bn'>
           
            {/* <span>Menu</span> */}
            <Link to="/cart" className='btnn' >
             Cart
            </Link>
            
           </div>
            
            
           
           </div>
            
        </div>
        
      </div>
      
      
    </>
  );
}

export default Naavbar;


