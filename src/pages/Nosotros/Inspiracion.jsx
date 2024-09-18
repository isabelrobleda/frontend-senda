import React from "react";

function Inspiracion() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full h-auto  max-w-[1440px] bg-white flex flex-col md:flex-row justify-center items-start gap-12 pt-32 ">
        <div className="w-full h-auto flex left-0">
          <img src="src/assets/inspiracion/inspiracion.png" alt="image inspiración" className="md:h-[500px] h-80 md:w-auto md:left-0 md:mx-[128px] ml-10" />
        </div>
        <div className="w-full flex flex-col self-center items-start gap-4 p-8 md:mr-40">
          <div className="text-[#1e1e1e] text-2xl font-bold font-['Inter'] leading-tight">
            Inspiración
          </div>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            Nos inspiramos en la corriente del pensamiento que valora y pone
            al centro de su tarea al ser humano, esta concepción humanista nos
            hace reflexionar en los aspectos éticos que debemos y queremos
            exaltar, preservar y desarrollar.
            <br />
            <br />
            Creemos que cada uno de nuestros alumnos son personas únicas e
            irrepetibles y con la capacidad de dejar huella convirtiendo sus
            experiencias en historia y buscando las explicaciones de lo que
            acontece a su alrededor. Que son capaces de cultivar su
            pensamiento, cuestionar, indagar, investigar, crear ciencia,
            descubrir, inventar, dominar y cuidar la naturaleza.
            <br />
            <br />
            Nuestros alumnos expresan los sentimientos, emociones, su
            imaginación, sus intuiciones, capacidad de crear y cuidar cada
            experiencia con los demás, con el mundo y el universo con amor.
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] bg-white flex flex-col-reverse  md:flex-row justify-center items-start gap-12 p-8 md:p-16 mt-16 mb-40">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 p-4 md:ml-[128px]">
          <div className="text-[#1e1e1e] text-2xl font-bold font-['Inter'] leading-tight">
            Convicción
          </div>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            Tenemos la convicción de que toda persona posee una dignidad
            personal que debe ser valorada y respetada en su totalidad, con la
            capacidad de elegir entre el bien y el mal, en búsqueda constante
            de la verdad y la justicia que lo compromete a vivir en un orden
            social, con valores éticos y morales para construir vínculos con
            otros seres humanos y optar por hacer el bien.
            <br />
            <br />
            Valoramos y potencializamos la capacidad de crear, por lo que
            nuestros alumnos tienen espacios y tiempo para comprender su
            entorno y proponer soluciones; son conscientes de llevar una vida
            saludable y de su responsabilidad de preservar y proteger el medio
            ambiente.
            <br />
            <br />
            Mediante el uso de nuevas tecnologías desarrollan las competencias
            necesarias para ser ciudadanos responsables del siglo XXI, con un
            pensamiento global, actualizado, con habilidades digitales que le
            brinden la oportunidad de encontrar nuevos significados a su
            existencia y a todo lo que le rodea.
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src="src/assets/inspiracion/conviccion.png" alt="imagen convicción" className="md:h-[500px] h-80 md:w-auto md:left-0  mr-10" />
        </div>
      </div>
    </div>
  );
}

export default Inspiracion;
