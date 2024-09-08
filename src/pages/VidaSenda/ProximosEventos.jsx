import React from "react";

function ProximosEventos() {
  return (
    <div>
      <div className="relative md:h-[700px] w-full flex justify-center items-center p-4">
        <div>
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat opacity-10"
              style={{
                backgroundImage: "url(src/assets/Header-background.png)",
              }}
            ></div>
          </div>
        </div>
        <div className="self-center justify-center items-start gap-8 flex flex-col md:flex-row">
          <div className=" justify-start items-center flex">
            <div className="grow shrink basis-0 p-6 rounded-[20px]  flex-col justify-start items-center gap-6 md:gap-14 inline-flex">
              <div className="w-full md:w-[904px] text-center">
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  Próximos
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src="src/assets/proximos_eventos/Group 88.png"
                    alt="image 1"
                    className="inline-block mx-1 md:mx-2 h-10 md:h-16"
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>

                <span className="text-[#009bce] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  eventos
                  <br />
                </span>
              </div>
              <div>
                <p className="text-[#757575] text-center sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] ">
                  Mantente al tanto de los eventos que tenemos programados para
                  nuestra comunidad escolar. <br />
                  Desde celebraciones y actividades especiales hasta
                  presentaciones y días temáticos, <br /> siempre hay algo
                  interesante en la agenda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto w-full px-16 py-24 flex-col justify-center items-center gap-20 inline-flex">
        <div className="self-stretch h-[867px] flex-col justify-start items-center gap-8 flex">
          <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-10 inline-flex">
            <div className="w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center inline-flex">
              <img className="w-[255px] h-48 rounded-xl" src="src/assets/proximos_eventos/back-2-school.png" />
            </div>
            <div className="w-[405.33px] px-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[142px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  26 de Agosto
                </div>
                <div className="self-stretch text-[#1e1e1e] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
                  Back to School
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Celebramos el inicio del nuevo ciclo escolar con actividades
                  y talleres diseñados para dar la bienvenida a nuestros alumnos
                  y sus familias.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17px] px-4 py-2 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-px bg-[#d9d9d9]" />
          </div>
          <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-10 inline-flex">
            <div className="w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center inline-flex">
              <img className="w-[255px] h-48 rounded-xl" src="src/assets/proximos_eventos/emociones.png" />
            </div>
            <div className="w-[405.33px] px-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[164px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  Ciclo 24-25
                </div>
                <div className="self-stretch text-[#1e1e1e] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
                  Explorando las Emociones
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Durante todo el ciclo escolar 2024-2025, exploraremos las emociones y cómo influyen en nuestro aprendizaje y desarrollo personal.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17px] px-4 py-2 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-px bg-[#d9d9d9]" />
          </div>
          <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-10 inline-flex">
            <div className="w-[260px[]  flex-col justify-center items-center inline-flex">
              <img className="w-[255px] h-48 rounded-xl " src="src/assets/proximos_eventos/mexico.png" />
            </div>
            <div className="w-[405.33px] px-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[142px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  16 de Septiembre
                </div>
                <div className="self-stretch text-[#1e1e1e] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
                  Día de la Independencia de México
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Celebramos el Día de la Independencia de México con actividades
                  culturales y artísticas para toda la comunidad escolar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProximosEventos;
