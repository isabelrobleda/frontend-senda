import React from "react";
import { Link } from "react-router-dom";
import MaternalNoBg from "../assets/maternal_nobg.png";
import PreescolarNoBg from "../assets/preescolar_nobg.png";
import PrimariaNoBg from "../assets/primaria_nobg.png";
import SecundariaNoBg from "../assets/secundaria_nobg.png";

function OfertaHome() {
  return (
    <div className="w-full md:h-[800px] px-6 md:px-16 md:py-2 py-20 bg-[#f9f9fe] flex flex-col justify-center items-center gap-10">
      <div className="w-full text-center  text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Oferta educativa
      </div>
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:h-72 md:w-[700px] flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow-sm bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Maternal
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Montessori Constructivista. Ambiente cálido, desarrollo del
                  lenguaje, motricidad, sentidos y socialización.
                </div>
              </div>
              <Link to="/maternal">
                <div className="w-28 px-6 py-2 md:mt-[38px] my-5 bg-[#f9f9fe] hover:bg-slate-300 rounded-2xl flex justify-center items-center">
                  <div className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </div>
                </div>
              </Link>
            </div>

            <img
              src={MaternalNoBg}
              alt="imagen maternal"
              className=" md:self-stretch"
            />
          </div>
          <div className="w-full md:w-[700px] md:h-72 flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow-sm bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Preescolar
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Montessori. Cultura de Pensamiento. Constructivista. Bicultural.
                  Inteligencias múltiples y trabajo cooperativo.
                </div>
              </div>
              <Link to="/preescolar">
                <div className="w-28 px-6 py-2 md:mt-[38px] my-5 bg-[#f9f9fe] hover:bg-slate-300 rounded-2xl flex justify-center items-center gap-2">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight  hover:cursor-pointer">
                    Ver más
                  </button>
                </div>
              </Link>
            </div>
            <img
              src={PreescolarNoBg}
              alt="imagen preescolar"
              className="md:self-stretch"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-[700px] md:h-72 flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow-sm bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Primaria
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Cultura del Pensamiento. Aprendizaje visible. Inteligencias
                  múltiples. Análisis y solución de problemas.
                </div>
              </div>
              <Link to="/primaria">
                <div className="w-28 px-6 py-2 md:mt-[38px] my-5 bg-[#f9f9fe] hover:bg-slate-300 rounded-2xl flex justify-center items-center gap-2">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </button>
                </div>
              </Link>
            </div>
            <img
              src={PrimariaNoBg}
              alt="imagen primaria"
              className="md:self-stretch"
            />
          </div>
          <div className="w-full md:w-[700px] md:h-72 flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow-sm bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Secundaria
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Cultura del Pensamiento. Investigación activa. Knotion.
                  Inglés. Bilingüismo digital. Ética y valores
                </div>
              </div>
              <Link to="/secundaria">
                <div className="w-28 px-6 py-2 md:mt-[38px] my-5 bg-[#f9f9fe] hover:bg-slate-300 rounded-2xl flex justify-center items-center gap-2">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </button>
                </div>
              </Link>
            </div>
            <img
              src={SecundariaNoBg}
              alt="imagen secundaria"
              className="md:self-stretch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfertaHome;
