import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='w-[250px] h-[100px] bg-blue-500 text-center absolute top-20 flex flex-col items-center justify-evenly font-bold right-16' >  
        <Link className='font-bold text-white' to= 'user/updateProfileImage'>
            Change Profile Photo
        </Link>
        <hr className='bg-white font-2xl'/>
        <Link className='font-bold text-white' to='/user/updateProfile'>
            Update Profile Info 
        </Link>
   
</div>
  )
}

export default NavMenu