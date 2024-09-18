import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProcesoAdmision() {
  const steps = [
    {
      title: "Aplicación o planea tu visita",
      description:
        "Para poder aplicar es necesario llenar el formato de aplicación o planear tu visita con nuestra área de admisiones.",
      stepNumber: "Paso 1",
      imageUrl: "src/assets/proceso_admision/Laboratorio_Secundaria.png",
      applyLink: "/aplica-al-senda",
      visitLink: "/planea-tu-visita",
    },
    {
      title: "Agendar cita",
      description:
        "Para los que aplican a Maternal y K1, deberán agendar una entrevista. Los demás grados, deberán agendar una cita para asistir dos días al colegio para una entrevista y una evaluación.",
      stepNumber: "Paso 2",
      imageUrl: "src/assets/proceso_admision/paso_02.png",
      applyLink: "/contacto",
    },
    {
      title: "Pago de Proceso de Admisión",
      description:
        "Pago de Proceso de Admisión en efectivo en la Caja del Colegio.",
      stepNumber: "Paso 3",
      imageUrl: "src/assets/proceso_admision/paso_03.png",
    },
    {
      title: "Entrega de documentos",
      description:
        "Para los que entran de KII a Secundaria, traer el formato de antecedentes, copia de calificaciones o evaluación, carta de no adeudo y de buena conducta. Para los que entran a maternal y K1, no es necesario entregar estos documentos.",
      stepNumber: "Paso 4",
      imageUrl: "src/assets/proceso_admision/paso_04.png",
    },
    {
      title: "Asistir al Colegio",
      description:
        "Para los de maternal y K1 deberán asistir a la entrevista. Para los que entran de KII a Secundaria, deberán asistir a los dos días de visita agendados.",
      stepNumber: "Paso 5",
      imageUrl: "src/assets/proceso_admision/paso_05.png",
    },
    {
      title: "Resultado de aplicación",
      description:
        "Para los que entran de KII a Secundaria, se les notificará por e-mail el resultado de su aplicación para entrar al Colegio. Para los que entran a maternal y K1 recibirán una llamada notificarles los siguientes pasos.",
      stepNumber: "Paso 6",
      imageUrl: "src/assets/proceso_admision/paso_06.png",
    },
    {
      title: "Pago de inscripción y cuota familiar",
      description: "Pagar la inscripción y la cuota familiar",
      stepNumber: "Paso 7",
      imageUrl: "src/assets/proceso_admision/paso_07.png",
    },
    {
      title: "Entrega de Documentos Adisionales",
      description:
        "Entregar los documentos oficiales adicionales, los cuales fueron acordados durante la cita en el Colegio.",
      stepNumber: "Paso 8",
      imageUrl: "src/assets/proceso_admision/paso_08.png",
    },
    {
      title: "Comprar uniformes",
      description: "Comprar los uniformes y pagar los materiales.",
      stepNumber: "Paso 9",
      imageUrl: "src/assets/proceso_admision/paso_09.png",
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
      <div className="relative mt-20">
        {/* Carousel Section */}
        <div className="h-auto w-full px-4 md:px-16 py-20 bg-[#f9f9fe] flex-col justify-center items-center gap-10 md:gap-20 flex">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
            {/* Image Section */}
            <div className="w-[250px] md:w-[500px] h-[250px] md:h-[500px] relative">
              <img
                src={steps[activeStep].imageUrl}
                className="w-full h-full z-0 rounded-[10px] ml-0 md:ml-10"
                alt={`proceso admision ${activeStep + 1}`}
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-[674px] z-10 flex-col justify-start items-center md:items-end  flex">
              <div className="w-full h-auto md:h-80 px-4 md:px-6 py-6 md:py-8 bg-white rounded-[20px] shadow border border-[#e4e4de] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch flex-col justify-between items-start flex">
                  <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#009bce] text-sm md:text-base font-semibold">
                      {steps[activeStep].stepNumber}
                    </div>
                    <div className="text-[#1e1e1e] text-lg md:text-2xl font-semibold">
                      {steps[activeStep].title}
                    </div>
                    <div className="text-[#757575] text-sm md:text-base">
                      {steps[activeStep].description}
                    </div>
                  </div>

                  {/* Conditional Buttons Section */}
                  {activeStep === 0 && (
                    <div className="flex gap-2 md:gap-4 mt-6 md:mt-10">
                      <Link to={steps[activeStep].applyLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#009bce] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Aplicar
                          </div>
                        </div>
                      </Link>
                      <Link to={steps[activeStep].visitLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#b0cb4f] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Planea tu visita
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="flex gap-2 md:gap-4 mt-6 md:mt-10">
                      <Link to={steps[activeStep].applyLink}>
                        <div className="h-8 md:h-10 px-4 md:px-6 py-2 bg-[#009bce] rounded-2xl flex justify-center items-center">
                          <div className="text-[#f2f2f2] text-xs md:text-base font-medium">
                            Contacto
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
          <div className="flex flex-row self-start md:pl-[1140px] mt-0 md:w-[1440px] ">
            <button
              className={`p-2 md:p-3 rounded-full border  ${
                activeStep === 0 ? "invisible" : "visible"
              }`}
              onClick={handlePreviousStep}
            >
              <img
                src="src/assets/proceso_admision/Chevron left.png"
                alt="Prev"
              />
            </button>
            <button
              className={`p-2 md:p-3 rounded-full border mx-2  ${
                activeStep === steps.length - 1 ? "invisible" : "visible"
              }`}
              onClick={handleNextStep}
            >
              <img
                src="src/assets/proceso_admision/Chevron right.png"
                alt="Next"
              />
            </button>
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
              Si tienes alguna duda, ¡no dudes en contactar a nuestra directora
              de admisiones, Paty González! ¡Ella estará feliz de ayudarte!
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
            src="src/assets/CTAs/img-maternal.png"
            alt="image maternal"
            className="md:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcesoAdmision;
