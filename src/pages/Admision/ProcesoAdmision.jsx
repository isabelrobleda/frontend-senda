import React, { useState } from "react";
import { Link } from "react-router-dom";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAImgMaternal from "../../assets/CTAs/img-maternal.png";
import ChevronLeft from "../../assets/proceso_admision/Chevron left.png";
import ChevronRight from "../../assets/proceso_admision/Chevron right.png";
import LaboratorioSecundaria from "../../assets/proceso_admision/Laboratorio_Secundaria.png";
import Paso02 from "../../assets/proceso_admision/paso_02.png";
import Paso03 from "../../assets/proceso_admision/paso_03.png";
import Paso04 from "../../assets/proceso_admision/paso_04.png";
import Paso05 from "../../assets/proceso_admision/paso_05.png";
import Paso06 from "../../assets/proceso_admision/paso_06.png";
import Paso07 from "../../assets/proceso_admision/paso_07.png";
import Paso08 from "../../assets/proceso_admision/paso_08.png";
import Paso09 from "../../assets/proceso_admision/paso_09.png";

function ProcesoAdmision() {
  const steps = [
    {
      title: "Aplicación o planea tu visita",
      description:
        "Para poder aplicar es necesario llenar el formato de aplicación o planear tu visita con nuestra área de admisiones.",
      stepNumber: "Paso 1",
      imageUrl: LaboratorioSecundaria,
      applyLink: "/aplica-al-senda",
      visitLink: "/planea-tu-visita",
    },
    {
      title: "Agendar cita",
      description:
        "Para los que aplican a Maternal y K1, deberán agendar una entrevista. Los demás grados, deberán agendar una cita para asistir dos días al colegio para una entrevista y una evaluación.",
      stepNumber: "Paso 2",
      imageUrl: Paso02,
      applyLink: "/contacto",
    },
    {
      title: "Pago de Proceso de Admisión",
      description:
        "Pago de Proceso de Admisión en efectivo en la Caja del Colegio.",
      stepNumber: "Paso 3",
      imageUrl: Paso03,
    },
    {
      title: "Entrega de documentos",
      description: `Para los que entran de KII a Secundaria, traer el formato de antecedentes, copia de calificaciones o evaluación, carta de no adeudo y de buena conducta.<br /> <br />Para los que entran a maternal y K1, no es necesario entregar estos documentos.`,
      stepNumber: "Paso 4",
      imageUrl: Paso04,
    },
    {
      title: "Asistir al Colegio",
      description: `Para los de maternal y K1 deberán asistir a la entrevista.<br /> <br />Para los que entran de KII a Secundaria, deberán asistir a los dos días de visita agendados.`,
      stepNumber: "Paso 5",
      imageUrl: Paso05,
    },
    {
      title: "Resultado de aplicación",
      description: `Para los que entran de KII a Secundaria, se les notificará por e-mail el resultado de su aplicación para entrar al Colegio.<br /> <br />Para los que entran a maternal y K1 recibirán una llamada notificarles los siguientes pasos.`,
      stepNumber: "Paso 6",
      imageUrl: Paso06,
    },
    {
      title: "Pago de inscripción y cuota familiar",
      description: "Pagar la inscripción y la cuota familiar",
      stepNumber: "Paso 7",
      imageUrl: Paso07,
      applyLink: "/colegiaturas",
    },
    {
      title: "Entrega de Documentos Adisionales",
      description:
        "Entregar los documentos oficiales adicionales, los cuales fueron acordados durante la cita en el Colegio.",
      stepNumber: "Paso 8",
      imageUrl: Paso08,
    },
    {
      title: "Comprar uniformes",
      description: "Comprar los uniformes y pagar los materiales.",
      stepNumber: "Paso 9",
      imageUrl: Paso09,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div>
      <div className="relative mt-20 bg-[#f9f9fe]">
        <div className="max-w-[1440px] mx-auto h-auto w-full px-4 md:px-16 py-20  flex-col justify-center items-center flex md:gap-0 gap-8">
          <div className="flex flex-col  md:flex-row justify-center items-center gap-10 md:gap-0">
            {/* Image Section */}
            <div className="image-container w-full md:w-[500px] h-auto md:h-[500px] relative">
              <img
                src={steps[activeStep].imageUrl}
                className="w-full h-full z-0 rounded-[10px] ml-0 md:ml-10"
                alt={`proceso admision ${activeStep + 1}`}
              />
            </div>

            {/* Text Section */}
            <div className="card-container w-full md:w-[674px] z-10 flex-col justify-start items-center md:items-end flex ">
              <div className="card-content w-full h-auto md:h-80 px-4 md:px-6 py-6 md:py-8 bg-white rounded-[20px] shadow border border-[#e4e4de] flex-col justify-start items-start gap-4 flex md:mr-10">
                {/* Text Content */}
                <div className="self-stretch flex-col justify-between items-start flex">
                  <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#009bce] text-sm md:text-base font-semibold">
                      {steps[activeStep].stepNumber}
                    </div>
                    <div className="text-[#1e1e1e] text-lg md:text-2xl font-semibold">
                      {steps[activeStep].title}
                    </div>
                    <div className="text-[#757575] text-sm md:text-base"  dangerouslySetInnerHTML={{ __html: steps[activeStep].description }} >
                     
                    </div>
                  </div>

                  {/* Conditional Buttons Section */}
                  {activeStep === 0 && (
                    <div className="flex gap-2 md:gap-4 mt-6 md:mt-20 ">
                      <Link to={steps[activeStep].applyLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#009bce] hover:bg-[#007cae] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Aplicar
                          </div>
                        </div>
                      </Link>
                      <Link to={steps[activeStep].visitLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Planea tu visita
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="flex gap-2 md:gap-4 mt-6 md:mt-16">
                      <Link to={steps[activeStep].applyLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#009bce] hover:bg-[#007cae] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Contacto
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {activeStep === 6 && (
                    <div className="flex gap-2 md:gap-4 mt-6 md:mt-28">
                      <Link to={steps[activeStep].applyLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#009bce] hover:bg-[#007cae] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Ver Colegiaturas
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="navigation-arrows md:self-end self-center md:mr-28 ">
            <button
              className={`navigation-arrow ${
                activeStep === 0 ? "invisible" : "" 
              }`}
              onClick={handlePreviousStep}
            >
              <img src={ChevronRight} alt="Prev" className="transform -scale-x-100 border rounded-full p-4 md:mx-12 hover:bg-slate-200 mr-4" />
            </button>
            <button
              className={`navigation-arrow ${
                activeStep === steps.length - 1 ? "invisible" : ""
              }`}
              onClick={handleNextStep}
            >
              <img src={ChevronRight} alt="Next" className="border rounded-full p-4 hover:bg-slate-200"/>
            </button>
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
            <h3 className="absolute z-10 px-14 mt-20 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-32 mt-28 px-14 font-light md:w-1/2 text-sm md:text-base">
              Si tienes alguna duda, ¡no dudes en contactar a nuestra directora
              de admisiones, Paty González! ¡Ella estará feliz de ayudarte!
            </p>
            <a href="mailto:admisiones@colegiosenda.edu.mx">
              <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl  hover:bg-slate-200">
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

export default ProcesoAdmision;
