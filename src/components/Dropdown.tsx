import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface DropdownItem {
  label: string;
  to: string;
}

interface DropdownProps {
  title?: string;
  items: DropdownItem[];
  icon?: ReactNode;
  showChevron?: boolean;
}

export default function Dropdown({
  title,
  items,
  icon,
  showChevron = true,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-700 hover:text-[#216bde] transition-colors"
      >
        {icon ? (
          <div className="relative w-6 h-6">
            <Menu
              size={26}
              className={`
        absolute transition-all duration-300
        ${
          isOpen
            ? "opacity-0 rotate-90 scale-75"
            : "opacity-100 rotate-0 scale-100"
        }
      `}
            />

            <X
              size={26}
              className={`
        absolute transition-all duration-300
        ${
          isOpen
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75"
        }
      `}
            />
          </div>
        ) : null}

        {title && <span>{title}</span>}

        {showChevron && (
          <ChevronDown
            size={18}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
