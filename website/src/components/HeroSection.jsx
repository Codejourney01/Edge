import React from 'react'
import Gradientbutton from './ui/Gradientbutton'
import Title from './ui/Title'
import { FiCheck } from "react-icons/fi";
export default function HeroSection() {
  return (
    <div className='w-full px-7 pt-22 md:pt-20 md:px-25'>
         <Gradientbutton/>
         <div className='pt-5'>
            <Title />
         </div>
         <div className='md:hidden pt-7 flex flex-col gap-4'>
                <div className='flex items-start gap-3'>
                    <FiCheck size={20} strokeWidth={3} className='text-[#2563EB] font-semibold mt-1' />
                    <div className='text-[14px]'>
                    <span className=' font-semibold text-[#202020]'> Save money. </span><span className='text-[#646464] pl-1'>
                        All Features , Ai Projects , Analysis +20 more.
                    </span>
                    </div>
                </div>
                <div className='flex items-start gap-3'>
                    <FiCheck size={20} strokeWidth={3} className='text-[#2563EB] font-semibold mt-1' />
                    <div className='text-[14px]'>
                    <span className=' font-semibold text-[#202020]'> Save time. </span><span className='text-[#646464] pl-1'>
                        All humans working together with perfect context
                    </span>
                    </div>
                </div>
                <div className='flex items-start gap-3'>
                    <FiCheck size={20} strokeWidth={3} className='text-[#2563EB] font-semibold mt-1' />
                    <div className='text-[14px]'>
                    <span className=' font-semibold text-[#202020]'> Create infinite productivity. </span><span className='text-[#646464] pl-1'>
                        Ai model & Workflows
                    </span>
                    </div>
                </div>
         </div>
         <div className='herobutton flex  pt-9 md:pt-8 items-center gap-4 '>
            <button className=' w-[60%] h-12 md:w-53.5 md:h-11.75  md:flex text-[14px] items-center justify-center font-medium text-white md:text-base bg-[#202020] rounded-[11px] '>Get started. It’s FREE !</button>
            <div className='flex flex-col'>
                <span className='text-[#646464] text-[12px]'>Free forever</span>
                <span className='text-[#646464] text-[12px]'>No credit card</span>
            </div>
         </div>
    </div>
  )
}
