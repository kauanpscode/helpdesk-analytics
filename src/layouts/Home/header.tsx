import { useState } from "react";
import helpFlowLogo from "../../assets/images/logos/android-chrome-512x512.png";
import { Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md mb-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <img src={helpFlowLogo} className="w-8 h-8" />

          <Link to="/" className="text-xl font-bold">
            <span style={{ color: "#216bde" }}>Help</span>
            <span style={{ color: "#15a059" }}>Flow</span>
          </Link>
        </div>

        {/* Navegação */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-gray-700 font-medium">
              <li className="hover:text-[#216bde] cursor-pointer">Empresa</li>
              <li className="hover:text-[#216bde] cursor-pointer">
                Idealização
              </li>
            </ul>
          </nav>

          {/* Botão */}
          <Link to="/login" className="bg-[#216bde] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-all hidden md:block">
            Entrar
          </Link>

          {/* Menu Mobile */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <div className="flex flex-col gap-3 p-6 text-lg">
            <a href="#" onClick={() => setIsOpen(false)}>
              Empresa
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Idealização
            </a>
          </div>

          <Link to="/login" className="bg-[#216bde] text-white px-5 py-2 rounded-full mt-4">
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}
