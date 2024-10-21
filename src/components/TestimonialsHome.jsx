import React from "react";
import { Link } from "react-router-dom";
import TestimonialImage from "../assets/testimonial-image.png";

function TestimonialsHome() {
  return (
    <div className="w-full md:h-[800px] flex justify-center items-center p-8 md:p-16 bg-white">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4">
            <h3 className="text-[#1e1e1e] text-3xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px] md:pt-24">
              Nuestra inspiración y convicción
            </h3>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              Creemos que cada uno de nuestros alumnos son personas únicas e
              irrepetibles y con la capacidad de dejar huella convirtiendo sus
              experiencias en historia y buscando las explicaciones de lo que
              acontece a su alrededor.
            </div>
            <Link to="/inspiracion-conviccion">
            <div className="mt-[32px] px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl flex justify-center items-center gap-2">
              
                <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Descubre más
                </button>
              
            </div>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={TestimonialImage}
              alt="testimonials-home"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsHome;
