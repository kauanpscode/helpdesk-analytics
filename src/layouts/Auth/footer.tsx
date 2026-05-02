export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">HelpFlow</h2>
          <p className="max-w-xs mx-auto">
            Transformando o caos do atendimento em produtividade e satisfação.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Produto</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Funcionalidades</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Preços</a></li>
          </ul>
        </div>

        {/* Coluna 3: Suporte */}
        <div>
          <h3 className="text-white font-semibold mb-4">Suporte</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contato</a></li>
          </ul>
        </div>
      </div>

      {/* Linha Inferior: Copyright */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-sm text-center md:text-left">
        <p>© 2026 HelpFlow. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}