

const homePath =
  "M8.39172 2.35004L2.61672 6.97504C1.96672 7.4917 1.55006 8.58337 1.69172 9.40004L2.80006 16.0334C3.00006 17.2167 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2084 17.2001 16.0334L18.3084 9.40004C18.4417 8.58337 18.0251 7.4917 17.3834 6.97504L11.6084 2.35837C10.7167 1.6417 9.27506 1.6417 8.39172 2.35004Z";

const squarePath =
  "M7.50033 18.3334H12.5003C16.667 18.3334 18.3337 16.6667 18.3337 12.5001V7.50008C18.3337 3.33341 16.667 1.66675 12.5003 1.66675H7.50033C3.33366 1.66675 1.66699 3.33341 1.66699 7.50008V12.5001C1.66699 16.6667 3.33366 18.3334 7.50033 18.3334Z";

const inboxPath =
  "M4.54199 4.25825L1.66699 9.99992V14.9999C1.66699 15.4419 1.84259 15.8659 2.15515 16.1784C2.46771 16.491 2.89163 16.6666 3.33366 16.6666H16.667C17.109 16.6666 17.5329 16.491 17.8455 16.1784C18.1581 15.8659 18.3337 15.4419 18.3337 14.9999V9.99992L15.4587 4.25825C15.3207 3.98057 15.108 3.74689 14.8445 3.58348C14.5809 3.42008 14.2771 3.33342 13.967 3.33325H6.03366C5.72359 3.33342 5.41971 3.42008 5.1562 3.58348C4.89268 3.74689 4.67997 3.98057 4.54199 4.25825Z";

const gearPath =
  "M1.66699 10.7334V9.26669C1.66699 8.40003 2.37533 7.68336 3.25033 7.68336C4.75866 7.68336 5.37533 6.6167 4.61699 5.30836C4.18366 4.55836 4.44199 3.58336 5.20033 3.15003L6.64199 2.32503C7.30033 1.93336 8.15033 2.1667 8.54199 2.82503L8.63366 2.98336C9.38366 4.2917 10.617 4.2917 11.3753 2.98336L11.467 2.82503C11.8587 2.1667 12.7087 1.93336 13.367 2.32503L14.8087 3.15003C15.567 3.58336 15.8253 4.55836 15.392 5.30836C14.6337 6.6167 15.2503 7.68336 16.7587 7.68336C17.6253 7.68336 18.342 8.39169 18.342 9.26669V10.7334C18.342 11.6 17.6337 12.3167 16.7587 12.3167C15.2503 12.3167 14.6337 13.3834 15.392 14.6917C15.8253 15.45 15.567 16.4167 14.8087 16.85L13.367 17.675C12.7087 18.0667 11.8587 17.8334 11.467 17.175L11.3753 17.0167C10.6253 15.7084 9.39199 15.7084 8.63366 17.0167L8.54199 17.175C8.15033 17.8334 7.30033 18.0667 6.64199 17.675L5.20033 16.85C4.44199 16.4167 4.18366 15.4417 4.61699 14.6917C5.37533 13.3834 4.75866 12.3167 3.25033 12.3167C2.37533 12.3167 1.66699 11.6 1.66699 10.7334Z";

const profilePaths = [
  "M7.63314 9.05841C7.5498 9.05008 7.4498 9.05008 7.35814 9.05841C5.3748 8.99175 3.7998 7.36675 3.7998 5.36675C3.7998 3.32508 5.4498 1.66675 7.4998 1.66675C9.54147 1.66675 11.1998 3.32508 11.1998 5.36675C11.1915 7.36675 9.61647 8.99175 7.63314 9.05841Z",
  "M13.6747 3.33325C15.2914 3.33325 16.5914 4.64159 16.5914 6.24992C16.5914 7.82492 15.3414 9.10825 13.7831 9.16659C13.7164 9.15825 13.6414 9.15825 13.5664 9.16659",
  "M3.4666 12.1333C1.44993 13.4833 1.44993 15.6833 3.4666 17.0249C5.75827 18.5583 9.5166 18.5583 11.8083 17.0249C13.8249 15.6749 13.8249 13.4749 11.8083 12.1333C9.52494 10.6083 5.7666 10.6083 3.4666 12.1333Z",
  "M15.2832 16.6667C15.8832 16.5417 16.4499 16.3001 16.9165 15.9417C18.2165 14.9667 18.2165 13.3584 16.9165 12.3834C16.4582 12.0334 15.8999 11.8001 15.3082 11.6667",
];

const projectLines = [
  "M10.3086 7.3999H14.6836",
  "M5.31641 7.3999L5.94141 8.0249L7.81641 6.1499",
  "M10.3086 13.2334H14.6836",
  "M5.31641 13.2334L5.94141 13.8584L7.81641 11.9834",
];

const menuItems = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Dashboard" },
  { id: "projects", label: "Projects" },
  { id: "details", label: "Details" },
  { id: "inbox", label: "Inbox" },
  { id: "setting", label: "Setting" },
];

// Shared helper inside this same file.
function SidebarIcon({ name, active }) {
  let content;

  switch (name) {
    case "home":
      content = active ? (
        <path
          fill="currentColor"
          stroke="none"
          fillRule="evenodd"
          d={`${homePath} M9.25 12.5a.75.75 0 0 1 1.5 0V15a.75.75 0 0 1-1.5 0Z`}
        />
      ) : (
        <>
          <path d={homePath} />
          <path d="M10 15V12.5" />
        </>
      );
      break;

    case "dashboard":
      content = active ? (
        <g transform="scale(0.833333)">
          <path
            fill="currentColor"
            stroke="none"
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.91 16.19C9.91 16.83 9.39 17.35 8.74 17.35C8.1 17.35 7.58 16.83 7.58 16.19V12.93C7.58 12.29 8.1 11.77 8.74 11.77C9.39 11.77 9.91 12.29 9.91 12.93V16.19ZM16.42 16.19C16.42 16.83 15.9 17.35 15.26 17.35C14.61 17.35 14.09 16.83 14.09 16.19V7.81C14.09 7.17 14.61 6.65 15.26 6.65C15.9 6.65 16.42 7.17 16.42 7.81V16.19Z"
          />
        </g>
      ) : (
        <>
          <path d={squarePath} />
          <path d="M12.9167 15.4166C13.8333 15.4166 14.5833 14.6666 14.5833 13.7499V6.24992C14.5833 5.33325 13.8333 4.58325 12.9167 4.58325C12 4.58325 11.25 5.33325 11.25 6.24992V13.7499C11.25 14.6666 11.9917 15.4166 12.9167 15.4166Z" />
          <path d="M7.08366 15.4167C8.00033 15.4167 8.75033 14.6667 8.75033 13.7501V10.8334C8.75033 9.91675 8.00033 9.16675 7.08366 9.16675C6.16699 9.16675 5.41699 9.91675 5.41699 10.8334V13.7501C5.41699 14.6667 6.15866 15.4167 7.08366 15.4167Z" />
        </>
      );
      break;

    case "projects":
      content = (
        <>
          <path
            d={squarePath}
            fill={active ? "currentColor" : "none"}
            stroke={active ? "none" : "currentColor"}
          />

          <g stroke={active ? "white" : "currentColor"}>
            {projectLines.map((path, index) => (
              <path key={index} d={path} />
            ))}
          </g>
        </>
      );
      break;

    case "details":
      content = active ? (
        <>
          <g fill="currentColor" stroke="none">
            <path d={profilePaths[0]} />
            <path d={profilePaths[2]} />

            {/* Filled second person */}
            <path d="M13.4 3.333C15.2 3.333 16.592 4.642 16.592 6.25C16.592 7.825 15.342 9.108 13.783 9.167H13.4C14.15 7.4 14.15 5.1 13.4 3.333Z" />
            <path d="M14.5 11.45C15.4 11.5 16.25 11.86 16.917 12.383C18.217 13.358 18.217 14.967 16.917 15.942C16.25 16.45 15.4 16.75 14.5 16.85C15.6 15.15 15.6 13.15 14.5 11.45Z" />
          </g>
        </>
      ) : (
        profilePaths.map((path, index) => <path key={index} d={path} />)
      );
      break;

    case "inbox":
      content = active ? (
        <>
          <path d={inboxPath} fill="currentColor" stroke="none" />

          {/* White tray detail keeps the filled icon readable */}
          <path
            d="M2.5 10H6.667L8.333 12.5H11.667L13.333 10H17.5"
            stroke="white"
            strokeWidth={1.5}
          />
        </>
      ) : (
        <g strokeWidth={2}>
          <path d={inboxPath} />
          <path d="M18.3337 10H13.3337L11.667 12.5H8.33366L6.66699 10H1.66699" />
        </g>
      );
      break;

    case "setting":
      content = active ? (
        <path
          fill="currentColor"
          stroke="none"
          fillRule="evenodd"
          d={`${gearPath} M12.5 10a2.5 2.5 0 1 0-5 0a2.5 2.5 0 1 0 5 0Z`}
        />
      ) : (
        <>
          <path d={gearPath} />
          <circle cx="10" cy="10" r="2.5" />
        </>
      );
      break;

    default:
      return null;
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}

export default function Sidebar({
  activeItem = "dashboard",
  onSelect,
}) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 overflow-y-auto rounded-[10px] bg-[#2563EB] py-5 md:gap-4">
      {menuItems.map((item) => {
        const isActive = activeItem === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect?.(item.id)}
            aria-pressed={isActive}
            className={`group flex w-[90%] shrink-0 cursor-pointer items-center justify-start gap-3 rounded-[10px] px-3 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-full md:flex-col md:justify-center md:gap-2 md:rounded-none md:p-0 ${
              isActive
                ? "bg-white text-[#2563EB] md:bg-transparent md:text-white"
                : "text-white hover:bg-white/15 md:hover:bg-transparent"
            }`}
          >
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-[12px] transition-colors md:size-10 ${
                isActive
                  ? "text-[#2563EB] md:bg-white"
                  : "text-white md:group-hover:bg-white/15"
              }`}
            >
              <SidebarIcon name={item.id} active={isActive} />
            </span>

            <span className="text-left text-[13px] leading-5 font-medium md:text-center md:text-[12px] md:leading-4">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}