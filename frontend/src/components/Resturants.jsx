import React from "react";
import { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import axios from "axios";
import { FcRating } from "react-icons/fc";
import FoodMenu from "./FoodMenu";
import Footer from './Footer'
import Navbar from '../components/Navbar'

//import jwt from 'jsonwebtoken';

const Resturants = () => {
  
  const [resturantList, setResturantList] = useState(null);
  


  useEffect(()=>{
      console.log(resturantList);
  },[resturantList])
 

  //Get Resturants details
  const getResturants = async()=>{

    const encodedParams = new URLSearchParams();
    encodedParams.set('location_id', '297704');
    encodedParams.set('language', 'en_US');
    encodedParams.set('currency', 'USD');
    encodedParams.set('offset', '0');
    
    const options = {
      method: 'POST',
      url: 'https://restaurants222.p.rapidapi.com/search',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7e9c218827msh40e33e80e04c683p1e4123jsn50d1c17d0bed',
        'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
      },
      data: encodedParams,
    };
    
    try {
      const response = await axios.request(options);
      setResturantList(response.data.results.data);
    } catch (error) {
      console.error(error);
    }

}
useEffect(()=>{
  getResturants();
   
},[])
 const location = useLocation();
  console.log("hi", location.state?.cityName);
  return (
    <div className="relative">
     <Navbar resturantList={resturantList}/>
      <h1 className="m-4 mt-5 font-bold text-2xl"> Which one you think ? </h1>
      <FoodMenu/>
         
      <h1 className="m-4 mt-5 font-bold text-2xl">Resturants with online food delhivery in {location.state?.cityName || "Your City"}</h1>
      <div className="grid grid-cols-1 tsm:grid-cols-4">
        {resturantList?.map((data)=>{
            return <>
            
            <Link className="max-w-[300px]  overflow-hidden shadow-lg m-4" state ={{data}} to="/details">
                  <img
                    className="w-65 rounded-2xl"
                    src={data?.photo?.images?.original?.url}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-4 py-4">
                    <div className="font-bold text-xl  text-gray-800">
                      <Link src={"/"} className="curosor-pointer">{data?.name?.slice(0,10)}</Link>
                    </div>
                    <div className="flex items-center">
                    <FcRating className="w-5 h-5 rounded-full"/>
                    <div className="font-bold text-xl  text-gray-800 ml-1">
                    {data?.rating}
                    </div>
                    </div>
                    
                    <p className="text-gray-500 text-base ">
                      {data?.cuisine[0]?.name}, {data?.cuisine[1]?.name}
                    </p>
                    <p className="text-gray-500 text-base">
                      {data?.address_obj?.city}
                    </p>
                  </div>
                </Link>
            </>
        })}
      </div>
      <Footer/>  
      </div>
  );
};

export default Resturants;
