import React from "react";
import { Link } from "react-router-dom";
import CTA from "../assets/CTAs/CTA-01.png";
import ImgMaternal from "../assets/CTAs/img-maternal.png";

function CTAApply() {
  return (
    <div className="w-full px-8 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-start items-stretch gap-0 rounded-lg md:rounded-none overflow-hidden shadow-md">
        <div className="relative flex-shrink-0">
          <img
            src={CTA}
            alt="background green cta"
            className="w-full md:w-auto h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
            <h3 className="font-medium font-pangea text-xl md:text-[32px] md:leading-9 text-white">
              Promoviendo una cultura <br /> de pensamiento
            </h3>
            <p className="font-light text-sm md:text-base text-white md:w-4/5">
              Fomentamos dignidad, ética y creatividad. Alumnos responsables,
              saludables y conscientes del medio ambiente, con habilidades digitales
              del siglo XXI dándoles siempre un sentido.
            </p>
            <Link to={"/aplica-al-senda"}>
              <div className="inline-flex px-8 py-2 bg-white rounded-2xl hover:cursor-pointer hover:bg-[#009bce] text-black/90 hover:text-white">
                <span className="text-sm md:text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  Aplica ahora
                </span>
              </div>
            </Link>
          </div>
        </div>
        <img
          src={ImgMaternal}
          alt="image maternal"
          className="w-full md:w-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default CTAApply;
