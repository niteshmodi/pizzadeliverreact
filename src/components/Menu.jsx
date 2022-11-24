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
    const arrayData = data;
    let filterData = data;
    console.log(data);
    const [selected, setSelected] = useState("");

    const [added,setAdded] = useState(0);
    const [vegfilter,setVegFilter] = useState(false);
    
    function addItem(id){
    setAdded(id);
    }
  

    

      


  const getApiData= async () => {
    const res = await axios.get();
    setData(res.data);

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
    }
    else if (selected==="PLTH")
    {
        const filterr =filterData.sort((a,b) => Number(a.price)-Number(b.price));
    setData(filterr);
    }
    else if (selected==="PHTL"){
      const filterr =filterData.sort((a,b) => Number(b.price)-Number(a.price));
      setData(filterr)
    }
    else if (selected==="RLTH"){
      const filterr =filterData.sort((a,b) => parseFloat(a.rating)-parseFloat(b.rating));
      setData(filterr);
    }
    else if (selected==="RHTL"){
      const filterr =filterData.sort((a,b) => parseFloat(b.rating)-parseFloat(a.rating));
      setData(filterr)
    }
  }


  // Filtering Items Using Veg and Non Veg
  const filterItemVeg = (istrue) => {
    const newItem = filterData.filter((newVal) => {
      return newVal.isVeg === istrue;  
    });
    setData(newItem);
    setVegFilter(false);
                                 
  };
  const filterItemNonVeg = (istrue) => {
    const newItem = filterData.filter((newVal) => {
      return newVal.isVeg === istrue;  
    });
    setData(newItem);
    setVegFilter(false);
                                 
  };



  useEffect( () => {
  getApiData();
  },[])
  

  useEffect( () => {
  sortData();
  })
  
  

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

          
          {
              
            arrayData.map((FoodItem , index , ) => {
          return (
            <Cards
              key={index}
              id={index}
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
        })};
  
        
        
          </div>
            
        </section>
    

      </>
    
    );
  }

  export default Menu;
