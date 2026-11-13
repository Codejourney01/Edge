import React from 'react'
import { FiInbox } from "react-icons/fi";
import inboxempty from '../../../assets/icons/inboxempty.png'
export default function Inbox() {
    return (
        <div
            id="Edgeinbox"
            className="w-full min-w-0 h-dvh rounded-sm border border-[#E5E5E5]"
        >
            <div className='pl-3 pt-3'>
                <div className='flex items-center gap-2'>
                        <FiInbox className='text-[#25282B' />
                  
                        <h3 className='text-[14px] text-[#525252] font-semibold md:text-[16px]'>Inbox</h3>
                </div>
            </div>
            <div className='flex border-b border-[#e5e5e5] pb-2'>
                <div className='flex gap-3 items-center  pt-4 pl-3 w-full'>
                        <div className='border border-[#e5e5e5] rounded-[50px]  h-6 px-5   flex items-center' >
                            <span className='text-[12px] md:text-[13px] text-[#525252]  font-medium'>All</span>
                        </div>
                        <div className='border border-[#e5e5e5] rounded-[50px] px-5 h-6    flex items-center justify-center' >
                              <span className='text-[12px] md:text-[13px] text-[#525252] font-medium'>New Task</span>
                        </div>
                      <div className='border border-[#e5e5e5] rounded-[50px] h-6 px-5 flex items-center justify-center' >
                              <span className='text-[12px] md:text-[13px] text-[#525252] font-medium'>New Project </span>
                        </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center max-h-[70vh] h-full'>
                    <div className='flex flex-col gap-3 items-center justify-center'>
                            <img src={inboxempty} className='w-20 h-20 md:w-34 object-cover' alt="" />
                            <h3 className='text-[#000000] text-[16px] font-semibold'>Inbox Zero</h3>
                            <p className='text-[10px] text-[#525252] max-w-50 md:max-w-75 md:text-[14px] w-full text-center'>You're all caught up. When there's something new, it will show up here.</p>
                    </div>
            </div>  
        </div>
    )
}
