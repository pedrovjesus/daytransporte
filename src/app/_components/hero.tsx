import heroImg from "../../../public/hero.jpeg";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[600px] mt-13">
      {/* Background */}
      <Image
        src={heroImg}
        alt="Hero Image"
        fill
        quality={100}
        priority
        className="object-cover z-0 brightness-30 sm:brightness-100"
      />

      {/* Conteúdo acima do background */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white sm:w-[38vw] sm:h-[38vw] sm:bg-gradient-to-b sm:from-yellow-500/80 sm:to-black/70 p-6 sm:rounded-full sm:shadow-lg flex flex-col items-center justify-center space-y-4">
          <h1 className="text-[6vw] font-extrabold text-white whitespace-nowrap overflow-visible">
            Rápido & seguro
          </h1>
          <h2
            className="sm:text-6xl text-4xl font-semibold text-transparent"
            style={{
              WebkitTextStroke: "2px #facc40",
            }}
          >
            DAYTRANSPORTES
          </h2>
          <button className="mt-4 px-6 py-2 border-2 border-yellow-400 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition">
            Descubra mais
          </button>
        </div>
      </div>
    </section>
  );
}
