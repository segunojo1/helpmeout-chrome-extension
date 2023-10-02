import React from 'react'
import Navbar from '../components/Navbar'
import woman from '../assets/woman_blue.svg'
import woman2 from '../assets/woman_orange.svg'
import fss from '../assets/father_son.svg'
import arr from "../assets/arrow-right.svg"
import gri from "../assets/grid.svg"
import gri2 from "../assets/grid2.svg"
import Features from '../components/Landingpage/Features'
import HowItWorks from '../components/Landingpage/HowItWorks'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col md:flex-row mx-auto justify-center gap-4 mt-[4rem] items-center'>
            <div className=' max-w-[450px] flex flex-col gap-7'>

            <p className='font-bold text-6xl'>Show Them Don’t Just Tell</p>
            <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <div className='p-3 bg-[#120B48] flex justify-center rounded-md cursor-pointer w-fit'>
            <p className='text-white flex gap-[10px]'>Install HelpMeOut <img src={arr} alt="" /></p>
            </div>
            </div>
            <div className='flex gap-4 relative'>
                <div className='gap-4 flex flex-col'>
                <img src={woman} alt="" className=' w-[270px] z-10 rounded-md'/>
                <img src={fss} alt="" className=' w-[270px] z-10 rounded-md'/>
                </div>
                <div className='flex'>
                <img src={woman2} alt="" className=' w-[263px] z-10 flex rounded-md'/>
                </div>
                <img src={gri} alt="" className='absolute right-[-45px] top-[-55px] z-0 w-[300px]'/>
                <img src={gri2} alt="" className='absolute left-[-45px] bottom-[-60px] z-0 w-[300px]'/>
            </div>
        </div>
        <Features />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default Home