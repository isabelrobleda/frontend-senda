import React from "react";
import { Link } from "react-router-dom";

function Secundaria() {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* First Section with Background */}
        <div className="relative w-full px-4 md:px-16 py-20 md:py-40 flex justify-center items-center">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat opacity-10"
              style={{
                backgroundImage: "url(src/assets/Header-background.png)",
              }}
            ></div>
          </div>

          <div className="relative max-w-screen-xl flex flex-col md:flex-row justify-between items-center gap-8 z-10">
            <div className="flex flex-col justify-start items-start gap-8 text-left">
              <div className="text-[#1e1e1e] text-[2.5rem] md:text-[3.5rem] font-semibold leading-tight">
                Secundaria
              </div>
              <div className="text-[#757575] text-lg md:text-2xl font-semibold leading-snug">
                Nuestra secundaria, basada en la Cultura del Pensamiento,
                promueve el aprendizaje activo y constructivista, integrando
                tecnología, proyectos y bilingüismo para desarrollar
                competencias críticas y valores éticos en un entorno
                globalizado.
              </div>
              <Link
                to="/aplica-al-senda"
                className="px-6 py-3 bg-[#009bce] rounded-2xl text-[#f2f2f2] text-base font-medium hover:bg-[#007cae]"
              >
                Únete al Colegio Senda
              </Link>
            </div>
            <div className="relative w-full max-w-xl">
              <img
                src="src/assets/secundaria/header-secundaria.png"
                alt="Secundaria"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full max-w-screen-xl px-4  py-16 md:py-32 bg-white flex flex-col justify-center items-start gap-12">
          <div className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold mb-6">
            Cultura del Pensamiento
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-[#757575] text-base leading-snug">
              La Secundaria de Senda tiene una base en la Cultura del
              Pensamiento, la cual está presente en todas las experiencias de
              aprendizaje. Esta cultura evidencia los procesos de pensamiento
              para que el alumno se adueñe de su aprendizaje y abra ventanas
              hacia la cognición y la identidad personal.
              <br />
              <br />
              Contamos con ambientes de aprendizaje para que el alumno participe
              de manera activa en la investigación, experimentación, en la
              tecnología y la academia; fomentando su participación en el diseño
              de sus proyectos y la toma de decisiones.
            </div>
            <div className="text-[#757575] text-base leading-snug">
              El aprendizaje por proyectos tiene un enfoque constructivista,
              dónde los alumnos son protagonistas de la investigación,
              innovación y resultados para generar conclusiones a través de
              explicar, predecir y controlar los fenómenos.
              <br />
              <br />A través de la plataforma digital de Knotion el alumno
              trabaja con diferentes herramientas digitales e innovadoras
              destinadas a motivar a los alumnos al aprendizaje y la
              investigación.Su principal función es facilitar la creación de
              entornos virtuales para impartir todos los contenidos académicos
              de manera te activa y divertida a través del iPad.
            </div>
          </div>
        </div>

        {/* Quote Section */}

        <div className="w-full px-4 md:px-16 py-16 md:py-32 bg-white  flex justify-center items-center">
          <div className="w-full max-w-screen-lg p-6 bg-white  text-center flex flex-col justify-center items-center ">
            <div className="text-[#303030] text-2xl md:text-3xl font-medium leading-tight">
              “Tenemos y queremos niños felices,
              <span style={{ display: "inline-block" }}></span>
              <img
                src="src/assets/maternal/quote-img-1.png"
                alt="image 1"
                className="inline-block mx-2 rounded-3xl"
              />
              que transmitan
              <span style={{ display: "inline-block" }}></span>
              <img
                src="src/assets/maternal/quote-img-2.png"
                alt="image 2"
                className="inline-block mx-2"
              />
              esa energía y esa pasión que tienen por descubrir, por transformar
              y por trascender en su
              <span style={{ display: "inline-block" }}></span>
              <img
                src="src/assets/maternal/quote-img-3.png"
                alt="image 3"
                className="inline-block mx-2 my-2"
              />
              entorno.”
            </div>
            <div className="text-[#757575] text-xl font-semibold mt-8">
              Mónica Sánchez Gavito
            </div>
            <div className="text-[#b3b3b3] text-base">Directora general</div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="w-full bg-[#f9f9fe] py-16 md:py-32">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex flex-col justify-start items-start gap-12">
              <div className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold">
                Áreas de enfoque
              </div>
              <div className="text-[#757575] text-base leading-snug">
                Las principales áreas de enfoque en la secundaria son:
                <br />
                <ul className="list-disc pl-5">
                  <li>Razonamiento lógico- matemático.</li>
                  <li>Competencias lingüísticas y de comunicación.</li>
                  <li>Inglés y Francés.</li>
                  <li> Seguimiento del método científico en el laboratorio.</li>
                  <li>Bilingüismo digital: tecnología como herramienta de transformación a través de iPad, PC y Mac.</li>
                  <li>Programación.</li>
                  <li>Como eje transversal: la Ética y Valores con base en proyectos de Responsabilidad Social y Ecológica.</li>
                  <li>Intercambios internacionales de alumnos. </li>
                  <li>Deportes y retos deportivos.</li>
                  <li>Talleres (desarrollo de la adolescencia, sexualidad, ética.)</li>
                  <li>Actividades Sociales (campamentos, conferencias, congresos, viajes, etc.).</li>
                  <li>Trabajo en Equipo.</li>
                  <li>Proyectos.</li>
                </ul>
                
              </div>
            </div>
            <div className="relative w-full max-w-md h-96">
              <div className="bg-[#d6ecf4] rounded-lg">
                <img
                  src="src/assets/secundaria/middle-secundaria.png"
                  alt="secundaria foto"
                  className="rounded-lg absolute"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="w-full px-4 md:px-16 py-16 md:py-32 flex justify-center items-center">
          <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 h-96 bg-white rounded-tl-lg rounded-bl-lg shadow border border-[#e4e4de] text-center flex flex-col justify-center items-center">
              <img src="src/assets/icons/👩🏻‍🏫.png" alt="" />
              <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Maestros expertos
              </h3>
              <p className="text-black/40 text-base">
              100% de maestros expertos en su materia
              </p>
            </div>
            <div className="p-6 h-96 bg-white shadow border border-[#e4e4de] text-center flex flex-col justify-center items-center">
              <img src="src/assets/icons/🏫.png" alt="" />
              <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Alumnos bilingües
              </h3>
              <p className="text-black/40 text-base">
              100% de nuestros alumnos son aceptados en prepas bilingues
              </p>
            </div>
            <div className="p-6 h-96 bg-white rounded-tr-lg rounded-br-lg shadow border border-[#e4e4de] text-center flex flex-col justify-center items-center">
              <img src="src/assets/secundaria/Group 74.png" alt="ingles y francés" />
              
              <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Inglés y francés
              </h3>
              <p className="text-black/40 text-base">
              50% del tiempo en inglés y 20% en francés
              </p>
            </div>
          </div>
        </div>

        {/* Sixth Section */}
        <div className="w-full bg-[#f9f9fe] py-16 md:py-32">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-16 flex flex-col justify-center items-center ">
            <div className="text-center text-2xl md:text-3xl font-semibold text-[#1e1e1e]">
              Currículum
            </div>
            <div className="text-center text-base text-[#757575] leading-snug mt-4 mb-10">
              Nuestro currículum se basa en la cultura del pensamiento, el
              Modelo Senda y la SEP.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/secundaria/🧮.png" alt="matemáticas icon" />
                <h3 className="text-xl font-base text-[#1e1e1e] mb-2">
                  Matemáticas
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/🇪🇸.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Español
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/🇺🇸.png" alt="" className="w-10" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Inglés (TOEFL 3ro de Secundaria)
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/⚽.png" alt="" />
                <h3 className="text-xl font-noraml text-[#1e1e1e] mb-2">
                  Deportes
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/secundaria/🔬.png" alt="ciencias icon" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                Ciencias (física, química y biología) 
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center ">
                <img src="src/assets/icons/🖥️.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Tecnología
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center ">
                <img src="src/assets/icons/🎭.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Talleres
                </h3>
              </div>
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
              Si tienes preguntas sobre secundaria, no dudes en enviarle un correo electrónico a Viviana Macías, nuestra Directora de Secundaria
              </p>
              <a href="mailto:direccionsecundaria@colegiosenda.edu.mx">
                <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl border border-white ">
                  <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Contactar
                  </span>
                </div>
              </a>
            </div>
            <img
              src="src/assets/secundaria/Secundaria-CTA.png"
              alt="image secungaria tienes preguntas"
              className="md:rounded-none rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secundaria;
