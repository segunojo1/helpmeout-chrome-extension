import React from 'react'
import circle from "../../assets/record-circle.svg"
import refresh from "../../assets/refresh.svg"
import send from "../../assets/send.svg"
import videoo from "../../assets/videoo.svg"

const Features = () => {
  return (
    <div className='w-[80%] mx-auto mt-[5rem]'>
        <h1 className='font-bold text-3xl text-center '>Features</h1>
        <p className='text-center text-[#616163] mt-[10px]'>Key Highlights of Our Extension</p>
        <div className='flex flex-col md:flex-row mt-[3rem] gap-3'>
            <div className='grid max-w-[450px]'>
                <div className='flex items-start gap-4'>
                    <img src={circle} alt="" />
                    <div className=''>
                    <p className='font-bold'>Simple Screen Recording</p>
                    <p className='text-[#616163]'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </div>
                </div>
                <div className='flex items-start gap-4'>
                    <img src={refresh} alt="" />
                    <div className=''>
                    <p className='font-bold'>Easy-to-Share URL</p>
                    <p className='text-[#616163]'>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                    </div>
                </div>
                <div className='flex items-start gap-4'>
                    <img src={send} alt="" />
                    <div className=''>
                    <p className='font-bold'>Revisit Recordings</p>
                    <p className='text-[#616163]'>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={videoo} alt="" />
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Features