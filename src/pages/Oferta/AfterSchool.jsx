import React from "react";

function AfterSchool() {
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
                className="absolute w-20 h-20 sm:w-8 sm:h-8 md:w-32 md:h-32 rounded-full md:bottom-36 md:left-10 sm:top-10 top-20 left-10"
                src="src/assets/after school/foto_patineta.png"
              />
              <img
                className="absolute w-18 h-20 sm:w-8 sm:h-8 md:w-32 md:h-32 rounded-full bottom-44 right-10"
                src="src/assets/after school/Deportes_Escalar.png"
              />
              <img
                className="absolute w-20 h-20 rounded-full left-10 bottom-36 md:bottom-20 md:right-24"
                src="src/assets/after school/inspiración.png"
              />
              <img
                className="absolute w-20 h-20 sm:w-8 sm:h-8 md:w-32 md:h-32 rounded-full md:top-8 md:right-48 right-20 bottom-20"
                src="src/assets/after school/convicción.png"
              />
              <img
                className="absolute w-8 md:w-16 md:h-16 md:bottom-20 md:right-80 opacity-65 bottom-20"
                src="src/assets/after school/basquetbol.png"
              />
              <img
                className="absolute w-8 md:w-18 md:h19 md:top-12 md:right-20 opacity-65 right-10 top-52"
                src="src/assets/after school/escalar.png"
              />
              <img
                className="absolute w-10 md:w-15 md:top-10 md:left-2/4 opacity-65 left-10 top-44"
                src="src/assets/after school/tarea.png"
              />
              <img
                className="absolute w-14 md:w-20 md:top-[600px] md:left-[500px] opacity-65 left-36 top-10"
                src="src/assets/after school/raqueta.png"
              />
              <img
                className="absolute md:w-14 w-10 md:bottom-36 md:left-60 opacity-65 bottom-44 right-44"
                src="src/assets/after school/futbol.png"
              />
              <img
                className="absolute md:w-14 w-12 md:top-20 md:-left-1/4 opacity-65 bottom-10 right-2"
                src="src/assets/after school/patineta.png"
              />
            </div>

            <div className="text-center z-10 relative">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold font-['Pangea'] leading-[1.2]">
                After School
                <br />
                <span className="text-[#1e1e1e]">Nuestra oferta para </span>
                <span className="text-[#b0cb4f]">miembros de la comunidad</span>
              </h1>
              <p className="text-[#757575] text-base sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] mt-4">
                Nuestro programa de After School está diseñado para proporcionar
                una experiencia enriquecedora y divertida,
                <br />
                promoviendo un equilibrio entre el aprendizaje y el tiempo de
                ocio. ¡Únete a nosotros y
                <br />
                descubre todo lo que tenemos para ofrecer!
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
                    El programa de After School es un servicio adicional en el cual, los participantes tendrán la oportunidad de disfrutar de diferentes actividades que les permitirán complementar y enriquecer su crecimiento y madurez de una forma divertida. Este programa está dirigido a los miembros de nuestra comunidad. Ofrecemos además, servicio de comedor.
                </div>
            </div>
            <div className="flex-1 flex-col justify-start items-start gap-4 flex">
                <div>
                    <span className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                        El servicio está a cargo de un personal altamente capacitado de la empresa IdeaSport, especialista en fair play y enseñanza del deporte individual y en equipo.{" "}
                    </span>
                    <span className="text-[#757575] text-base font-bold font-['Inter'] leading-snug">
                        Horario:
                    </span>
                    <span className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                        {" "}
                        Lunes a jueves: 14:00 a 17:00 horas
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Cards Section */}
<div className="px-4 md:px-16 py-16 text-center bg-[#f9f9fe] flex-col justify-center items-center gap-20 flex">
    <div className=" text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] ">
        Actividades
    </div>
    <div className=" text-center text-[#757575] text-base font-normal font-['Inter']">
        Nuestros alumnos pueden disfrutar de una variedad de actividades en nuestras instalaciones, diseñadas para fomentar la creatividad y el desarrollo físico:
    </div>
    <div className="flex flex-col md:grid md:grid-cols-4 md:gap-10 md:justify-center gap-8">
        {/* Card 1 */}
        <div className=" px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/📓.png" alt="patineta" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Tareas
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Para que los alumnos puedan realizar sus tareas en un ambiente tranquilo y supervisado.
                </div>
            </div>
        </div>
        {/* Card 2 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/⚽.png" alt="futbol" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Fútbol
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Entrenamientos y partidos para desarrollar habilidades técnicas y de trabajo en equipo.
                </div>
            </div>
        </div>
        {/* Card 3 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/🏀.png" alt="basquet" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Baloncesto
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Clases y juegos para mejorar la coordinación y el espíritu deportivo.
                </div>
            </div>
        </div>
        {/* Card 4 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/🎾.png" alt="pickleball" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Pickleball
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Fomenta la actividad física, coordinación, trabajo en equipo y es accesible para todos.
                </div>
            </div>
        </div>
        
    </div>
    <div className="flex flex-col md:flex-row md:justify-center gap-8">
    {/* Card 5 */}
    <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/🏑.png" alt="hockey sobre pasto" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Hockey sobre pasto
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Promueve el trabajo en equipo, la coordinación, resistencia física y disciplina.
                </div>
            </div>
        </div>
        {/* Card 6 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/🛹.png" alt="patineta" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Patineta
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Espacio seguro para practicar y aprender técnicas de skateboarding.
                </div>
            </div>
        </div>
        {/* Card 7 */}
        <div className="px-6 py-12 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
                <img src="src/assets/after school/🪨.png" alt="roca" className="w-18 pb-2" />
                <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Muro de escalar
                </div>
                <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Actividad que fortalece tanto el cuerpo como la mente, fomentando el esfuerzo y la perseverancia.
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
                src="src/assets/after school/afterschool_02 2.png"
                alt="After School 1"
            />
        </div>
        <div className="relative w-full h-80">
            <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                src="src/assets/after school/PCI_3443.png"
                alt="After School 2"
            />
        </div>
        <div className="relative w-full h-80">
            <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                src="src/assets/after school/PCI_3753.png"
                alt="After School 3"
            />
        </div>
        <div className="relative w-full h-80">
            <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                src="src/assets/after school/PCI_3923.png"
                alt="After School 4"
            />
        </div>
        <div className="relative w-full h-80">
            <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                src="src/assets/after school/PCI_4104.png"
                alt="After School 5"
            />
        </div>
        <div className="relative w-full h-80">
            <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                src="src/assets/after school/PCI_4207.png"
                alt="After School 6"
            />
        </div>
    </div>
</div>


      {/* CTA Section */}
      <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
        <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
          <div className="abolute flex flex-col justify-between">
            <img
              src="src/assets/CTAs/CTA-01.png"
              alt="background green cta"
              className="relative z-0 md:rounded-none rounded-lg"
            />
            <h3 className="absolute z-10 px-14 mt-20 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-32 mt-28 px-14 font-light md:w-1/2 text-sm md:text-base">
              Si tienes preguntas sobre el maternal, no dudes en enviarle un
              correo electrónico a Roxana Fernández L., nuestra Directora de
              Preescolar
            </p>
            <a href="mailto:direccionpreescolar@colegiosenda.edu.mx">
              <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl border border-white ">
                <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Contactar
                </span>
              </div>
            </a>
          </div>
          <img
            src="src/assets/CTAs/img-maternal.png"
            alt="image maternal"
            className="md:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AfterSchool;
