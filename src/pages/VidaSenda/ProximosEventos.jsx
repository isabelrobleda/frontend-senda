import React from "react";

function ProximosEventos() {
  return (
    <div>
      <div className="h-[232px] px-[60px] flex-col justify-start items-center inline-flex">
        <div className="w-[826px] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 p-6 rounded-[20px] shadow flex-col justify-start items-center gap-14 inline-flex">
            <div className="w-[904px] text-center">
              <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                Próximos{" "}
              </span>
              <span className="text-[#009bce] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                eventos
              </span>
            </div>
          </div>
          <div className="w-[89.48px] h-[51px] relative">
            <div className="w-[89.48px] h-[51px] left-0 top-0 absolute">
              <img
                className="w-[55px] h-12 left-[18.26px] top-[3px] absolute"
                src="https://via.placeholder.com/55x48"
              />
            </div>
          </div>
        </div>
        <div className="w-[764px] text-center text-[#757575] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
          Mantente al tanto de los eventos que tenemos programados para nuestra
          comunidad escolar. Desde celebraciones y actividades especiales hasta
          presentaciones y días temáticos, siempre hay algo interesante en la
          agenda
        </div>
      </div>
      <div className="h-[1059px] px-16 py-24 flex-col justify-center items-center gap-20 inline-flex">
        <div className="self-stretch h-[867px] flex-col justify-start items-center gap-8 flex">
          <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-10 inline-flex">
            <div className="w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center inline-flex">
              <img
                className="w-[260px] h-[347px]"
                src="https://via.placeholder.com/260x347"
              />
            </div>
            <div className="w-[405.33px] px-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[142px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  10 de Octubre
                </div>
                <div className="self-stretch text-[#1e1e1e] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
                  Back to School
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Celebraremos el inicio del nuevo ciclo escolar con actividades
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
              <img
                className="w-[255px] h-48"
                src="https://via.placeholder.com/255x192"
              />
            </div>
            <div className="w-[405.33px] px-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[164px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  10 de Noviembre
                </div>
                <div className="self-stretch text-[#1e1e1e] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
                  Día del Padre
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Una jornada especial para celebrar a los papás Senda con
                  actividades y presentaciones que destacan su importancia en la
                  vida de nuestros estudiantes.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17px] px-4 py-2 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-px bg-[#d9d9d9]" />
          </div>
          <div className="p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-10 inline-flex">
            <div className="w-[260px] h-[187px] rounded-2xl flex-col justify-center items-center inline-flex">
              <img
                className="w-[310px] h-[205px]"
                src="https://via.placeholder.com/310x205"
              />
            </div>
            <div className="w-[405.33px] px-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[142px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  10 de Diciembre
                </div>
                <div className="self-stretch text-[#1e1e1e] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
                  Día del Niño
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Un día lleno de diversión y sorpresas para celebrar a los más
                  pequeños, con juegos, espectáculos y actividades recreativas.
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
