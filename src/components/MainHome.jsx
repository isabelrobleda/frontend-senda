import React from "react";
import { Link } from "react-router-dom";
import GreenVector from "../assets/green-vector.png";
import HeaderBackground from "../assets/Header-background.png";
import BullsEye from "../assets/bullseye-emoji.png";
import Image01Home from "../assets/Image01-Home.png";
import StarEmoji from "../assets/star-emoji.png";

function MainHome() {
  return (
    <div className="relative w-full md:h-[900px] px-4 md:px-16 py-20 md:py-40 flex-col justify-center items-center gap-8 inline-flex">
      <div className="absolute inset-0 z-0">
        <img
          className="w-screen object-cover opacity-10 z-0 md:h-[900px]"
          src={HeaderBackground}
          alt="Background"
        />
      </div>
      <div className="md:mx-0 mx-6 relative self-center z-10 justify-between items-center flex flex-col-reverse md:flex-row">
        <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-tight md:leading-[68.40px] relative">
              Ser una comunidad que 
              
              <span className="relative text-[#b0cb4f]"> educa</span> para <span className="text-[#009bce]">trascender</span>
              
              
            </div>
            <div className="self-stretch text-[#757575] text-lg md:text-2xl font-semibold font-['Inter'] leading-snug md:leading-[28.80px]">
              Somos una comunidad educativa inmersa en la cultura de
              pensamiento, comprometida con el bienestar emocional
              de cada alumno.
            </div>
          </div>
          <div className="self-stretch md:justify-start justify-center items-center gap-4 inline-flex">
            <Link to="/aplica-al-senda">
              <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl justify-center items-center gap-2 flex">
                <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Únete al Senda
                </button>
              </div>
            </Link>
            <Link to="/misionyvision">
              <div className="px-6 py-3 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl justify-center items-center gap-2 flex">
                <button className="text-neutral-100 text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Descubre más
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[670px] h-auto md:h-[572.44px] relative mb-8 md:mb-0">
          <img
            src={BullsEye}
            alt="bullseye image"
            className="absolute md:left-[-20px] md:top-[-30px] md:w-auto w-32"
          />
          <img src={Image01Home} alt="main image" className="w-full h-auto" />
          <img
            src={StarEmoji}
            alt="star emoji"
            className="absolute right-0 md:right-4 bottom-[-60px] md:bottom-[-120px] md:w-auto w-32 "
          />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
