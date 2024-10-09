import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Contacto() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contacto`, // Update this to match your backend URL
        formData
      );

      // If successful, show success modal
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.",
        confirmButtonColor: "#009bce",
      });

      // Reset the form fields
      setFormData({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Message: "",
      });

    } catch (error) {
      // If an error occurs, show error modal
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        confirmButtonColor: "#b0cb4f",
      });
    }
  };

  return (
    <div className="bg-[#f9f9fe] p-6 sm:p-12 lg:p-40 pt-36 flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row gap-12 justify-start items-center">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
          <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Contáctanos
          </div>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            ¿Tienes dudas sobre nuestro Colegio o no encontraste la <br />información necesaria? Contáctanos
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Nombre y Apellido in the same row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Nombre
                </label>
                <input
                  type="text"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Apellido
                </label>
                <input
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu apellido"
                  required
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
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu correo"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                  placeholder="Tu teléfono"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                Mensaje
              </label>
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                className="h-[110px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#b3b3b3] text-base font-normal"
                placeholder="Escribe tu mensaje"
                required
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
