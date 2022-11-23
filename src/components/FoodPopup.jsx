import React from 'react'
import "./foodPopup.css"
import pizzaImage from "../assets/images/pizza-icon.png"
import onionImage from "../assets/images/onion.png"
import bground from "../assets/images/bg.png"
const FoodPopup = (props) => {

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
            <button className='button-74'>{props.size1}</button>
          </div>
          <div className="size">
            <button className='button-74'>{props.size2}</button>
          </div>
          <div className="size">      
            <button className='button-74'>{props.size3}</button>
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
            <button className='button-74'>{props.t1}</button>
          </div>
          <div className="topping">
            <button className='button-74'>{props.t2}</button>
          </div>
          <div className="topping">      
            <button className='button-74'>{props.t3}</button>
          </div>
          <div className="topping">
            <button className='button-74'>{props.t4}</button>
          </div>
          <div className="topping">      
            <button className='button-74'>{props.t5}</button>
          </div>
    </div>
    </div>
    
    </div>
    <button className="accept">Add to Cart</button>
    </div>
    
     
    </div>
  ) : "";
}

export default FoodPopup;