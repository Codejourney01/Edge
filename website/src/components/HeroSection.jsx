import React from 'react'
import Gradientbutton from './ui/Gradientbutton'
import Title from './ui/Title'
export default function HeroSection() {
  return (
    <div className='w-full px-25 pt-20 md:px-25'>
         <Gradientbutton/>
         <div className='pt-5'>
            <Title />
         </div>
    </div>
  )
}
