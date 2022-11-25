
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./Cards.css";
import Overlay from 'react-bootstrap/Overlay';
import FoodPopup from './FoodPopup';
import addimg from "../assets/images/plus.png"
function Cards(props) {
  const [popup, setPopupTrigger] = useState(false);
  return (
   <>
   
    <Card className="carddiv" style={{ width: '20rem' ,
     padding: "5px",
     border: "none"
     }}
     >
      <Card.Img className="cd" variant="top" src={props.img}  />
      {/* <div className="imgs">
      <img className="thumbnail" src={props.img} alt="" />
      </div> */}
     
       <div className="card_body ">
         <div className="upper_data d-flex justify-content-between align-item-center   ">
          <h4 className='mt-2'>{props.title}</h4>
          <span>{props.rating}★</span>
         </div>
         <div className="lower_data d-flex justify-content-between">
          <h5>{props.des.slice(0,100)}</h5>
          <span>{props.price} Rs</span>
         </div>
         <div className="extra">
         <div className=''>
         <button  className='button' onClick={ ()=> {
          setPopupTrigger(true);  

         }}>ADD</button>
         </div>
         
          
         </div>
       </div> 
    </Card>
    <FoodPopup 
    trigger={popup} 
    setTrigger={setPopupTrigger}
    key_id={props.key_id}
    price={props.price}
    title={props.title}
    img_url={props.img}
    size1={props.size[0].items[0].size} 
    size2={props.size[0].items[1].size} 
    size3={props.size[0].items[2].size} 
    isRadio={props.size[0].isRadio} 
    
    t1={props.toppings[0].items[0].name} 
    t2={props.toppings[0].items[1].name} 
    t3={props.toppings[0].items[2].name} 
    t4={props.toppings[0].items[3].name} 
    t5={props.toppings[0].items[4].name} 
      />
   
    </>
  );
  
}

export default Cards;