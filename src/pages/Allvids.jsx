import React from 'react'
import nav from "../assets/nav.png"

const Allvids = () => {
  return (
    <div className='px-10'>
        <img src={nav} alt="" className='p-6'/>
        <div className='flex justify-between'>
            <div>
            <p className='font-bold text-2xl'>Hello, John Mark</p>
            <p>Here are your recorded videos</p>
            </div>
            <input type="text" className='p-4 bg-[#E7E7ED]' placeholder='Search for a particular vide'/>
        </div>
        <div className='w-full bg-[#B9C2C8] h-[2px]'></div>

        <p>Recent files</p>
    </div>
  )
}

export default Allvids