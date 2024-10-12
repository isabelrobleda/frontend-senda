import React from "react";
import Group88 from "../../assets/proximos_eventos/Group 88.png";
import BackToSchool from "../../assets/proximos_eventos/back-2-school.png";
import Emociones from "../../assets/proximos_eventos/emociones.png";
import Mexico from "../../assets/proximos_eventos/mexico.png";
import HeaderBackground from "../../assets/Header-background.png";

function ProximosEventos() {
  return (
    <div>
      <div className="relative w-full flex justify-center items-center p-4 pt-20 md:h-[750px]">
        <div>
           {/* Background Image with Opacity */}
           <div className="absolute inset-0 z-0">
            <img
              className="w-screen object-cover opacity-10 z-0 md:h-[800px]"
              src={HeaderBackground}
              alt="Background"
            />
          </div>
        </div>
        <div className="self-center justify-center items-start gap-8 flex flex-col md:flex-row">
          <div className="justify-start items-center flex">
            <div className="grow shrink basis-0 p-4 md:p-6 rounded-[20px] flex-col justify-start items-center gap-6 md:gap-14 inline-flex">
              <div className="w-full md:w-[904px] text-center">
                <span className="text-[#1e1e1e] text-[24px] md:text-[57px] font-semibold font-pangea leading-[30px] md:leading-[68px]">
                  Próximos
                </span>
                <span className="text-[#1e1e1e] text-[24px] md:text-[57px] font-semibold font-pangea leading-[30px] md:leading-[68px]">
                  <img
                    src={Group88}
                    alt="image 1"
                    className="inline-block mx-1 md:mx-2 h-8 md:h-14"
                  />
                </span>
                <span className="text-[#009bce] text-[24px] md:text-[57px] font-semibold font-pangea leading-[30px] md:leading-[68px]">
                  eventos
                  <br />
                </span>
              </div>
              <div>
                <p className="text-[#757575] text-center text-base md:text-xl font-semibold font-['Inter'] leading-[1.4] ">
                  Mantente al tanto de los eventos que tenemos programados para
                  nuestra comunidad escolar.
                  <br />
                  Desde celebraciones hasta presentaciones y días temáticos,
                  <br />
                  siempre hay algo interesante en la agenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="h-auto w-full px-4 md:px-16 py-16 md:py-24 flex-col justify-center items-center gap-10 md:gap-20 inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-8 flex">
          {/* Event 1 */}
          <div className="p-4 md:p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-6 md:gap-10 flex flex-col md:flex-row">
            <div className="w-full md:w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center flex">
              <img
                className=" md:w-[255px] h-full md:h-48 rounded-xl"
                src={BackToSchool}
                alt="Back to School"
              />
            </div>
            <div className="w-full md:w-[405px] flex-col justify-start items-start gap-4 flex">
              <div className="text-[#b0cb4f] text-sm md:text-base font-semibold">
                26 de Agosto
              </div>
              <div className="text-[#1e1e1e] text-lg md:text-[32px] font-bold">
                Back to School
              </div>
              <div className="text-[#757575] text-sm md:text-base">
                Celebramos el inicio del nuevo ciclo escolar con actividades y
                talleres diseñados para dar la bienvenida a nuestros alumnos y
                sus familias.
              </div>
            </div>
          </div>

          

          {/* Event 2 */}
          <div className="p-4 md:p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-6 md:gap-10 flex flex-col md:flex-row">
            <div className="w-full md:w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center flex">
              <img
                className=" md:w-[255px] h-full md:h-48 rounded-xl"
                src={Emociones}
                alt="Explorando las Emociones"
              />
            </div>
            <div className="w-full md:w-[405px] flex-col justify-start items-start gap-4 flex">
              <div className="text-[#b0cb4f] text-sm md:text-base font-semibold">
                Ciclo 24-25
              </div>
              <div className="text-[#1e1e1e] text-lg md:text-[32px] font-bold">
                Explorando las Emociones
              </div>
              <div className="text-[#757575] text-sm md:text-base">
                Durante todo el ciclo escolar 2024-2025, exploraremos las
                emociones y cómo influyen en nuestro aprendizaje y desarrollo
                personal.
              </div>
            </div>
          </div>

         

          {/* Event 3 */}
          <div className="p-4 md:p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-6 md:gap-10 flex flex-col md:flex-row">
            <div className="w-full md:w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center flex">
              <img
                className=" md:w-[255px] h-full md:h-48 rounded-xl"
                src={Mexico}
                alt="Día de la Independencia de México"
              />
            </div>
            <div className="w-full md:w-[405px] flex-col justify-start items-start gap-4 flex">
              <div className="text-[#b0cb4f] text-sm md:text-base font-semibold">
                16 de Septiembre
              </div>
              <div className="text-[#1e1e1e] text-lg md:text-[32px] font-bold">
                Día de la Independencia de México
              </div>
              <div className="text-[#757575] text-sm md:text-base">
                Celebramos el Día de la Independencia de México con actividades
                culturales y artísticas para toda la comunidad escolar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProximosEventos;
