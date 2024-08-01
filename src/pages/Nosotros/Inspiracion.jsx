import React from "react";

function Inspiracion() {
  return (
    <div>
      <div className="h-96 pt-16  bg-white flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch justify-start items-center gap-12 inline-flex">
          <div className="w-96 h-96 relative">
            <img src="src/assets/inspiracion01.png" alt="" />
          </div>
          <div className="w-6/12 p-16 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-[#1e1e1e] text-5xl font-bold font-['Inter'] leading-10">
              Inspiración
            </div>
            <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
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
      </div>
      <div className="h-96 mt-32 mb-52 p-16 bg-white flex-col justify-center items-center gap-12 inline-flex">
        <div className="self-stretch px-16 justify-between items-center inline-flex">
          <div className="w-6/12 flex-col pt-20  justify-center items-center gap-4 inline-flex">
            <div className="self-stretch text-[#1e1e1e] text-5xl font-bold font-['Inter'] leading-10">
              Convicción
            </div>
            <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
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
          <div className="w-96 h-96 relative">
            <img src="src/assets/conviccion.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspiracion;
