import React from 'react'
import Gradientbutton from './ui/Gradientbutton'
import Title from './ui/Title'
export default function HeroSection() {
  return (
    <div className='w-full px-7 pt-22 md:pt-20 md:px-25'>
         <Gradientbutton/>
         <div className='pt-5'>
            <Title />
         </div>
    </div>
  )
}
