import React from 'react';
import ailogo from '../../../assets/icons/fluxailogo.png';

export default function AiStat() {
    return (
        <div className="mt-2.5 w-full min-w-0 rounded-sm border border-[#eaeaea] bg-white shadow-sm md:mt-3">
            <div className="p-3 pb-5 md:p-4 md:pb-5">
                <div className="flex items-start gap-2">
                    <img
                        src={ailogo}
                        className="size-6 shrink-0 object-contain"
                        width={24}
                        height={24}
                        alt=""
                    />

                    <h3 className="min-w-0 wrap-break-word text-[13px] font-medium leading-6 text-[#1e1e1e] md:text-sm">
                        FluxAI Executive Summary
                    </h3>
                </div>

                <div className="mt-4 w-full max-w-125 md:mt-5">
                    <p className="wrap-break-word text-[13px] font-light leading-5.5 text-[#525252] md:text-sm md:leading-5.5">
                        Overall project activity is stable, but 3 tasks are
                        approaching their deadlines. Project Alpha is currently
                        72% complete and has strong progress this week.
                    </p>
                </div>

                <div className="mt-5">
                    <h3 className="text-sm font-medium leading-5 text-[#1e1e1e]">
                        Key Insights
                    </h3>

                    <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-4 text-xs font-light leading-5 text-[#1e1e1e]">
                        <li>3 tasks are due within the next 3 days</li>
                        <li>2 high-priority tasks are still pending</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="text-sm font-medium leading-5 text-[#1e1e1e]">
                        Recommended Actions
                    </h3>

                    <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-4 text-xs font-light leading-5 text-[#1e1e1e]">
                        <li>Review the 2 pending high-priority tasks</li>
                        <li>
                            Consider reallocating work to available team members
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}