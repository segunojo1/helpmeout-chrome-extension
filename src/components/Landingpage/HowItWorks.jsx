import React from 'react'
import one from "../../assets/one.svg"
import two from "../../assets/two.svg"
import three from "../../assets/three.svg"
import rec from "../../assets/rec.svg"

const HowItWorks = () => {
  return (
    <div className='w-[80%] mx-auto mt-[5rem] pb-6'>
        <h1 className='font-bold text-3xl text-center my-7'>How It Works</h1>
        <div className='flex flex-col md:flex-row items-center justify-between '>
            <div className='w-[300px] flex flex-col items-center gap-5'>
                <img src={one} alt="" />
                <h1 className='text-2xl font-bold'>Record Screen</h1>
                <p className='text-[#616163]'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                <img src={rec} alt="" />
            </div>
            <div className='w-[300px] flex flex-col items-center gap-5'>
                <img src={two} alt="" />
                <h1 className='text-2xl font-bold'>Share Your Recording</h1>
                <p className='text-[#616163]'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                <img src={rec} alt="" />
            </div>
            <div className='w-[300px] flex flex-col items-center gap-5'>
                <img src={three} alt="" />
                <h1 className='text-2xl font-bold'>Learn Effortlessly</h1>
                <p className='text-[#616163]'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                <img src={rec} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks