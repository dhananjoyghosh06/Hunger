import React from 'react'
import biriyani from '../assets/biriyani.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import pasta from '../assets/pasta.jpg'
import cocacola from '../assets/cocacola.jpg'
import { Navigate , Link} from 'react-router-dom'
const FoodMenu = () => {
  return (
    
        <div className='flex items-center justify-around overflow-auto'>
            <div className='ml-5 flex flex-col items-center'>
                <Link to={"/foodMenu/pizzas"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={pizza} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl '>Pizza</h1>
                </Link>
            </div>
            <div className='ml-5 flex flex-col items-center cursor-pointer'>
                <Link to={"/foodMenu/burgers"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={burger} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Burger</h1>
                </Link>
            </div>
            <div className='ml-5 flex flex-col items-center'>
                <Link to={"/foodMenu/biriyanis"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={biriyani} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl  '>Biriyani</h1>
                </Link>
            </div>
            <div >
                <Link to={"/foodMenu/pastas"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={pasta} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl '>Pasta</h1>
                </Link>
            </div>
            <div >
            <Link to={"/foodMenu/cocacolas"} className='ml-5 flex flex-col items-center hover:scale-105'>
                <img src={cocacola} className='w-20 h-20 rounded-full cursor-pointer'/>
                <h1 className='font-semibold text-gray-500 text-xl '>Cocacola</h1>
                </Link>
            </div>     
        </div>
    
  )
}

export default FoodMenu