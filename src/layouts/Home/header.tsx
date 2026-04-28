import helpFlowLogo from "../../assets/images/logos/helpflow-logo-inteira.png";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <img src={helpFlowLogo} className="w-40" />

          <nav>
            <ul className="flex gap-6 text-dark font-medium">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Empresa
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Idealização
              </li>
            </ul>
          </nav>
        </div>

        <button className="bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-all">
          Entrar
        </button>
      </div>
    </header>
  );
}
