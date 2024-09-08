import React from "react";
import { Link } from "react-router-dom";

function Primaria() {
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
                Primaria
              </div>
              <div className="text-[#757575] text-lg md:text-2xl font-semibold leading-snug">
                Fomentamos el aprendizaje activo y personalizado con enfoque en
                la cultura del pensamiento, tecnología innovadora y bilingüismo,
                desarrollando competencias intelectuales y socioemocionales en
                un entorno constructivista.
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
                src="src/assets/primaria/header-primaria.png"
                alt="Primaria header"
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
              La Cultura del Pensamiento está presente en todas nuestras
              experiencias de aprendizaje. Esta cultura hace visible los
              procesos de pensamiento, permitiendo que los alumnos se adueñen de
              su aprendizaje y se les abran ventanas hacia la cognición y la
              identidad personal.
              <br />
              <br />
              El Modelo Senda, al considerar al alumno como el protagonista del
              aprendizaje, desarrolla en ellos el deseo de aprender y cultivar
              el amor por el conocimiento. Valoramos cada experiencia como un
              escenario de aprendizaje para que nuestros alumnos se sientan
              competentes y disfruten del proceso de aprender.
            </div>
            <div className="text-[#757575] text-base leading-snug">
              Nuestros alumnos reciben atención personalizada de los maestros,
              quienes establecen objetivos individuales basados en el programa
              del grado escolar, adaptados a su ritmo de aprendizaje y etapa de
              desarrollo. Comprendemos que existen diferentes inteligencias y
              ritmos de aprendizaje, por lo que monitoreamos los procesos
              cognitivos y evaluamos continuamente con diversas estrategias: “Si
              el alumno no aprende como le enseño, le enseño como él aprende”.
              <br />
              <br />
              Nuestros alumnos aprenden mucho más que contenidos: más allá de la
              memorización, la comprensión es un objetivo fundamental en
              nuestras prácticas educativas. Fomentamos la capacidad de analizar
              y utilizar información, solucionar problemas y trabajar en modelos
              y patrones mentales que favorecen los aprendizajes significativos.
              También desarrollamos habilidades y competencias que les ayudan a
              tener éxito académico. Todas las materias del currículo están
              diseñadas para incrementar y potenciar el pensamiento de nuestros
              alumnos.
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
            <div className="flex flex-col justify-start items-start gap-12 md:w-2/4">
              <div className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold">
                Nuestro compromiso
              </div>
              <div className="text-[#757575] text-base leading-snug">
                Nuestro compromiso es desarrollar en nuestros alumnos
                competencias intelectuales, emocionales, sociales y espirituales
                que les ayuden a conocerse a sí mismos a través de la meditación
                y técnicas de enfoque. Promovemos la interacción y el valor del
                trabajo en equipo, fomentando la construcción de vínculos
                afectivos que desarrollan valores y actitudes en beneficio de
                una sociedad pacífica y ética.
                <br />
                <br />
                Contamos con ambientes de aprendizaje que promueven la
                participación activa en la investigación y la experimentación
                tecnológica y académica, incentivando a los alumnos a diseñar y
                ejecutar proyectos. A través de la plataforma digital de
                Knotion, los alumnos trabajan con herramientas digitales
                innovadoras que motivan al aprendizaje y la investigación,
                facilitando la creación de entornos virtuales activos y
                divertidos a través del iPad.
              </div>
            </div>
            <div className="relative w-full max-w-md h-96">
              <div className="bg-[#d6ecf4] rounded-lg">
                <img
                  src="src/assets/primaria/Primary-01.png"
                  alt="primaria foto 1"
                  className="rounded-lg absolute"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section 02 */}
        <div className="w-full bg-[#f9f9fe] py-16 md:py-32">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-16 flex flex-col md:flex-row-reverse justify-between items-start gap-12">
            <div className="flex flex-col justify-start items-start gap-12 md:w-2/4">
              <div className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold">
                Aprendizaje por proyectos
              </div>
              <div className="text-[#757575] text-base leading-snug">
                El aprendizaje por proyectos tiene un enfoque constructivista,
                donde los alumnos trabajan en situaciones reales. Observan,
                construyen explicaciones, razonan con evidencia y generan
                conclusiones mediante la explicación, predicción y control de
                fenómenos. 
                <br />
                <br />
                Desde pequeños, los niños aprenden inglés, asegurando
                que lo dominen y puedan aprender de forma bilingüe. Al estudiar
                materias en inglés, los alumnos desarrollan estrategias de
                pensamiento, comprensión y profundización del idioma,
                preparándolos para ser ciudadanos competentes en un mundo
                globalizado. 
                <br />
                <br />
                Además del currículo SEP, los alumnos participan en
                actividades de arte, teatro musical, deportes individuales y en
                equipo, computación, robótica y programación, bilingüismo
                digital y uso de iPads en el salón. Estas experiencias
                enriquecen su formación integral, promoviendo el desarrollo de
                habilidades variadas y una educación de excelencia.
              </div>
            </div>
            <div className="relative w-full max-w-md h-96">
              <div className="bg-[#d6ecf4] rounded-lg">
                <img
                  src="src/assets/primaria/Primary-02.png"
                  alt="primaria foto 2"
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
              <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4 mt-4">
                Bilingüe
              </h3>
              <p className="text-black/40 text-base">
              2 maestras (inglés y español)
              </p>
            </div>
            <div className="p-6 h-96 bg-white shadow border border-[#e4e4de] text-center flex flex-col justify-center items-center">
              <img src="src/assets/icons/🏫.png" alt="" />
              <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4 mt-4">
                Salones pequeños
              </h3>
              <p className="text-black/40 text-base">
                Máximo 25 niños por salón
              </p>
            </div>
            <div className="p-6 h-96 bg-white rounded-tr-lg rounded-br-lg shadow border border-[#e4e4de] text-center flex flex-col justify-center items-center">
              <img src="src/assets/icons/🇺🇸.png" alt="" />
              <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4 mt-4">
                Idioma inglés
              </h3>
              <p className="text-black/40 text-base">
                50% del tiempo en inglés
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
                <img src="src/assets/icons/🧘🏻‍♀️.png" alt="" />
                <h3 className="text-xl font-base text-[#1e1e1e] mb-2">
                  Momento sagrado
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/secundaria/🧮.png" alt="" />
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
                  Inglés (TOEFL JR - 6to Primaria)
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/⚽.png" alt="" />
                <h3 className="text-xl font-noraml text-[#1e1e1e] mb-2">
                  Deportes
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center ">
                <img src="src/assets/icons/🖥️.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Tecnología
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center ">
                <img src="src/assets/icons/🎭.png" alt="teatro icon" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Teatro
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/🎨.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Arte
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
              Si tienes preguntas sobre primaria, no dudes en enviarle un correo electrónico a Karla Olivares, nuestra Directora de Primaria
              </p>
              <a href="mailto:direccionprimaria@colegiosenda.edu.mx">
                <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl border border-white ">
                  <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Contactar
                  </span>
                </div>
              </a>
            </div>
            <img
              src="src/assets/primaria/Primaria-CTA.png"
              alt="image primaria tienes preguntas"
              className="md:rounded-none rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Primaria;
