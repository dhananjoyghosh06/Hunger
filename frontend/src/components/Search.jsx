import React, { useState } from 'react'
import Navbar from './Navbar'
import biriyani from '../assets/biriyani.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import pasta from '../assets/pasta.jpg'
import cocacola from '../assets/cocacola.jpg'
import { Link, useLocation } from 'react-router-dom'

const Search = () => {
    const location = useLocation();
    console.log(location);
    const rL= location.state?.resturantList || [];
    console.log("My resturant list", rL); 
    const [searchItems, setSearchItems] = useState("");

    return (
    <div>
        <Navbar />
        <div className='ml-[1rem] mt-10 '>
            <input placeholder='Search For Resturants' onChange={(e)=>setSearchItems(e.target.value)} className='border border-orange-400 p-3 w-11/12 rounded-sm font-medium outline-orange-600'/>
            {searchItems && <div className='p-3'>
            {rL?.filter((data)=>data.name.includes(searchItems.toLowerCase())).map((item)=>{
                    return <>
                    <Link className='flex items-center mt-6 text-black'>
                    <img src={item?.photo?.images?.original?.url} className='w-14 h-14 rounded-sm'/>
                    <div className='ml-3'>   
                        <h1 className='text-[15px]'>{item?.name.split(0.5)}...</h1>
                    </div>
                    </Link>
                    </>
            })}
            </div> }
            <h1 className='font-extrabold mt-6 text-gray-700 ml-4 text-xl'>Popular Cuisines</h1>
            <div className='flex mt-4'>
            <div >
                <Link to={"/foodMenu/pizzas"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={pizza} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Pizza</h1>
                </Link>
                
            </div>
            <div>
                <Link to={"/foodMenu/burgers"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={burger} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Burger</h1>
                </Link>
            </div>
            <div>
                <Link to={"/foodMenu/biriyanis"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={biriyani} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Biriyani</h1>
                </Link>
            </div>
            <div >
                <Link to={"/foodMenu/pastas"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={pasta} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Pasta</h1>
                </Link>
            </div>
            <div>
                <Link to={"foodMenu/cocacolas"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={cocacola} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Cocacola</h1>
                </Link>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default Search