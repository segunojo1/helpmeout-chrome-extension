import React, { useState } from 'react'
import nav from "../assets/nav.png"
import vid from "../assets/fullname.svg"
import copy from "../assets/copy.svg"
import facebook from "../assets/facebook.svg"
import whatsapp from "../assets/whatsapp.svg"
import telegram from "../assets/telegram.svg"
import arr from "../assets/arrow-down.svg"
import Social from '../components/Social'

const SelectVid = () => {
    const [textToCopy, setTextToCopy] = useState('https://www.helpmeout/Untitled_');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
      })
      .catch(err => {
        console.error('Copy failed: ', err);
      });
  };
  return (
    <div className='w-[80%] mx-auto'>
        <img src={nav} alt="" className='p-6 ' />
        <div className='flex flex-col gap-4'>
        <p>Home / Recent Videos / <span className='text-[#413C6D]'>How To Create A Facebook Ad Listing</span></p>
        <p className='font-bold '>How To Create A Facebook Ad Listing </p>
        <img src={vid} alt="" />
        <div className='flex justify-between md:flex-row flex-col'>
            <div className='relative flex flex-col justify-center'>
        <input 
            type="text" 
            placeholder='enter email of receiver'
            className='p-4 bg-[#E7E7ED] min-w-[300px] rounded-[5px]'/>
            <div className='bg-[#605C84] p-2 w-fit absolute height-fit right-2 rounded-[8px] m-auto' onClick={() => setShow(prev => !prev)}>Send</div>
            </div>
            <div className='flex bg-[#FAFAFA] gap-3 p-2 items-center md:border-[1px] border-[#929292] rounded-[16px]'>
                    <p className='md:block hidden'>{textToCopy}</p>
                    <div 
                    className='flex py-[10px] px-[18px] cursor-pointer rounded-[8px] border-[1px] border-[#929292]'
                    onClick={handleCopyClick}
                    >
                        <img src={copy} alt="" />
                        <p>{copySuccess ? 'Copied!' : 'Copy Text'}</p>
                    </div>
                </div>
        </div>
        </div>
        <div className=' grid gap-3 mt-[2rem]'>
                <p className=' text-left font-semibold text-base hidden md:block'>Share your video</p>
                <div className='flex gap-3'>
                <Social img={facebook} text="facebook"/>
                <Social  img={whatsapp} text="whatsapp"/>
                <Social  img={telegram} text="telegram"/>
                </div>
            </div>
            <div>
                <p className='font-semibold mt-5'>Transcript</p>
                <div className='flex gap-4 '>
                    <p className='text-[#CFCFCF]'>English</p>
                    <img src={arr} alt="" />
                </div>
                <select name="languages" id="lang" className='border-[1px] border-[#CFCFCF]'>
    <option value="English">English</option>
    <option value="French">French</option>
    <option value="Spanish">Spanish</option>
    <option value="Chinese">Chinese</option>
  </select>
            </div>
    </div>
  )
}

export default SelectVid