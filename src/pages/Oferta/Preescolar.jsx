import React from "react";
import { Link } from "react-router-dom";

function Preescolar() {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* First Section with Background */}
        <div className="relative w-full md:h-[750px] px-4 md:px-16 py-20 md:py-40 flex justify-center items-center">
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
                Preescolar 
              </div>
              <div className="text-[#757575] text-lg md:text-2xl font-semibold leading-snug">
                Ofrecemos un entorno bilingüe y estimulante que integra
                tecnología y cultura del pensamiento, promoviendo habilidades
                críticas, creativas y socioemocionales. Montessori constructivista.
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
                src="src/assets/preescolar/header-preescolar.png"
                alt="Preescolar"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full max-w-screen-xl px-4  py-16 md:py-32 bg-white flex flex-col justify-center items-start gap-12">
          <div className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold mb-6">
            Nuestro compromiso
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-[#757575] text-base leading-snug">
              El niño aprende de manera integrada y gradual basada en la cultura
              del pensamiento que apela a las Inteligencias Múltiples, en
              trabajo individual y cooperativo; contamos con un programa de
              ética y valores que promueve la compasión y la empatía.
              <br />
              <br />
              El Colegio es bilingüe, lo cual hace que el alumno adquiera el
              idioma inglés de manera natural a través de programas integrados e
              interdisciplinarios con materiales diseñados para incrementar y
              potencializar el pensamiento; todos estos materiales y trabajo
              representan un reto para el alumno fomentando el desarrollo de
              competencias cognitivas, valores y actitudes. Además de ofrecer el
              currículo SEP, los alumnos trabajan con materiales de arte,
              deportes, computación, psicomotricidad, música y ética.
            </div>
            <div className="text-[#757575] text-base leading-snug">
              En Pre-First, los alumnos utilizan la plataforma digital de
              Knotion, donde trabajan con diferentes herramientas digitales e
              innovadoras destinadas a motivar a los alumnos al aprendizaje y la
              investigación.Su principal función es facilitar la creación de
              entornos virtuales para impartir todos los contenidos académicos
              de manera activa y divertida a través del iPad.
              <br />
              <br />
              Nuestro compromiso nos obliga a desarrollar en nuestros alumnos
              competencias intelectuales, sociales y espirituales que les ayuden
              a conocerse a sí mismos a través de la meditación y técnicas de
              enfoque. De la misma manera, realizamos trabajo cooperativo para
              fomentar las relaciones sociales y valorar el trabajo en equipo
              que los sensibilice a cuidar todas las experiencias
              interpersonales. Los alumnos se comprometen a la construcción de
              vínculos afectivos para desarrollar valores y actitudes en
              beneficio de una sociedad pacífica, ética y justa.
            </div>
          </div>
        </div>

        {/* Quote Section */}

        <div className="w-full px-4 md:px-16 py-16 md:py-32 bg-white  flex justify-center items-center">
          <div className="w-full max-w-screen-lg p-6 bg-white  text-center flex flex-col justify-center items-center ">
            <div className="text-[#303030] text-2xl md:text-[35px] font-pangea font-medium leading-tight px-24">
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
              Preescolar Montessori Constructivista
              </div>
              <div className="text-[#757575] text-base leading-snug mr-40">
                Los niños de preescolar se benefician de un ambiente de
                aprendizaje enriquecido y estimulante, donde la creatividad y la
                curiosidad se valoran y se fomentan. Utilizamos una metodología
                constructivista que se adapta a las necesidades individuales de
                cada niño, permitiéndoles explorar y descubrir a su propio
                ritmo. 
                <br />
                <br />
                Nuestro enfoque en la cultura del pensamiento y las
                inteligencias múltiples garantiza que cada alumno desarrolle
                habilidades críticas y creativas desde una edad temprana.
                Además, nuestro equipo docente está capacitado para guiar a los
                niños en su desarrollo socioemocional, ayudándolos a construir
                una base sólida de autoestima y confianza.
              </div>
            </div>
            <div className="relative w-full max-w-md h-96 md:h-[555px]">
              <div className="bg-[#d6ecf4] rounded-lg">
                <img
                  src="src/assets/preescolar/middle-preescolar.png"
                  alt="Preschool"
                  className="rounded-lg absolute"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
      <div className="w-full px-4 md:px-32 py-16 md:py-44 flex justify-center items-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 h-[300px] bg-white rounded-tl-xl rounded-bl-xl shadow-sm border border-[#e4e4de] text-center flex flex-col justify-center items-center">
            <img src="src/assets/icons/👩🏻‍🏫.png" alt="icon teacher" className="mb-10"/>
            <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Personalizado
            </h3>
            <p className="text-black/40 text-base">
              2 educadores por salón además <br />de una miss de Inglés
            </p>
          </div>
          <div className="p-6  bg-white shadow-sm border border-[#e4e4de] text-center flex flex-col justify-center items-center">
            <img src="src/assets/icons/🏫.png" alt="icon school" className="mb-10"/>
            <h3 className="text-[#1e1e1e] text-2xl font-semibold mb-4">
              Salones pequeños
            </h3>
            <p className="text-black/40 text-base">Máximo 24 niños por salón</p>
          </div>
          <div className="p-6  bg-white rounded-tr-xl rounded-br-xl shadow-sm border border-[#e4e4de] text-center flex flex-col justify-center items-center">
            <img src="src/assets/icons/🇺🇸.png" alt="icon us flag" className="mb-10"/>
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
                <img src="src/assets/icons/🧘🏻‍♀️.png" alt="" />
                <h3 className="text-xl font-base text-[#1e1e1e] mb-2">
                  Momento sagrado
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/🇪🇸.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Español
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/🇺🇸.png" alt="" className="w-10" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Inglés
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/⚽.png" alt="" />
                <h3 className="text-xl font-noraml text-[#1e1e1e] mb-2">
                  Deportes
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
                <img src="src/assets/icons/👶🏻.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Psicomotricidad
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center ">
                <img src="src/assets/icons/🖥️.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Tecnología
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center ">
                <img src="src/assets/icons/🎶.png" alt="" />
                <h3 className="text-xl font-normal text-[#1e1e1e] mb-2">
                  Sing and Play (en inglés)
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-[#e4e4de] flex gap-6 items-center">
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
                Si tienes preguntas sobre el preescolar, no dudes en enviarle un
                correo electrónico a Roxana Fernández, nuestra Directora de
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
              src="src/assets/preescolar/preescolar-tienes_preguntas.png"
              alt="image preescolar tienes preguntas"
              className="md:rounded-none rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preescolar;
