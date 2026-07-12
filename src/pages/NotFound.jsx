import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

function NotFound() {
  useEffect(() => {
    document.title = "Página no encontrada | Colegio Senda";
    // Señal para que Google no indexe URLs inexistentes (soft 404)
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => document.head.removeChild(robots);
  }, []);

  return (
    <div className="min-h-screen w-full px-4 pt-40 pb-24 flex flex-col justify-center items-center gap-6 text-center">
      <h1 className="text-[#1e1e1e] text-[2.5rem] md:text-[3.5rem] font-semibold font-pangea leading-tight">
        Página no encontrada
      </h1>
      <p className="text-[#757575] text-lg md:text-2xl font-semibold leading-snug max-w-2xl">
        La página que buscas no existe o cambió de lugar. Te ayudamos a
        encontrar el camino:
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Link
          to="/"
          className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl text-[#f2f2f2] text-base font-medium text-center"
        >
          Ir al inicio
        </Link>
        <Link
          to="/planea-tu-visita"
          className="px-6 py-3 border border-[#009bce] text-[#009bce] hover:bg-[#009bce] hover:text-white rounded-2xl text-base font-medium text-center"
        >
          Planea tu visita
        </Link>
        <WhatsAppButton
          message="Hola, me gustaría más información del Colegio Senda."
          source="not_found"
          className="px-6 py-3 bg-[#b0cb4f] hover:bg-[#859c36] rounded-2xl text-[#f2f2f2] text-base font-medium text-center"
        >
          Escríbenos por WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}

export default NotFound;
