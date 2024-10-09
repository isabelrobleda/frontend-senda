import React from "react";
import Phone from "../../assets/aplica_senda/📞.png"
import Email from "../../assets/aplica_senda/📨.png";
import WhatsApp from "../../assets/aplica_senda/image.png";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAImgMaternal from "../../assets/CTAs/img-maternal.png";
import PlaneaTuVisita from "../../assets/planea-tu-visita.png";
import OpenHouse from "../../assets/icons/🏫.png";
import CitaConAdmisiones from "../../assets/icons/👩🏻‍🏫.png";
import HeaderBackground from "../../assets/Header-background.png";


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
                  <div className="text-[#1e1e1e] text-[40px] md:text-[57px] font-semibold font-['Pangea'] leading-tight">
                    Planea tu visita
                  </div>
                  <div className="text-[#757575] text-left   text-lg md:text-2xl font-semibold font-['Inter'] leading-tight">
                    Conoce nuestras instalaciones y descubre cómo aprenden
                    nuestros alumnos
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-[870px]  relative">
                <img
                  src={PlaneaTuVisita}
                  alt="Plan your visit"
                  className="w-full h-full"
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
            <div className="w-full flex flex-col md:flex-row justify-center items-center ">
              {/* Cita con Admisiones Card */}
              <div className="w-full md:w-[500px] p-6 bg-white rounded-tl-lg rounded-bl-lg shadow-sm border border-[#e4e4de] flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={CitaConAdmisiones}
                    alt="Cita con admisiones"
                    className="w-[60px] h-[60px]"
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
                    className="px-6 py-3 bg-[#b0cb4f] hover:opacity-85 rounded-2xl text-[#f2f2f2] text-base font-medium"
                  >
                    Más información
                  </button>
                </div>
              </div>

              {/* Open House Card */}
              <div className="w-full md:w-[500px] p-6 bg-white rounded-tr-lg rounded-br-lg shadow-sm border border-[#e4e4de] flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={OpenHouse}
                    alt="Open House"
                    className="w-[60px] h-[60px]"
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
                    className="px-6 py-3 bg-[#b0cb4f] hover:opacity-85 rounded-2xl text-[#f2f2f2] text-base font-medium"
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

          {/* Open House Section */}
          <div
            id="open-house"
            className="w-full md:w-[1440px] h-auto md:h-[1490px] px-4 sm:px-8 md:px-40 py-12 sm:py-16 md:py-24 bg-white flex-col justify-start items-center gap-8  inline-flex"
          >
            
            <div className="self-stretch h-auto md:h-[111px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch text-center text-[#1e1e1e] text-xl sm:text-2xl font-semibold font-['Inter'] leading-[24px] sm:leading-[28.80px]">
                Vive la Experiencia Senda
              </div>
              <div className="self-stretch text-center text-[#757575] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                ¡Ven y disfruta con nosotros! Descubre cómo aprende el cerebro a
                través de rutinas de pensamiento, conoce nuestros ambientes de
                aprendizaje, las clases de deportes, patineta, muro de escalar y
                psicomotricidad, la tecnología de punta en los salones y muchas
                cosas más...
              </div>
            </div>
            <div className="self-stretch h-auto md:h-[1123px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch px-4 sm:px-8 md:px-16 py-4 sm:py-6 bg-white rounded-[10px] shadow border border-[#e4e4de] justify-start items-start gap-[50px] sm:gap-[100px] md:gap-[222px] inline-flex">
                <div className="justify-center items-start flex">
                  <div className="text-[#1e1e1e] text-lg sm:text-xl font-bold font-['Inter'] leading-normal">
                    Fecha
                  </div>
                </div>
                <div className="w-full sm:w-[468px] h-[29px] justify-between items-center flex">
                  <div className="justify-center items-start flex">
                    <div className="text-[#1e1e1e] text-lg sm:text-xl md:ml-8 font-bold font-['Inter'] leading-normal">
                      Horario
                    </div>
                  </div>
                  <div className="justify-center items-start flex">
                    <div className="text-[#1e1e1e] md:pl-[340px] text-lg  sm:text-xl font-bold font-['Inter'] leading-normal">
                      Lugar
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-auto  px-4 sm:px-8 md:px-16 py-4 sm:py-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-start gap-2 flex">
                {/* Date entries */}
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Septiembre 12
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-center flex">
                      <div className="text-[#1e1e1e] text-xs md:text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Octubre 17
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex ">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex  w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Noviembre 14
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0  md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex ">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Diciembre 12
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Enero 16
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs s font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex  w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Febrero 20
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Marzo 20
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Abril 3
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Mayo 22
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-black w-full my-2"/>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-center items-start flex w-24 md:w-auto">
                    <div className="text-[#1e1e1e] text-sm sm:text-base font-bold font-['Inter'] leading-snug">
                      Junio 19
                    </div>
                  </div>
                  <div className="h-auto sm:h-[66px] justify-between items-center flex">
                    <div className="justify-center items-start flex ml-6 md:ml-0 md:mr-80">
                      <div className="text-[#1e1e1e] text-sm sm:text-base font-normal font-['Inter'] leading-snug">
                        8:45 - 10:30
                      </div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-[#1e1e1e] md:text-sm text-xs font-normal font-['Inter'] leading-snug">
                        En nuestras instalaciones:
                        <br />
                        Av.Toluca 541, Col. Olivar de los Padres,
                        <br />
                        C.P. 01780, CDMX
                      </div>
                    </div>
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
                  src={CTA1}
                  alt="background green cta"
                  className="relative z-0 md:rounded-none rounded-lg"
                />
                <h3 className="absolute z-10 px-14 md:mt-20 mt-8 font-semibold font-pangea md:text-2xl text-lg">
                  ¿Tienes preguntas?
                </h3>
                <p className="absolute z-10 md:mt-32 mt-16 px-14 font-light md:w-1/2 text-sm md:text-base">
                Si tienes alguna duda, ¡no dudes en contactar a nuestra directora de admisiones, Paty González! ¡Ella estará feliz de ayudarte!
                </p>
                <a href="mailto:admisiones@colegiosenda.edu.mx">
                  <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl border border-white ">
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
      </div>
    </div>
  );
}

export default PlaneaVisita;
