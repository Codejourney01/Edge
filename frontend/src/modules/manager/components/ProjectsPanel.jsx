import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { BsChevronDown, BsFlagFill, BsPlus } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';

import Statcard from '../components/Statcard';

const priorityColors = {
    High: 'text-[#be151d]',
    Complete: 'text-[#25c85b]',
    Normal: 'text-[#ff8a30]',
    Low: 'text-[#1265e8]',
};

const statusColors = {
    'In Progress': 'border-[#2462ed] border-t-transparent',
    Completed: 'border-[#25c85b] border-t-transparent',
    'To Do': 'border-[#525252] border-t-transparent',
};

const priorityGroups = [
    { label: 'Priority', options: Object.keys(priorityColors) },
];

const statusGroups = [
    { label: 'Status', options: ['To Do', 'In Progress'] },
    { label: 'Closed', options: ['Completed'] },
];

export function ProjectsHeading({ id }) {
    return (
        <h2
            id={id}
            className="flex items-center gap-2 text-[14px] text-[#525252] md:text-[16px]"
        >
            Projects
        </h2>
    );
}

export function PanelNavigation({ label, options, value, onChange, spread = false }) {
    return (
        <nav
            aria-label={label}
            className={spread ? 'mt-4 flex justify-between gap-2' : 'flex gap-2'}
        >
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    aria-pressed={value === option}
                    onClick={() => onChange(option)}
                    className={`min-h-9 border-b-2 px-2.5 text-xs font-medium text-[#525252] hover:text-[#1e1e1e] focus-visible:outline-2 focus-visible:outline-[#245de7] sm:px-3 ${
                        value === option ? 'border-[#1e1e1e]' : 'border-transparent'
                    }`}
                >
                    {option}
                </button>
            ))}
        </nav>
    );
}

export function StatusDot({ status }) {
    return (
        <span
            aria-hidden="true"
            className={`inline-block size-[13px] shrink-0 rounded-full border-[1.5px] ${
                statusColors[status] ?? statusColors['To Do']
            }`}
        />
    );
}

export function formatProjectDate(date) {
    const isoDate = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date ?? '');
    return isoDate ? `${isoDate[3]}/${isoDate[2]}/${isoDate[1]}` : date || '—';
}

export function PriorityFlag({ priority }) {
    return (
        <BsFlagFill
            aria-hidden="true"
            className={`shrink-0 text-xs ${priorityColors[priority] ?? 'text-[#525252]'}`}
        />
    );
}

function ProjectSelect({ label, value, groups, onChange, Icon, alignEnd = false }) {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef(null);
    const menuRef = useRef(null);
    const menuId = useId();

    useLayoutEffect(() => {
        if (!open) return;

        const trigger = triggerRef.current;
        const menu = menuRef.current;

        function positionMenu() {
            const anchor = trigger.getBoundingClientRect();
            const { width, height } = menu.getBoundingClientRect();
            const gap = 4;
            const padding = 8;
            const left = alignEnd ? anchor.right - width : anchor.left;
            const below = anchor.bottom + gap;
            const above = anchor.top - height - gap;
            const top = below + height > window.innerHeight - padding && above >= padding
                ? above
                : below;

            menu.style.left = `${Math.max(padding, Math.min(left, window.innerWidth - width - padding))}px`;
            menu.style.top = `${Math.max(padding, Math.min(top, window.innerHeight - height - padding))}px`;
        }

        positionMenu();

        const selectedItem = menu.querySelector('[aria-checked="true"]')
            ?? menu.querySelector('[role="menuitemradio"]');

        selectedItem?.focus({ preventScroll: true });

        window.addEventListener('resize', positionMenu);
        window.addEventListener('scroll', positionMenu, true);

        return () => {
            window.removeEventListener('resize', positionMenu);
            window.removeEventListener('scroll', positionMenu, true);
        };
    }, [alignEnd, open]);

    useEffect(() => {
        if (!open) return;

        function dismissOutside(event) {
            if (
                !triggerRef.current?.contains(event.target)
                && !menuRef.current?.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('pointerdown', dismissOutside);
        return () => document.removeEventListener('pointerdown', dismissOutside);
    }, [open]);

    function closeMenu() {
        setOpen(false);
        triggerRef.current?.focus({ preventScroll: true });
    }

    function navigateMenu(event) {
        if (event.key === 'Escape' || event.key === 'Tab') {
            if (event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
            }

            closeMenu();
            return;
        }

        if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;

        event.preventDefault();

        const options = [...menuRef.current.querySelectorAll('[role="menuitemradio"]')];
        const current = options.indexOf(document.activeElement);
        const targets = {
            ArrowUp: (current - 1 + options.length) % options.length,
            ArrowDown: (current + 1) % options.length,
            Home: 0,
            End: options.length - 1,
        };

        options[targets[event.key]]?.focus();
    }

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                aria-label={`${label}: ${value || 'Unset'}`}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls={open ? menuId : undefined}
                onClick={() => setOpen(!open)}
                onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                        event.preventDefault();
                        setOpen(true);
                    }
                }}
                className={`flex h-9 w-full min-w-0 items-center gap-2 rounded-lg border px-2 text-left font-medium hover:border-[#e5e5e5] hover:bg-[#f8f8f8] focus-visible:outline-2 focus-visible:outline-[#245de7] ${
                    open ? 'border-[#e5e5e5] bg-[#f8f8f8]' : 'border-transparent'
                }`}
            >
                {value && <Icon priority={value} status={value} />}
                <span className="flex-1 whitespace-nowrap">{value || '—'}</span>
                <BsChevronDown aria-hidden="true" className="size-3 shrink-0" />
            </button>

            {open && createPortal(
                <div
                    id={menuId}
                    ref={menuRef}
                    role="menu"
                    aria-label={label}
                    onKeyDown={navigateMenu}
                    className="fixed z-40 max-h-[calc(100dvh-16px)] w-[176px] max-w-[calc(100vw-16px)] divide-y divide-[#eaeaea] overflow-y-auto rounded-[9px] border border-[#e5e5e5] bg-white text-xs leading-4 text-[#525252] shadow-md"
                >
                    {groups.map(({ label: groupLabel, options }) => (
                        <div key={groupLabel} role="group" aria-label={groupLabel} className="px-2 py-2">
                            <div aria-hidden="true" className="px-1.5 pb-1.5 pt-1 text-[11px] font-normal leading-4 text-[#666]">
                                {groupLabel}
                            </div>

                            {options.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={value === option}
                                    tabIndex={-1}
                                    onClick={() => {
                                        closeMenu();
                                        onChange(option);
                                    }}
                                    className={`flex min-h-7 w-full items-center gap-2 rounded px-1.5 text-left font-medium hover:bg-[#f4f4f4] focus-visible:outline-2 focus-visible:outline-[#245de7] ${
                                        value === option ? 'bg-[#f3f3f3]' : ''
                                    }`}
                                >
                                    <Icon priority={option} status={option} />
                                    {option}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>,
                document.body,
            )}
        </>
    );
}

function ProjectStats({ stats }) {
    const cards = stats.map(({ title, count }) => (
        <div
            key={title}
            className="min-w-0 rounded-sm border border-[#eaeaea] bg-white shadow-sm [&>div]:shadow-none"
        >
            <Statcard stattitle={title} stats={count} statcategory="Project" />
        </div>
    ));

    return (
        <div className="min-w-0 px-3 pb-4 pt-3 md:px-[18px] md:pb-5">
            <div className="min-w-0 md:hidden">
                <Swiper
                    modules={[Autoplay, A11y]}
                    slidesPerView={2}
                    slidesPerGroup={1}
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
                    {cards.map((card) => (
                        <SwiperSlide key={card.key} className="min-w-0 pb-1">
                            {card}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden max-w-[544px] grid-cols-3 gap-2 md:grid">
                {cards}
            </div>
        </div>
    );
}

export function CreateProjectButton({ expanded, formId, onClick, className }) {
    return (
        <button
            type="button"
            aria-expanded={expanded}
            aria-controls={expanded ? formId : undefined}
            onClick={onClick}
            className={`min-h-8 shrink-0 items-center gap-1.5 rounded-lg bg-[#f8f8f8] px-2.5 text-xs font-medium text-[#525252] hover:bg-[#eeeeee] focus-visible:outline-2 focus-visible:outline-[#245de7] ${className}`}
        >
            <BsPlus aria-hidden="true" className="text-lg text-[#27272a]" />
            Create Project
        </button>
    );
}

export default function ProjectsPanel({
    projects,
    selectedId,
    onSelect,
    onUpdate,
    onCreate,
    creating,
    formId,
    onToggleCreate,
    onCloseCreate,
}) {
    const [filter, setFilter] = useState('All Projects');
    const [newName, setNewName] = useState('');
    const [newStartDate, setNewStartDate] = useState('');
    const headingId = useId();
    const nameId = useId();
    const startDateId = useId();

    const runningProjects = projects.filter((project) => project.status === 'In Progress');
    const completedProjects = projects.filter((project) => project.status === 'Completed');
    const visibleProjects = filter === 'Running' ? runningProjects
        : filter === 'Complete' ? completedProjects : projects;

    const stats = [
        { title: 'Total Projects', count: projects.length },
        { title: 'Running Projects', count: runningProjects.length },
        { title: 'Completed', count: completedProjects.length },
    ];

    function createProject(event) {
        event.preventDefault();

        const name = newName.trim();
        if (!name) return;

        onCreate(name, newStartDate);
        setFilter('All Projects');
        setNewName('');
        setNewStartDate('');
        onCloseCreate();
    }

    return (
        <section aria-labelledby={headingId} className="min-w-0">
            <header className="flex flex-wrap items-end justify-between gap-x-2 border-b border-[#eaeaea] px-4 pt-3.5">
                <div className="min-w-0">
                    <ProjectsHeading id={headingId} />

                    <div className="pt-3">
                        <PanelNavigation
                            label="Project filters"
                            options={['All Projects', 'Running', 'Complete']}
                            value={filter}
                            onChange={setFilter}
                        />
                    </div>
                </div>

                <CreateProjectButton
                    expanded={creating}
                    formId={formId}
                    onClick={onToggleCreate}
                    className="mb-1.5 hidden md:inline-flex"
                />
            </header>

            {creating && (
                <form
                    id={formId}
                    onSubmit={createProject}
                    className="flex flex-wrap items-end gap-2 border-b border-[#eaeaea] px-4 py-3"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor={nameId} className="text-xs font-medium text-[#525252]">
                            Project name
                        </label>
                        <input
                            id={nameId}
                            autoFocus
                            required
                            value={newName}
                            onChange={(event) => setNewName(event.target.value)}
                            className="w-full max-w-[260px] rounded-md border border-[#e5e5e5] px-2 py-1.5 text-[13px] leading-5 focus-visible:outline-2 focus-visible:outline-[#245de7] md:text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor={startDateId} className="text-xs font-medium text-[#525252]">
                            Start Date
                        </label>
                        <input
                            id={startDateId}
                            type="date"
                            value={newStartDate}
                            onChange={(event) => setNewStartDate(event.target.value)}
                            className="rounded-md border border-[#e5e5e5] px-2 py-1.5 text-[13px] leading-5 focus-visible:outline-2 focus-visible:outline-[#245de7] md:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-md bg-[#245de7] px-3 py-2 text-xs font-medium text-white"
                    >
                        Create
                    </button>

                    <button
                        type="button"
                        onClick={onCloseCreate}
                        className="rounded-md bg-[#f8f8f8] px-3 py-2 text-xs font-medium text-[#525252]"
                    >
                        Cancel
                    </button>
                </form>
            )}

            <ProjectStats stats={stats} />

            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-[13px] leading-5 text-[#525252] md:text-sm">
                    <thead>
                        <tr className="border-b border-[#eaeaea]">
                            <th scope="col" className="py-2.5 pl-4 pr-3 text-xs font-normal leading-4">Project Name</th>
                            <th scope="col" className="w-[108px] px-2 py-2.5 text-xs font-normal leading-4">Start Date</th>
                            <th scope="col" className="w-[108px] px-2 py-2.5 text-xs font-normal leading-4">Due Date</th>
                            <th scope="col" className="w-[130px] px-2 py-2.5 text-xs font-normal leading-4">Priority</th>
                            <th scope="col" className="w-[145px] px-2 py-2.5 text-xs font-normal leading-4">Status</th>
                            <th scope="col" className="w-[98px] px-2 py-2.5 text-center text-xs font-normal leading-4">Members</th>
                        </tr>
                    </thead>

                    <tbody>
                        {visibleProjects.map((project) => (
                            <tr
                                key={project.id}
                                className={`border-b border-[#eaeaea] ${
                                    selectedId === project.id ? 'bg-[#f8f8f8]' : ''
                                }`}
                            >
                                <td className="py-1.5 pl-4 pr-3">
                                    <button
                                        type="button"
                                        aria-pressed={selectedId === project.id}
                                        onClick={() => onSelect(project.id)}
                                        className="flex items-center gap-2 break-words text-left font-medium text-[#1e1e1e] hover:underline focus-visible:outline-2 focus-visible:outline-[#245de7]"
                                    >
                                        <StatusDot status="To Do" />
                                        <span className="min-w-0">{project.name}</span>
                                    </button>
                                </td>

                                <td className="whitespace-nowrap px-2 text-xs leading-4 md:text-[13px]">
                                    {formatProjectDate(project.startDate)}
                                </td>

                                <td className="whitespace-nowrap px-2 text-xs leading-4 md:text-[13px]">
                                    {formatProjectDate(project.dueDate)}
                                </td>

                                <td className="px-2 py-1.5">
                                    <ProjectSelect
                                        label={`Priority for ${project.name}`}
                                        value={project.priority}
                                        groups={priorityGroups}
                                        onChange={(priority) => onUpdate(project.id, { priority })}
                                        Icon={PriorityFlag}
                                        alignEnd
                                    />
                                </td>

                                <td className="px-2 py-1.5">
                                    <ProjectSelect
                                        label={`Status for ${project.name}`}
                                        value={project.status}
                                        groups={statusGroups}
                                        onChange={(status) => onUpdate(project.id, { status })}
                                        Icon={StatusDot}
                                    />
                                </td>

                                <td className="px-2 text-center text-xs font-medium leading-4 md:text-[13px]">
                                    {project.memberIds?.length ?? 0}
                                </td>
                            </tr>
                        ))}

                        {visibleProjects.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-4">No projects to show.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}