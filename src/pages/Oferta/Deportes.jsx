import React from "react";

function Deportes() {
  return (
    <div>
      <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
        <div className="relative w-full flex flex-wrap justify-center items-center gap-4 p-4">
          <div className="relative h-screen w-full flex justify-center items-center p-4">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat opacity-10"
                style={{
                  backgroundImage: "url(src/assets/Header-background.png)",
                }}
              ></div>
            </div>

            <div className="floating-images">
              <img
                className="absolute w-20 h-20 sm:w-8 sm:h-8 md:w-32 md:h-32  md:bottom-36 md:left-10 sm:top-10 top-20 left-10"
                src="src/assets/deportes/bici.png"
              />
              <img
                className="absolute w-18 h-20 sm:w-8 sm:h-8 md:w-32 md:h-32  bottom-44 right-10"
                src="src/assets/deportes/Group 79.png"
              />
              <img
                className="absolute w-20 h-20  left-10 bottom-36 md:bottom-20 md:right-24"
                src="src/assets/deportes/Group 80.png"
              />
              <img
                className="absolute w-18 h-18 sm:w-8 sm:h-8 md:w-20 md:h-20  md:top-8 md:right-24 right-20 top-20"
                src="src/assets/deportes/Group 81.png"
              />
              <img
                className="absolute w-20 h-20 sm:w-8 sm:h-8 md:w-24 md:h-24  md:bottom-8 md:right-2/4 right-2 top-44"
                src="src/assets/deportes/Group 82.png"
              />
              <img
                className="absolute w-16 h-16 sm:w-8 sm:h-8 md:w-32 md:h-32   bottom-20"
                src="src/assets/deportes/Group 83.png"
              />
              <img
                className="absolute w-20 h-20 sm:w-8 sm:h-8 md:w-24 md:h-24  md:bottom-44 md:left-80 left-20 top-56"
                src="src/assets/deportes/Group 84.png"
              />
              <img
                className="absolute w-14 h-14 sm:w-8 sm:h-8 md:w-20 md:h-20  md:top-20 md:right-80 right-20 bottom-20"
                src="src/assets/deportes/Group 85.png"
              />
            </div>

            <div className="text-center z-10 relative">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold font-['Pangea'] leading-[1.2]">
                Deportes que fomentan
                <br />
                <span className="text-[#b0cb4f]">el desarrollo integral</span>
              </h1>
              <p className="text-[#757575] text-base sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] mt-4">
                En el Senda ofrecemos una diversidad en deportes para todos los
                gustos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="p-8 md:p-16 bg-white flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch px-4 md:px-16 flex-col justify-start items-start gap-12 flex">
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
                Fomentamos la
                participación en actividades deportivas desde una edad temprana
                para asegurar un desarrollo integral en nuestros alumnos. Los
                deportes no solo mejoran la condición física, sino que también
                contribuyen al bienestar emocional y social. Nuestros programas
                están diseñados para ser inclusivos y motivar a todos los
                estudiantes a descubrir y desarrollar sus talentos deportivos en
                un entorno seguro y positivo.
              </div>
            </div>
            <div className="flex-1 flex-col justify-start items-start gap-4 flex">
              <div>
                <span className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Estamos comprometidos en proporcionar a nuestros alumnos las
                  mejores oportunidades para sobresalir en sus deportes
                  favoritos. Contamos con instalaciones de primer nivel y
                  nuestra alianza con IdeaSport, nos brinda la oportunidad de
                  competir en torneos nacionales, en promover diferentes
                  deportes y contar entrenadores especializados que guían a los
                  estudiantes en su desarrollo deportivo. Creemos que a través
                  de la práctica deportiva, los alumnos aprenden valores
                  esenciales como la perseverancia, la cooperación y el respeto.
                  <br />
                  <br />
                  Grabamos un podcast con el Director y Fundador de IdeaSport,
                  ve a este link si quieres saber más sobre la compañía y
                  nuestra alianza con ellos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-16 py-16 text-center bg-[#f9f9fe] flex-col justify-center items-center gap-20 flex">
        <div className=" text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] ">
          Deportes en el Senda
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-10 md:justify-center gap-8">
          {/* Card 2 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src="src/assets/after school/⚽.png"
                alt="futbol"
                className="w-18 pb-2"
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
          {/* Card 3 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src="src/assets/after school/🏀.png"
                alt="basquet"
                className="w-18 pb-2"
              />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Baloncesto
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Nuestras clases de baloncesto mejoran coordinación, resistencia
                y trabajo en equipo, desarrollando mente y cuerpo.
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src="src/assets/after school/🎾.png"
                alt="pickleball"
                className="w-18 pb-2"
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
          <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src="src/assets/after school/🏑.png"
                alt="hockey sobre pasto"
                className="w-18 pb-2"
              />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Hockey sobre pasto
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Este deporte mejora resistencia, velocidad y coordinación,
                además de fomentar el trabajo en equipo y la estrategia.
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src="src/assets/after school/🛹.png"
                alt="patineta"
                className="w-18 pb-2"
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
          <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src="src/assets/after school/🪨.png"
                alt="roca"
                className="w-18 pb-2"
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
              src="src/assets/deportes/deportes_escalar_02.png"
              alt="deportes 1"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src="src/assets/deportes/Deportes_Futbol 2.png"
              alt="Deportes 2"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src="src/assets/deportes/deportes_patineta_02.png"
              alt="Deportes 3"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src="src/assets/deportes/P1270918.png"
              alt="Deportes 4"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src="src/assets/deportes/Screenshot 2024-08-17 at 18.08.48 1.png"
              alt="Deportes 5"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src="src/assets/deportes/Screenshot 2024-08-17 at 18.09.25 1.png"
              alt="Deportes 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deportes;
