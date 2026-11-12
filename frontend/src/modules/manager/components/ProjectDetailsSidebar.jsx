import React, { useId, useRef, useState } from 'react';
import { BsPencil, BsPlus } from 'react-icons/bs';

import MemberSearch from './MemberSearch';
import {
    formatProjectDate,
    PanelNavigation,
    PriorityFlag,
    ProjectsHeading,
    StatusDot,
} from './ProjectsPanel';

const actionClass = 'inline-flex size-7 shrink-0 items-center justify-center rounded-md text-[#27272a] hover:bg-[#f2f2f2] focus-visible:outline-2 focus-visible:outline-[#245de7]';

export default function ProjectDetailsSidebar({ project, members, onSaveMembers }) {
    const [activeTab, setActiveTab] = useState('Overview');
    const [searchMode, setSearchMode] = useState(null);
    const triggerRef = useRef(null);
    const searchId = useId();

    const summary = project?.summary ?? project?.description;
    const memberIds = project?.memberIds ?? [];
    const projectMembers = members.filter((member) => memberIds.includes(member.id));

    function openSearch(event, mode) {
        triggerRef.current = event.currentTarget;
        setSearchMode((previousMode) => previousMode === mode ? null : mode);
    }

    function closeSearch(restoreFocus = true) {
        setSearchMode(null);

        if (restoreFocus) {
            triggerRef.current?.focus();
        }
    }

    return (
        <aside
            aria-label="Selected project details"
            className="min-w-0 border-b border-[#e5e5e5] lg:border-b-0 lg:border-r"
        >
            <h1 className="border-b border-[#eaeaea] px-3.5 py-2.5 text-[14px] text-[#525252] md:text-[16px]">
                Project Details
            </h1>

            {project ? (
                <>
                    <div className="min-h-[99px] px-3.5 py-3.5">
                        <div className="flex items-center gap-2.5">
                            <StatusDot status="To Do" />

                            <div className="min-w-0">
                                <p className="break-words text-[13px] font-medium leading-5 text-[#1e1e1e] md:text-sm">
                                    {project.name}
                                </p>

                                {project.developmentName && (
                                    <p className="text-xs leading-4 text-[#525252]">
                                        {project.developmentName}
                                    </p>
                                )}
                            </div>
                        </div>

                        {summary && (
                            <p className="mt-3 max-w-[250px] text-[13px] font-light leading-5.5 text-[#525252] md:text-sm">
                                {summary}
                            </p>
                        )}
                    </div>

                    <div className="border-y border-[#eaeaea] px-3.5 pt-3">
                        <ProjectsHeading />
                        <PanelNavigation
                            label="Project details sections"
                            spread
                            options={['Overview', 'Team', 'Tasks']}
                            value={activeTab}
                            onChange={(tab) => {
                                setActiveTab(tab);
                                closeSearch(false);
                            }}
                        />
                    </div>

                    {activeTab === 'Overview' && (
                        <>
                            <dl className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start gap-x-3 gap-y-2.5 px-6 py-6 text-[13px] leading-5 text-[#525252] md:text-sm [&>dd]:font-medium [&>dt]:text-xs">
                                <dt>Project Name</dt>
                                <dd className="min-w-0 wrap-break-word">{project.name}</dd>

                                <dt>Start Date</dt>
                                <dd>{formatProjectDate(project.startDate)}</dd>

                                <dt>Due Date</dt>
                                <dd>{formatProjectDate(project.dueDate)}</dd>

                                <dt>Priority</dt>
                                <dd className="flex items-center gap-2">
                                    {project.priority && <PriorityFlag priority={project.priority} />}
                                    {project.priority || '—'}
                                </dd>

                                <dt>Status</dt>
                                <dd className="flex items-center gap-2">
                                    {project.status && <StatusDot status={project.status} />}
                                    {project.status || '—'}
                                </dd>

                                <dt>Members</dt>
                                <dd>{projectMembers.length}</dd>
                            </dl>

                            <section className="border-y border-[#eaeaea] px-3.5 py-3.5">
                                <h2 className="text-sm font-medium leading-5 text-[#1e1e1e]">
                                    Project Description
                                </h2>
                                <p className="mt-2 text-[13px] font-light leading-5.5 text-[#525252] md:text-sm">
                                    {project.description || 'No project description.'}
                                </p>
                            </section>
                        </>
                    )}

                    {activeTab !== 'Overview' && (
                        <div className="px-3.5 pb-4 pt-3">
                            {activeTab === 'Team' && (
                                <>
                                    <div className="relative mb-2 flex items-center justify-between gap-2">
                                        <span className="rounded-lg bg-[#f8f8f8] px-3 py-1.5 text-xs font-medium text-[#525252]">
                                            Members&nbsp; {projectMembers.length}
                                        </span>

                                        <div className="flex items-center gap-1">
                                            <button
                                                type="button"
                                                aria-label="Edit project members"
                                                aria-expanded={searchMode === 'edit'}
                                                aria-controls={searchMode === 'edit' ? searchId : undefined}
                                                onClick={(event) => openSearch(event, 'edit')}
                                                className={actionClass}
                                            >
                                                <BsPencil aria-hidden="true" />
                                            </button>

                                            <button
                                                type="button"
                                                aria-label="Add project members"
                                                aria-expanded={searchMode === 'add'}
                                                aria-controls={searchMode === 'add' ? searchId : undefined}
                                                onClick={(event) => openSearch(event, 'add')}
                                                className={actionClass}
                                            >
                                                <BsPlus aria-hidden="true" className="text-lg" />
                                            </button>
                                        </div>

                                        {searchMode && (
                                            <MemberSearch
                                                key={searchMode}
                                                id={searchId}
                                                members={members}
                                                selectedIds={memberIds}
                                                mode={searchMode}
                                                onClose={closeSearch}
                                                onSave={(ids) => {
                                                    onSaveMembers(project.id, ids);
                                                    closeSearch();
                                                }}
                                            />
                                        )}
                                    </div>

                                    <table className="w-full table-fixed text-left text-[13px] leading-5 text-[#525252] md:text-sm">
                                        <thead className="border-b border-[#eaeaea]">
                                            <tr>
                                                <th scope="col" className="w-[53%] pb-3 pr-2 text-xs font-normal leading-4">Name</th>
                                                <th scope="col" className="pb-3 text-xs font-normal leading-4">Job Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {projectMembers.map((member) => (
                                                <tr key={member.id} className="border-b border-[#eaeaea]">
                                                    <td className="break-words py-2.5 pr-2 font-medium">{member.name}</td>
                                                    <td className="break-words py-2.5">{member.title}</td>
                                                </tr>
                                            ))}

                                            {projectMembers.length === 0 && (
                                                <tr>
                                                    <td colSpan={2} className="py-2.5 font-normal">
                                                        No members assigned.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </>
                            )}

                            {activeTab === 'Tasks' && (
                                project.tasks?.length ? (
                                    <ul className="divide-y divide-[#eaeaea] text-[13px] leading-5 text-[#525252] md:text-sm">
                                        {project.tasks.map((task) => (
                                            <li key={task.id} className="flex items-center justify-between gap-3 py-2.5">
                                                <span className="min-w-0 break-words font-medium">{task.name}</span>
                                                <span className="shrink-0 text-xs leading-4">{task.status}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="py-2 text-[13px] leading-5 text-[#525252] md:text-sm">
                                        No tasks assigned.
                                    </p>
                                )
                            )}
                        </div>
                    )}
                </>
            ) : (
                <p className="px-3.5 py-4 text-[13px] leading-5 text-[#525252] md:text-sm">
                    Select a project to view its details.
                </p>
            )}
        </aside>
    );
}