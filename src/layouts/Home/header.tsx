import helpFlowLogo from "../../assets/images/logos/helpflow-logo-inteira.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={helpFlowLogo} className="w-40"></img>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium px-6">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Empresa
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Idealização
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-all">
          Entrar
        </button>
      </div>
    </header>
  );
}
