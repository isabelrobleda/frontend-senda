import React from "react";
import { Link } from "react-router-dom";
import CTA from "../assets/CTAs/CTA-01.png";
import ImgMaternal from "../assets/CTAs/img-maternal.png";

function CTAApply() {
  return (
    <div className="w-full px-8 md:px-16 py-10 md:py-16 bg-[#f9f9fe] flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-start items-stretch gap-0 rounded-2xl overflow-hidden shadow-md">
        {/* Green section: CTA image as background, content drives height */}
        <div className="relative md:w-1/2">
          <img
            src={CTA}
            alt="background green cta"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="relative z-10 flex flex-col gap-3 md:gap-5 p-8 md:p-10">
            <h3 className="font-medium font-pangea text-xl md:text-2xl md:leading-8 text-white">
              Promoviendo una cultura <br /> de pensamiento
            </h3>
            <p className="font-light text-sm text-white md:w-4/5">
              Fomentamos dignidad, ética y creatividad. Alumnos responsables,
              saludables y conscientes del medio ambiente, con habilidades digitales
              del siglo XXI dándoles siempre un sentido.
            </p>
            <Link to={"/aplica-al-senda"}>
              <div className="inline-flex px-6 py-2 bg-white rounded-2xl hover:cursor-pointer hover:bg-[#009bce] text-black/90 hover:text-white">
                <span className="text-sm font-medium font-['Roboto'] leading-normal tracking-tight">
                  Aplica ahora
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative md:w-1/2 min-h-[220px] overflow-hidden rounded-b-2xl md:rounded-none">
          <img
            src={ImgMaternal}
            alt="image maternal"
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] scale-90"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default CTAApply;
