import React from 'react'
import "./foodPopup.css"
import pizzaImage from "../assets/images/pizza-icon.png"
import onionImage from "../assets/images/onion.png"
import bground from "../assets/images/bg.png"
import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react';


const FoodPopup = (props) => {
  const history = useNavigate();
 
  var [userHash, setuserHash] = useState({'SIZE' : '', 'TOPPINGS' : [], 'PRICE':props.price, 'TITLE':props.title , 'IMAGE':props.img_url});
  let userkey = `user_${props.key_id}`;
  localStorage.setItem(userkey,JSON.stringify([]));
  // let userHash = 

  console.log("props::",props);

  const button1click = (size,id) => {
    console.log('size',size,id);
    userHash['SIZE'] = size
    console.log("userHash::",userHash);
    setuserHash(userHash)
  }
  const toppingclick = (size,id) => {
    console.log('size',size,id);
    userHash['TOPPINGS'].push(size);
    console.log("userHash::",userHash);
    setuserHash(userHash)
  }

  const redirectToCart = () => {
    console.log('userHash redirectToCart',userHash);
    localStorage.setItem(userkey,JSON.stringify(userHash));
    history(`/cart?pizza=${props.key_id}`);
  }

  return (props.trigger) ? (
    <div className='popup'>
    <div className="popup-inner" style={{backgroundImage: `url(${bground})`,
                                        backgroundPosition: "center",
  backgroundRepeat: "norepeat",
  backgroundSize: "cover"
    }}>
    <button className="close-btn" onClick={() => props.setTrigger(false)}>✘</button>

   

    <div className='size-div'>
    <div className="contennt">

    <div className='titlebar'>
    <img src={pizzaImage} alt="" />
    <div className='title1'>Choose Size</div>
    </div>
   
    <div className="sizes">
          <div className="size">
            <button onClick={() => button1click('R',props.key_id)} className='button-74'>{props.size1}</button>
          </div>
          <div className="size">
            <button  onClick={() => button1click('M',props.key_id)} className='button-74'>{props.size2}</button>
          </div>
          <div className="size">      
            <button  onClick={() => button1click('L',props.key_id)} className='button-74'>{props.size3}</button>
          </div>
    </div>
    </div>
    
    </div>
    <div className='topping-div'>
    <div className="contennt">
    <div className="titlebar2">
    <img src={onionImage} alt="" />
    <div className='title2'>Choose Toppings's</div>

    </div>
    
    <div className="toppings">
          <div className="topping">
            <button className='button-74' onClick={()=>{toppingclick(props.t1,props.key_id)}}>{props.t1}</button>
          </div>
          <div className="topping">
            <button className='button-74'  onClick={()=>{toppingclick(props.t2,props.key_id)}}>{props.t2}</button>
          </div>
          <div className="topping">      
            <button className='button-74' onClick={()=>{toppingclick(props.t3,props.key_id)}}>{props.t3}</button>
          </div>
          <div className="topping">
            <button className='button-74' onClick={()=>{toppingclick(props.t4,props.key_id)}}>{props.t4}</button>
          </div>
          <div className="topping">      
            <button className='button-74' onClick={()=>{toppingclick(props.t5,props.key_id)}}>{props.t5}</button>
          </div>
    </div>
    </div>
    
    </div>
    <button className="accept" onClick={()=>{redirectToCart();  }} >Add to Cart</button>
    </div>
    
     
    </div>
  ) : "";
}

export default FoodPopup;