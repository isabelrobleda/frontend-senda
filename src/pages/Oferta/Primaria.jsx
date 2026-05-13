import React from "react";
import { Link } from "react-router-dom";
import HeaderPrimaria from "../../assets/primaria/header-primaria.png";
import Primary01 from "../../assets/primaria/Primary-01.png";
import Primary02 from "../../assets/primaria/Primary-02.png";
import IconTeacher from "../../assets/icons/👩🏻‍🏫.png";
import IconSchool from "../../assets/icons/🏫.png";
import IconUsFlag from "../../assets/icons/🇺🇸.png";
import IconYoga from "../../assets/icons/🧘🏻‍♀️.png";
import IconMath from "../../assets/secundaria/🧮.png";
import IconSpanish from "../../assets/icons/🇪🇸.png";
import IconSoccer from "../../assets/icons/⚽.png";
import IconComputer from "../../assets/icons/🖥️.png";
import IconTheater from "../../assets/icons/🎭.png";
import IconArt from "../../assets/icons/🎨.png";
import CTA01 from "../../assets/CTAs/CTA-01.png";
import PrimariaCTA from "../../assets/primaria/Primaria-CTA.png";
import QuoteImg1 from "../../assets/maternal/quote-1.png";
import QuoteImg2 from "../../assets/maternal/quote-2.png";
import QuoteImg3 from "../../assets/maternal/quote-3.png";
import HeaderBackground from "../../assets/Header-background.png";
import Banner30 from "../../components/banner30"


function Primaria() {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* First Section with Background */}
        <div className="relative w-full md:h-[800px] px-4 md:px-16 py-20 md:py-40 flex justify-center items-center">
         
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-screen object-cover opacity-10 z-0 md:h-[800px]"
              src={HeaderBackground}
              alt="Background"
            />
          </div>

          <div className="relative max-w-screen-xl flex flex-col md:flex-row justify-between items-center gap-8 z-10">
            <div className="flex flex-col justify-start items-start gap-8 text-left md:pt-0 pt-8">
              <div className="text-[#1e1e1e] text-[2.5rem] md:text-[3.5rem] font-semibold leading-tight">
                Primaria Constructivista
              </div>
              <div className="text-[#757575] text-lg md:text-2xl font-semibold leading-snug">
                Fomentamos el aprendizaje activo y personalizado con enfoque en
                la cultura del pensamiento, tecnología innovadora y bilingüismo,
                desarrollando competencias intelectuales y socioemocionales en
                un entorno constructivista.
              </div>
              <Link
                to="/aplica-al-senda"
                className="px-6 py-3 bg-[#009bce] rounded-2xl text-[#f2f2f2] md:self-start self-center text-base font-medium hover:bg-[#007cae]"
              >
                Únete al Colegio Senda
              </Link>
            </div>
            
              <img
                src={HeaderPrimaria}
                alt="Primaria header"
                className="w-full h-auto object-cover"
              loading="lazy"
            />
            
          </div>
        </div>

        <div>
          <Banner30 />
        </div>

        {/* Second Section */}
        <div className="w-full max-w-screen-xl md:px-4 px-6  py-16 md:py-32 bg-white flex flex-col justify-center items-start gap-12">
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
          <div className="text-[#303030] text-2xl md:text-[35px] font-pangea font-medium leading-tight md:px-24">
            “Tenemos y queremos niños felices,
            <span style={{ display: "inline-block" }}></span>
            <img
              src={QuoteImg1}
              alt="image 1"
              className="md:inline-block mx-2 h-12 rounded-3xl hidden"
              loading="lazy"
            />
            que transmitan
            <span style={{ display: "inline-block" }}></span>
            <img
              src={QuoteImg2}
              alt="image 2"
              className="md:inline-block h-12 mx-2 hidden"
              loading="lazy"
            />
            esa energía y esa pasión que tienen por descubrir, por transformar y
            por trascender en su
            <span style={{ display: "inline-block" }}></span>
            <img
              src={QuoteImg3}
              alt="image 3"
              className="hidden md:inline-block h-12 mx-2 my-2"
              loading="lazy"
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
        <div className="w-full bg-[#f9f9fe] px-6 md:px-0 py-16 md:py-32">
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
                  src={Primary01}
                  alt="primaria foto 1"
                  className="rounded-lg absolute"
              loading="lazy"
            />
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section 02 */}
        <div className="w-full bg-[#f9f9fe] px-6 md:px-0 py-16 md:py-40">
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
                  src={Primary02}
                  alt="primaria foto 2"
                  className="rounded-lg absolute"
              loading="lazy"
            />
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="w-full px-4 md:px-32 py-16 md:py-44 flex justify-center items-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 h-[300px] bg-white rounded-tl-xl rounded-bl-xl shadow-sm border border-[#e4e4de] text-center flex flex-col justify-center items-center">
            <img src={IconTeacher} alt="icon teacher" className="mb-10"
              loading="lazy"
            />
            <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Bicultural
            </h3>
            <p className="text-black/40 text-base">
              2 maestras (inglés y español)
            </p>
          </div>
          <div className="p-6  bg-white shadow-sm border border-[#e4e4de] text-center flex flex-col justify-center items-center">
            <img src={IconSchool} alt="icon school" className="mb-10"
              loading="lazy"
            />
            <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Salones pequeños
            </h3>
            <p className="text-black/40 text-base">Máximo 25 niños por salón</p>
          </div>
          <div className="p-6  bg-white rounded-tr-xl rounded-br-xl shadow-sm border border-[#e4e4de] text-center flex flex-col justify-center items-center">
            <img src={IconUsFlag} alt="icon us flag" className="mb-10"
              loading="lazy"
            />
            <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Idioma inglés
            </h3>
            <p className="text-black/40 text-base">50% del tiempo en inglés</p>
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
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src={IconYoga} alt="meditation"
              loading="lazy"
            />
                <h3 className="text-xl font-base text-[#1e1e1e] mb-2">
                  Momento sagrado
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src={IconMath} alt="math"
              loading="lazy"
            />
                <h3 className="text-xl font-base text-[#1e1e1e] mb-2">
                  Matemáticas
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src={IconSpanish} alt="spanish"
              loading="lazy"
            />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Español
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src={IconUsFlag} alt="us flag" className="w-10"
              loading="lazy"
            />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Inglés (TOEFL JR - 6to Primaria)
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src={IconSoccer} alt="icon soccer"
              loading="lazy"
            />
                <h3 className="text-xl font-noraml text-[#1e1e1e] mb-2">
                  Deportes
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center ">
                <img src={IconComputer} alt="computer"
              loading="lazy"
            />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Tecnología con sentido pedagógico 
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center ">
                <img src={IconTheater} alt="teatro icon"
              loading="lazy"
            />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Teatro
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src={IconArt} alt="art"
              loading="lazy"
            />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Arte
                </h3>
              </div>
            </div>
          </div>
        </div>

        
        {/* CTA Section */}
        <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col justify-center items-center gap-12">
          <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
            <div className="abolute flex flex-col justify-between">
              <img
                src={CTA01}
                alt="background green cta"
                className="relative z-0 md:rounded-none rounded-lg"
              loading="lazy"
            />
              <h3 className="absolute z-10 px-14 md:mt-20 mt-6 font-semibold font-pangea md:text-2xl text-lg">
                ¿Tienes preguntas?
              </h3>
              <p className="absolute z-10 md:mt-32 mt-14    px-14 font-light md:w-1/2 text-sm md:text-base">
                Si tienes preguntas sobre el preescolar, no dudes en enviarle un
                correo electrónico a Karla Olivares, nuestra Directora de
                Primaria
              </p>
              <a href="mailto:dprimaria@colegiosenda.edu.mx">
                <div className="absolute hover:bg-[#009bce] text-black/90 hover:text-white h-10 ml-14 px-8 z-10 md:bottom-14 bottom-8  py-2 bg-white rounded-2xl  ">
                  <span className="md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Contactar
                  </span>
                </div>
              </a>
            </div>
            <img
              src={PrimariaCTA}
              alt="image preescolar tienes preguntas"
              className="md:rounded-none rounded-lg object-cover h-[339px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
          
          
    </div>
  );
}

export default Primaria;
