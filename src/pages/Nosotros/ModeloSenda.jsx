import React from "react";
import { Link } from "react-router-dom";
import ModeloSendaImg from "../../assets/modelo_senda/Modelo_Senda.png";

function ModeloSenda() {
  return (
    <div>
      <div className="md:h-[650px] h-auto w-full p-8 md:p-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-12">
        <div className="w-full md:w-auto h-auto px-4 md:px-16 flex flex-col justify-center items-center gap-12">
          <div className="w-full h-auto text-left md:text-left flex flex-col md:items-start gap-2">
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px] mt-10 md:ml-0 sm:ml-28">
              Modelo Senda
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              Ofreciendo nuevas formas de aprender y enseñar.
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="w-full md:w-[523px] flex flex-col justify-start items-start gap-4">
              <div className="text-[#1e1e1e] text-base font-bold font-['Inter'] leading-snug">
                Modelo pedagógico Senda
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                La principal fortaleza del Colegio Senda es su Modelo Educativo,
                en donde la Cultura del Pensamiento está presente en todas las
                experiencias de aprendizaje.
                <br />
                <br />
                Este modelo constructivista se enfoca en enseñar a pensar y
                hacer el pensamiento visible para que el alumno se adueñe de su
                aprendizaje y se le abran ventanas hacia la cognición y la
                identidad personal. Los alumnos son atendidos de manera personal
                según su ritmo de aprendizaje y etapa de desarrollo.{" "}
              </div>
            </div>
            <div className="w-full md:w-[523px] flex flex-col justify-start items-start gap-4 mb-10">
              <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                Programas personalizados
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Aseguramos los resultados de cada alumno comprendiendo que
                existen diferentes inteligencias y maneras de aprender.
                <br />
                <br />
                Contamos con programas especializados de ética y valores, y se
                fomenta un ambiente de aprendizaje en donde el alumno participa
                en su aprendizaje a través del diseño de proyectos.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[800px] h-auto w-full pr-8 md:pr-16 py-8 md:py-16 bg-white flex flex-col md:flex-row justify-start items-center">
        <img
          className="w-auto md:w-[592px] md:h-[476px]"
          src={ModeloSendaImg}
          alt="Modelo Pedagógico"
        />
        <div className="w-full md:w-[523px] flex flex-col justify-start items-start gap-6 ml-28">
          <div className="text-left md:text-left h-auto flex flex-col justify-start items-start gap-4">
            <div className="text-[#1e1e1e] text-3xl md:text-5xl font-bold font-['Inter'] leading-[40px] md:leading-[57.60px]">
              Modelo
              <br />
              Pedagógico Senda
            </div>
            <ul className="text-[#757575] text-base font-normal font-['Inter'] leading-snug ml-4">
              <li className="list-disc">Bicultural</li>
              <li className="list-disc">Constructivista</li>
              <li className="list-disc">Aprendizaje basado en proyectos</li>
              <li className="list-disc">Inteligencias Múltiples</li>
              <li className="list-disc">Trabajo cooperativo</li>
              <li className="list-disc">Modelo de ética y valores</li>
              <li className="list-disc">Bilingüismo digital y Plataforma Knotion</li>
              <li className="list-disc">Deportes y Psicomotricidad</li>
              <li className="list-disc">Preescolar Montessori</li>
            </ul>
          </div>
          <Link to="/aplica-al-senda">
            <button className="mt-6 md:mt-0 px-6 mb-10 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
              <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                Únete al Colegio Senda
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModeloSenda;
