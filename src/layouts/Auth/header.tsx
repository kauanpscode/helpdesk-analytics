import { useState } from "react";
import helpFlowLogo from "../../assets/images/logos/android-chrome-512x512.png";
import { Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm mb-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <img src={helpFlowLogo} className="w-8 h-8" />

          <Link to="/" className="text-xl font-bold">
            <span style={{ color: "#216bde" }}>Help</span>
            <span style={{ color: "#15a059" }}>Flow</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
