import logo from '../../assets/icons/edgelogo.png';
import {
    FiMenu,
    FiInbox,
    FiSun,
    FiChevronDown,
    FiSearch,
} from 'react-icons/fi';

export default function Nav({
    onMenuClick,
    onInboxClick,
    sidebarOpen = false,
    inboxCount = 0,
}) {
    return (
        <header className="w-full bg-white">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-3 py-3 md:flex-nowrap md:px-5 md:py-4 xl:px-6 2xl:gap-x-8 2xl:px-8 2xl:py-5">
                <div className="flex shrink-0 items-center gap-3 md:gap-0">
                    <button
                        type="button"
                        onClick={onMenuClick}
                        aria-label="Open sidebar"
                        aria-expanded={sidebarOpen}
                        aria-controls="mobile-sidebar"
                        aria-haspopup="dialog"
                        className="flex size-10 cursor-pointer items-center justify-center rounded-lg text-[#292D32] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600 md:hidden"
                    >
                        <FiMenu size={24} strokeWidth={2} />
                    </button>

                    <img
                        src={logo}
                        alt="Edge"
                        className="h-auto w-20 md:w-25 xl:w-28 2xl:w-34"
                    />
                </div>

                <form
                    role="search"
                    onSubmit={(event) => event.preventDefault()}
                    className="relative order-3 w-full min-w-0 md:order-0 md:mx-4 md:w-auto md:max-w-110 md:flex-1 xl:mx-8 xl:max-w-140 2xl:mx-12 2xl:max-w-170"
                >
                    <FiSearch
                        size={19}
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#525252] md:left-4"
                    />

                    <input
                        type="search"
                        name="search"
                        aria-label="Search projects and tasks"
                        placeholder="Search Projects, Tasks"
                        className="h-10 w-full rounded-lg border border-[#E5E5E5] bg-white pr-3 pl-10 text-[14px] text-[#292D32] outline-none placeholder:font-medium placeholder:text-[#525252] focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:h-11 md:pl-11 2xl:h-12 2xl:text-[15px]"
                    />
                </form>

                <div className="flex shrink-0 items-center gap-1 md:gap-3 xl:gap-4 2xl:gap-6">
                    {onInboxClick && (
                        <button
                            type="button"
                            onClick={onInboxClick}
                            aria-label={`Inbox, ${inboxCount} unread ${inboxCount === 1 ? 'message' : 'messages'}`}
                            className="relative flex size-10 cursor-pointer items-center justify-center rounded-lg text-[#292D32] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                            <FiInbox size={22} strokeWidth={2} aria-hidden="true" />

                            {inboxCount > 0 && (
                                <span
                                    aria-hidden="true"
                                    className="absolute top-0.5 right-0.5 flex min-w-4 items-center justify-center rounded-full border-2 border-white bg-[#2563EB] px-0.5 text-[10px] leading-3 font-semibold text-white"
                                >
                                    {inboxCount}
                                </span>
                            )}
                        </button>
                    )}

                    <button
                        type="button"
                        aria-label="Toggle theme"
                        className="hidden size-10 cursor-pointer items-center justify-center rounded-lg text-[#292D32] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600 md:flex"
                    >
                        <FiSun size={22} strokeWidth={2} />
                    </button>

                    <button
                        type="button"
                        aria-label="Open profile menu"
                        className="flex cursor-pointer items-center gap-1 rounded-lg p-1 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600 md:gap-2"
                    >
                        <span className="relative flex size-9 items-center justify-center rounded-full bg-[#2D315C] md:size-10 2xl:size-12">
                            <span className="text-[16px] font-medium text-white 2xl:text-[19px]">
                                K
                            </span>

                            <span
                                aria-hidden="true"
                                className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-white bg-[#00D982] md:size-3"
                            />
                        </span>

                        <FiChevronDown
                            size={18}
                            strokeWidth={2}
                            className="hidden text-[#292D32] md:block"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}