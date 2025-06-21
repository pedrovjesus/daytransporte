import { Footer } from "../_components/footer";
import { Hero } from "../_components/hero";
import { Navbar } from "../_components/navbar";

export default function AboutPage() {
  return (
    <section id="sobre" className="relative w-full md:h-auto">
      <Navbar />
      <Hero />

      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Sobre a DayTransporte</h1>

        <p className="mb-5">
          Fundada em <strong>2020</strong>, a <strong>DayTransporte</strong>{" "}
          nasceu com o propósito de oferecer soluções logísticas inteligentes,
          ágeis e seguras para empresas em todo o Brasil.
        </p>

        <p className="mb-5">
          Com uma <strong>frota moderna</strong>, equipe altamente qualificada e
          tecnologia de rastreamento em tempo real, garantimos entregas
          pontuais, com total visibilidade e controle do transporte.
        </p>

        <p className="mb-5">
          Desde a nossa fundação, buscamos estabelecer relações sólidas com
          nossos clientes, baseadas em confiança, comprometimento e excelência
          operacional.
        </p>

        <p className="mb-5">
          Nosso foco está em oferecer soluções sob medida, otimizando rotas e
          reduzindo custos logísticos, sempre com responsabilidade e
          sustentabilidade.
        </p>

        <p>
          Estamos prontos para levar sua carga a qualquer lugar do país com
          segurança, eficiência e a certeza de um serviço bem executado.
        </p>
      </div>

      <Footer />
    </section>
  );
}
