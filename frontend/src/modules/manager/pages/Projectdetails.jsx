import React, { useRef, useState } from 'react';

import ProjectDetailsSidebar from '../components/ProjectDetailsSidebar';
import ProjectsPanel from '../components/ProjectsPanel';

const exampleMembers = [
    { id: 'vishwesh', name: 'Vishwesh Sitapara', title: 'Full Stack Developer' },
    { id: 'krish', name: 'Krish Prajapati', title: 'Full Stack Developer' },
];

const exampleProjects = [
    {
        id: 'website',
        name: 'Project-name',
        developmentName: 'Development Name',
        description: 'Redesign the company website with modern UI/UX and improve performance.',
        dueDate: '20/02/2026',
        priority: 'High',
        status: 'In Progress',
        memberIds: ['vishwesh', 'krish'],
        tasks: [{ id: 'homepage', name: 'Redesign homepage', status: 'In Progress' }],
    },
    {
        id: 'dashboard',
        name: 'Dashboard UI',
        dueDate: '20/02/2026',
        priority: 'Complete',
        status: 'Completed',
        memberIds: ['vishwesh'],
    },
    {
        id: 'portal',
        name: 'Client Portal',
        dueDate: '20/02/2026',
        priority: 'Normal',
        status: 'To Do',
        memberIds: ['krish'],
    },
];

export default function ProjectDetails({
    initialProjects = exampleProjects,
    members = exampleMembers,
}) {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedId, setSelectedId] = useState(initialProjects[0]?.id);
    const nextProjectNumber = useRef(initialProjects.length + 1);
    const selectedProject = projects.find((project) => project.id === selectedId);

    function updateProject(projectId, changes) {
        setProjects((currentProjects) => currentProjects.map((project) => (
            project.id === projectId ? { ...project, ...changes } : project
        )));
    }

    function addProject(name) {
        let id;
        do {
            id = `project-${nextProjectNumber.current++}`;
        } while (projects.some((project) => project.id === id));

        const project = {
            id,
            name,
            dueDate: '',
            priority: 'Normal',
            status: 'To Do',
            memberIds: [],
            tasks: [],
        };

        setProjects((currentProjects) => [...currentProjects, project]);
        setSelectedId(project.id);
    }

    return (
        <section
            id="ProjectDetails"
            className="grid min-h-[calc(100dvh-16px)] w-full min-w-0 content-start rounded-lg border border-[#e5e5e5] bg-white text-[#1e1e1e] lg:grid-cols-[27%_minmax(0,1fr)] lg:content-stretch"
        >
            <ProjectDetailsSidebar
                key={selectedId}
                project={selectedProject}
                members={members}
                onSaveMembers={(projectId, memberIds) => updateProject(projectId, { memberIds })}
            />
            <ProjectsPanel
                projects={projects}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onUpdate={updateProject}
                onCreate={addProject}
            />
        </section>
    );
}