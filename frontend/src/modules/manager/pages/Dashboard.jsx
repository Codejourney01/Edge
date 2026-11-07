import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';

import Statcard from '../components/Statcard';
import AiStat from '../components/AiStat';

const dashboardStats = [
    {
        stattitle: 'New Projects',
        statcategory: 'Project',
        stats: 0,
    },
    {
        stattitle: 'Total Projects',
        statcategory: 'Project',
        stats: 5,
    },
    {
        stattitle: 'Completed',
        statcategory: 'Project',
        stats: 1,
    },
    {
        stattitle: 'Total Task',
        statcategory: 'Task',
        stats: 5,
    },
];

export default function Dashboard() {
    return (
        <div
            id="EdgeDashboard"
            className="flex h-dvh w-full min-w-0 flex-col overflow-hidden rounded-sm border border-[#E5E5E5]"
        >
            {/* Dashboard header */}
            <div className="flex shrink-0 items-center justify-between gap-3 px-3 py-3 md:pl-5 md:pr-8">
                <h3 className="text-[14px] text-[#525252] md:text-[16px]">
                    Dashboard
                </h3>

                <button
                    type="button"
                    className="flex min-h-9 shrink-0 items-center justify-center gap-2.5 rounded-sm bg-[#FAFAFA] px-3 text-[12px] font-medium text-[#525252]"
                >
                    <span aria-hidden="true">+</span>
                    Create Project
                </button>
            </div>

            {/* Scrollable dashboard content */}
            <div className="min-h-0 min-w-0 flex-1 overflow-y-auto border-t border-[#EAEAEA] bg-[#FAFAFA] px-2 pb-5 pt-3 md:px-3">
                <div className="w-full min-w-0 max-w-263">
                    {/* Phone: two cards visible, moving two at a time */}
                    <div className="min-w-0 md:hidden">
                        <Swiper
                            modules={[Autoplay, A11y]}
                            slidesPerView={2}
                            slidesPerGroup={2}
                            spaceBetween={10}
                            speed={500}
                            rewind={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            a11y={{
                                enabled: true,
                            }}
                            className="w-full min-w-0"
                        >
                            {dashboardStats.map((stat) => (
                                <SwiperSlide
                                    key={stat.stattitle}
                                    className="pb-1"
                                >
                                    <Statcard {...stat} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Tablet: two columns. Desktop: four columns */}
                    <div className="hidden grid-cols-2 gap-3 md:grid lg:grid-cols-4">
                        {dashboardStats.map((stat) => (
                            <Statcard
                                key={stat.stattitle}
                                {...stat}
                            />
                        ))}
                    </div>

                    <AiStat />
                </div>
            </div>
        </div>
    );
}