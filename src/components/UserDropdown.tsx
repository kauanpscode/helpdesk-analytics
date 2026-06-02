import { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

interface UserDropdownProps {
  items: {
    label: string;
    to: string;
  }[];
}

export default function UserDropdown({ items }: UserDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center cursor-pointer"
      >
        <User size={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] shadow-lg overflow-hidden">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 hover:bg-[var(--bg-muted)] text-black dark:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}