import Card from 'react-bootstrap/Card';
import bground from "../assets/images/bg.png"
import logo from "../assets/images/pizza-shop.png"
import "./Cartcard.css"

const Cartcard = () => {
  return (
    <Card className="carddiv" style={{ width: '100%' ,
     padding: "5px",
     border: "none",
     height: "10%"
     }}
     >
<div className="cardoutside">
     <div className="cardbody">
           <div className="productdetails">
           <Card.Img className="cd2" variant="top" src={bground}  />
               
            <div>
             <p>Product Name</p>
              <p>Price</p>  
            </div>   
           </div>
          
          <p><input type="number" value="1"/> </p>
          <div className='addons'>
             <div className="sizeinfo">
               <h3>Size</h3>
               <p>Large</p>
              </div> 
             <div className="toppinginfo">
               <h3>Topping's</h3>
              <p>Red Pepper</p>
              <p>Onion</p>
              </div> 
          </div>
    </div>

</div>
     
    
    </Card>
  )
}

export default Cartcard



//  {/* <div className="upper_data d-flex justify-content-between align-item-center   ">
//           <h4 className='mt-2'>{props.title}</h4>
//           <span>{props.rating}★</span>
//          </div>
//          <div className="lower_data d-flex justify-content-between">
//           <h5>{props.des.slice(0,100)}</h5>
//           <span>{props.price} Rs</span>
//          </div>
//          <div className="extra">
//          <div className=''>
//          <button  className='button' >ADD</button>
//          </div>
         
          
//          </div> */}