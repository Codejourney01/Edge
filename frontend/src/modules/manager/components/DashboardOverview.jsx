import React, { useState } from 'react';
import NewProjectCard from './NewProjectCard';
import RunningProjectsCard from './RunningProjectsCard';
import ProjectActivityChart from './ProjectActivityChart';

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

export default function DashboardOverview({ metrics }) {
    const [acceptedIds, setAcceptedIds] = useState([]);

    const invitations = initialInvitations.filter(
        ({ id }) => !acceptedIds.includes(id),
    );

    const acceptedProjects = initialInvitations.filter(
        ({ id }) => acceptedIds.includes(id),
    );

    function acceptInvitation(id) {
        setAcceptedIds((currentIds) =>
            currentIds.includes(id) ? currentIds : [...currentIds, id],
        );
    }

    return (
        <div className="mt-3 grid min-w-0 grid-cols-1 gap-3 @min-[600px]:grid-cols-2 @min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.7fr)]">
            <NewProjectCard
                invitations={invitations}
                onAccept={acceptInvitation}
            />

            <RunningProjectsCard
                projects={[...initialRunningProjects, ...acceptedProjects]}
            />

            <div className="grid min-w-0 @min-[600px]:col-span-2 @min-[900px]:col-span-1">
                <ProjectActivityChart metrics={metrics} />
            </div>
        </div>
    );
}