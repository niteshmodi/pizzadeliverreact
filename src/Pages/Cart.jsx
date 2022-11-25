import { Stack } from "react-bootstrap";
  import Button from 'react-bootstrap/Button';
import Cartcard from "../components/Cartcard";
import "../components/Cartcard.css";
import bground from "../assets/images/bg.png"
function Cart() {
    return (
      // <> 
      //  {/* <section className=" filtermenu iteam_section mt-4 d-flex container" >
      //    <Stack>
            
      //       <Cartcard/>
           
      //    </Stack>
      //  </section> */}

      // </>
      <>
      <div style={{backgroundImage: `url(${bground})`,
                                       backgroundPosition: "center",
 backgroundRepeat: "norepeat",
 backgroundSize: "cover",
  
   }}>

     
      <section className=" filtermenu2 iteam_section mt-4 d-flex container " >
        <Stack className="align-items-center"  > 
        <h1 className="yourcart" style={{backgroundColor: "white",
                                         border: "2px solid",
                                         borderRadius: "20px",
                                         padding: "10px",
                                         width: "100%",
                                         textAlign: 'center'
        }}>Your Cart</h1>
       
           <Cartcard/>
          
        </Stack>
      </section>
      </div>
     </>
      
     
    );
  }
  
  export default Cart;