import React from "react";

function TestimonialsHome() {
  return (
    <div className="w-full h-auto p-8 md:p-16 bg-white flex flex-col justify-center items-center gap-12 ">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4">
          <div className="text-[#1e1e1e] text-3xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px] md:pt-24">
            Nuestra misión y visión
          </div>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="px-6 py-3 bg-[#009bce] rounded-2xl flex justify-center items-center gap-2">
            <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
              Unete al Colegio Senda
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative h-[429px]">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="src/assets/testimonial-images.png"
              alt="testimonials-home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsHome;
