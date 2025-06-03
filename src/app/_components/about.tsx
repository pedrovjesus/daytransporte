import car1 from "../../../public/caminhao1.jpeg";
import car2 from "../../../public/caminhao2.jpeg";
import Image from "next/image";

export function About() {
  return (
    <section className="relative w-full h-[1000px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-1">
        <div className="relative flex items-center justify-center">
          <div className="bg-black w-50 h-50 absolute top-3 left-2">box</div>
          <div className="bg-yellow-400 w-50 h-50 absolute top-108 left-120">
            box
          </div>

          <div className="absolute left-9 top-10">
            <Image
              src={car1}
              alt="Caminhão 1"
              quality={100}
              priority
              className="h-[30rem] w-[30rem]  shadow-lg object-cover"
            />
          </div>
          <div className="absolute left-100 top-90">
            <Image
              src={car2}
              alt="Caminhão 2"
              quality={100}
              priority
              className="h-[15rem] w-[18rem] shadow-lg object-cover"
            />
          </div>
        </div>
        <div>
          <div className=" p-6 text-gray-800 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
            <p className="mb-4">
              Fundada com o compromisso de oferecer soluções logísticas
              eficientes, a <strong>DayTransporte</strong> atua no
              mercado de transporte com foco em qualidade, agilidade e
              segurança. Atendemos empresas e clientes de diversos segmentos,
              garantindo que cada carga chegue ao seu destino com pontualidade e
              integridade.
            </p>
            <p className="mb-4">
              Contamos com uma frota moderna, equipe qualificada e sistemas de
              rastreamento em tempo real, proporcionando total transparência
              durante todo o trajeto. Nosso objetivo é construir parcerias
              duradouras, baseadas na confiança, no profissionalismo e no
              compromisso com resultados.
            </p>
            <p>
              Na <strong>DayTransporte</strong>, cada entrega é
              tratada com responsabilidade e atenção aos detalhes, porque
              entendemos que, mais do que transportar produtos, levamos a
              confiança dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
