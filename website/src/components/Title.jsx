import React from 'react'

function Title({text1,text2}) {
  return (
    <div className='flex flex-col items-center justify-center py-10 w-full'>
      <p className="text-[34px] sm:text-[40px] md:text-[45px] lg:text-[48px] w-90 sm:w-100 md:w-110 lg:w-120 text-center font-bold bg-gradient-to-r from-black via-zinc-800 to-zinc-400 bg-clip-text text-transparent">{text1}</p>
      <p className='text-center text-[#888888] w-90 md:w-200 text-[14px] sm:text-[16px] md:text-[20px] font-normal mt-1'>{text2}</p>
    </div>
  )
}

export default Title
