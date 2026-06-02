import { Moon, Sun } from "lucide-react";

import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-[var(--bg-card)] border-b border-[var(--border)] shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-[20px] font-extrabold tracking-tight leading-none"
        >
          <span className="text-purple-600 dark:text-purple-400">Mercu</span>
          <span className="text-black dark:text-white">rius</span>
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors duration-300"
        >
          {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
}
