import React from "react";
import CursoDeVeranoImg from "../../assets/curso-de-verano2.png";
import CTAAfterSchool from "../../assets/after school/CTA-After-School.png";
import WhatsAppButton from "../../components/WhatsAppButton";
import QuestionsCTA from "../../components/QuestionsCTA";

function CursoDeVerano() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full pt-32 md:pt-40 px-4 md:px-16 flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-[#1e1e1e] text-[2.5rem] md:text-[3.5rem] font-semibold font-pangea leading-tight">
          Curso de Verano
        </h1>
        <p className="text-[#757575] text-lg md:text-2xl font-semibold leading-snug max-w-3xl">
          Un verano de juego, deporte y aprendizaje en el Colegio Senda: la
          mejor manera de que tu hijo conozca la escuela por dentro.
        </p>
        <WhatsAppButton
          message="Hola, quiero información del Curso de Verano del Colegio Senda."
          source="curso_verano_hero"
          className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl text-[#f2f2f2] text-base font-medium text-center w-full sm:w-auto"
        >
          Pide informes por WhatsApp
        </WhatsAppButton>
      </div>

      {/* Main Image */}
      <div className="w-full flex justify-center items-center px-4 md:px-[200px] py-12 md:py-20">
        <img
          src={CursoDeVeranoImg}
          alt="Cartel del Curso de Verano del Colegio Senda"
          className="w-full md:w-auto md:max-h-[900px] object-contain rounded-[10px]"
          loading="lazy"
        />
      </div>

      {/* CTA Section */}
      <QuestionsCTA
        text={
          <>
            Si tienes alguna duda sobre nuestro Curso de Verano, ¡no dudes en
            contactarnos! ¡Estaremos felices de ayudarte!
            <span className="block font-semibold my-2">
              Teléfono: (55) 7454 4052
            </span>
          </>
        }
        email="afterschoolcolegiosenda@gmail.com"
        image={CTAAfterSchool}
        imageAlt="Actividades del Curso de Verano del Colegio Senda"
        bgClass="bg-white"
      />
    </div>
  );
}

export default CursoDeVerano;
