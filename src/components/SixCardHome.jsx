import React from "react";
import ScrollableRow from "./ScrollableRow";
import { Link } from "react-router-dom";
import WhyWeAreTheBest01 from "../assets/icons/Why_we_are_the_best-01.png";
import WhyWeAreTheBest02 from "../assets/icons/Why_we_are_the_best-02.png";
import WhyWeAreTheBest05 from "../assets/icons/Why_we_are_the_best-05.png";
import WhyWeAreTheBest03 from "../assets/icons/Why_we_are_the_best-03.png";
import WhyWeAreTheBest04 from "../assets/icons/Why_we_are_the_best-04.png";

function SixCardHome() {
  return (
    <div className="bg-white py-16 px-6 md:px-16 flex justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">

        {/* Header — always shown above, never inside the scroll */}
        <div className="w-full text-left md:hidden">
          <h3 className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            ¿Qué hace al Colegio Senda
            <br />
            la mejor opción?
          </h3>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug mt-4">
            Nos caracterizamos por ser una escuela reconocida por la calidad y
            la innovación educativa.
          </div>
          <div className="mt-6">
            <Link to="/reconocimientos-certificaciones">
              <button className="px-6 py-3 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl text-neutral-100 text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                Descubre más
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile: header + cards all in one scrollable row — hidden on md+ */}
        <div className="md:hidden w-full">
          <ScrollableRow gap="gap-8">
          <div className="flex-shrink-0 w-[80vw] py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest01} loading="lazy" />
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Educadores que inspiran</div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Todos nuestros educadores están comprometidos con los alumnos y sus familias para trabajar juntos por un mundo mejor.
            </div>
          </div>
          <div className="flex-shrink-0 w-[80vw] py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest02} loading="lazy" />
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Colegio Innovador</div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Somos una de las 15 escuelas más innovadoras de México y proporcionamos las herramientas digitales dándoles siempre un sentido pedagógico.
            </div>
          </div>
          <div className="flex-shrink-0 w-[80vw] py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest05} loading="lazy" />
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Colegio Bicultural</div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Los alumnos aprenden inglés desde pequeños lo que asegura que lo lleguen a dominar y puedan aprender de forma bilingüe y bicultural.
            </div>
          </div>
          <div className="flex-shrink-0 w-[80vw] py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest03} loading="lazy" />
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Educación de Excelencia</div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Nuestro objetivo es lograr los más altos estándares de nivel académico, calidad humana y resultados de competencias y habilidades.
            </div>
          </div>
          <div className="flex-shrink-0 w-[80vw] py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest04} loading="lazy" />
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Modelo Senda</div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Humanista. Constructivista. Cultura del Pensamiento. Bicultural. Personalizado. Promueve el pensamiento ético y crítico.
            </div>
          </div>
          </ScrollableRow>
        </div>

        {/* Desktop: original grid layout — hidden on mobile */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          <div className="text-left">
            <h3 className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              ¿Qué hace al Colegio Senda
              <br />
              la mejor opción?
            </h3>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug mt-4">
              Nos caracterizamos por ser una escuela reconocida por la calidad y
              la innovación educativa.
            </div>
            <div className="mt-6">
              <Link to="/reconocimientos-certificaciones">
                <button className="px-6 py-3 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl text-neutral-100 text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Descubre más
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest01} loading="lazy" />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Educadores que inspiran</div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Todos nuestros educadores están comprometidos con los alumnos y sus familias para trabajar juntos por un mundo mejor.
            </div>
          </div>
          <div className="w-full py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest02} loading="lazy" />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Colegio Innovador</div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Somos una de las 15 escuelas más innovadoras de México y proporcionamos las herramientas digitales dándoles siempre un sentido pedagógico.
            </div>
          </div>
          <div className="w-full py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest05} loading="lazy" />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Colegio Bicultural</div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Los alumnos aprenden inglés desde pequeños lo que asegura que lo lleguen a dominar y puedan aprender de forma bilingüe y bicultural.
            </div>
          </div>
          <div className="w-full py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest03} loading="lazy" />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Educación de Excelencia</div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Nuestro objetivo es lograr los más altos estándares de nivel académico, calidad humana y resultados de competencias y habilidades.
            </div>
          </div>
          <div className="w-full py-[48px] px-[24px] bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-14 h-14 relative" src={WhyWeAreTheBest04} loading="lazy" />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Modelo Senda</div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Humanista. Constructivista. Cultura del Pensamiento. Bicultural. Personalizado. Promueve el pensamiento ético y crítico.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SixCardHome;
