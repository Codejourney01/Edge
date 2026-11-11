import React from 'react';

function getPieBackground(statuses) {
    const visibleStatuses = statuses.filter(({ count }) => count > 0);

    if (visibleStatuses.length === 0) {
        return '#F2F2F2';
    }

    if (visibleStatuses.length === 1) {
        return visibleStatuses[0].color;
    }

    const total = visibleStatuses.reduce((sum, { count }) => sum + count, 0);
    let offset = 0;

    const slices = visibleStatuses.map(({ count, color }) => {
        const start = (offset / total) * 100;
        offset += count;
        const end = (offset / total) * 100;

        return `${color} ${start}% ${end}%`;
    });

    return `conic-gradient(${slices.join(', ')})`;
}

export default function ProjectStatus({ statuses }) {
    return (
        <section className="flex min-w-0 flex-col rounded-sm border border-[#EAEAEA] bg-white p-3 shadow-sm md:p-4">
            <h3 className="text-sm font-medium text-[#1E1E1E]">
                Project Status
            </h3>

            <div className="flex flex-1 flex-col items-center justify-center gap-5 py-4">
                <div
                    aria-hidden="true"
                    className="aspect-square w-full max-w-[176px] rounded-full md:max-w-[208px]"
                    style={{ background: getPieBackground(statuses) }}
                />

                <ul className="w-full max-w-[240px] space-y-2.5">
                    {statuses.map(({ label, count, color }) => (
                        <li
                            key={label}
                            className="flex items-center justify-between gap-3 text-[13px] text-[#525252]"
                        >
                            <span className="flex min-w-0 items-center gap-2">
                                <span
                                    aria-hidden="true"
                                    className="size-2.5 shrink-0 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                                {label}
                            </span>

                            <span className="shrink-0 font-medium tabular-nums text-[#1E1E1E]">
                                {count}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}