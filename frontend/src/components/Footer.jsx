import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-500 py-10 '>
        <div className='conatiner mx-auto flex flex-col gap-5 md:flex-row justify-evenly items-center'>
            <span className='text-3xl text-white font-bold tracking-tight'>
                HUNgER.com
            </span>
            <span className='text-white font-bold tracking-tight flex gap-4 '>
                <span>Privacy Policy</span>
                <span>Terms & Services</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;