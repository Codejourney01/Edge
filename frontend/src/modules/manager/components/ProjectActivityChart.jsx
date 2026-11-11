import React from 'react';

export default function ProjectActivityChart({ metrics }) {
    const highestValue = Math.max(0, ...metrics.map(({ value }) => value));
    const tickStep = Math.max(1, Math.ceil(highestValue / 5));
    const axisMax = tickStep * 5;
    const ticks = Array.from({ length: 6 }, (_, index) => axisMax - index * tickStep);

    return (
        <figure className="flex min-w-0 items-center rounded-sm border border-[#EAEAEA] bg-white p-3 shadow-sm md:p-4">
            <figcaption className="sr-only">
                Project and task totals.{' '}
                {metrics.map(({ label, value }) => `${label}: ${value}`).join(', ')}
            </figcaption>

            <div
                aria-hidden="true"
                className="grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)] grid-rows-[180px_auto] gap-x-2 gap-y-2 px-1 py-3 md:grid-rows-[200px_auto]"
            >
                <div className="relative min-w-6 text-right text-[10px] leading-none tabular-nums text-[#666666]">
                    {ticks.map((tick) => (
                        <span
                            key={tick}
                            className="absolute right-0 -translate-y-1/2"
                            style={{ top: `${((axisMax - tick) / axisMax) * 100}%` }}
                        >
                            {tick}
                        </span>
                    ))}
                </div>

                <div className="relative min-w-0">
                    <div className="absolute inset-0 flex flex-col justify-between">
                        {ticks.map((tick) => (
                            <div
                                key={tick}
                                className="h-px shrink-0 bg-[#EAEAEA] last:bg-[#A3A3A3]"
                            />
                        ))}
                    </div>

                    <div className="relative grid h-full grid-cols-4">
                        {metrics.map(({ label, value }) => (
                            <div key={label} className="flex min-w-0 items-end justify-center">
                                <div
                                    className="w-[70%] max-w-[50px] rounded-full bg-[#8876FA]"
                                    style={{ height: `${(value / axisMax) * 100}%` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-start-2 grid grid-cols-4 text-center text-[10px] leading-tight text-[#525252]">
                    {metrics.map(({ label }) => (
                        <span key={label} className="min-w-0 wrap-break-word px-0.5">
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </figure>
    );
}