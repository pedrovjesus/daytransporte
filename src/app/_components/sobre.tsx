import Link from "next/link";
import car1 from "../../../public/caminhao1.jpeg";
import car2 from "../../../public/caminhao2.jpeg";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="relative w-full md:h-[650px] h-auto">
      {/* DESKTOP */}
      <section className="hidden xl:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-1">
          {/* Imagens sobrepostas */}
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
                className="h-[30rem] w-[30rem] shadow-lg object-cover"
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

          {/* Texto */}
          <div className="p-6 text-gray-800 max-w-3xl mx-auto">
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
              <Link
                href="/about"
                className="w-full max-w-sm px-6 py-3 border-2 border-yellow-400 text-black font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              >
                Saiba mais
              </Link>
            </section>
          </div>
        </div>
      </section>
      {/* tablet */}
      <section
        className="hidden md:flex lg:hidden px-6 py-8 max-w-7xl mx-auto items-center gap-10"
        style={{ minHeight: "650px" }}
      >
        <div className="flex-shrink-0 w-[40vw] max-w-[600px] h-[500px] relative rounded shadow-lg overflow-hidden">
          <Image
            src={car1}
            alt="Caminhão 1"
            quality={100}
            priority
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Texto à direita */}
        <div className="text-gray-800 max-w-xl">
          <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
          <section>
            <h3 className="text-2xl font-semibold mb-5">
              Sobre a DayTransporte
            </h3>
            <p className="mb-5">
              A <strong>DayTransporte</strong> é uma empresa especializada em{" "}
              <strong>soluções logísticas e transporte rodoviário</strong> de
              cargas. Atuamos com excelência, oferecendo serviços de{" "}
              <strong>entregas seguras, pontuais e eficientes</strong> para
              empresas de diversos setores em todo o território nacional.
            </p>
            <p className="mb-5">
              Contamos com uma <strong>frota moderna</strong>,{" "}
              <strong>equipe altamente qualificada</strong> e tecnologias de{" "}
              <strong>rastreamento em tempo real</strong>, que garantem total
              visibilidade e controle durante o transporte. Nosso compromisso é
              com a <strong>agilidade, segurança e integridade</strong> de cada
              operação.
            </p>
            <p>
              Trabalhamos com foco na <strong>satisfação do cliente</strong> e
              na construção de <strong>parcerias duradouras</strong>, baseadas
              na confiança, no profissionalismo e na entrega de resultados. Mais
              do que transportar cargas, levamos a confiança e os objetivos dos
              nossos clientes.
            </p>
            <a
              href="#"
              className="mt-1 block max-w-sm px-2 py-2 border-2 border-yellow-400 text-black font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
            >
              Saiba mais
            </a>
          </section>
        </div>
      </section>

      {/* MOBILE */}
      <section className="block md:hidden p-4">
        <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto">
          <div className="w-[280px] h-[280px] rounded shadow-lg overflow-hidden relative">
            <Image
              src={car1}
              alt="Caminhão 1"
              quality={100}
              priority
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="text-gray-800 max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4">Sobre a DayTransporte</h3>
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
              <a
                href="#"
                className="w-full max-w-sm px-6 py-3 border-2 border-yellow-400 text-black font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              >
                Saiba mais
              </a>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
