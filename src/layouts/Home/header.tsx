import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Dropdown from "../../components/Dropdown";

export default function Header() {
  const menus = [
    { label: "Empresa", to: "/empresa" },
    { label: "Idealização", to: "/idealizacao" },
    { label: "Contato", to: "/contato" },
  ];

  return (
    <header className="bg-white shadow-md mb-1 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 relative">
        <div className="flex md:hidden items-center">
          <Dropdown
            icon={<Menu size={26} />}
            showChevron={false}
            items={menus}
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <Link
              to={menu.to}
              key={menu.to}
              className="font-semibold text-gray-700 hover:text-[#216bde] transition-colors"
            >
              {menu.label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2">
            {/* <img
              src={helpFlowLogo}
              alt="HelpFlow Logo"
              className="w-10 h-10 object-contain"
            /> */}

            <span className="text-[20px] font-extrabold tracking-tight leading-none">
              <span className="text-[#216bde]">Help</span>
              <span className="text-[#15a059]">Flow</span>
            </span>
          </Link>
        </div>

        <div>
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
