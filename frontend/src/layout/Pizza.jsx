import Navbar from "../components/Navbar";

import { Pizzas } from "../../jsons/pizza.js";
import PizzaVariety from "../components/PizzaVariety.jsx";
import { useDispatch} from "react-redux";
import { add, remove } from "../store/cartSlice.js";

import { useEffect, useState } from "react";

const Pizza = () => {
  const [isClicked, setIsClicked] = useState(false);
  const disPatch = useDispatch();
  const handleAdd = (product)=>{
    disPatch(add(product));
    setIsClicked(true);
  }
  
  return (

    <div className=" w-full">
      <Navbar className="z-50"/>
      {Pizzas.map((product)=>{
        return (<PizzaVariety key={product.id} id={product.id} name={product.name} price={product.price} rating={product.rating} description={product.description} imageUrl={product.imageUrl} handleAdd={handleAdd} product={product} quantity={product.quantity} setIsClicked={setIsClicked}/>)
      })}
     
    </div>
  );
};

export default Pizza;
