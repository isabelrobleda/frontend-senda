import React from "react";
import MainBackground from "../../assets/deportes/main-background.png";
import Futbol from "../../assets/after school/⚽.png";
import Pickleball from "../../assets/after school/🎾.png";
import Hockey from "../../assets/after school/🏑.png";
import Patineta from "../../assets/after school/🛹.png";
import Roca from "../../assets/after school/🪨.png";
import Escalar from "../../assets/deportes/deportes_escalar_02.png";
import Futbol2 from "../../assets/deportes/Deportes_Futbol 2.png";
import Patineta2 from "../../assets/deportes/deportes_patineta_02.png";
import Deportes4 from "../../assets/deportes/P1270918.png";
import Deportes5 from "../../assets/deportes/Screenshot 2024-08-17 at 18.08.48 1.png";
import Deportes6 from "../../assets/deportes/Screenshot 2024-08-17 at 18.09.25 1.png";
import FutbolImage from "../../assets/deportes/futbol.jpeg";
import PickleballImage from "../../assets/deportes/pickleball-img.jpeg";
import PatinetaImage from "../../assets/deportes/patineta.jpeg";

function Deportes() {
  return (
    <div>
      <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
        <div
          className="relative w-full h-screen flex flex-wrap justify-center items-center gap-4 p-4"
          style={{
            maxWidth: "100vw",
            backgroundImage: `url(${MainBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text and IdeaSport image */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold font-pangea leading-[1.2]">
              Deportes que fomentan
              <br />
              <span className="text-[#009BCE]">el desarrollo integral</span>
            </h1>
            <p className="text-[#757575] text-base sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] mt-4">
              En el Senda ofrecemos una diversidad de deportes para todos los gustos.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="p-8 md:p-28 bg-white md:max-w-max self-center  flex-col justify-center items-center gap-12 inline-flex">
        <div className="self-center w-full px-4 md:px-16 flex-col justify-start items-start gap-12 flex">
          <div className="w-full text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Información
          </div>
          <div className="self-stretch justify-start items-start gap-6 flex flex-col md:flex-row">
            <div className="flex-1 flex-col justify-start items-start gap-4 flex">
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                En nuestro colegio, creemos en la importancia de una educación
                integral que incluya la actividad física como un pilar
                fundamental. Ofrecemos una variedad de deportes diseñados para
                desarrollar habilidades físicas, fomentar el trabajo en equipo y
                promover un estilo de vida saludable.
                <br />
                <br />
                Fomentamos la participación en actividades deportivas desde una
                edad temprana para asegurar un desarrollo integral en nuestros
                alumnos. Los deportes no solo mejoran la condición física, sino
                que también contribuyen al bienestar emocional y social.
                Nuestros programas están diseñados para ser inclusivos y motivar
                a todos los estudiantes a descubrir y desarrollar sus talentos
                deportivos en un entorno seguro y positivo.
              </div>
            </div>
            <div className="flex-1 flex-col justify-start items-start gap-4 flex">
              <div>
                <span className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Estamos comprometidos en proporcionar a nuestros alumnos las
                  mejores oportunidades para sobresalir en sus deportes
                  favoritos. Contamos con instalaciones de primer nivel y
                  entrenadores especializados que guían a los estudiantes en su
                  desarrollo deportivo. Creemos que a través de la práctica
                  deportiva, los alumnos aprenden valores esenciales como la
                  perseverancia, la cooperación y el respeto.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-16 py-24 text-center bg-[#f9f9fe] flex-col justify-center items-center gap-8 flex">
        <div className=" text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] ">
          Deportes en el Senda
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-10 md:justify-center gap-8">
          {/* Card 2 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={Futbol} alt="futbol" className="w-18 pb-2"
              loading="lazy"
            />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Fútbol
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Nuestro fútbol enseña habilidades técnicas y tácticas,
                promoviendo trabajo en equipo, disciplina y espíritu deportivo.
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={Pickleball} alt="pickleball" className="w-18 pb-2"
              loading="lazy"
            />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Pickleball
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Un deporte dinámico que mezcla tenis, bádminton y ping-pong.
                Mejora la coordinación, agilidad y reacción.
              </div>
            </div>
          </div>

          {/* Card 5 */}
         

        {/* Card 6 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
          <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
            <img src={Patineta} alt="patineta" className="w-18 pb-2"
              loading="lazy"
            />
            <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Patineta
            </div>
            <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              Ofrecemos un espacio seguro para skateboarding, mejorando
              equilibrio y coordinación, además de ser divertido.
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
          <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
            <img src={Roca} alt="roca" className="w-18 pb-2"
              loading="lazy"
            />
            <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Muro de escalar
            </div>
            <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              La escalada promueve fuerza, flexibilidad y resolución de
              problemas, ideal para estudiantes que buscan desafíos.
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="px-4 md:px-16 py-16 md:py-32 flex flex-col justify-center items-center gap-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
          <div className=" w-full h-80">
            <img
              className=" inset-0 w-full h-full object-cover rounded-[20px]"
              src={Escalar}
              alt="deportes 1"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={FutbolImage}
              alt="Deportes 2"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={PatinetaImage}
              alt="Deportes 3"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={Deportes4}
              alt="Deportes 4"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={Deportes5}
              alt="Deportes 5"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={PickleballImage}
              alt="Deportes 6"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deportes;
