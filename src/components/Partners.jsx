import React from "react";
import Apple from "../assets/Apple.svg";
import MARSA from "../assets/MARSA.svg";
import Knotion from "../assets/Knotion.svg";
import LARSA from "../assets/LARSA.svg";
function Partners() {
  return (
    <div>
      <div className="w-full md:h-[245px] py-8 px-4 md:px-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8">
        <h3 className="w-full text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
         Nuestros aliados
        </h3>
        <div className="w-full flex flex-row overflow-x-auto md:flex-wrap md:justify-center md:items-center gap-12 md:gap-20 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <img src={Apple} className="flex-shrink-0 w-[120px] h-auto" alt="Apple" loading="lazy" />
          <img src={MARSA} className="flex-shrink-0 w-[120px] h-auto" alt="MARSA" loading="lazy" />
          <img src={Knotion} className="flex-shrink-0 w-[120px] h-auto" alt="Knotion" loading="lazy" />
          <img src={LARSA} className="flex-shrink-0 w-[120px] h-auto" alt="LARSA" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
