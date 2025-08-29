import React from 'react';
import Logo30 from '../assets/logo_30_anos.png';

const Banner30 = () => {
  return (
    <div className="relative w-full bg-white flex flex-col md:flex-row items-center justify-center text-center md:text-left py-10 px-6 rounded-2xl shadow-lg gap-4">
      
      {/* Imagen */}
      <img 
        className="w-60 md:w-60 animate-fade-in" 
        src={Logo30} 
        alt="30 años Senda" 
      />

      {/* Texto */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-base ">
          ¡Celebrando <span className="relative text-[#b0cb4f]">30 años</span> de excelencia!
        </h2>
        <p className="mt-4 text-xl md:text-xl text-black/90 max-w-2xl">
          Gracias por ser parte de nuestro camino
        </p>
      </div>
    </div>
  );
};

export default Banner30;
