import React, { useState } from 'react'
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import vegPizza from "../assets/vegPizza.webp";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const PizzaVariety = ({id,name,price,rating, description, imageUrl,handleAdd, quantity, setIsClicked}) => {
  
  return (
    <div className="flex flex-col justify-between items-center">
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">{name}</h1>
                <h3 className="text-[20px]">₹ {price}</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>{rating}</p>
              </div>
              <p className="w-[80%] mt-4">
                {description}
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
            
            >
              <img src={imageUrl || vegPizza} className="w-[200px] h-[150px]" />
        <Link className="absolute bottom-6 left-14 px-6 py-1 rounded bg-white" onClick={()=> handleAdd({id,name,price,imageUrl, quantity})}>
                ADD
              </Link> 
            </Link>
          </div>
        </div>
      </div>
  )
}

export default PizzaVariety