import React, { useRef, useState } from 'react'
import copy from "../assets/copy.svg"
import facebook from "../assets/facebook.svg"
import whatsapp from "../assets/whatsapp.svg"
import telegram from "../assets/telegram.svg"
import arr from "../assets/arrow-down.svg"
import whats from "../assets/whatsapp1.svg"
import Social from './Social'

const Vide = () => {
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
    <div className='flex md:flex-row flex-col items-center mt-8 justify-center md:justify-between md:items-start w-[80%] m-auto'>
        <div className='grid gap-8 '>
            <h1 className='text-2xl font-bold text-left md:block hidden'>Your video is ready!</h1>
            <div className='flex flex-col items-start gap-2 md:m-0 m-auto'>
                <p>Name</p>
                <p className=' font-semibold'>Untitled_Video_20232509 </p>
            </div>

            <div className='w-[300px] h-[300px] bg-black block md:hidden m-auto'></div>
            <div className='relative flex flex-col justify-center'>
            <input 
            type="text" 
            placeholder='enter email of receiver'
            className='p-4 bg-[#E7E7ED] w-full rounded-[5px]'/>
            <div className='bg-[#605C84] p-2 w-fit absolute height-fit right-2 rounded-[8px] m-auto'>Send</div>
            </div>
            <p className='text-[#727272] text-center md:hidden block'>Your video to johnmark@gmail.com is now ready.     Not the receiver?</p>
            <div className='flex flex-col items-start gap-2'>
                <p className='font-semibold md:block hidden'>Video Url</p>
                <div className='flex bg-[#FAFAFA] gap-3 p-2 items-center md:border-[1px] border-[#929292] rounded-[16px]'>
                    <p className='md:block hidden'>{textToCopy}</p>
                    <div 
                    className='flex py-[10px] px-[18px] cursor-pointer rounded-[8px] border-[1px] border-[#929292]'
                    onClick={handleCopyClick}
                    >
                        <img src={copy} alt="" />
                        <p>{copySuccess ? 'Copied!' : 'Copy Text'}</p>
                    </div>
                    <div className='flex md:hidden'>
                    <img src={whats} alt="" />
                    <img src={facebook} alt="" width="40px"/>
                    <img src={telegram} alt="" width="40px"/>
                    </div>
                </div>
            </div>
            <div className=' grid gap-3'>
                <p className=' text-left font-semibold text-base hidden md:block'>Share your video</p>
                <div className='flex gap-3'>
                <Social img={facebook} text="facebook"/>
                <Social  img={whatsapp} text="whatsapp"/>
                <Social  img={telegram} text="telegram"/>
                </div>
            </div>

        </div>

<div className='w-[1px] h-[120vh] mx-[20px] bg-[#BBBBBB] hidden md:block'></div>

        <div className='flex-[.6]'>
            <div className='w-[300px] h-[300px] md:block hidden bg-black'></div>
            <div>
                <p className='font-semibold'>Transcript</p>
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
    </div>
  )
}

export default Vide