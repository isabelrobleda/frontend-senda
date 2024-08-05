import React from "react";
import { Link } from "react-router-dom";

function CTAApply() {
  return (
    <div className="relative w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
      <div className="relative flex flex-col md:flex-row justify-center items-start gap-12 ">
        <div className=" md:h-[339px] absolute inset-0 bg-gradient-to-r from-[#00a4da] to-[#b3cf3f] rounded-2xl opacity-50 z-0"></div>
        <div className="relative w-full md:w-[528px] p-10 md:pl-10 md:pr-4 md:pb-10 flex flex-col justify-start items-start gap-6 z-10">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full text-[#1e1e1e] text-2xl md:text-[32px] font-medium text-pangea leading-snug md:leading-[38.40px]">
              Promoviendo una cultura
              <br />
              del pensamiento
            </div>
            <div className="w-full text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
              Fomentamos dignidad, ética y creatividad. Alumnos responsables, saludables y conscientes del medio ambiente, con habilidades digitales del siglo XXI.
            </div>
          </div>
          <div className="px-6 py-2 bg-[#f9f9fe] rounded-2xl flex justify-center items-center gap-2">
            <Link to="/aplica-al-senda">
              <button className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                Aplica ahora
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-[397px] md:h-[339px] z-20">
          <img
            className="absolute bottom-0 right-0 w-full"
            src="src/assets/cta_img.png"
            alt="CTA"
          />
        </div>
      </div>
    </div>
  );
}

export default CTAApply;
