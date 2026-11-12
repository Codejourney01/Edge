import React, { useEffect, useRef, useState } from 'react';
import { BsPlus, BsSearch, BsX } from 'react-icons/bs';

export default function MemberSearch({ id, members, selectedIds, mode, onSave, onClose }) {
    const [query, setQuery] = useState('');
    const [draftIds, setDraftIds] = useState(selectedIds);
    const panelRef = useRef(null);
    const normalizedQuery = query.trim().toLowerCase();

    const visibleMembers = members.filter((member) => {
        if (!normalizedQuery && mode === 'edit') {
            return draftIds.includes(member.id);
        }

        return member.name.toLowerCase().includes(normalizedQuery)
            || member.title.toLowerCase().includes(normalizedQuery);
    });

    useEffect(() => {
        function dismissOnOutsideClick(event) {
            if (!panelRef.current?.parentElement?.contains(event.target)) {
                onClose(false);
            }
        }

        document.addEventListener('pointerdown', dismissOnOutsideClick);
        return () => document.removeEventListener('pointerdown', dismissOnOutsideClick);
    }, [onClose]);

    function toggleMember(memberId) {
        setDraftIds((ids) => ids.includes(memberId)
            ? ids.filter((id) => id !== memberId)
            : [...ids, memberId]);
    }

    return (
        <form
            id={id}
            ref={panelRef}
            aria-label="Project member search"
            onSubmit={(event) => {
                event.preventDefault();
                onSave(draftIds);
            }}
            onKeyDown={(event) => {
                if (event.key === 'Escape') {
                    event.stopPropagation();
                    onClose();
                }
            }}
            className="absolute right-0 top-9 z-20 flex min-h-[298px] w-full flex-col rounded-[9px] border border-[#e5e5e5] bg-white shadow-md lg:left-full lg:right-auto lg:top-0 lg:ml-2 lg:w-[312px]"
        >
            <label className="m-2 flex h-[35px] items-center gap-3 rounded-lg border border-[#e5e5e5] px-3 text-[#525252] focus-within:border-[#245de7]">
                <BsSearch aria-hidden="true" className="shrink-0 text-sm" />
                <span className="sr-only">Search member name or title</span>
                <input
                    autoFocus
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') event.preventDefault();
                    }}
                    placeholder="Search member name or Title"
                    className="min-w-0 flex-1 bg-transparent text-[13px] leading-5 text-[#333] outline-none placeholder:text-[#525252] md:text-sm"
                />
            </label>

            <ul className="max-h-[240px] flex-1 space-y-0.5 overflow-y-auto border-t border-[#f0f0f0] px-2 py-2">
                {visibleMembers.map((member) => {
                    const isSelected = draftIds.includes(member.id);

                    return (
                        <li
                            key={member.id}
                            className="grid min-h-11 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_26px] items-center gap-2 rounded-lg bg-[#f8f8f8] pl-3 pr-2 text-xs leading-4 md:text-[13px]"
                        >
                            <span title={member.name} className="truncate font-medium text-[#1e1e1e]">
                                {member.name}
                            </span>

                            <span title={member.title} className="truncate font-normal text-[#525252]">
                                {member.title}
                            </span>

                            <button
                                type="button"
                                aria-label={`${isSelected ? 'Remove' : 'Add'} ${member.name}`}
                                onClick={() => toggleMember(member.id)}
                                className={`inline-flex size-[26px] items-center justify-center rounded-lg bg-white text-base focus-visible:outline-2 focus-visible:outline-[#245de7] ${
                                    isSelected
                                        ? 'text-[#525252] hover:bg-[#ffdddd] hover:text-[#f1242c]'
                                        : 'text-[#245de7] hover:bg-[#eaf0ff]'
                                }`}
                            >
                                {isSelected ? <BsX aria-hidden="true" /> : <BsPlus aria-hidden="true" />}
                            </button>
                        </li>
                    );
                })}

                {visibleMembers.length === 0 && (
                    <li className="px-2 py-2 text-[13px] leading-5 text-[#525252] md:text-sm">
                        {normalizedQuery ? 'No members found.' : 'Search for a member to add.'}
                    </li>
                )}
            </ul>

            <div className="border-t border-[#e5e5e5] p-2">
                <button
                    type="submit"
                    className="h-[33px] min-w-[83px] rounded-lg bg-[#245de7] px-4 text-xs font-medium text-white hover:bg-[#194ed3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245de7]"
                >
                    Save
                </button>
            </div>
        </form>
    );
}