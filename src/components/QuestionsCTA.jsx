import React from "react";
import CTA1 from "../assets/CTAs/CTA-01.png";

// Bloque "¿Tienes preguntas?" compartido. Usa el mismo patrón de overlay con
// flexbox que AplicaSenda para que el texto nunca se desborde en mobile.
function QuestionsCTA({ text, email, image, imageAlt = "Colegio Senda", bgClass = "bg-[#f9f9fe]" }) {
  return (
    <div className={`w-full px-8 md:px-16 py-16 md:py-24 ${bgClass} flex flex-col justify-center items-center`}>
      <div className="flex flex-col md:flex-row justify-start items-stretch gap-0 rounded-lg md:rounded-none overflow-hidden shadow-md">
        <div className="relative flex-shrink-0">
          <img
            src={CTA1}
            alt=""
            className="w-full md:w-auto h-full min-h-[300px] md:min-h-0 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-between gap-4 p-8 md:p-10">
            <h3 className="font-semibold font-pangea text-lg md:text-2xl">
              ¿Tienes preguntas?
            </h3>
            <p className="font-light text-sm md:text-base md:w-4/5">{text}</p>
            <a href={`mailto:${email}`} className="self-start">
              <div className="inline-flex px-8 py-2 bg-white rounded-2xl hover:bg-[#009bce] text-black/90 hover:text-white hover:cursor-pointer">
                <span className="text-sm md:text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  Contactar
                </span>
              </div>
            </a>
          </div>
        </div>
        <img
          src={image}
          alt={imageAlt}
          className="w-full md:w-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default QuestionsCTA;
