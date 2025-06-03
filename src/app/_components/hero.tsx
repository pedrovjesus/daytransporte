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
        className="object-cover z-0"
      />

      {/* Conteúdo acima do background */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white w-[38vw] h-[38vw] bg-gradient-to-b from-yellow-300/80 to-black/70 p-6 rounded-full shadow-lg flex flex-col items-center justify-center space-y-4">
          <h1 className="text-[6vw] font-extrabold text-white whitespace-nowrap overflow-visible">
            Rápido & seguro
          </h1>
          <h2
            className="text-6xl font-semibold text-transparent"
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
