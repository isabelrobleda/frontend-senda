import React from "react";

function Mision() {
  return (
    <>
      <div className="h-[642px] w-full p-16 bg-[#f9f9fe] flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch h-[291px] px-16 flex-col justify-start items-start gap-12 flex">
          <div className="w-[523px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Mision y Vision
          </div>
          <div className="self-stretch justify-start items-start gap-10 inline-flex">
            <div className="w-[523px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                Misión
              </div>
              <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug ">
                <b>"Ser una Comunidad que educa para trascender"</b>
                
                <br />
                Somos una comunidad educativa inmersa en la cultura de
                pensamiento, comprometida con el bienestar emocional de cada
                alumno. Formamos personas críticas, responsables, competentes, y
                resilientes.
              </div>
            </div>
            <div className="w-[523px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                Visión
              </div>
              <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
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
      <div className="h-[487px] px-16 py-32 flex-col justify-center items-center gap-20 inline-flex">
        <div className="self-stretch justify-center items-start gap-8 inline-flex">
          <div className="w-[415.51px] h-[340px] relative">
            <div className="w-[415.51px] h-[340px] left-0 top-0 absolute" />
            <img
              className="w-[628.16px] h-auto left-[-67.21px] top-0 absolute"
              src="src/assets/Mision.jpeg"
            />
          </div>
          <div className="w-[415.51px] h-auto relative">
            <div className="w-[415.51px] h-[340px] left-0 top-0 absolute " />
            <img
              className="w-[628.16px] h-auto left-[-67.21px] top-0 absolute"
              src="src/assets/mision02.png"
            />
          </div>
          <div className="w-[415.51px] h-[340px] relative">
            <div className="w-[415.51px] h-[340px] left-0 top-0 absolute " />
            <img
              className="w-[628.16px] h-auto left-[-67.21px] top-0 absolute"
              src="src/assets/mision01.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mision;
