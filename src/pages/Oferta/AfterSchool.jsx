import React from "react";
import MainAfterSchool from "../../assets/after school/main-after-school.png";
import IdeaSport from "../../assets/Idea-sport.png";
import PatinetaIcon from "../../assets/after school/📓.png";
import FutbolIcon from "../../assets/after school/⚽.png";
import PickleballIcon from "../../assets/after school/🎾.png";
import HockeyIcon from "../../assets/after school/🏑.png";
import PatinetaIcon2 from "../../assets/after school/🛹.png";
import EscalarIcon from "../../assets/after school/🪨.png";
import BabyIcon from "../../assets/after school/baby.png";
import DancerIcon from "../../assets/after school/dancer.png";
import ImgAfterSchool01 from "../../assets/after school/psicomotricidad-image.jpeg";
import ImgAfterSchool02 from "../../assets/after school/PCI_3443.png";
import ImgAfterSchool03 from "../../assets/after school/minifut-image.jpeg";
import ImgAfterSchool04 from "../../assets/after school/PCI_3923.png";
import ImgAfterSchool05 from "../../assets/after school/patineta-image.jpeg";
import ImgAfterSchool06 from "../../assets/after school/pickleball-image.jpeg";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAAfterSchool from "../../assets/after school/CTA-After-School.png";

function AfterSchool() {
  return (
    <div>
      <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
        <div className="relative w-full h-screen flex flex-wrap justify-center items-center gap-4 p-4">
          {/* Background Image */}
          <img
            src={MainAfterSchool}
            alt="background image after school"
            className="absolute inset-0 w-full h-full object-cover z-0 md:block hidden" 
          />

<div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat opacity-10 md:hidden"
              style={{
                backgroundImage: "url(src/assets/Header-background.png)",
              }}
            ></div>
          </div>

          {/* Text and IdeaSport image */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold font-['Pangea'] leading-[1.2]">
              After School
              <br />
              <span className="text-[#1e1e1e]">Nuestra oferta para </span>
              <span className="text-[#b0cb4f]">la tarde</span>
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

            {/* Center IdeaSport Image */}
            <div className="pt-8">
              <img src={IdeaSport} alt="Idea Sport" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div className="p-8 md:p-16 md:h-[500px] bg-white flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch px-4 md:px-16 flex-col justify-start items-start gap-12 flex">
          <div className="w-full  text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Información
          </div>
          <div className="self-stretch justify-start items-start gap-6 flex flex-col md:flex-row">
            <div className="flex-1 flex-col justify-start items-start gap-4 flex">
              <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                El programa de After School es un servicio adicional en el cual,
                los participantes tendrán la oportunidad de disfrutar de
                diferentes actividades que les permitirán complementar y
                enriquecer su crecimiento y madurez de una forma divertida. Este
                programa está dirigido a los miembros de nuestra comunidad. Para
                los alumnos del Senda, ofrecemos además, servicio de comedor.
              </div>
            </div>
            <div className="flex-1 flex-col justify-start items-start gap-4 flex">
              <div>
                <span className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  El servicio está a cargo de un personal altamente capacitado
                  de la empresa IdeaSport, especialista en fair play y enseñanza
                  del deporte individual y en equipo.{" "}
                </span>
                <br />
                <br />
                <span className="text-[#757575] text-base font-bold font-['Inter'] leading-snug">
                  Horario:
                </span>
                <span className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  {" "}
                  <br />
                  Lunes a jueves: 14:00 a 17:00 horas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-16 py-16 text-center bg-[#f9f9fe] flex-col justify-center items-center flex">
        <div className=" text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] pb-3">
          Actividades
        </div>
        <div className=" text-center text-[#757575] text-base font-normal font-['Inter'] pb-20">
          Nuestros alumnos pueden disfrutar de una variedad de actividades en
          nuestras instalaciones, diseñadas para fomentar la creatividad y el
          desarrollo físico:
        </div>
        <div className="flex flex-col md:grid md:grid-cols-4 md:gap-10 md:justify-center gap-8">
          {/* Card 1 */}
          <div className=" px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={PatinetaIcon} alt="patineta" className="w-18 pb-2" />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Tareas
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Para que los alumnos puedan realizar sus tareas en un ambiente
                tranquilo y supervisado.
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={FutbolIcon} alt="futbol" className="w-18 pb-2" />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Fútbol
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Entrenamientos y partidos para desarrollar habilidades técnicas
                y de trabajo en equipo.
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src={PickleballIcon}
                alt="pickleball"
                className="w-18 pb-2"
              />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Pickleball
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Fomenta la actividad física, coordinación, trabajo en equipo y
                es accesible para todos.
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img
                src={HockeyIcon}
                alt="hockey sobre pasto"
                className="w-18 pb-2"
              />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Hockey sobre pasto
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Promueve el trabajo en equipo, la coordinación, resistencia
                física y disciplina.
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={PatinetaIcon2} alt="patineta" className="w-18 pb-2" />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Patineta
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Espacio seguro para practicar y aprender técnicas de
                skateboarding.
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={EscalarIcon} alt="roca" className="w-18 pb-2" />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Muro de escalar
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Actividad que fortalece tanto el cuerpo como la mente,
                fomentando el esfuerzo y la perseverancia.
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={BabyIcon} alt="bebé" className="w-20 pb-2" />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Psicomotricidad
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Actividades que fomentan el desarrollo de habilidades motoras y
                la coordinación.
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 flex">
            <div className="h-56 w-64 flex-col justify-start items-center gap-4 flex">
              <img src={DancerIcon} alt="dancer" className="w-20 pb-2" />
              <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Telas
              </div>
              <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                Actividad que fomenta la flexibilidad, la fuerza y la
                coordinación.
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Image Section */}
      <div className="px-4 md:px-16 py-16 md:py-32 flex flex-col justify-center items-center gap-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
          <div className=" w-80 h-80">
            <img
              className=" inset-0 w-full h-full object-cover rounded-[20px]"
              src={ImgAfterSchool01}
              alt="After School 1"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={ImgAfterSchool02}
              alt="After School 2"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={ImgAfterSchool03}
              alt="After School 3"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object- rounded-[20px]"
              src={ImgAfterSchool04}
              alt="After School 4"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={ImgAfterSchool05}
              alt="After School 5"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              src={ImgAfterSchool06}
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
              src={CTA1}
              alt="background green cta"
              className="relative z-0 md:rounded-none rounded-lg"
            />
            <h3 className="absolute z-10 px-14 mt-12 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-24 mt-20 px-14 font-light md:w-1/2 text-sm md:text-base">
              Si tienes alguna duda sobre nuestro programa de After School, ¡no
              dudes en contactar a nuestra coordinadora, Claudia Alcocer! ¡Ella
              estará feliz de ayudarte!
              <br />
              <p className="font-semibold my-2">Teléfono: (55) 7454 4052</p>
            </p>

            <a href="mailto:afterschoolcolegiosenda@gmail.com">
              <div className="absolute h-10 ml-14 hover:bg-gray-200 px-8 z-10 md:bottom-12 bottom-10  py-2 bg-white rounded-2xl ">
                <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Contactar
                </span>
              </div>
            </a>
          </div>
          <img
            src={CTAAfterSchool}
            alt="image cta after school"
            className="md:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AfterSchool;
