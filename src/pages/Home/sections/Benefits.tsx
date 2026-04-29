import { Link, Check } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            A experiência que seu cliente{" "}
            <span className="text-blue-600">merece.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            O que acontece quando sua equipe tem as ferramentas certas.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-2xl mb-6">
              <div className="text-2xl">
                <Link />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Histórico unificado: Chega de "pode repetir, por favor"
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Toda a jornada do cliente em uma única linha do tempo. Sua equipe
              sabe exatamente o que foi conversado antes, independentemente do
              canal ou do atendente anterior.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">
                  <Check />
                </span>
                Continuidade no atendimento
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">
                  <Check />
                </span>
                Menor tempo de resolução
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-gray-100 rounded-3xl h-64 md:h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
            <p className="text-gray-400">
              [Imagem: Dashboard de Linha do Tempo]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
