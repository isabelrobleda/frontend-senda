import React from "react";
import Img01NuestroEquipo from "../../assets/equipo/Image-Nuestro_equipo-01.png";
import Img02NuestroEquipo from "../../assets/equipo/Image-Nuestro_equipo-02.png";
import Img03NuestroEquipo from "../../assets/equipo/Image-Nuestro_equipo-03.png";
import Img04NuestroEquipo from "../../assets/equipo/Image-Nuestro_equipo-04.png";
import Img05NuestroEquipo from "../../assets/equipo/Image-Nuestro_equipo-05.png";
import WhyWeAreTheBest01 from "../../assets/icons/Why_we_are_the_best-01.png";
import WhyWeAreTheBest05 from "../../assets/icons/Why_we_are_the_best-05.png";
import WhyWeAreTheBest03 from "../../assets/icons/Why_we_are_the_best-03.png";
import WhyWeAreTheBest04 from "../../assets/icons/Why_we_are_the_best-04.png";

function NuestroEquipo() {
  return (
    <div className="flex flex-col items-center">
      {/* Wrapper for the team section */}
      <div className="w-full max-w-screen-lg px-4 md:px-12 py-12 md:py-24 my-14 flex flex-col items-center ">
        {/* Title and description */}
        <div className="w-full text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e1e1e]">Nuestro equipo</h2>
          <p className="text-base md:text-lg text-[#757575] mt-4">
            Conoce a nuestras líderes del Colegio Senda
          </p>
        </div>
        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 ">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[200px] h-[233.33px] rounded-[20px] overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                src={Img02NuestroEquipo}
                alt="Mónica Sánchez Gavito"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] pb-[8px]">Mónica Sánchez Gavito</h3>
              <p className="text-sm text-[#49454f]">Directora General y Fundadora</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[233.33px] rounded-[20px] overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                src={Img03NuestroEquipo}
                alt="Rosa Isabel García de Luca"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] pb-[8px]">Rosa Isabel García de Luca</h3>
              <p className="text-sm text-[#49454f]">Directora Administrativa</p>
            </div>
          </div>
          {/* Row 2: Roxana, Karla, and Viviana */}
          <div className="flex flex-col items-center lg:col-span-2 lg:flex-row md:justify-between ">
            <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-44">
              <div className="w-[200px] h-[233.33px] rounded-[20px] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover"
                  src={Img04NuestroEquipo}
                  alt="Roxana Fernández Landoni"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] pb-[8px]">Roxana Fernández Landoni</h3>
                <p className="text-sm text-[#49454f]">Directora Preescolar</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-44">
              <div className="w-[200px] h-[233.33px] rounded-[20px] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover"
                  src={Img01NuestroEquipo}
                  alt="Karla Olivares Granja"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] pb-[8px]">Karla Olivares Granja</h3>
                <p className="text-sm text-[#49454f]">Directora Primaria</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[233.33px] rounded-[20px] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover"
                  src={Img05NuestroEquipo}
                  alt="Viviana Colucci Trovato"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] pb-[8px]">Viviana Colucci Trovato</h3>
                <p className="text-sm text-[#49454f]">Directora Secundaria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full bg-[#f9f9fe] py-12 md:py-44 flex justify-center">
        <div className="w-full max-w-screen-2xl px-4 md:px-16">
          <div className="w-full text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1e1e1e]">¿Qué hace al Colegio Senda la mejor opción?</h2>
            <p className="text-base md:text-lg text-[#757575] mt-4">
              Nos caracterizamos por ser una escuela reconocida por la calidad y la innovación educativa.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row  gap-12">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col items-start gap-4">
              <img className="w-12 h-12 mb-4" src={WhyWeAreTheBest01}></img>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">Educadores que inspiran</h3>
              <p className="text-base text-[#49454f]">
                Todos nuestros educadores están comprometidos con los alumnos y sus familias para trabajar juntos por un mundo mejor.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col items-start gap-4">
              <img className="w-12 h-12 mb-4" src={WhyWeAreTheBest05}></img>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">Colegio Bicultural</h3>
              <p className="text-base text-[#49454f]">
                Los alumnos aprenden inglés desde pequeños lo que asegura que lo lleguen a dominar y puedan aprender de forma bilingüe.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col items-start gap-4">
              <img className="w-12 h-12 mb-4" src={WhyWeAreTheBest03}></img>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">Educación de Excelencia</h3>
              <p className="text-base text-[#49454f]">
                Nuestro objetivo es lograr los más altos estándares de nivel académico, calidad humana y resultados de competencias y habilidades.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col items-start gap-4">
            <img className="w-12 h-12 mb-4" src={WhyWeAreTheBest04}></img>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">Modelo Senda</h3>
              <p className="text-base text-[#49454f]">
                Humanista. Constructivista. Basado en la Cultura del Pensamiento. Bilingüe. Incluyente. Personalizado. Promueve el pensamiento ético y crítico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestroEquipo;
