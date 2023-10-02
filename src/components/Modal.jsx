import React, { useState } from 'react'
import success from "../assets/success.svg"
import close from "../assets/close-circle.svg"

const Modal = ({show, setShow}) => {
    
  return (
    <div className={`bg-[#00000052] top-0 left-0 right-0 bottom-0 w-full fixed ${show ? 'flex' : 'hidden'} justify-center items-center`}>
        <div className=' p-14 bg-white max-w-[500px] rounded-[24px] relative flex flex-col gap-8'>
        <img src={close} alt="" className='right-[50px] absolute top-[50px] ' onClick={() => setShow(prev => !prev)}/>
        <div>
            <img src={success} alt="success" className='m-auto w-[300px]'/>
            <p className='text-center'>Your video link has been sent to johnmark@gmail.com</p>
        </div>
            <div className='flex flex-col items-center gap-8'>
                <p className='text-center'>Would you need to view this video later? Save to your account now!</p>
                <div className='py-[16px] px-[32px] bg-[#120B48] rounded-[8px] text-white w-fit'>Save Video</div>
                <p>Don’t have an account? Create account</p>

            </div>
        </div>
    </div>
  )
}

export default Modal