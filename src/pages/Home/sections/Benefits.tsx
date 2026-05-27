import { Link as LinkIcon, Check } from "lucide-react";

type BenefitItem = {
  title: string;
  description: string;
  points: string[];
};

const benefit: BenefitItem = {
  title: 'Histórico unificado: Chega de "pode repetir, por favor"',
  description:
    "Toda a jornada do cliente em uma única linha do tempo. Sua equipe sabe exatamente o que foi conversado antes, independentemente do canal ou do atendente anterior.",
  points: [
    "Continuidade no atendimento",
    "Menor tempo de resolução",
  ],
};

export default function Benefits() {
  return (
    <section className="py-24 bg-[var(--bg)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-4">
            A experiência que seu cliente{" "}
            <span className="text-blue-600 dark:text-blue-400">merece.</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            O que acontece quando sua equipe tem as ferramentas certas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-6">
              <div className="text-2xl">
                <LinkIcon />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              {benefit.title}
            </h3>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {benefit.description}
            </p>

            <ul className="mt-6 space-y-3">
              {benefit.points.map((point, index) => (
                <li key={index} className="flex items-center text-[var(--text-secondary)]">
                  <span className="text-green-500 mr-2">
                    <Check />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full bg-[var(--bg-secondary)] rounded-3xl h-64 md:h-96 flex items-center justify-center border-2 border-dashed border-[var(--border)] transition-colors duration-300">
            <p className="text-[var(--text-description)]">
              [Imagem: Dashboard de Linha do Tempo]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}