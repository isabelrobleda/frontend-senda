import React from "react";
import CursoDeVeranoImg from "../../assets/curso-de-verano.png";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAAfterSchool from "../../assets/after school/CTA-After-School.png";

function CursoDeVerano() {
  return (
    <div>
      {/* Main Image */}
      <div className="w-full flex justify-center items-center px-8 md:px-16 pt-20">
        <img
          src={CursoDeVeranoImg}
          alt="Curso de Verano"
          className="w-full md:w-auto md:max-h-[700px] object-contain"
          loading="lazy"
        />
      </div>

      {/* CTA Section */}
      <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
        <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
          <div className="relative flex flex-col justify-between">
            <img
              src={CTA1}
              alt="background green cta"
              className="relative z-0 md:rounded-none rounded-lg w-full md:w-auto min-h-[400px] md:min-h-0 object-cover"
              loading="lazy"
            />
            <h3 className="absolute z-10 px-14 mt-12 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-24 mt-20 px-14 font-light md:w-1/2 text-sm md:text-base">
              Si tienes alguna duda sobre nuestro Curso de Verano, ¡no dudes en
              contactarnos! ¡Estaremos felices de ayudarte!
              <br />
              <p className="font-semibold my-2">Teléfono: (55) 7454 4052</p>
            </p>

            <a href="mailto:afterschoolcolegiosenda@gmail.com">
              <div className="absolute h-10 ml-14 hover:bg-[#009bce] text-black/90 hover:text-white px-8 z-10 md:bottom-12 bottom-10 py-2 bg-white rounded-2xl">
                <span className="md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Contactar
                </span>
              </div>
            </a>
          </div>
          <img
            src={CTAAfterSchool}
            alt="image cta curso de verano"
            className="md:rounded-none rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default CursoDeVerano;
