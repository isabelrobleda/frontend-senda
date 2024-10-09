import React from "react";
import Phone from "../../assets/aplica_senda/📞.png"
import Email from "../../assets/aplica_senda/📨.png";
import WhatsApp from "../../assets/aplica_senda/image.png";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAImgMaternal from "../../assets/CTAs/img-maternal.png";
import Group87 from "../../assets/aplica_senda/Group_87.png";
import HeaderBackground from "../../assets/Header-background.png";


function Colegiaturas() {
  return (
    <div>
      <div className="relative md:h-[750px] h-96 md:mt-0 mt-28 w-full flex justify-center items-center p-4">
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
          <div className=" justify-start items-center flex">
            <div className="grow shrink basis-0 p-6 rounded-[20px]  flex-col justify-start items-center gap-6 md:gap-6 inline-flex">
              <div className="w-full md:w-[904px] text-center">
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  Una <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group87}
                    alt="image 2"
                    className="inline-block mx-1 md:mx-2 md:h-14 h-10"
                  />
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  inversión
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <br />
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  fomentando el
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>

                <span className="text-[#b0cb4f] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  futuro
                  <br />
                </span>
              </div>
              <div>
                <p className="text-[#757575] text-center sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] ">
                  Ofrecemos un entorno bilingüe y estimulante que integra
                  tecnología <br /> y cultura del pensamiento, promoviendo
                  habilidades críticas, <br /> creativas y socioemocionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colegiaturas Section */}
      <div className="relative min-h-screen w-full flex justify-center items-center bg-white">
        <div className="max-w-screen-xl w-full mx-auto p-8 md:p-16 flex flex-col justify-start items-center gap-16">
          <div className="w-full text-center flex-col justify-start items-center gap-2">
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] mb-3">
              Colegiaturas 2024/2025
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter']">
              Transferencia Bancaria, Cheque, Tarjeta de crédito o débito
              (incluida American Express).
            </div>
          </div>

          <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-8 h-64 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-start items-start ">
              <div className="text-[#1e1e1e] text-2xl font-semibold pb-1">
                Maternal
              </div>
              <p className="text-[#b3b3b3] text-base font-semibold pb-[8px]">
                Cuota ciclo escolar 2024-2025
              </p>
              <ul className="ml-5">
                <li className="text-[#757575] text-base list-disc py-1">
                  Inscripción: $12,500
                </li>
                <li className="text-[#757575] text-base list-disc py-1">
                  Reinscripción: $8,750
                </li>
                <li className="text-[#757575] text-base list-disc py-1">
                  Cuota Familiar: $1,900
                </li>
                <li className="text-[#757575] text-base list-disc py-1 font-semibold">
                  Colegiatura 10 meses: $7,150
                </li>
              </ul>
            </div>

            <div className="p-8 h-64 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-start items-start">
              <div className="text-[#1e1e1e] text-2xl font-semibold pb-1">
                Preescolar
              </div>
              <p className="text-[#b3b3b3] text-base font-semibold pb-[8px]">
                Cuota ciclo escolar 2024-2025
              </p>
              <ul className="ml-5">
                <li className="text-[#757575] text-base list-disc py-1">
                  Inscripción: $22,600
                </li>
                <li className="text-[#757575] text-base list-disc py-1">
                  Reinscripción: $17,500
                </li>
                <li className="text-[#757575] text-base list-disc py-1">
                  Cuota Familiar: $1,900
                </li>
                <li className="text-[#757575] text-base list-disc py-1 font-semibold">
                  Colegiatura 10 meses: $9,100
                </li>
              </ul>
            </div>

            <div className="p-8 h-64 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-start items-start">
              <div className="text-[#1e1e1e] text-2xl font-semibold pb-1">
                Preprimaria
              </div>
              <p className="text-[#b3b3b3] text-base font-semibold pb-[8px]">
                Cuota ciclo escolar 2024-2025
              </p>
              <ul className="ml-5">
                <li className="text-[#757575] text-base list-disc py-1">
                  Inscripción: $23,800
                </li>
                <li className="text-[#757575] text-base list-disc py-1">
                  Reinscripción: $19,950
                </li>
                <li className="text-[#757575] text-base list-disc py-1">
                  Cuota Familiar: $1,900
                </li>
                <li className="text-[#757575] text-base list-disc py-1 font-semibold">
                  Colegiatura 10 meses: $11,200
                </li>
              </ul>
            </div>

          </div>
          

            <div className="w-full z-20 md:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10 relative">
              <div className="p-8 h-64 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-start items-start">
                <div className="text-[#1e1e1e] text-2xl font-semibold pb-1">
                  Primaria
                </div>
                <p className="text-[#b3b3b3] text-base font-semibold pb-[8px]">
                  Cuota ciclo escolar 2024-2025
                </p>
                <ul className="ml-5">
                  <li className="text-[#757575] text-base list-disc py-1">
                    Inscripción: $27,200
                  </li>
                  <li className="text-[#757575] text-base list-disc py-1">
                    Reinscripción: $19,950
                  </li>
                  <li className="text-[#757575] text-base list-disc py-1">
                    Cuota Familiar: $1,900
                  </li>
                  <li className="text-[#757575] text-base list-disc py-1 font-semibold">
                    Colegiatura 10 meses: $13,690
                  </li>
                </ul>
              </div>

              <div className="p-8 h-64 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-start items-start">
                <div className="text-[#1e1e1e] text-2xl font-semibold pb-1">
                  Secundaria
                </div>
                <p className="text-[#b3b3b3] text-base font-semibold pb-[8px]">
                  Cuota ciclo escolar 2024-2025
                </p>
                <ul className="ml-5">
                  <li className="text-[#757575] text-base list-disc py-1">
                    Inscripción: $15,850
                  </li>
                  <li className="text-[#757575] text-base list-disc py-1">
                    Reinscripción: $15,850
                  </li>
                  <li className="text-[#757575] text-base list-disc py-1">
                    Cuota Familiar: $1,900
                  </li>
                  <li className="text-[#757575] text-base list-disc py-1 font-semibold">
                    Colegiatura 11 meses: $14,150
                  </li>
                </ul>
              </div>
            </div>
            
          
        </div>
      </div>

      {/* Contact Section */}
      <div className="h-auto w-screen px-4 md:px-16 py-16 md:py-32 bg-[#f9f9fe] flex-col justify-center items-center gap-20 inline-flex">
        <div className="self-stretch h-auto flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Contáctanos
          </div>
          <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            ¿Tienes dudas sobre nuestras colegiaturas o quieres agendar una
            visita?
          </div>
        </div>
        <div className="self-stretch h-auto flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-center items-start gap-8 flex flex-col md:flex-row">
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <img
                    src={Phone}
                    alt=""
                    className="h-12 self-center mb-3"
                  />
                  <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Teléfono
                  </div>
                  <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    55 56 83 20 60
                  </div>
                </div>
              </div>
              <a href="tel:5556832060">
                <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Marcar al teléfono
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch  flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                  <img
                    src={WhatsApp}
                    alt=""
                    className="h-12 self-center mb-3"
                  />
                  <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    WhatsApp
                  </div>
                  <div className="self-stretch text-center text-[#757575] text-base font-medium font-['Inter'] leading-snug">
                    (+52) 5556832060
                  </div>
                </div>
              </div>
              <a href="https://wa.me/525556832060">
                <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Chatear en Whatsapp
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch  flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                  <img
                    src={Email}
                    alt=""
                    className="h-12 self-center mb-3"
                  />
                  <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Mail
                  </div>
                  <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    admisiones@colegiosenda.edu.mx
                  </div>
                </div>
              </div>
              <a href="mailto:admisiones@colegiosenda.edu.mx">
                <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Enviar correo
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
        <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
          <div className="abolute flex flex-col justify-between">
            <img
              src={CTA1}
              alt="background green cta"
              className="relative z-0 md:rounded-none rounded-lg"
            />
            <h3 className="absolute z-10 px-14 md:mt-20 mt-14 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-32 mt-24 px-14 font-light md:w-1/2 text-sm md:text-base">
              Si tienes alguna duda sobre admisiones, ¡no dudes en contactar a
              nuestra directora de admisiones, Paty González! ¡Ella estará feliz
              de ayudarte!
            </p>
            <a href="mailto:admisiones@colegiosenda.edu.mx">
              <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-14  py-2 bg-white rounded-2xl border border-white ">
                <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Contactar
                </span>
              </div>
            </a>
          </div>
          <img
            src={CTAImgMaternal}
            alt="image maternal"
            className="md:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Colegiaturas;
