import React from "react";
import { Link } from "react-router-dom";

function OfertaHome() {
  return (
    <div className="w-full h-auto px-4 md:px-16 py-16 bg-[#f4f6f8] flex flex-col justify-center items-center gap-10">
      <div className="w-full text-left text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Oferta educativa
      </div>
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Maternal
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="px-6 py-2 mt-4 bg-[#f9f9fe] rounded-2xl flex justify-center items-center gap-2">
                <Link to="/maternal">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>

            <img src="src/assets/maternal_nobg.png" alt="imagen maternal" />
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Preescolar
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="px-6 py-2 mt-4 bg-[#f9f9fe] rounded-2xl flex justify-center items-center gap-2">
                <Link to="/preescolar">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight  hover:cursor-pointer">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
            <img src="src/assets/preescolar_nobg.png" alt="imagen preescolar" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Primaria
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="px-6 py-2 mt-4 bg-[#f9f9fe] rounded-2xl flex justify-center items-center gap-2">
                <Link to="/primaria">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="src/assets/primaria_nobg.png"
              alt="imagen primaria"
              className=""
            />
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-start gap-4 px-8 pt-8 rounded-[10px] shadow bg-[#E9EBEF] items-center">
            <div className="w-full md:w-[357px] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Secundaria
                </div>
                <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="px-6 py-2 mt-4 bg-[#f9f9fe] rounded-2xl flex justify-center items-center gap-2">
                <Link to="/secundaria">
                  <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
            <img src="src/assets/secundaria_nobg.png" alt="imagen secundaria" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfertaHome;
