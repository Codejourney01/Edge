import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Nav from "@/components/layout/Nav";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

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
    setActiveItem(id);
    closeSidebar();
  }

  // Synchronize the native dialog with React state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (sidebarOpen && !dialog.open) {
      dialog.showModal();
    } else if (!sidebarOpen && dialog.open) {
      dialog.close();
    }
  }, [sidebarOpen]);

  // Lock background scrolling while the drawer is open.
  useEffect(() => {
    if (!sidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  // Close the mobile drawer when switching to desktop.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleResize() {
      if (mediaQuery.matches) {
        setSidebarOpen(false);
      }
    }

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Nav
        sidebarOpen={sidebarOpen}
        onMenuClick={openSidebar}
      />

      <div className="flex flex-1 items-start gap-3 px-3 pb-3 md:gap-4 md:px-5 xl:px-6 2xl:px-8">
        {/* Desktop sidebar */}
        <aside
          aria-label="Dashboard navigation"
          className="sticky top-3 hidden h-[85vh] w-18.75 shrink-0 md:block 2xl:h-[90vh]"
        >
          <Sidebar
            activeItem={activeItem}
            onSelect={selectItem}
          />
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
        {/* Overlay */}
        <div
          aria-hidden="true"
          onClick={closeSidebar}
          className="absolute inset-0"
        />

        {/* Drawer: 48% of mobile width */}
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
            <Sidebar
              activeItem={activeItem}
              onSelect={selectItem}
            />
          </div>
        </div>
      </dialog>
    </div>
  );
}