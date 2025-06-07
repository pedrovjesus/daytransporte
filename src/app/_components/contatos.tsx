import Image from "next/image";
import mapa from "../../../public/mapa.png";

export function Contacts() {
  return (
    <section id="contato" className="relative w-full h-auto mt-16">
      <Image
        src={mapa}
        alt="Mapa mundi de fundo"
        fill
        quality={100}
        priority
        className="object-cover brightness-50 z-0"
      />
      <div className="relative z-10 flex flex-col justify-center px-6 py-16 max-w-6xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Entre em Contato
        </h2>

        <form className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Seu nome"
              className="p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Seu email"
              className="p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Seu telefone"
              className="p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="w-full md:w-1/2">
            <textarea
              placeholder="Sua mensagem"
              rows={7}
              className="w-full h-full p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full max-w-sm px-6 py-3 border-2 border-yellow-400 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
    </section>
  );
}
