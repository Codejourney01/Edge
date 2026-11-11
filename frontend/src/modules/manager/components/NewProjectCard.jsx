import React from 'react';

export default function NewProjectCard({ invitations, onAccept }) {
    return (
        <section className="min-w-0 rounded-sm border border-[#EAEAEA] bg-white p-3 shadow-sm md:p-4">
            <h3 className="text-sm font-medium text-[#1E1E1E]">
                New Project
            </h3>

            {invitations.length === 0 ? (
                <p className="mt-4 text-xs text-[#666666]">
                    No pending invitations.
                </p>
            ) : (
                <ul className="mt-4 space-y-3">
                    {invitations.map(({ id, name, invitedBy }) => (
                        <li
                            key={id}
                            className="flex items-center justify-between gap-2"
                        >
                            <div className="min-w-0 wrap-break-word">
                                <p className="text-xs font-medium leading-4 text-[#1E1E1E]">
                                    {name}
                                </p>
                                <p className="mt-0.5 text-[11px] leading-4 text-[#666666]">
                                    Invited by {invitedBy}
                                </p>
                                <p className="text-[11px] leading-4 text-[#666666]">
                                    Manager
                                </p>
                            </div>

                            <button
                                type="button"
                                aria-label={`Accept invitation for ${name}`}
                                onClick={() => onAccept(id)}
                                className="min-h-9 shrink-0 rounded-sm bg-[#2563EB] px-3 text-xs font-medium text-white hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                            >
                                Accept
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}