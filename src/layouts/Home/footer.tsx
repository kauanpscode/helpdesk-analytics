import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  to: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const sections: FooterSection[] = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", to: "/funcionalidades" },
      { label: "Preços", to: "/precos" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", to: "/ajuda" },
      { label: "Contato", to: "/contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">HelpFlow</h2>
          <p className="max-w-xs">
            Transformando o caos do atendimento em produtividade e satisfação.
          </p>
        </div>

        {/* Seções */}
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-white font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer bottom */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 HelpFlow. Todos os direitos reservados.</p>

        <div className="flex gap-4">
          <Link to="/termos" className="hover:text-blue-400">
            Termos
          </Link>
          <Link to="/privacidade" className="hover:text-blue-400">
            Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}