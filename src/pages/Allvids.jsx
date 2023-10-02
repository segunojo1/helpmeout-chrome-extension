import React from 'react'
import nav from "../assets/nav.png"

const Allvids = () => {
  return (
    <div>
        <img src={nav} alt="" />
        <div className='flex'>
            <div>
            <p>Hello, John Mark</p>
            <p>Here are your recorded videos</p>
            </div>
            <input type="text" className='p-11 bg-[#E7E7ED]' placeholder='Search for a particular vide'/>
        </div>
    </div>
  )
}

export default Allvids