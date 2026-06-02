import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarItem {
  label: string;
  to: string;
}

interface SidebarProps {
  items: SidebarItem[];
  icon?: React.ReactNode;
  side?: "left" | "right";
  width?: string;
}

export default function Sidebar({
  items,
  icon,
  side = "left",
  width = "w-72",
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 text-black dark:text-white cursor-pointer"
      >
        {icon ?? (isOpen ? <X size={28} /> : <Menu size={28} />)}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 ${side === "left" ? 'left-0' : 'right-0'} h-full ${width} bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-[20px] font-extrabold tracking-tight leading-none">
            <span className="text-purple-600 dark:text-purple-400">Mercu</span>
            <span className="text-black dark:text-white">rius</span>
          </span>

          <button onClick={() => setIsOpen(false)} className="relative z-50 text-black dark:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
