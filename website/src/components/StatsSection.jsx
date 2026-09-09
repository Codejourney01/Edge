import React from 'react'
import Statcard from './ui/Statcard'


export default function StatsSection() {
    const stats_data=[
        {
            heading:"Business Insights",
            insights:"10x",
            info:"Turn complex business data into clear, actionable insights with AI-powered analytics."
        },
        {
            heading:"TIME SAVED",
            insights:"80% +",
            info:"Reduce repetitive analysis and manual reporting so teams can focus on higher-value decisions."
        },
        {
            heading:"RISK DETECTION",
            insights:"Early",
            info:"Identify potential project failures, budget risks, and performance issues before they become costly."
        },
        {
            heading:"DECISION SPEED",
            insights:"Real-Time",
            info:"Get instant answers from your business data and make faster, data-driven decisions."
        }
    ]
  return (
    <div className='w-full px-7 pt-22 md:pt-20 md:px-25'>
             <h1 className="font-semibold bg-[linear-gradient(90deg,#202020_49%,#868686_100%)] bg-clip-text text-transparent text-[24px] md:text-[44px]">
        It's like adding 15 full-time employees
      </h1>
      <p className='text-[#868686] text-sm md:text-lg pt-3'>Turn hours of manual analysis into instant business intelligence</p>
      <div className='mt-11 mb-12 flex flex-col lg:flex-row gap-11'>
        {stats_data.map((item,index) => (
         <Statcard heading={item.heading} info={item.info} insights={item.insights}  isLast={index === stats_data.length - 1} />
    ))}
      </div>
     
    </div>
  )
}
