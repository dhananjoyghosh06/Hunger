import React from 'react'
import img1 from '../assets/hero.png';
import img2 from '../assets/landing.png';


const Body = () => {
  return (
    <div className=' '>
        <div className='basis-1/2 flex items-center justify-center'>
            <img src={img1} className='max-h-[600px] w-full object-cover'/>
        </div>

    </div>
  )
}

export default Body