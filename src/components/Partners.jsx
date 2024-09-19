import React from "react";
import Apple from "../assets/Apple.png";
import MARSA from "../assets/MARSA.png";
import Knotion from "../assets/Knotion.png";
import LARSA from "../assets/LARSA.png";
import IdeaSport from "../assets/Idea-sport.png";

function Partners() {
  return (
    <div>
      <div className="w-full md:h-[245px] py-8 px-4 md:px-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8">
        <div className="w-full text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
         Nuestros aliados
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 md:gap-20 ">
          <img src={Apple} className="w-[120px] h-auto" alt="Apple" />
          <img src={MARSA} className="w-[120px] h-auto" alt="MARSA" />
          <img src={Knotion} className="w-[120px] h-auto" alt="Knotion" />
          <img src={LARSA} className="w-[120px] h-auto" alt="LARSA" />
          <img src={IdeaSport} className="w-[114px] h-auto" alt="Idea Sport" />
          
        </div>
      </div>
    </div>
  );
}

export default Partners;
