import React from 'react'
import logo from "../assets/favicon-32x32.png"

const Navbar = () => {
  return (
    <div className=' md:flex hidden justify-between h-24 items-center w-[80%] m-auto'>
        <div className="logosec">
            <img src={logo} alt=""/>
            <p>HelpMeOut</p>
        </div>
        <div className='flex gap-5'>
            <p>Features</p>
            <p>How it Works</p>
        </div>
        <p>Get Started</p>
    </div>
  )
}

export default Navbar