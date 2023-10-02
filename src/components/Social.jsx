import React from 'react'

const Social = ({img, text}) => {
  return (
    <div className='md:flex hidden border-[1px] border-black py-3 px-4 gap-2 w-[141px] rounded-md '>
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default Social