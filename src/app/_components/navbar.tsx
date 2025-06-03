"use client";
import React from "react";
import logo from "../../../public/logo.jpeg";
import Image from "next/image";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIncomingIcon,
} from "@phosphor-icons/react/dist/ssr";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-300 to-yellow-600 pt-4 pb-4 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="absolute left-[-1.4rem] top-[-0.4rem]">
          <Image
            src={logo}
            alt="DayTransporte"
            quality={100}
            priority
            className="rounded-[5px] w-[160px] h-[80px] object-cover"
          />
        </div>
        <div className="flex items-center space-x-4 ml-45">
          <div className="text-white flex items-center gap-1">
            <div className="rounded-[50%] bg-[#000000b9] mr-1  p-[0.5rem]">
              <MapPinIcon weight="fill" className="w-7 h-7 text-[#FFF]" />
            </div>
            <div className="flex-direction: column items-start text-black">
              <h3 className="text-[#292929] text-[1rem]">Estamos aqui!</h3>
              <p className="text-[0.8rem]">
                Rua exemplo, 22 - centro, Campinas
              </p>
            </div>
          </div>
          <div className="text-white flex items-center gap-1">
            <div className="rounded-[50%] bg-[#000000b9] mr-1  p-[0.5rem]">
              <PhoneIncomingIcon className="w-7 h-7 text-[#FFF]" />
            </div>
            <div className="flex-direction: column items-start text-black">
              <h3 className="text-[#292929] text-[1rem]">Fale conosco</h3>
              <a href="#" className="text-[0.8rem] hover:underline">
                (19) 998374-6788
              </a>
            </div>
          </div>
          <div className="text-white flex items-center gap-1">
            <div className="rounded-[50%] bg-[#000000b9] mr-1  p-[0.5rem]">
              <EnvelopeIcon className="w-7 h-7 text-[#FFF]" />
            </div>
            <div className="flex-direction: column items-start text-black">
              <h3 className="text-[#000000] text-[1rem] font-medium">Email</h3>
              <a href="#" className="text-[0.8rem] hover:underline">
                contato@daytransportes.com
              </a>
            </div>
          </div>
        </div>

        <div className="ml-auto flex space-x-8 items-center">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-black hover:text-white hover:font-bold transition text-[18px] font-[Rubik]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-black hover:text-white hover:font-bold transition text-[18px] font-[Rubik]"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black hover:text-white hover:font-bold transition text-[18px] font-[Rubik]"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
