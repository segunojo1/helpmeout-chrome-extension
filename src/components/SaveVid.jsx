import React from 'react'

const SaveVid = () => {
  return (
    <div className='bg-[#E7E7ED33] flex flex-col items-center gap-10 py-10'>
        <p className='font-bold md:w-[450px]'>To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
        <div className='py-[16px] px-[32px] bg-[#120B48] rounded-[8px] text-white'>Save Video</div>
        <p className='font-semibold text-[#7E7E7E]'>Don’t have an account? <span className='text-[#120B48]'>Create account</span> </p>
    </div>
  )
}

export default SaveVid