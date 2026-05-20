import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm mb-1">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link
          to="/"
          className="text-[20px] font-extrabold tracking-tight leading-none"
        >
          <span className="text-[#216bde]">Help</span>
          <span className="text-[#15a059]">Flow</span>
        </Link>
      </div>
    </header>
  );
}