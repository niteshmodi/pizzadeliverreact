import {useState, useEffect} from "react";

import axios from "../axios";
import Cards from "./Cards";

import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import pizzaImage from "../assets/images/pizza-icon.png"
import onionImage from "../assets/images/onion.png"
import bground from "../assets/images/bg.png"
import "./Menu.css";
function Menu() {
  const [data , setData] = useState([]);
  const [dataOriginal , setorigData] = useState([]);
  let arrayData = data;
  let filterData = data;
  
  const [selected, setSelected] = useState("");
  
  const [added,setAdded] = useState(0);
  const [vegfilter,setVegFilter] = useState(false);
  const [isfilter,setisfilter] = useState(true);
  
  function addItem(id){
  setAdded(id);
  }


  

    


const getApiData= async () => {
  const res = await axios.get();
  setData(res.data);
  setorigData(res.data);

  // Sorting The Data
  // if(selected==="" || selected==="reset" ){
  //   setData(res.data);
    
  // }
  // else if (selected==="PLTH")
  // {
  //     const filterr =data.sort((a,b) => a.price-b.price);
  // setData(filterr);
  // }
  // else if (selected==="PHTL"){
  //   const filterr =data.sort((a,b) => b.price-a.price);
  //   setData(filterr)
  // }
  // else if (selected==="RLTH"){
  //   const filterr =data.sort((a,b) => a.rating-b.rating);
  //   setData(filterr);
  // }
  // else if (selected==="RHTL"){
  //   const filterr =data.sort((a,b) => b.rating-a.rating);
  //   setData(filterr)
  // }
  
  
  
}

//Sorting The Data
const sortData = () => {
  if(selected==="" || selected==="reset" ){
    setData(arrayData)
    // loadData();
  }
  else if (selected==="PLTH")
  {
      const filterr =filterData.sort((a,b) => parseFloat(a.price)-parseFloat(b.price));
      console.log("filterData",filterData);
      setData(filterr);
      // loadData();
      setisfilter(false);
  
  }
  else if (selected==="PHTL"){
    let filterr =filterData.sort((a,b) => parseFloat(b.price)-parseFloat(a.price));
    setData(filterr)
    // loadData();
    setisfilter(false);
   
  }
  else if (selected==="RLTH"){
    let filterr =filterData.sort((a,b) => parseFloat(a.rating)-parseFloat(b.rating));
    setData(filterr);
    // loadData();
    setisfilter(false);
   
  }
  else if (selected==="RHTL"){
    let filterr =filterData.sort((a,b) => parseFloat(b.rating)-parseFloat(a.rating));
    setData(filterr);
    // loadData();
    setisfilter(false);
    
  }
}

var cardItems = [];

// Filtering Items Using Veg and Non Veg
const filterItemVeg = (istrue) => {
  console.log('istrue',istrue);
  
  const newItem = dataOriginal.filter((newVal) => {
    return newVal.isVeg === istrue;  
  });
  setData(newItem);
  setVegFilter(false);
  loadData();     
};
const filterItemNonVeg = (istrue) => {
  console.log('istrue',istrue);
 
  const newItem = dataOriginal.filter((newVal) => {
    return newVal.isVeg === istrue;  
  });
  setData(newItem);
  setVegFilter(false);
  loadData();                
};



useEffect( () => {
getApiData();
},[])


useEffect( () => {
sortData();
},[selected])

const loadData = (is) =>{
  cardItems = [];
  arrayData.map((FoodItem , index , ) => {
    const item = (
      <Cards
        key={index}
        key_id={FoodItem.id}
        title={FoodItem.name}
        des={FoodItem.description}
        price={FoodItem.price}
        img={FoodItem.img_url}
        rating={FoodItem.rating}
        onAdded={addItem}
        size={FoodItem.size}
        toppings={FoodItem.toppings}
      />
    );
    cardItems.push(item);
});
}
// if(isfilter){
  loadData();
// }

console.log('cardItems',cardItems);

  return (
    <>
    
    <section className=" filter-bar filtermenu iteam_section mt-4 d-flex container" >
    
    
    
    <Stack className="btndiv" direction="horizontal" gap={3}>
    <button  className="botn" as="input" type="button" value="Veg" onClick={()=> filterItemVeg(true)}>VEG</button>
    <button className="botn" as="input" type="button" value="Nonveg"  onClick={()=> filterItemNonVeg(false)}>NON VEG</button>
    </Stack>
    <div className="sort-selection">
      <select value={selected}   onChange={event=> setSelected(event.target.value)} className="sort-selection--style" >
      <option  value="reset" >Choose A Filter</option>
      <option value="PLTH" >Price(Lowest)</option>
      <option value="PHTL">Price(Highest)</option>
      <option value="RLTH">Rating(Lowest)</option>
      <option value="RHTL">Rating(Highest)</option>
    
      </select>
      
    </div>
    </section>
    

     
   
  
    <div className="menu">

         </div>
      <section className="iteam_section mt-4 container" >
        
        <div className="row mt-2">

        
        {cardItems.map(ele => ele)}

      
      
        </div>
          
      </section>
  

    </>
  
  );
}

export default Menu;
