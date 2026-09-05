import React from 'react'

export default function CenteredTitle({title1,title2,subhead}) {
  return (
    <div className='w-full items-center justify-center flex flex-col'>
        <h1 className="text-[24px] md:text-[48px]  font-bold bg-linear-to-r from-black via-zinc-800 to-zinc-400 bg-clip-text text-transparent">{title1}</h1>
        <h2 className="text-[24px] md:text-[48px]  font-bold bg-linear-to-r from-black via-zinc-800 to-zinc-400 bg-clip-text text-transparent">{title2}</h2>
        <p className='text-[#888888] hidden md:flex text-[12px] md:text-[20px] font-normal mt-1'>{subhead}</p>
    </div>
  )
}
