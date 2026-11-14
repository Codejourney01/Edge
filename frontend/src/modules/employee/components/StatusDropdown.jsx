function StatusDropdown({
  value,
  onChange,
  includeAll = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const options = includeAll
    ? ["All", "To Do", "In Progress", "Completed"]
    : ["To Do", "In Progress", "Completed"];

  const updatePosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const menuHeight = 170;

    const showAbove =
      window.innerHeight - rect.bottom < menuHeight && rect.top > menuHeight;

    setPosition({
      top: showAbove ? rect.top - menuHeight - 5 : rect.bottom + 5,
      left: rect.right,
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    updatePosition();

    const handleClickOutside = (e) => {
      if (
        !buttonRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => updatePosition();

    document.addEventListener("pointerdown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  const styles = {
    "To Do": "text-gray-600",
    "In Progress": "text-blue-600",
    Completed: "text-green-600",
    All: "text-gray-600",
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex min-w-[150px] items-center justify-between gap-2 rounded-md px-2 py-2 text-sm ${styles[value] || ""} ${className}`}
      >
        <span>{value === "All" ? "All Status" : value}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen &&
        position &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: "translateX(-100%)",
              zIndex: 2147483647,
            }}
            className="w-[205px] rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
          >
            <p className="px-3 py-2 text-xs font-medium text-gray-500">
              Status
            </p>

            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition hover:bg-gray-50 ${
                  value === option ? "bg-gray-100" : ""
                }`}
              >
                <span>{option === "All" ? "All Status" : option}</span>
                {value === option && (
                  <Check size={15} className="text-blue-600" />
                )}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
