import React from "react";

function Contacto() {
  return (
    <div className="bg-[#f9f9fe] p-6 sm:p-12 lg:p-40 pt-36 flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row gap-12 justify-start items-center">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
          <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Contáctanos
          </div>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            ¿Tienes dudas sobre nuestro Colegio o no encontraste la información
            necesaria? Contáctanos
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
              General
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              senda@colegiosenda.edu.mx
              <br />
              (55) 5683-2060
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
              Admisiones
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              admisiones@colegiosenda.edu.mx
              <br />
              (55) 5683-2060
              <br />
              WhatsApp: (+52) 5556832060
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-[10px] shadow border border-[#e4e4de]">
          <div className="mb-6">
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Contáctanos
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug mt-2">
              Por favor llena el siguiente formulario y nos pondremos en contacto contigo:
            </div>
          </div>
          <form className="flex flex-col gap-6">
            {/* Nombre y Apellido in the same row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Nombre
                </label>
                <input
                  type="text"
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Apellido
                </label>
                <input
                  type="text"
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            {/* Correo electrónico y Teléfono in the same row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu correo"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu teléfono"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                Mensaje
              </label>
              <textarea
                className="h-[110px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#009bce] text-white rounded-lg"
            >
              Mandar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
