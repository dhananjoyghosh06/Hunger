import React from 'react'
import { useLocation ,Link} from 'react-router-dom';
import Navbar from './Navbar';
import { FcRating } from "react-icons/fc";

const Details = ({data}) => {
    const location = useLocation();
    const rL = location.state?.data || [];
    console.log(rL);
  return (
    <div>
        <Navbar/>
        <div className='ml-[15%] mt-8'>
          <div className='flex items-center text-gray-400 '>
           <Link to={"/"}> <h1 className='text-black text-xs'>Home/</h1></Link>
            <h1 className='text-xs'>{rL?.address_obj.city}/</h1>
            <h1 className='text-gray-400 font-medium text-xs'>{rL?.name}</h1>
          </div>
          <h1 className='font-bold text-xl ml-3 mt-8'>{rL?.name}</h1>
          <div className='flex items-center'>
            <h1 className='ml-3 text-xs text-gray-500 mt-3 '>{rL?.cuisine[0]?.name},</h1>
            <h1 className='ml-3 text-xs text-gray-500 mt-3 '>{rL?.cuisine[1]?.name}</h1>
            <div className="flex items-center ml-96 border border-gray-300 rounded-md p-3">
                    <FcRating className="w-5 h-5 rounded-full"/>
                    <div className="font-bold text-xl  text-gray-800 ml-2">
                    {rL?.rating}
                    </div>
                    </div>
          </div>
          <h1 className='ml-3 text-xs text-gray-500'>{rL?.location_string}</h1>
          <h1 className='ml-3 text-xm text-gray-500 mt-4'>Delhivery Fee will be apply</h1>
          <hr className='mt-3 '/>
        <h1 className='font-bold text-lg ml-3 mt-3'>{rL?.price}</h1>
        <h1 className='text-xs w-[38%] text-gray-500 mt-3 ml-3'>{rL?.description}</h1>
        </div>
        
    </div>
  )
}

export default Details;