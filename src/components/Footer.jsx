import React from 'react'
import logo from "../assets/footlog.svg"
const Footer = () => {
  return (
    <div className='bg-[#120B48] py-[98px] px-[130px] hidden md:flex justify-between items-start foot'>
        <img src={logo} alt="" />
        <div className=''>
            <p className=' font-semibold'>Menu</p>
            <p>Home</p>
            <p>Converter</p>
            <p>How it Works</p>
        </div>
        <div>
            <p className='font-semibold'>About Us</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
        </div>
        <div>
            <p className='font-semibold'>Screen Record</p>
            <p>Browser Window</p>
            <p>Desktop</p>
            <p>Application</p>
        </div>
    </div>
  )
}

export default Footer