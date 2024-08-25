import React from 'react'

function ProcesoAdmision() {
  return (
    <div>
      <div className="h-[916px] px-16 py-40 bg-[#f9f9fe] flex-col justify-center items-center gap-20 inline-flex">
  <div className="justify-start items-center inline-flex">
    <div className="w-[500px] h-[500px] relative">
      <div className="w-[500px] h-[500px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[10.03px]" />
      <img className="w-[770px] h-[510px] left-[738px] top-[-6px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/770x510" />
    </div>
    <div className="w-[674px] flex-col justify-start items-end gap-6 inline-flex">
      <div className="self-stretch h-[337px] px-6 py-12 bg-white rounded-[20px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-10 flex">
        <div className="self-stretch grow shrink basis-0 px-4 flex-col justify-between items-start flex">
          <div className="self-stretch h-[119px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#009bce] text-base font-semibold font-['Inter'] leading-snug">Paso 1</div>
              <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Aplicación o planea tu visita</div>
            </div>
            <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">Para poder aplicar es necesario llenar el formato de aplicación o planear tu visita con nuestra área de admisiones.</div>
          </div>
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="h-10 px-6 py-2 bg-[#009bce] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">Aplicar</div>
            </div>
            <div className="px-6 py-2 bg-[#b0cb4f] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">Planea tu visita</div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-12 inline-flex">
        <div className="p-3 bg-[#d9d9d9] rounded-[32px] border border-[#b3b3b3] justify-center items-center gap-2 flex">
          <div className="w-5 h-5 relative" />
        </div>
        <div className="p-3 bg-neutral-100 rounded-[32px] border border-[#d9d9d9] justify-center items-center gap-2 flex">
          <div className="w-5 h-5 relative" />
        </div>
      </div>
    </div>
  </div>
</div>
{/* CTA Section */}
<div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
        <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
          <div className="abolute flex flex-col justify-between">
            <img
              src="src/assets/CTAs/CTA-01.png"
              alt="background green cta"
              className="relative z-0 md:rounded-none rounded-lg"
            />
            <h3 className="absolute z-10 px-14 mt-20 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-32 mt-28 px-14 font-light md:w-1/2 text-sm md:text-base">
            Si tienes preguntas sobre el maternal, no dudes en enviarle un correo electrónico a Roxana Fernández L., nuestra Directora de Preescolar
            </p>
            <a href="mailto:direccionpreescolar@colegiosenda.edu.mx">
              <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl border border-white ">
                <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Contactar
                </span>
              </div>
              </a>
            
          </div>
          <img
            src="src/assets/CTAs/img-maternal.png"
            alt="image maternal"
            className="md:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default ProcesoAdmision