import { BotMessageSquare, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SolutionItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const solutions: SolutionItem[] = [
  {
    title: "Automação Inteligente",
    description:
      "Respostas rápidas e fluxos de trabalho que não param. Seus clientes são atendidos instantaneamente, 24 horas por dia, 7 dias por semana.",
    icon: BotMessageSquare,
  },
  {
    title: "Gestão Transparente",
    description:
      "Saiba exatamente quem está atendendo, o tempo de resposta e a satisfação do cliente em tempo real. Controle total na palma da sua mão.",
    icon: UsersRound,
  },
];

export default function Solution() {
  return (
    <section className="bg-blue-900 py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A liberdade de uma operação que roda sozinha
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Combinamos inteligência artificial e controle total para que você
            foque na estratégia, enquanto nós cuidamos do operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  <Icon size={36} className="text-blue-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center">
                  {item.title}
                </h3>

                <p className="text-blue-100 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}