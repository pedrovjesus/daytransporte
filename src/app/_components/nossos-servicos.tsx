export function WeServices() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Nossos Serviços</h1>

      <p className="text-lg text-gray-700 mb-8">
        A <strong>Day Transportes</strong> oferece soluções completas em
        transporte e logística, atendendo empresas e demandas em todo o
        território nacional. Nossos serviços são projetados para garantir
        eficiência, pontualidade e segurança em cada etapa do processo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Transporte Rodoviário
          </h2>
          <p className="text-gray-600">
            Cargas fracionadas ou completas com cobertura nacional e motoristas
            altamente capacitados.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Logística Integrada
          </h2>
          <p className="text-gray-600">
            Gerenciamento de ponta a ponta com rastreamento em tempo real e
            controle operacional.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Coletas e Entregas Expressas
          </h2>
          <p className="text-gray-600">
            Especialistas em logística rápida, com atendimento ágil e prazos
            otimizados para cargas urgentes
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Transporte Personalizado
          </h2>
          <p className="text-gray-600">
            Fretamento particulares, serviços de segurança, transporte no
            aeroporto, transporte de cargas transferências
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Armazenagem e Distribuição
          </h2>
          <p className="text-gray-600">
            Centros de apoio logístico para armazenagem temporária e
            distribuição estratégica.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Suporte e Acompanhamento
          </h2>
          <p className="text-gray-600">
            Atendimento personalizado e suporte contínuo antes, durante e após
            cada entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
