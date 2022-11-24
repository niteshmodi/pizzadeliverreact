import { Stack } from "react-bootstrap";
  import Button from 'react-bootstrap/Button';
import Cartcard from "../components/Cartcard";

function Cart() {
    return (
      <>
       <section className=" filtermenu iteam_section mt-4 d-flex container" >
         <Stack>
            
            <Cartcard/>
           
         </Stack>
       </section>
      </>
     
    );
  }
  
  export default Cart;