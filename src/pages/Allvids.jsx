import React from 'react'
import nav from "../assets/nav.png"
import vid from "../assets/card1.png"
import vid2 from "../assets/card2.png"

const Allvids = () => {
  return (
    <div className='px-32 '>
        <img src={nav} alt="" className='p-6 ' />
        <div className='flex justify-between'>
            <div>
            <p className='font-bold text-2xl'>Hello, John Mark</p>
            <p>Here are your recorded videos</p>
            </div>
            <input type="text" className='p-4 bg-[#E7E7ED]' placeholder='Search for a particular vide'/>
        </div>
        <div className='w-full bg-[#B9C2C8] h-[1px] my-8'></div>

        <p className='font-bold'>Recent files</p>
        <div>
            <div className='gap-5 rounded-md flex mt-10 justify-between'>
                <img src={vid} alt=""  className='w-[500px] cursor-pointer'/>
                <img src={vid2} alt=""  className='w-[500px] cursor-pointer'/>
            </div>
            <p className='mt-9 font-bold'>Files from last week</p>
            <div className='gap-5 rounded-md flex mt-10 justify-between'>
                <img src={vid} alt=""  className='w-[500px] cursor-pointer'/>
                <img src={vid2} alt=""  className='w-[500px] cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Allvids