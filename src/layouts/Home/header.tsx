import { useState } from "react";
import helpFlowLogo from "../../assets/images/logos/android-chrome-512x512.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md mb-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={helpFlowLogo} alt="HelpFlow Logo" className="w-8 h-8" />

          <Link to="/" className="text-xl font-bold">
            <span className="text-[#216bde]">Help</span>
            <span className="text-[#15a059]">Flow</span>
          </Link>
        </div>

        {/* Navegação */}
        <div className="flex items-center gap-4">
          {/* Desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-gray-700 font-medium">
              <li>
                <Link to="/empresa" className="hover:text-[#216bde]">
                  Empresa
                </Link>
              </li>
              <li>
                <Link to="/idealizacao" className="hover:text-[#216bde]">
                  Idealização
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            to="/login"
            className="hidden md:block bg-[#216bde] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-all"
          >
            Entrar
          </Link>

          {/* Botão mobile */}
          <button
            onClick={toggleMenu}
            aria-label="Abrir menu"
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="font-bold">Menu</span>
          <button onClick={closeMenu} aria-label="Fechar menu">
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 text-lg">
          <Link to="/empresa" onClick={closeMenu}>
            Empresa
          </Link>
          <Link to="/idealizacao" onClick={closeMenu}>
            Idealização
          </Link>

          <Link
            to="/login"
            onClick={closeMenu}
            className="mt-6 bg-[#216bde] text-white px-5 py-2 rounded-full text-center"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}