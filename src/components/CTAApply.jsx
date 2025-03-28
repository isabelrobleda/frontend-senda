import React from "react";
import { Link } from "react-router-dom";
import CTA from "../assets/CTAs/CTA-01.png";
import ImgMaternal from "../assets/CTAs/img-maternal.png";

function CTAApply() {
  return (
    <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col justify-center items-center gap-12">
      <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
        <div className="abolute flex flex-col justify-between">
        <img
          src={CTA}
          alt="background green cta"
          className="relative z-0 md:rounded-none rounded-lg"
        />
        <h3 className="absolute z-10 px-[40px] md:py-[35px] py-[40px] font-medium font-pangea md:text-[32px] text-base md:leading-9">
          Promoviendo una cultura <br /> de pensamiento
        </h3>
        <p className="absolute z-10 md:mt-32 mt-24 px-[40px] font-light md:w-1/2 text-xs md:text-base">
          Fomentamos dignidad, ética y creatividad. Alumnos responsables,
          saludables y conscientes del medio ambiente, con habilidades digitales
          del siglo XXI.
        </p>
        <Link to={"/aplica-al-senda"}>
          <div className="absolute  h-10 ml-10 px-8 z-10 md:bottom-14 bottom-6 py-2 bg-white  rounded-2xl hover:cursor-pointer hover:bg-[#009bce] text-black/90 hover:text-white ">
            <span className=" md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight ">
              Aplica ahora
            </span>
          </div>
        </Link>
        </div>
        <img src={ImgMaternal} alt="image maternal" className="md:rounded-none rounded-lg" />
      </div>
    </div>
  );
}

export default CTAApply;
