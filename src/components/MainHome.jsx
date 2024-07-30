import React from 'react';

function MainHome() {
  return (
    <div className="relative w-full h-auto px-4 md:px-16 py-20 md:py-40 flex-col justify-center items-center gap-8 inline-flex">
      <div className="absolute inset-0 z-0">
        <img className='w-screen h-full object-cover opacity-15' src='src/assets/Header-background.png' alt='Background' />
      </div>
      <div className="relative z-10 self-stretch justify-between items-center flex flex-col-reverse md:flex-row">
        <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold text-pangea leading-tight md:leading-[68.40px]">
              Getting the best quality
              <br />
              education is now more easy
            </div>
            <div className="self-stretch text-[#757575] text-lg md:text-2xl font-semibold font-['Inter'] leading-snug md:leading-[28.80px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br />
              elit, sed do eiusmod tempor ipsum dolor sit amet incididunt.
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 flex">
              <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                Unete al Colegio Senda
              </button>
            </div>
            <div className="px-6 py-3 bg-[#b0cb4f] rounded-2xl justify-center items-center gap-2 flex">
              <button className="text-neutral-100 text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                Descubre más
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[605px] h-auto md:h-[572.44px] relative mb-8 md:mb-0">
          <img src="src/assets/Image01-Home.png" alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
