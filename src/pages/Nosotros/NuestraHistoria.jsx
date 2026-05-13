import React from "react";
import NuestraHistoriaImg from "../../assets/30años3.JPG";
import Circle from "../../assets/nuestra_historia/circle.png";
import Line from "../../assets/nuestra_historia/line.png";
import Chick from "../../assets/nuestra_historia/chick.png";
import Truck from "../../assets/nuestra_historia/truck.png";
import House from "../../assets/nuestra_historia/house.png";
import Graduation from "../../assets/nuestra_historia/Graduation.png";
import Rocket from "../../assets/nuestra_historia/rocket.png";
import Robot from "../../assets/nuestra_historia/🤖 .png";
import Raquet from "../../assets/nuestra_historia/1f3be.png";

function NuestraHistoria() {
  return (
    <div>
      <div className="w-full p-8 mt-20 md:py-16 md:px-32 bg-white flex flex-col justify-center items-start gap-12">
        <div className="w-full max-w-[1440px] self-center flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full md:w-[523px] flex flex-col justify-start items-start gap-4">
            <div className="text-[#1e1e1e] text-2xl md:text-5xl font-bold font-['Inter'] leading-[28.80px] md:leading-[57.60px]">
              Nuestra historia
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              En 1996, cuatro mujeres, Mónica, Tesha, Clara y Maricarmen,
              decidieron sembrar una semilla que transformaría la educación en
              nuestro país. Así nació el Colegio Senda, inspirado por el sueño
              de cambiar paradigmas y trascender horizontes. Hoy, con 28 años de
              historia, celebramos un legado de excelencia y compromiso.
              <br />
              <br />
              Nos llena de orgullo ver a nuestros alumnos y exalumnos brillando
              en el mundo, formados con valores éticos y preparados para ser
              agentes de cambio en la sociedad. Su éxito es nuestra mayor
              recompensa y la prueba de que los sueños, cuando se persiguen con
              pasión y dedicación, pueden transformar el mundo.
              <br />
              <br />
              Fue fundado como preescolar y primaria. Desde nuestro inicio nos
              establecimos como un colegio bilingüe, brindando apoyo
              especializado a los alumnos que presentan situaciones que
              dificultan su aprendizaje. Hoy en día, también tenemos maternal y
              secundaria. Los alumnos son atendidos de manera personal según su
              ritmo de aprendizaje y etapa de desarrollo. Aseguramos los
              resultados de cada alumno comprendiendo que existen diferentes
              inteligencias y maneras de aprender.
            </div>
          </div>
          <div className="w-full self-center md:w-[502px] h-auto relative">
            <img
              src={NuestraHistoriaImg}
              alt="imagen nuestra historia"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-8 md:py-16 md:px-32 pb-16 bg-white flex flex-col justify-center items-start gap-12">
        <h2 className=" w-full max-w-[1440px] self-center text-[#1e1e1e] text-lg md:text-3xl font-bold font-['Inter'] leading-[28.80px] md:leading-[57.60px]">
          Línea del Tiempo
        </h2>
        <div className="w-full flex flex-col max-w-[1440px] self-center ">
          <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center sm:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />
              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-36 pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full sm:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  1996
                </div>
                <img
                  className="w-[29px] h-[29px]"
                  src={Chick}
                  alt="chick emoji"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug pb-10">
                Fundación del colegio en agosto. Comenzaron las clases con un
                preescolar Montessori, bilingüe y mixto, además de un grupo de
                primero y segundo de primaria. Las instalaciones eran pequeñas,
                con un jardín y un salón de usos múltiples.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />

              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-32 pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2000
                </div>
                <img
                  className="w-[29px] h-[29px] pl-1"
                  src={Truck}
                  alt="truck"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug pb-12">
                El colegio se mudó a un nuevo edificio, el cual era una fábrica
                de chocolates, donde se construyeron 10 salones, un auditorio y
                un patio. El colegio ocupaba la planta baja y el primer piso.{" "}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />

              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-32 pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2005
                </div>
                <img className="w-[29px] h-[29px]" src={House} alt="house"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug pb-12">
                Remodelación completa del edificio de 4 pisos, que se
                convirtieron en las instalaciones actuales. En ese momento, el
                colegio tenía 180 alumnos en preescolar y primaria.{" "}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />

              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-34   pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2010
                </div>
                <img
                  className="w-[29px] h-[29px]"
                  src={Graduation}
                  alt="graduation icon"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug pb-12">
                Primer contacto con la Universidad de Educación de Harvard para
                implementar el modelo de Cultura del Pensamiento en el colegio.
                Iniciamos con un salón de computación. Escribímos y registramos
                el Modelo Educativo y Pedagógico Senda.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />

              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-48 pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2015
                </div>
                <img className="w-[29px] h-[29px]" src={Rocket} alt="rocket"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Inauguración de la secundaria. Se remodeló un área especial para
                esta sección y se llevó a cabo el primer Congreso de Educación
                con Mark Church, quien ha sido mentor del colegio desde
                entonces. Consolidamos nuestro modelo pedagógico como un colegio
                humanista, constructivista, basado en la cultura del
                pensamiento. El colegio fue reconocido como una escuela
                innovadora, en deportes urbanos como patineta y muro de escalar.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />

              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-52 pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2019
                </div>
                <img className="w-[29px] h-[29px]" src={Robot} alt="robot"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Se establecieron los tres grados de secundaria, maternal,
                preescolar y primaria contábamos con 280 alumnos. En este año se
                organizó el segundo Congreso de Educación con nuestro mentor
                Mark Church de la University of Education. Nos aliamos con
                Knotion para obtener una plataforma digital robusta la cual nos
                benefició para poder llevar la educación a distancia con
                nuestros alumnos a través de sus iPads. Ofreciendo a nuestros
                alumnos bilingüismo digital y Coding.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />
              <img
                src={Line}
                alt="line"
                className="ml-2 w-1 h-32 pb-3 hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2024
                </div>
                <img className="w-[29px] h-[29px]" src={Raquet} alt="raquet"
              loading="lazy"
            />
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Inauguración de canchas de pickleball, hockey sobre pasto,
                cancha de futbol, patineta, muro de escalar, telas, salón de
                psicomotricidad para niños pequeños. Participación en torneos de
                Coding y Robótica, y Teatro.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="flex-shrink-0 flex flex-col justify-start items-center md:items-start gap-4">
              <img
                src={Circle}
                alt="circle"
                className="h-full hidden sm:block"
              loading="lazy"
            />
            </div>
            <div className="w-full md:w-[600px] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[59px] text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  2026
                </div>
                <span className="text-[29px] leading-none">🎉</span>
              </div>
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                ¡Celebramos tres décadas! Un equipo comprometido con la
                educación de calidad y el desarrollo integral de cada alumno.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestraHistoria;
