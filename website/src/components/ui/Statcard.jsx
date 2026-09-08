import React from 'react'

export default function Statcard({heading,insights,info}) {
  return (
    <div className='flex flex-col gap-2 border-b border-gray-300 md:border-none'>
        <h4 className='text-[#6647F0] text-[14px] uppercase'>{heading}</h4>

        <h2 className='text-primary text-2xl font-semibold pt-3'>{insights}</h2>
        <p className='text-[#000000] font-extralight text-[12px] pt-1 pb-4 md:pt-23'>{info}</p>


    </div>
  )
}
