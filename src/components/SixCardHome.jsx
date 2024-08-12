import React from "react";
import { Link } from "react-router-dom";

function SixCardHome() {
  return (
    <div className="bg-white py-16 px-4 md:px-16 flex justify-center items-center">
      <div className="w-full md:h-screen max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-left">
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              ¿Qué hace al Colegio Senda
              <br />
              la mejor opción?
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug mt-4">
              Nos caracterizamos por ser una escuela reconocida por la calidad y
              la innovación educativa.
            </div>
            <div className="mt-6">
              <Link to="/reconocimientos-certificaciones">
                <button className="px-6 py-3 bg-[#b0cb4f] rounded-2xl text-neutral-100 text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Descubre más
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img
              className="w-20 h-20 relative"
              src="src/assets/icon-teacher.png"
            />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Educadores que inspiran
              </div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Todos nuestros educadores están comprometidos con los alumnos y sus
              familias para trabajar juntos por un mundo mejor.
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img
              className="w-20 h-20 relative"
              src="src/assets/icon-innovation.png"
            />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Colegio Innovador
              </div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Somos una de las 15 escuelas más innovadoras de México y
              proporcionamos  las herramientas digitales del siglo XXI.
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img
              className="w-20 h-20 relative"
              src="src/assets/icon-excellence.png"
            />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Alto Nivel de Inglés
              </div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Los alumnos aprenden inglés desde pequeños lo que asegura que lo
              lleguen a dominar y puedan aprender de forma bilingüe.
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img
              className="w-20 h-20 relative"
              src="src/assets/icon-english.png"
            />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Educación de Excelencia
              </div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Nuestro objetivo es lograr los más altos estándares de nivel
              académico, calidad humana y resultados de competencias y hablidades.
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <img className="w-20 h-20 relative" src="src/assets/icon-model.png" />
            <div className="w-full">
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Modelo Senda
              </div>
            </div>
            <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
              Humanista. Constructivista. Basado en la Cultura del Pensamiento.
              Bilingüe. Incluyente. Personalizado. Promueve el pensamiento ético y crítico.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixCardHome;
