import React from "react";
import { Link } from "react-router-dom";

function CTAApply() {
  return (
    <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
      <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
        <div className="abolute flex flex-col justify-between">
        <img
          src="src/assets/CTAs/CTA-01.png"
          alt="background green cta"
          className="relative z-0 md:rounded-none rounded-lg"
        />
        <h3 className="absolute z-10 px-[40px] py-[56px] font-semibold font-pangea md:text-2xl text-lg">
          Promoviendo una cultura de <br /> pensamiento
        </h3>
        <p className="absolute z-10 md:mt-32 mt-28 px-[40px] font-light md:w-1/2 text-sm md:text-base">
          Fomentamos dignidad, ética y creatividad. Alumnos responsables,
          saludables y conscientes del medio ambiente, con habilidades digitales
          del siglo XXI.
        </p>
        <Link to={"/aplica-al-senda"}>
          <div className="absolute  h-10 ml-10 px-8 z-10 md:bottom-20 bottom-10  py-2 bg-white hover:opacity-85 rounded-2xl border border-white ">
            <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
              Aplica ahora
            </span>
          </div>
        </Link>
        </div>
        <img src="src/assets/CTAs/img-maternal.png" alt="image maternal" className="md:rounded-none rounded-lg" />
      </div>
    </div>
  );
}

export default CTAApply;
