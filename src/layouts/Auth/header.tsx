import helpFlowLogo from "../../assets/images/logos/helpflow-logo-nova.png";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm mb-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + Nome */}
        <div className="flex items-center gap-2">
          <img
            src={helpFlowLogo}
            alt="HelpFlow Logo"
            className="w-10 h-10 object-contain"
          />

          <Link
            to="/"
            className="text-[20px] font-extrabold tracking-tight leading-none"
          >
            <span className="text-[#216bde]">Help</span>
            <span className="text-[#15a059]">Flow</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
