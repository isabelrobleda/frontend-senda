import React from "react";
import Phone from "../../assets/aplica_senda/📞.png"
import Email from "../../assets/aplica_senda/📨.png";
import WhatsApp from "../../assets/aplica_senda/image.png";
import CTAImgMaternal from "../../assets/CTAs/img-maternal.png";
import PlaneaTuVisita from "../../assets/planea-tu-visita.png";
import OpenHouse from "../../assets/icons/🏫.png";
import CitaConAdmisiones from "../../assets/icons/👩🏻‍🏫.png";
import HeaderBackground from "../../assets/Header-background.png";
import WhatsAppButton from "../../components/WhatsAppButton";
import QuestionsCTA from "../../components/QuestionsCTA";

const EXPERIENCIA_SENDA_FECHAS = [
  "18 de septiembre",
  "23 de octubre",
  "13 de noviembre",
  "22 de enero",
  "12 de febrero",
  "19 de marzo",
  "23 de abril",
  "21 de mayo",
  "18 de junio",
];

const EXPERIENCIA_SENDA_HORARIO = "8:45 - 10:30";

function PlaneaVisita() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center bg-white">
        <div className=" w-full mx-auto p-8 md:p-16 flex flex-col justify-start items-center gap-16">
          <div className="relative md:h-[700px] w-full flex justify-center items-center">
            <div>
               {/* Background Image with Opacity */}
         <div className="absolute inset-0 z-0">
            <img
              className="w-screen object-cover md:block hidden opacity-10 z-0 md:h-[800px]"
              src={HeaderBackground}
              alt="Background"
            />
          </div>
            </div>
            {/* Planea tu visita Section */}
            <div className="h-auto w-full max-w-screen-xl flex flex-col lg:flex-row md:justify-start items-center gap-8 mt-20">
              <div className="flex-grow flex flex-col justify-start items-center gap-8 text-center lg:text-left">
                <div className="flex flex-col justify-start items-start gap-6">
                  <div className="text-[#1e1e1e] text-[40px] md:text-[57px] font-semibold font-pangea leading-tight">
                    Planea tu visita
                  </div>
                  <div className="text-[#757575] text-left   text-lg md:text-2xl font-semibold font-['Inter'] leading-tight">
                    Conoce nuestras instalaciones y descubre cómo aprenden
                    nuestros alumnos
                  </div>
                  <WhatsAppButton
                    message="Hola, me gustaría agendar una visita al Colegio Senda."
                    source="planea_visita_hero"
                    className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl text-[#f2f2f2] text-base font-medium text-center w-full sm:w-auto self-center lg:self-start"
                  >
                    Agenda tu visita por WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
              <div className=" w-full md:w-[870px]  relative">
                <img
                  src={PlaneaTuVisita}
                  alt="Plan your visit"
                  className="w-full h-full"
              loading="lazy"
            />
              </div>
            </div>
          </div>
          {/* Hay dos tipos de visita Section */}
          <div className="h-auto w-full px-4 py-16 md:px-16 md:py-32 flex flex-col justify-center items-center gap-12">
            <div className="w-full text-center flex flex-col justify-start items-center gap-4">
              <div className="text-[#1e1e1e] text-xl md:text-2xl font-semibold font-['Inter'] leading-snug">
                Hay dos tipos de visita
              </div>
            </div>

            {/* Two Visit Types Cards */}
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch ">
              {/* Cita con Admisiones Card */}
              <div className="w-full md:w-[500px] p-6 bg-white rounded-t-lg md:rounded-tr-none md:rounded-l-lg shadow-sm border border-[#e4e4de] flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={CitaConAdmisiones}
                    alt="Cita con admisiones"
                    className="w-[60px] h-[60px]"
              loading="lazy"
            />
                  <div className="text-center text-[#1e1e1e] text-xl md:text-2xl font-semibold">
                    Cita con admisiones
                  </div>
                  <div className="text-center text-black/40 text-base font-normal mx-10">
                    Haz una cita personalizada con nuestro equipo de admisiones
                    y conoce más sobre el Colegio Senda.
                  </div>
                  <button
                    onClick={() => scrollToSection("cita-con-admisiones")}
                    className="px-6 py-3 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl text-[#f2f2f2] text-base font-medium"
                  >
                    Más información
                  </button>
                </div>
              </div>

              {/* Open House Card */}
              <div className="w-full md:w-[500px] p-6 bg-white rounded-b-lg md:rounded-bl-none md:rounded-r-lg shadow-sm border border-[#e4e4de] flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={OpenHouse}
                    alt="Open House"
                    className="w-[60px] h-[60px]"
              loading="lazy"
            />
                  <div className="text-center text-[#1e1e1e] text-xl md:text-2xl font-semibold">
                    Vive la Experiencia Senda
                  </div>
                  <div className="text-center text-black/40 text-base font-normal mx-3">
                    Haz un recorrido por el Colegio y acompáñanos a una
                    presentación sobre la escuela con la dirección.
                  </div>
                  <button
                    onClick={() => scrollToSection("open-house")}
                    className="px-6 py-3 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl text-[#f2f2f2] text-base font-medium"
                  >
                    Más información
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div
            id="cita-con-admisiones"
            className="h-auto w-screen px-4 md:px-16 py-16 md:py-32 bg-[#f9f9fe] flex-col justify-center items-center gap-20 inline-flex"
          >
            <div className="self-stretch h-auto flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Cita con admisiones
              </div>
              <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Planea tu próxima visita al Colegio Senda
              </div>
            </div>
            <div className="self-stretch h-auto flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch justify-center items-start gap-8 flex flex-col md:flex-row">
                <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                      <img
                        src={WhatsApp}
                        alt=""
                        className="h-12 self-center mb-3"
              loading="lazy"
            />
                      <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                        WhatsApp
                      </div>
                      <div className="self-stretch text-center text-[#757575] text-base font-medium font-['Inter'] leading-snug">
                        (+52) 5556832060
                      </div>
                    </div>
                  </div>
                  <WhatsAppButton
                    message="Hola, me gustaría agendar una cita con admisiones del Colegio Senda."
                    source="planea_visita_cita"
                  >
                    <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae]  rounded-2xl justify-center items-center gap-2 inline-flex">
                      <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                        Chatear en Whatsapp
                      </div>
                    </div>
                  </WhatsAppButton>
                </div>
                <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
                  <div className="self-stretch  flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                      <img
                        src={Phone}
                        alt=""
                        className="h-12 self-center mb-3"
              loading="lazy"
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
                    <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae]  rounded-2xl justify-center items-center gap-2 inline-flex">
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
                        src={Email}
                        alt=""
                        className="h-12 self-center mb-3"
              loading="lazy"
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
                    <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae]  rounded-2xl justify-center items-center gap-2 inline-flex">
                      <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                        Enviar correo
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Open House Section */}
          <div
            id="open-house"
            className="w-full max-w-screen-xl px-4 sm:px-8 py-12 sm:py-16 md:py-24 bg-white flex flex-col justify-start items-center gap-8"
          >
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch text-center text-[#1e1e1e] text-xl sm:text-2xl font-semibold font-['Inter'] leading-snug">
                Vive la Experiencia Senda
              </div>
              <div className="self-stretch text-center text-[#757575] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                ¡Ven y disfruta con nosotros! Descubre cómo aprende el cerebro a
                través de rutinas de pensamiento, conoce nuestros ambientes de
                aprendizaje, las clases de deportes, patineta, muro de escalar y
                psicomotricidad, la tecnología de punta en los salones y muchas
                cosas más...
              </div>
              <div className="text-center text-[#757575] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                Todas las fechas son de {EXPERIENCIA_SENDA_HORARIO} en nuestras
                instalaciones: Av. Toluca 541, Col. Olivar de los Padres, C.P.
                01780, CDMX.
              </div>
            </div>

            {/* Fechas */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXPERIENCIA_SENDA_FECHAS.map((fecha) => (
                <div
                  key={fecha}
                  className="p-6 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-between items-center gap-4 text-center"
                >
                  <div className="flex flex-col gap-1">
                    <div className="text-[#1e1e1e] text-lg font-bold font-['Inter'] leading-snug">
                      {fecha}
                    </div>
                    <div className="text-[#757575] text-sm font-normal font-['Inter'] leading-snug">
                      {EXPERIENCIA_SENDA_HORARIO} hrs
                    </div>
                  </div>
                  <WhatsAppButton
                    message={`Hola, quiero reservar lugar para la Experiencia Senda del ${fecha}.`}
                    source="experiencia_senda_fecha"
                    className="w-full px-6 py-2 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl text-[#f2f2f2] text-sm font-medium"
                  >
                    Reservar lugar
                  </WhatsAppButton>
                </div>
              ))}
            </div>
          </div>


          {/* CTA Section */}
          <QuestionsCTA
            text="Si tienes alguna duda, ¡no dudes en contactar a nuestra directora de admisiones, Paty González! ¡Ella estará feliz de ayudarte!"
            email="admisiones@colegiosenda.edu.mx"
            image={CTAImgMaternal}
            imageAlt="Alumnos del Colegio Senda"
            bgClass="bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default PlaneaVisita;
