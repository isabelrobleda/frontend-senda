import React from "react";
import MisionImg from "../../assets/mision/Mision.jpeg";
import Mision01 from "../../assets/mision/mision01.jpeg";
import Mision02 from "../../assets/mision/mision02.png";

function Mision() {
  return (
    <>
      <div className="md:h-[545px] h-auto p-8 md:p-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-12">
        <div className="w-full max-w-[1440px] mt-20 flex flex-col justify-start items-left gap-12">
          <div className="max-w-max text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px] text-left md:ml-[28px]">
            Misión y Visión
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10 ">
            <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-4 md:ml-[28px]">
              <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                Misión
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug md:mr-[28px]">
                "Ser una Comunidad que educa para trascender"
                <br />
                Somos una comunidad educativa inmersa en la cultura de
                pensamiento, comprometida con el bienestar emocional de cada
                alumno. Formamos personas críticas, responsables, competentes, y
                resilientes, para que sean agentes de cambio en su entorno.
              </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-4">
              <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                Visión
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug md:mr-[28px]">
                Ser una escuela reconocida por la calidad y la innovación
                educativa. La excelencia de sus educadores competentes,
                capacitados y comprometidos en vivir y transmitir valores
                éticos, humanistas e incluyentes, que valoran el poder de la
                investigación y la comprensión como base para fundamentar
                propuestas y acciones que deben generar en nuestros alumnos
                ideas constructivas en favor de un mundo mejor.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  px-8 md:px-[32px] py-16 md:py-32 flex flex-col justify-center items-center ">
        <div className="w-full flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-[415px] h-auto">
            <img
              className="w-96 h-64 rounded-lg"
              src={MisionImg}
              alt="Mision"
            />
          </div>
          <div className="w-full md:w-[415px] h-auto">
            <img
              className="w-96 h-64 rounded-lg"
              src={Mision02}
              alt="Mision 02"
            />
          </div>
          <div className="w-full md:w-[415px] h-auto">
            <img
              className="w-96 h-64 rounded-lg"
              src={Mision01}
              alt="Mision 01"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mision;
