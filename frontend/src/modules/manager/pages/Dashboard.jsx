import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';

import Statcard from '../components/Statcard';
import AiStat from '../components/AiStat';
import ProjectStatus from '../components/ProjectStatus';
import NewProjectCard from '../components/NewProjectCard';
import RunningProjectsCard from '../components/RunningProjectCard';
import ProjectActivityChart from '../components/ProjectActivityChart';

const projectCounts = {
    inProgress: 2,
    completed: 1,
    pending: 2,
};

const newProjectCount = 0;
const totalTaskCount = 5;

const projectStatuses = [
    { label: 'In Progress', count: projectCounts.inProgress, color: '#35BBD5' },
    { label: 'Completed', count: projectCounts.completed, color: '#8876FA' },
    { label: 'Pending', count: projectCounts.pending, color: '#FF918B' },
];

const totalProjects = projectStatuses.reduce(
    (total, { count }) => total + count,
    0,
);

const dashboardStats = [
    { stattitle: 'New Projects', statcategory: 'Project', stats: newProjectCount },
    { stattitle: 'Total Projects', statcategory: 'Project', stats: totalProjects },
    { stattitle: 'Completed', statcategory: 'Project', stats: projectCounts.completed },
    { stattitle: 'Total Task', statcategory: 'Task', stats: totalTaskCount },
];

const chartMetrics = [
    { label: 'Total Projects', value: totalProjects },
    { label: 'Total Tasks', value: totalTaskCount },
    { label: 'New Projects', value: newProjectCount },
    { label: 'Completed Projects', value: projectCounts.completed },
];

const initialInvitations = [
    { id: 'invite-1', name: 'AI Revenue Predictive System', invitedBy: 'John Snow' },
    { id: 'invite-2', name: 'Customer Analytics Dashboard', invitedBy: 'John Snow' },
    { id: 'invite-3', name: 'Project Reporting System', invitedBy: 'John Snow' },
];

const initialRunningProjects = [
    { id: 'project-1', name: 'Website Redesign' },
    { id: 'project-2', name: 'Client Onboarding Portal' },
    { id: 'project-3', name: 'Marketing Dashboard' },
    { id: 'project-4', name: 'Inventory Management' },
];

export default function Dashboard() {
    const [acceptedIds, setAcceptedIds] = useState([]);

    const pendingInvitations = initialInvitations.filter(
        ({ id }) => !acceptedIds.includes(id),
    );

    const runningProjects = [
        ...initialRunningProjects,
        ...initialInvitations.filter(({ id }) => acceptedIds.includes(id)),
    ];

    function acceptInvitation(id) {
        setAcceptedIds((currentIds) =>
            currentIds.includes(id) ? currentIds : [...currentIds, id],
        );
    }

    return (
        <div
            id="EdgeDashboard"
            className="w-full min-w-0 rounded-sm border border-[#E5E5E5]"
        >
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

            <div className="min-w-0 border-t border-[#EAEAEA] bg-[#FAFAFA] px-2 pb-5 pt-3 md:px-3">
                <div className="@container w-full min-w-0">
                    {/* Stat cards, FluxAI summary, and pie chart */}
                    <div className="grid min-w-0 grid-cols-1 gap-3 @min-[900px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                        <div className="min-w-0">
                            <div className="min-w-0 md:hidden">
                                <Swiper
                                    modules={[Autoplay, A11y]}
                                    slidesPerView={2}
                                    slidesPerGroup={2}
                                    spaceBetween={10}
                                    speed={500}
                                    rewind
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    a11y={{ enabled: true }}
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

                            <div className="hidden grid-cols-2 gap-3 md:grid @min-[900px]:grid-cols-4">
                                {dashboardStats.map((stat) => (
                                    <Statcard key={stat.stattitle} {...stat} />
                                ))}
                            </div>

                            <AiStat />
                        </div>

                        <ProjectStatus statuses={projectStatuses} />
                    </div>

                    {/* New Project, Running Projects, and bar chart */}
                    <div className="mt-3 grid min-w-0 grid-cols-1 gap-3 @min-[600px]:grid-cols-2 @min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.7fr)]">
                        <NewProjectCard
                            invitations={pendingInvitations}
                            onAccept={acceptInvitation}
                        />

                        <RunningProjectsCard projects={runningProjects} />

                        <div className="grid min-w-0 @min-[600px]:col-span-2 @min-[900px]:col-span-1">
                            <ProjectActivityChart metrics={chartMetrics} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}