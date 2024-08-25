import React from "react";

function AplicaSenda() {
  return (
    <div>
      <div className="w-[1440px] h-[713px] px-16 py-40 flex-col justify-center items-center gap-8 inline-flex">
        <div className="self-stretch justify-center items-start gap-8 inline-flex">
          <div className="h-[388px] justify-start items-center flex">
            <div className="grow shrink basis-0 p-6 rounded-[20px] shadow flex-col justify-start items-center gap-14 inline-flex">
              <div className="w-[904px] text-center">
                <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  Somos una{" "}
                </span>
                <span className="text-[#b0cb4f] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  comunidad
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-normal font-['Pangea'] leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  educativa inmersa en la cultura de pensamiento,
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-normal font-['Pangea'] leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  comprometida con el{" "}
                </span>
                <span className="text-[#b0cb4f] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  bienestar emocional
                  <br />
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  de cada
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-normal font-['Pangea'] leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                  alumno.
                </span>
              </div>
            </div>
          </div>
          <div className="w-[89.48px] h-[51px] relative">
            <div className="w-[89.48px] h-[51px] left-0 top-0 absolute">
              <img
                className="w-[45px] h-[60px] left-[39.26px] top-[-4px] absolute"
                src="https://via.placeholder.com/45x60"
              />
            </div>
            <div className="w-[89.48px] h-[51px] left-0 top-0 absolute">
              <img
                className="w-[71.90px] h-[48.92px] left-[7.26px] top-[7.08px] absolute"
                src="https://via.placeholder.com/72x49"
              />
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
          <div className="w-[89.48px] h-[51px] relative">
            <img
              className="w-12 h-[51px] left-[23.26px] top-0 absolute"
              src="https://via.placeholder.com/48x51"
            />
          </div>
        </div>
      </div>
      <div className="h-[1375px] px-40 py-16 bg-white flex-col justify-center items-start gap-12 inline-flex">
  <div className="self-stretch h-[1247px] px-[60px] flex-col justify-start items-start gap-12 flex">
    <div className="self-stretch justify-start items-center gap-10 inline-flex">
      <div className="grow shrink basis-0 px-6 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Aplica al Colegio Senda</div>
          <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">Por favor llena todos los campos con asterisco para poder aplicar.</div>
        </div>
        <div className="self-stretch h-[1172px] py-6 bg-white rounded-lg flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Nombre del Alumno(s) *</div>
            <div className="self-stretch h-10 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
            </div>
          </div>
          <div className="self-stretch h-[86px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Fecha de Nacimiento *</div>
            <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-4 inline-flex">
              <div className="w-8 h-8 relative" />
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Grado Solicitado</div>
              <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
                <div className="w-8 h-8 relative" />
              </div>
            </div>
            <div className="grow shrink basis-0 h-[86px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Ciclo escolar</div>
              <div className="self-stretch h-14 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Grado que cursa</div>
              <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
                <div className="w-8 h-8 relative" />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Escuela de procedencia</div>
              <div className="self-stretch h-[55px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Motivo de cambio</div>
            <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
            </div>
          </div>
          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Nombre de los padres *</div>
            <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Teléfono *</div>
              <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">Email(s) *</div>
              <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[86px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">¿Cómo se enteró del Colegio Senda? *</div>
            <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">Value</div>
              <div className="w-8 h-8 relative" />
            </div>
          </div>
          <div className="self-stretch h-[110px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">¿Qué expectativas tiene del Colegio Senda? *</div>
            <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Value</div>
            </div>
          </div>
          <div className="self-stretch h-[110px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">¿Considera que hay algo importante que debamos saber de su hijo/a?</div>
            <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Value</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 p-3 bg-[#009bce] rounded-lg border border-[#009bce] justify-center items-center gap-2 flex">
              <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">Mandar aplicación</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="h-[724px] px-16 py-32 bg-[#f9f9fe] flex-col justify-center items-center gap-20 inline-flex">
  <div className="self-stretch h-[67px] flex-col justify-start items-start gap-4 flex">
    <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Lorem ipsum</div>
    <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
  <div className="self-stretch h-[321px] flex-col justify-start items-start gap-10 flex">
    <div className="self-stretch justify-center items-start gap-8 inline-flex">
      <div className="w-[350px] px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
        <div className="self-stretch h-[59px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Teléfono</div>
            <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">55 56 83 20 60</div>
          </div>
        </div>
        <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
          <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">Marcar al teléfono</div>
        </div>
      </div>
      <div className="w-[350px] px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
        <div className="self-stretch h-[59px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">WhatsApp</div>
            <div className="self-stretch text-center text-[#757575] text-base font-medium font-['Inter'] leading-snug">(+52) 5556832060</div>
          </div>
        </div>
        <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
          <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">Chatear en Whatsapp</div>
        </div>
      </div>
      <div className="w-[350px] px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
        <div className="self-stretch h-[59px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Mail</div>
            <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">admisiones@colegiosenda.edu.mx</div>
          </div>
        </div>
        <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
          <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">Enviar correo</div>
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
  );
}

export default AplicaSenda;
