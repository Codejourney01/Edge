import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import Nav from '@/components/layout/Nav';
import Sidebar from '@/components/layout/Sidebar';

const managerDashboardPath = '/managerdashboard';
const managerProjectsPath = '/managerdashboard/projects';
const employeeDashboardPath = '/employeedashboard';

export default function DashboardLayout() {
    const navigate = useNavigate();
    const isProjectsPage = Boolean(useMatch(managerProjectsPath));
    const isEmployeeDashboard = Boolean(useMatch(employeeDashboardPath));

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [navHeight, setNavHeight] = useState(0);

    const activeItem = isProjectsPage ? 'projects' : selectedItem;

    const navRef = useRef(null);
    const dialogRef = useRef(null);
    const menuTriggerRef = useRef(null);

    function openSidebar(event) {
        menuTriggerRef.current = event.currentTarget;
        setSidebarOpen(true);
    }

    function closeSidebar() {
        setSidebarOpen(false);
    }

    function selectItem(id) {
        closeSidebar();

        if (id === 'dashboard') {
            setSelectedItem('dashboard');
            navigate(isEmployeeDashboard ? employeeDashboardPath : managerDashboardPath);
            return;
        }

        if (id === 'projects' && !isEmployeeDashboard) {
            setSelectedItem('dashboard');
            navigate(managerProjectsPath);
            return;
        }

        setSelectedItem(id);
    }

    useLayoutEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        function updateNavHeight() {
            setNavHeight(nav.getBoundingClientRect().height);
        }

        updateNavHeight();

        const observer = new ResizeObserver(updateNavHeight);
        observer.observe(nav);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (sidebarOpen && !dialog.open) {
            dialog.showModal();
        } else if (!sidebarOpen && dialog.open) {
            dialog.close();
        }
    }, [sidebarOpen]);

    useEffect(() => {
        if (!sidebarOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [sidebarOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        function handleResize() {
            if (mediaQuery.matches) {
                setSidebarOpen(false);
            }
        }

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return (
        <div
            className="flex min-h-dvh flex-col bg-white"
            style={{ '--edge-nav-height': `${navHeight}px` }}
        >
            <div ref={navRef} className="sticky top-0 z-30 shrink-0 bg-white">
                <Nav sidebarOpen={sidebarOpen} onMenuClick={openSidebar} />
            </div>

            <div className="flex flex-1 items-start gap-3 px-3 pb-3 md:gap-4 md:px-5 xl:px-6 2xl:px-8">
                {/* Desktop sidebar */}
                <aside
                    aria-label="Dashboard navigation"
                    className="sticky top-[var(--edge-nav-height)] hidden h-[85vh] max-h-[calc(100dvh_-_var(--edge-nav-height))] w-18.75 shrink-0 overflow-y-auto md:block 2xl:h-[90vh]"
                >
                    <Sidebar activeItem={activeItem} onSelect={selectItem} />
                </aside>

                <main className="min-w-0 flex-1">
                    <Outlet />
                </main>
            </div>

            {/* Mobile sidebar */}
            <dialog
                ref={dialogRef}
                id="mobile-sidebar"
                aria-label="Dashboard navigation"
                onCancel={(event) => {
                    event.preventDefault();
                    closeSidebar();
                }}
                onClose={() => {
                    setSidebarOpen(false);

                    if (window.innerWidth < 768) {
                        menuTriggerRef.current?.focus();
                    }
                }}
                className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 text-white outline-none backdrop:bg-black/40"
            >
                <div
                    aria-hidden="true"
                    onClick={closeSidebar}
                    className="absolute inset-0"
                />

                <div className="relative flex h-full w-[48%] flex-col overflow-hidden rounded-r-[16px] bg-[#2563EB] shadow-xl">
                    <div className="flex shrink-0 justify-end px-3 pt-3">
                        <button
                            type="button"
                            onClick={closeSidebar}
                            aria-label="Close sidebar"
                            className="flex size-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    <div className="min-h-0 flex-1">
                        <Sidebar activeItem={activeItem} onSelect={selectItem} />
                    </div>
                </div>
            </dialog>
        </div>
    );
}