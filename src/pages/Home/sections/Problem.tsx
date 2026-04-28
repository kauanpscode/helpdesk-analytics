import { VolumeX, Timer, EyeOff, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      title: "Silêncio ensurdecedor",
      desc: "Mensagens que somem no vácuo e clientes sem resposta.",
      icon: VolumeX,
    },
    {
      title: "Corrida contra o tempo",
      desc: "A demora no retorno custa caro para a sua reputação.",
      icon: Timer,
    },
    {
      title: "Gestão às cegas",
      desc: "Sua equipe perdida em meio a conversas desorganizadas.",
      icon: EyeOff,
    },
    {
      title: "Respostas rasas",
      desc: "A falta de histórico impede um atendimento de qualidade.",
      icon: TrendingDown,
    },
  ];
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Seu atendimento atual gera{" "}
          <span className="text-red-600">caos ou lucro?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, index) => {
            const Icon = p.icon;

            return (
              <div
                key={index}
                className=" bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center">
                  <Icon className="text-3xl mb-4" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
