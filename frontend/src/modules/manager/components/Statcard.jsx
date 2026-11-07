import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

export default function Statcard({ stattitle, stats, statcategory }) {
    return (
        <div className="flex h-39 w-full min-w-0 flex-col rounded-sm bg-white shadow-sm">
            <div className="flex min-h-11 items-start justify-between gap-1 px-2.5 pt-3 md:px-3">
                <h3 className="min-w-0 wrap-break-word text-xs font-medium leading-4.5 text-[#1e1e1e] md:text-sm md:leading-5">
                    {stattitle}
                </h3>

                <BsThreeDots
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-base text-[#1e1e1e]"
                />
            </div>

            <div className="flex flex-1 items-center justify-center">
                <h3 className="text-[32px] font-semibold leading-10 text-[#1e1e1e] md:text-4xl">
                    {stats}
                </h3>
            </div>

            <div className="flex items-center justify-center pb-3">
                <p className="text-sm font-normal leading-5 text-[#888888] md:text-base">
                    {statcategory}
                </p>
            </div>
        </div>
    );
}