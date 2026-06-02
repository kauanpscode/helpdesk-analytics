import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import UserDropdown from "../../components/UserDropdown";
import { useTheme } from "../../context/ThemeProvider";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const menus = [{ label: "Home", to: "/dashboard" }];

  const userMenu = [
    { label: "Meu Perfil", to: "/profile" },
    { label: "Sair", to: "/logout" },
  ];

  return (
    <header className="bg-[var(--bg-card)] border-b border-[var(--border)] shadow-sm mb-1 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 relative">
        {/* Mobile Menu */}
        <div className="flex items-center">
          <Sidebar
            icon={<Menu size={26} />}
            items={menus}
          />
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-[20px] font-extrabold tracking-tight leading-none">
              <span className="text-purple-600 dark:text-purple-400">
                Mercu
              </span>
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

          <UserDropdown items={userMenu} />
        </div>
      </div>
    </header>
  );
}
