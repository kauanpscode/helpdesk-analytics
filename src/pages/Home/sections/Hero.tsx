import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Atendimento profissional <br className="hidden md:block" />
          <span className="text-blue-600">
            sem o estresse de sempre.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Uma plataforma intuitiva para gerenciar demandas, sem perder nenhuma mensagem pelo caminho.
        </p>

        {/* CTA PRINCIPAL */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
          >
            Começar a utilizar
          </Link>

          <Link
            to="/demo"
            className="text-blue-600 font-semibold text-lg hover:underline"
          >
            Ver demonstração
          </Link>
        </div>

        {/* PROVA SOCIAL */}
        <p className="mt-6 text-sm text-gray-400">
          {/* +500 empresas já utilizam • Sem cartão de crédito */}
        </p>
      </div>
    </section>
  );
}