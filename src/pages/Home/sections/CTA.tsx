import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <section className="bg-blue-600 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Pronto para dar adeus ao caos no atendimento?
        </h2>

        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de empresas que recuperaram o controle da sua operação e a satisfação dos seus clientes.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleClick}
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Começar a utilizar
          </button>

          <p className="text-sm text-blue-200">
            {/* Teste grátis por 14 dias • Não requer cartão de crédito */}
          </p>
        </div>
      </div>
    </section>
  );
}