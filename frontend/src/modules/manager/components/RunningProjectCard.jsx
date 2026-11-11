import React from 'react';
import { BsCardChecklist, BsThreeDots } from 'react-icons/bs';

export default function RunningProjectsCard({ projects }) {
    return (
        <section className="min-w-0 rounded-sm border border-[#EAEAEA] bg-white p-3 shadow-sm md:p-4">
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-[#1E1E1E]">
                    Running Project Overview
                </h3>
                <BsThreeDots aria-hidden="true" className="shrink-0 text-[#1E1E1E]" />
            </div>

            <ul className="mt-3 divide-y divide-[#EAEAEA]">
                {projects.map(({ id, name }) => (
                    <li key={id} className="flex min-h-10 items-center gap-3 py-2">
                        <BsCardChecklist
                            aria-hidden="true"
                            className="shrink-0 text-sm text-[#525252]"
                        />
                        <span className="min-w-0 wrap-break-word text-[13px] text-[#1E1E1E]">
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}