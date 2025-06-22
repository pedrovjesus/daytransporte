"use client";
import React, { useState } from "react";
import logo from "../../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIncomingIcon,
} from "@phosphor-icons/react/dist/ssr";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black to-black sm:pt-4 sm:pb-4 sm:px-4 p-1 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between relative">
        <div
          className={`
    ${menuOpen ? "hidden" : "flex"} 
    flex-row items-center 
    sm:absolute sm:left-[-1.5rem] sm:top-[-0.6rem] sm:ml-4 sm:mt-2
  `}
        >
          <Image
            src={logo}
            alt="DayTransporte"
            quality={100}
            priority
            className="rounded-[5px] sm:w-[160px] sm:h-[80px] w-[8rem] h-[4.3rem] object-cover"
          />
        </div>
        <button
          className="md:hidden z-60 ml-auto block text-yellow-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden xl:flex items-center space-x-6 ml-[180px]">
          <div className="flex items-center gap-1">
            <div className="rounded-full bg-[#cacacab9] p-2">
              <MapPinIcon weight="fill" className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col items-start text-black">
              <h3 className="text-white text-base">Estamos aqui!</h3>
              <p className="text-sm text-white">
                Rua exemplo, 22 - centro, Campinas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="rounded-full bg-[#cacacab9] p-2">
              <PhoneIncomingIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col items-start text-black">
              <h3 className="text-white text-base">Fale conosco</h3>
              <a href="#" className="text-sm text-white hover:underline">
                (19) 998374-6788
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="rounded-full bg-[#cacacab9] p-2">
              <EnvelopeIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col items-start text-black">
              <h3 className="text-white text-base font-medium">Email</h3>
              <a href="#" className="text-sm text-white hover:underline">
                contato@daytransportes.com
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto ml-auto flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <Link
            href="/"
            className="text-white hover:text-white hover:font-bold transition text-[18px] font-Rubik"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-white hover:font-bold transition text-[18px] font-Rubik"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-white hover:font-bold transition text-[18px] font-Rubik"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
