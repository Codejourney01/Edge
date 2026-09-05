import React from 'react'

function Title({text1,text2}) {
  return (
    <div className='flex flex-col items-center justify-center py-10 w-full'>
      <p className="text-[48px] w-120 text-center font-bold bg-gradient-to-r from-black via-zinc-800 to-zinc-400 bg-clip-text text-transparent">{text1}</p>
      <p className='text-[#888888] hidden md:flex text-[14px] md:text-[20px] font-normal mt-1'>{text2}</p>
    </div>
  )
}

export default Title
