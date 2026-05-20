import { motion } from "framer-motion";
import { Terminal, Database, Cpu } from "lucide-react";
import MainLayout from "../../layouts/HomeLayout";

export default function IdealizacaoPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const techStack = [
    {
      title: "Front-end",
      icon: Cpu,
      tech: "React + Vite + Tailwind",
      desc: "Interface reativa, limpa e modular. Focada em performance e usabilidade imediata para o operador.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Back-end",
      icon: Terminal,
      tech: "PHP + CodeIgniter 4",
      desc: "RESTful API leve e estruturada. Controla autenticação segura, chamados e geração de estatísticas.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "Banco de Dados",
      icon: Database,
      tech: "PostgreSQL",
      desc: "Armazenamento relacional robusto que garante integridade dos dados e relatórios confiáveis.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-slate-50 py-16 sm:py-20 min-h-[80vh] flex items-center">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
            >
              Conceito e <span className="text-indigo-600">Arquitetura</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Como o HelpFlow foi idealizado para ser uma solução leve, eficiente e moderna de helpdesk analítico.
            </motion.p>
          </div>

          {/* Tech Stack Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {techStack.map((stack, idx) => {
              const Icon = stack.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
                >
                  <div className={`p-3 rounded-xl ${stack.bgColor} ${stack.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{stack.title}</h3>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full mb-3">
                    {stack.tech}
                  </span>
                  <p className="text-sm text-gray-500 leading-relaxed">{stack.desc}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Simplified Architecture Summary */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-xl font-bold mb-2">Estrutura Desacoplada</h3>
            <p className="text-indigo-200 text-sm max-w-xl mx-auto leading-relaxed">
              O front-end e o back-end comunicam-se de forma assíncrona por meio de requisições API REST. Essa separação garante maior velocidade, manutenibilidade do código e permite que cada serviço escale de forma independente.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </MainLayout>
  );
}
