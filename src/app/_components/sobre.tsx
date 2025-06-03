import car1 from "../../../public/caminhao1.jpeg";
import car2 from "../../../public/caminhao2.jpeg";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="relative w-full h-[650px]">
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
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Sobre a DayTransporte</h2>
              <p className="mb-4">
                A <strong>DayTransporte</strong> é uma empresa especializada em{" "}
                <strong>soluções logísticas e transporte rodoviário</strong> de
                cargas. Atuamos com excelência, oferecendo serviços de{" "}
                <strong>entregas seguras, pontuais e eficientes</strong> para
                empresas de diversos setores em todo o território nacional.
              </p>
              <p className="mb-4">
                Contamos com uma <strong>frota moderna</strong>,{" "}
                <strong>equipe altamente qualificada</strong> e tecnologias de{" "}
                <strong>rastreamento em tempo real</strong>, que garantem total
                visibilidade e controle durante o transporte. Nosso compromisso
                é com a <strong>agilidade, segurança e integridade</strong> de
                cada operação.
              </p>
              <p className="mb-4">
                Trabalhamos com foco na <strong>satisfação do cliente</strong> e
                na construção de <strong>parcerias duradouras</strong>, baseadas
                na confiança, no profissionalismo e na entrega de resultados.
                Mais do que transportar cargas, levamos a confiança e os
                objetivos dos nossos clientes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
