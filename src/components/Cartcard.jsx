import Card from 'react-bootstrap/Card';
import bground from "../assets/images/bg.png"
import logo from "../assets/images/pizza-shop.png"
import "./Cartcard.css"
import { useSearchParams } from "react-router-dom"

const Cartcard = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const pizza = searchParams.get("pizza");
  let userData = localStorage.getItem(`user_${pizza}`);
  console.log('WHICH PIZZA',searchParams.get("pizza"),userData);
  userData = JSON.parse(userData);

  let p_tags = [];
  userData.TOPPINGS.forEach(element => {
    const p_tag = (<p>{element},</p>);
    p_tags.push(p_tag);
  });
  // <p>{e}</p>
  
  return (

   
    
//     </Card>
<Card className="carddiv" style={{ width: '40%' ,
     padding: "5px",
     border: "none",
     
     }}
     >
    <div className="cardoutside">
     <div className="cardbody">
           <div className='cardcontent'>
           
           <Card.Img className="cd2" variant="top" src={userData.IMAGE}  style={{
            borderRadius: '20px',
            marginRight: '5px',
             width: "30%",
             boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
           }}/>
          
           
           <div className='detailsdiv'>
               <div className="topcard">
                 <h4>{userData.TITLE}</h4>
                  <p className='sizep'>{userData.SIZE}</p>
                  <p className='toppingp'>{p_tags}</p>
               </div>
               <div className="fottoncard">
                   
                    <div className='inputdiv'>
                  
                   <input type="number" value="1"/> 
                    </div>
                    
                   

                    <div className="price">{userData.PRICE}rs</div>
                    <button className='buybtn'>Buy Now</button>
               </div>
           </div>
            </div>   
            
    </div>

</div>
     
    
    </Card>
    //MY NEW DESIGN

// import Card from 'react-bootstrap/Card';
// import bground from "../assets/images/bg.png"
// import logo from "../assets/images/pizza-shop.png"
// import "./Cartcard.css"

// const Newcard = () => {
//   return (
    
//   )
// }

// export default Newcard;
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

 //old card
//     <Card className="carddiv" style={{ width: '100%' ,
//      padding: "5px",
//      border: "none",
     
//      }}
//      >
// <div className="cardoutside">
//      <div className="cardbody">
//            <div className="productdetails">
//            <Card.Img className="cd2" variant="top" src={userData.IMAGE}  style={{
          
//             marginRight: '5px',
           
//            }}/>
               
//             <div className='productinfo'>
//               <p className='pizzaname'>{userData.TITLE}</p>
//               <p className='pizzaprice'>{userData.PRICE}rs</p>  
//             </div>   
//            </div>

//           <div className='selectquantity'>
//           {/* <h5>{'1'}</h5> */}
//           <p><input type="number" value={'1'}/> </p>
//           </div>
          
         
//     </div>
//     <div className="cardaddons">
//          <div className='sizeaddons'>
//              <div className="sizeinfo">
//                <h3>Size</h3>
//                <p>{userData.SIZE}</p>
//               </div> 
             
//           </div>
//           <div className='toppingaddons'>
//              <div className="toppinginfo">
//                <h3>Topping's</h3>
//                {p_tags}
//               </div> 
//           </div>
//     </div>

// </div>
     