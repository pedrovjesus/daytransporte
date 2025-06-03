import {
  TruckTrailerIcon,
  ClockCountdownIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import bgService from "../../../public/background.jpg";

export function Service() {
  return (
    <section className="relative w-full h-[400px] mt-10">
      {/* Imagem de fundo escurecida */}
      <Image
        src={bgService}
        alt="Serviços da DayTransporte"
        fill
        quality={100}
        priority
        className="object-cover brightness-30 z-0"
      />

      {/* Conteúdo sobre a imagem */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-4xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">
          Por que escolher a DayTransporte?
        </h1>
        <p className="mb-6 text-lg max-w-2xl">
          Com anos de experiência em{" "}
          <strong>logística e transporte de cargas</strong>, oferecemos soluções
          seguras, rápidas e confiáveis para empresas que valorizam eficiência e
          compromisso com prazos.
        </p>

        {/* Destaques com ícones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <TruckTrailerIcon size={32} />
            <span>Frota moderna e equipada</span>
          </div>
          <div className="flex items-center gap-3">
            <ClockCountdownIcon size={32} />
            <span>Entregas pontuais e rastreadas</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheckIcon size={32} />
            <span>Segurança e responsabilidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
