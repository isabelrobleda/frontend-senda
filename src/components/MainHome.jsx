import React from 'react';
import { Link } from 'react-router-dom';

function MainHome() {
  return (
    <div className="relative w-full md:h-screen px-4 md:px-16 py-20 md:py-40 flex-col justify-center items-center gap-8 inline-flex">
      <div className="absolute inset-0 z-0">
        <img className="w-screen h-full object-cover opacity-10" src="src/assets/Header-background.png" alt="Background" />
      </div>
      <div className="relative self-center z-10 justify-between items-center flex flex-col-reverse md:flex-row">
        <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-tight md:leading-[68.40px] relative">
              Ser una comunidad que
              <br />
              <img
                  src="src/assets/green-vector.png"
                  alt=""
                  className="absolute md:left-4 md:top-32 transform -translate-y-3/4 translate-x-[-10%] z-0  md:w-auto hidden md:block"
                />
              <span className="relative">
                educa
                
              </span>{" "}
              para trascender
            </div>
            <div className="self-stretch text-[#757575] text-lg md:text-2xl font-semibold font-['Inter'] leading-snug md:leading-[28.80px]">
              Somos una comunidad educativa inmersa en la cultura de pensamiento, comprometida con el bienestar emocional
              <br />
              de cada alumno.
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 flex">
              <Link to="/aplica-al-senda">
                <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Unete al Senda
                </button>
              </Link>
            </div>
            <div className="px-6 py-3 bg-[#b0cb4f] rounded-2xl justify-center items-center gap-2 flex">
              <Link to="/misionyvision">
                <button className="text-neutral-100 text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Descubre más
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[605px] h-auto md:h-[572.44px] relative mb-8 md:mb-0">
          <img src="src/assets/bullseye-emoji.png" alt="bullseye image" className="absolute md:left-[-20px] md:top-[-30px] md:w-auto w-32" />
          <img src="src/assets/Image01-Home.png" alt="" className="w-full h-auto" />
          <img src="src/assets/star-emoji.png" alt="" className="absolute right-0 bottom-[-70px] md:w-auto w-32 " />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
