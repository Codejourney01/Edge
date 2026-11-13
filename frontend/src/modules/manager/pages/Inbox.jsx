import React, { useState } from 'react';
import { FiInbox } from 'react-icons/fi';

import inboxempty from '../../../assets/icons/inboxempty.png';
import Inboxmessage from '../components/inbox/Inboxmessage';

const inboxMessages = [
    {
        id: 1,
        type: 'New Task',
        title: 'Update dashboard UI',
        sender: 'Manager',
    },
    {
        id: 2,
        type: 'New Project',
        title: 'Client Portal',
        sender: 'Manager',
    },
    {
        id: 3,
        type: 'New Task',
        title: 'Review mobile layout',
        sender: 'Manager',
    },
    {
        id: 4,
        type: 'New Project',
        title: 'Website Redesign',
        sender: 'Manager',
    },
];

const filters = ['All', 'New Task', 'New Project'];

export default function Inbox() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [readIds, setReadIds] = useState(() => new Set());

    const visibleMessages = activeFilter === 'All'
        ? inboxMessages
        : inboxMessages.filter((message) => message.type === activeFilter);

    function markAsRead(id) {
        setReadIds((currentIds) => {
            if (currentIds.has(id)) return currentIds;

            const nextIds = new Set(currentIds);
            nextIds.add(id);
            return nextIds;
        });
    }

    return (
        <div
            id="Edgeinbox"
            className="flex min-h-dvh w-full min-w-0 flex-col rounded-sm border border-[#E5E5E5]"
        >
            <header className="border-b border-[#E5E5E5] px-3 pb-2 pt-3">
                <div className="flex items-center gap-2">
                    <FiInbox aria-hidden="true" className="text-[#25282B]" />
                    <h3 className="text-[14px] font-semibold text-[#525252] md:text-[16px]">
                        Inbox
                    </h3>
                </div>

                <div
                    role="group"
                    aria-label="Filter notifications"
                    className="mt-4 flex flex-wrap items-center gap-2 md:gap-3"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            aria-pressed={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`min-h-7 rounded-full border px-3 text-xs font-medium text-[#525252] md:px-5 md:text-[13px] ${
                                activeFilter === filter
                                    ? 'border-[#D4D4D4] bg-[#F5F5F5]'
                                    : 'border-[#E5E5E5] bg-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </header>

            {visibleMessages.length > 0 ? (
                <ul className="flex flex-col gap-2 p-3 md:p-4">
                    {visibleMessages.map(({ id, type, title, sender }) => (
                        <li key={id} className="w-full max-w-[800px]">
                            <Inboxmessage
                                type={type}
                                title={title}
                                sender={sender}
                                unread={!readIds.has(id)}
                                onRead={() => markAsRead(id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4 text-center">
                    <img
                        src={inboxempty}
                        alt=""
                        className="size-20 object-contain md:size-34"
                    />
                    <h3 className="text-base font-semibold text-black">
                        {activeFilter === 'All' ? 'Inbox Zero' : 'No notifications'}
                    </h3>
                    <p className="max-w-[300px] text-xs text-[#525252] md:text-sm">
                        {activeFilter === 'All'
                            ? "You're all caught up. When there's something new, it will show up here."
                            : 'There are no notifications in this category.'}
                    </p>
                </div>
            )}
        </div>
    );
}