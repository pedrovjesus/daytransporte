export function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Endereço */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Endereço</h4>
          <p>R. Josélio Manuel da Silva, 142</p>
          <p>Hortôlandia – SP - 13183-091</p>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contato</h4>
          <a href="tel:+5519988888102">Telefone: (19) 98888-8102</a><br/>
          <a href="mailton: contato@daytransportes.com.br">Email: contato@daytransportes.com.br</a>
        </div>

        {/* Opcional: Social / Institucional */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Institucional</h4>
          <p>Fundada em 2020</p>
          <p>Logística com excelência em todo o Brasil</p>
        </div>
      </div>
    </footer>
  );
}
