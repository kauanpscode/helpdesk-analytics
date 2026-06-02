import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import Dropdown from "../../components/Sidebar";
import { useTheme } from "../../context/ThemeProvider";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const menus = [
    { label: "Empresa", to: "/company" },
    { label: "Idealização", to: "/ideation" },
    { label: "Contato", to: "/contact" },
  ];

  return (
    <header className="bg-[var(--bg-card)] border-b border-[var(--border)] shadow-sm mb-1 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 relative">
        {/* Mobile Menu */}
        <div className="flex items-center text-[var(--text)]">
          <Dropdown
            icon={<Menu size={26} />}
            items={menus}
          />
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-[20px] font-extrabold tracking-tight leading-none">
              <span className="text-purple-600 dark:text-purple-400">Mercu</span>
              <span className="text-black dark:text-white">rius</span>
            </span>
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors duration-300"
          >
            {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="bg-[#216bde] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-all"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}
