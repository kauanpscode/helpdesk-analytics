export default function Hero() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Usamos 'text-gray-900' para um contraste forte no título e 'leading-tight' para aproximar as linhas */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Atendimento profissional <br className="hidden md:block" /> 
          <span className="text-blue-600">sem o estresse de sempre.</span>
        </h1>
        
        {/* O 'max-w-2xl' centralizado limita a largura do texto, facilitando a leitura */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Uma plataforma intuitiva para gerenciar demandas, sem perder nenhuma mensagem pelo caminho.
        </p>
      </div>
    </section>
  );
}