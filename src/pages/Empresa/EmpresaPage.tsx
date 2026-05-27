import { motion } from "framer-motion";
import { Shield, Sparkles, Target, Users } from "lucide-react";
import MainLayout from "../../layouts/HomeLayout";

export default function EmpresaPage() {
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

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Simplificar o atendimento ao cliente com foco em dados acionáveis e eficiência.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: Sparkles,
      title: "Visão",
      description: "Ser a referência em painéis analíticos para operações de suporte moderno.",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      icon: Shield,
      title: "Valores",
      description: "Transparência, facilidade de uso, performance e segurança de ponta.",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
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
              Sobre a <span className="text-blue-600 dark:text-blue-400">Empresa</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
            >
              O HelpFlow é um projeto de portfólio conceitual que demonstra como organizar e analisar chamados de suporte em tempo real para otimizar equipes de atendimento.
            </motion.p>
          </div>

          {/* Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border)] shadow-sm transition-all hover:shadow-md transition-colors duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl ${item.bgColor} ${item.color} mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Developer Highlight */}
          <motion.div
            variants={itemVariants}
            className="bg-[var(--bg-card)] border border-[var(--border)] p-8 rounded-2xl shadow-sm text-center max-w-md mx-auto transition-colors duration-300"
          >
            <h3 className="text-lg font-bold text-[var(--text)] mb-1">Kauan P. S.</h3>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-4">Desenvolvedor Full-Stack</p>
            <p className="text-sm text-[var(--text-description)] mb-6">
              Projeto conceitual construído para demonstrar habilidades em React, APIs no back-end e design moderno de interfaces.
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href="https://github.com/kauanpscode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--text)] text-[var(--bg)] px-4 py-2 rounded-xl text-xs font-semibold hover:opacity-90 transition-colors flex items-center gap-1.5"
              >
                <Users size={12} />
                GitHub
              </a>
              <a
                href="/contato"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Contato
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </MainLayout>
  );
}
