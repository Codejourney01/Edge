import React from 'react';
import { FiClipboard, FiFolder, FiMoreVertical } from 'react-icons/fi';

export default function Inboxmessage({
    type,
    title,
    sender,
    unread = true,
    onRead,
}) {
    const Icon = type === 'New Project' ? FiFolder : FiClipboard;

    return (
        <div
            className={`relative flex w-full items-center justify-between gap-1 rounded-lg border transition-colors ${
                unread
                    ? 'border-[#CFE1FF] bg-[#EAF3FF]'
                    : 'border-[#E5E5E5] bg-white'
            }`}
        >
            <button
                type="button"
                onClick={onRead}
                className="flex min-h-14 min-w-0 flex-1 items-center gap-2.5 rounded-l-lg px-3 py-2.5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#245DE7] md:gap-4"
            >
                <Icon
                    aria-hidden="true"
                    className={`size-4 shrink-0 ${
                        unread ? 'text-[#245DE7]' : 'text-[#525252]'
                    }`}
                />

                <span className="flex min-w-0 flex-1 items-center justify-between gap-x-2 md:max-w-[65%] md:gap-x-3">
                    <span className="sr-only font-medium text-[#525252] md:not-sr-only md:shrink-0 md:text-xs">
                        {type}
                    </span>

                    <span className="min-w-0 text-xs font-medium text-[#1E1E1E] [overflow-wrap:anywhere] md:text-[13px]">
                        {title}
                    </span>

                    <span className="shrink-0 text-right text-[11px] text-[#737373] md:text-xs">
                        by {sender}
                    </span>
                </span>

                <span className="sr-only">{unread ? 'Unread' : 'Read'}</span>
            </button>

            <details className="relative mr-1 shrink-0">
                <summary
                    aria-label={`Options for ${title}`}
                    className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md text-[#525252] hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-[#245DE7] [&::-webkit-details-marker]:hidden"
                >
                    <FiMoreVertical aria-hidden="true" className="size-4" />
                </summary>

                <div className="absolute right-0 top-full z-10 min-w-[140px] rounded-md border border-[#E5E5E5] bg-white p-1 shadow-md">
                    <button
                        type="button"
                        disabled={!unread}
                        onClick={(event) => {
                            event.currentTarget.closest('details').open = false;
                            onRead();
                        }}
                        className="w-full rounded px-3 py-2 text-left text-xs text-[#525252] enabled:hover:bg-[#F5F5F5] disabled:opacity-60"
                    >
                        {unread ? 'Mark as read' : 'Already read'}
                    </button>
                </div>
            </details>
        </div>
    );
}