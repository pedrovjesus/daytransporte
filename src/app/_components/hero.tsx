"use client";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import img1 from "../../../public/caminhao4.jpg";
import img2 from "../../../public/caminhao2.jpg";
import img3 from "../../../public/caminhao3.jpg";
import img4 from "../../../public/caminhao5.jpg";
import img5 from "../../../public/caminhao6.jpeg";

const mockData = [
  {
    id: 1,
    url: img1,
    title: "CAMINHÃO PESADO",
    description: "Especializados em transporte de cargas pesadas",
  },
  {
    id: 2,
    url: img2,
    title: "LONGA DISTÂNCIAS",
    description: "Viagens longas com segurança e conforto",
  },
  {
    id: 3,
    url: img3,
    title: "AGILIDADE",
    description: "Rapidez na entrega de sua carga",
  },
  {
    id: 4,
    url: img4,
    title: "CONFIANÇA TOTAL",
    description: "Clientes satisfeitos com nosso serviço",
  },
  {
    id: 5,
    url: img5,
    title: "TECNOLOGIA ",
    description: "Frota moderna e equipada para sua segurança",
  },
];

export function Hero() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = mockData.length;

  const handlePrevSlide = () => {
    setSlideIdx((prev) => (prev + slides - 1) % slides);
  };

  const handleNextSlide = () => {
    setSlideIdx((prev) => (prev + 1) % slides);
  };

  const handleChangeIdx = (index: number) => {
    setSlideIdx(index);
  };

  return (
    <div className="relative w-full xl:h-[450px] mt-19 h-[300px] overflow-hidden group">
      {/* Todas as imagens empilhadas, controladas por opacity */}
      {mockData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-900 ease-in-out ${
            index === slideIdx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="w-full h-full relative flex items-center justify-center">
            <Image
              src={slide.url}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-center"
            />
            {/* Caixa de texto sobre a imagem */}
            <div className="absolute bottom-5 sm:left-10 sm:w-[32rem] sm:h-[10rem] w-[27rem] h-[5rem] bg-black/60 text-white p-4 flex-col text-center sm:text-start justify-around flex sm:items-start">
              <h1 className="sm:text-5xl">{slide.title}</h1>
              <p className="sm:text-3xl font-bold">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Botões de navegação */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-20 hover:scale-125 transition-transform"
        onClick={handlePrevSlide}
        aria-label="Anterior"
      >
        <BsChevronLeft />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-20 hover:scale-125 transition-transform"
        onClick={handleNextSlide}
        aria-label="Próximo"
      >
        <BsChevronRight />
      </button>
    </div>
  );
}
