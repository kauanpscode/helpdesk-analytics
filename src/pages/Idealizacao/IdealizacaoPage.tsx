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
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Back-end",
      icon: Terminal,
      tech: "PHP + CodeIgniter 4",
      desc: "RESTful API leve e estruturada. Controla autenticação segura, chamados e geração de estatísticas.",
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      title: "Banco de Dados",
      icon: Database,
      tech: "PostgreSQL",
      desc: "Armazenamento relacional robusto que garante integridade dos dados e relatórios confiáveis.",
      color: "text-emerald-500 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-[var(--bg-secondary)] py-16 sm:py-20 min-h-[80vh] flex items-center transition-colors duration-300">
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
              className="text-3xl md:text-5xl font-extrabold text-[var(--text)] tracking-tight"
            >
              Conceito e <span className="text-indigo-600 dark:text-indigo-400">Arquitetura</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
            >
              Como o Mercurius foi idealizado para ser uma solução leve, eficiente e moderna de helpdesk analítico.
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
                  className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border)] shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md transition-colors duration-300"
                >
                  <div className={`p-3 rounded-xl ${stack.bgColor} ${stack.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-[var(--text)] text-lg mb-1">{stack.title}</h3>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-0.5 rounded-full mb-3">
                    {stack.tech}
                  </span>
                  <p className="text-sm text-[var(--text-description)] leading-relaxed">{stack.desc}</p>
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
