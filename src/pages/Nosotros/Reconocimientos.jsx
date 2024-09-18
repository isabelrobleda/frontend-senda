import React, { useState } from "react";
import Partners from "../../components/Partners";
import { Link } from "react-router-dom";

function Reconocimientos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentItem, setCurrentItem] = useState(0); 

  const slides = [
    [
      {
        title: "Maternal",
        description:
          "Constructivista. Ambiente cálido, desarrollo de lenguaje, motricidad y socialización.",
        link: "/maternal",
        imgSrc: "src/assets/maternal_nobg.png",
      },
      {
        title: "Preescolar",
        description:
          "Montessori. Cultura de Pensamiento. Bicultural. Inteligencias múltiples y trabajo cooperativo.",
        link: "/preescolar",
        imgSrc: "src/assets/preescolar_nobg.png",
      },
    ],
    [
      {
        title: "Primaria",
        description:
          "Cultura del Pensamiento. Inteligencias múltiples. Solución de problemas.",
        link: "/primaria",
        imgSrc: "src/assets/primaria_nobg.png",
      },
      {
        title: "Secundaria",
        description:
          "Cultura del Pensamiento. Knotion. Inglés. Bilingüismo digital. Ética y valores.",
        link: "/secundaria",
        imgSrc: "src/assets/secundaria_nobg.png",
      },
    ],
  ];

  const nextSlide = () => {
    if (window.innerWidth < 768) {
      // Small screen behavior
      setCurrentItem((prev) => {
        if (prev === 0) {
          return 1;
        } else {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 0;
        }
      });
    } else {
      // Large screen behavior
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (window.innerWidth < 768) {
      // Small screen behavior
      setCurrentItem((prev) => {
        if (prev === 1) {
          return 0;
        } else {
          setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
          );
          return 1;
        }
      });
    } else {
      // Large screen behavior
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <>
      <div className="h-auto p-8 md:px-16 pt-36 flex-col justify-center items-center gap-6 md:gap-12 flex">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="w-full md:w-[700px] h-auto p-6 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-end items-start gap-4">
              <img className=" h-12 relative py-2" src="src/assets/reconocimientos/canva-logo-png.png"/>
              <div className="self-stretch justify-start items-start flex">
                <div className="grow text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Top 15 de escuelas innovadoras en México
                </div>
              </div>
              <div className="self-stretch text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                Gracias a nuestras instalaciones y equipamiento, uso de tecnologías educativas y
                metodologías innovadoras para
                desarrollar el potencial creativo, sensible e intelectual de nuestros
                alumnos. Promovemos la práctica de innovaciones educativas y propuestas pedagógicas de vanguardia.
              </div>
            </div>
            <div className="w-full md:w-[350px] h-auto p-6 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-end items-start gap-4">
              <img className=" h-8 relative" src="src/assets/reconocimientos/knotion.png"/>
              <div className="self-stretch justify-start items-start flex">
                <div className="grow text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Insignias Knotion
                </div>
              </div>
              <div className="self-stretch text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                Sharing talents. Creating Bonds. Kn-Saving our Planet. Impact
                journey. We Make It Ours. Knotion Talks. Knotion Academy.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="w-full md:w-[350px] h-auto p-6 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-end items-start gap-4">
              <img className=" h-12 relative" src="src/assets/reconocimientos/APPLE-TEACHER.jpeg" />
              <div className="self-stretch justify-start items-start flex">
                <div className="grow text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  100% de profesores Apple Teacher
                </div>
              </div>
              <div className="self-stretch text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                Nuestros profesores usan tecnología de Apple para ampliar las
                posibilidades de aprendizaje.
              </div>
            </div>
            <div className="w-full md:w-[700px] h-auto p-6 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex flex-col justify-end items-start gap-4">
              <img className=" h-14 relative" src="src/assets/reconocimientos/whole-schools.png" />
              <div className="self-stretch justify-start items-start flex">
                <div className="grow text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Top 100 Schools in Mexico
                </div>
              </div>
              <div className="self-stretch text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                Nuestro compromiso con la excelencia educativa nos distingue, de
                acuerdo con tres sólidos criterios pedagógicos: Certificaciones
                internacionales; compromiso con el bienestar de la comunidad
                educativa y la felicidad de los estudiantes; innovación; e
                igualdad.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <div className="h-auto px-8 md:px-[151px] py-16 bg-[#f4f6f8] flex flex-col justify-center items-center gap-10">
          <div className="self-start ml-10 text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Oferta educativa
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex justify-center items-center">
              <button
                onClick={prevSlide}
                className="p-3 mr-4 rounded-full border"
              >
                &#8249;
              </button>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                {/* For larger screens */}
                {slides[currentSlide].map((item, index) => (
                  <div
                    key={index}
                    className=" hidden relative md:flex w-full md:w-[500px] md:h-72 flex-col md:flex-row md:items-center gap-4 px-8 pt-8 rounded-[10px] shadow-sm bg-[#E9EBEF] "
                  >
                    <img
                      src={item.imgSrc}
                      alt={`imagen ${item.title.toLowerCase()}`}
                      className="absolute w-52 bottom-0 right-0"
                    />
                    <div className="w-full h-52 md:w-[257px] flex flex-col justify-between ">
                      <div className="flex flex-col gap-4">
                        <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                          {item.title}
                        </div>
                        <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                          {item.description}
                        </div>
                      </div>
                      <Link to={item.link}>
                        <div className="w-28 px-6 py-2 md:mt-10 my-5 bg-[#f9f9fe] rounded-2xl flex justify-center items-center">
                          <div className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                            Ver más
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}

                {/* For small screens */}
                <div className="block md:hidden w-full flex flex-col justify-center items-center gap-4">
                  <div className="w-full h-auto flex flex-col gap-4 px-8 pt-8 rounded-[10px] shadow-sm bg-[#E9EBEF] items-center">
                    <img
                      src={slides[currentSlide][currentItem].imgSrc}
                      alt={`imagen ${slides[currentSlide][
                        currentItem
                      ].title.toLowerCase()}`}
                      className="w-full h-auto"
                    />
                    <div className="w-full flex flex-col justify-between">
                      <div className="flex flex-col gap-4">
                        <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                          {slides[currentSlide][currentItem].title}
                        </div>
                        <div className="text-[#49454f] text-base font-normal font-['Inter'] leading-normal tracking-tight">
                          {slides[currentSlide][currentItem].description}
                        </div>
                      </div>
                      <Link to={slides[currentSlide][currentItem].link}>
                        <div className="w-28 px-6 py-2 my-5 bg-[#f9f9fe] rounded-2xl flex justify-center items-center">
                          <div className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                            Ver más
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={nextSlide}
                className="p-3 ml-4 rounded-full border"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reconocimientos;
