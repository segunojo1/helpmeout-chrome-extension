import React from 'react'
import google from '../assets/google.svg'
import facebook from '../assets/facebook.svg'
import logo from "../assets/favicon-32x32.png"
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='px-9'>
        <div className="logosec p-10">
            <img src={logo} alt=""/>
            <p>HelpMeOut</p>
        </div>
        <div className='flex flex-col  gap-[1rem] mt-14 w-[500px] m-auto'>
        <p className='text-2xl font-bold text-center '>Log in or Sign up</p>
        <p className='text-[#434343] w-[80%] text-center m-auto'>Join millions of others in sharing successful moves on HelpMeOut.</p>
        <div className='flex gap-2 border-[1px] border-black rounded-md p-3 w-full justify-center'>
            <img src={google} alt="" />
            <p>Continue with google</p>
        </div>
        <div className='flex gap-2 border-[1px] border-black rounded-md p-3 w-full justify-center'>
            <img src={facebook} alt="" />
            <p>Continue with Facebook</p>
        </div>
        <div className='flex items-center gap-1'>
            <div className='w-full bg-[#B9C2C8] h-[2px]'></div>
            <p>or</p>
            <div className='w-full bg-[#B9C2C8] h-[2px]'></div>
        </div>
        <p className='text-left '>Email</p>
        <input type="text" placeholder='enter your email address' className='p-3 border-[1px] border-[#B6B3C6] rounded-md w-full'/>
        <p className=' text-left'>Password</p>
        <input type="text" placeholder='Enter your password' className='p-3 border-[1px] border-[#B6B3C6] rounded-md w-full'/>
        <Link to="/home" className='p-3 bg-[#120B48] flex justify-center rounded-md cursor-pointer'>
            <p className='text-white'>Sign up</p>
        </Link>
        </div>
    </div>
  )
}

export default Auth