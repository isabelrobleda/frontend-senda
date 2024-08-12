import React from 'react';

function DataHome() {
  return (
    <div className="w-full md:h-screen   px-8 md:px-16 py-16 md:py-32 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8 md:gap-20">
      <div className="self-stretch  text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Sobre el Colegio Senda
      </div>
      <div className=" max-w-[1440px] self-center flex flex-col md:flex-row justify-start items-center md:items-start gap-8 md:gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-80 grow shrink basis-0 p-8 bg-white rounded-2xl flex flex-col justify-start items-center gap-6 shadow-md"
            style={{ height: '400px' }}
          >
            <div className="relative w-28 h-28 flex justify-center items-center">
              <img
                className="absolute pt-6"
                src={card.image}
                alt={card.alt}
                style={{ top: '-40px' }}
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center gap-2">
                <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  {card.title}
                </div>
                <div className="self-stretch text-center text-[#757575] text-base font-light font-inter leading-[22.40px]">
                  {card.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardsData = [
  {
    image: "src/assets/brain01.png",
    alt: "brain image",
    title: "Top 15 escuelas innovadoras",
    description: "“El colegio despierta en el alumno capacidades de indagación, creación, descubrimiento y cuidado de la naturaleza.“"
  },
  {
    image: "src/assets/brain02.png",
    alt: "grain image 2",
    title: "Top 100 mejores escuelas",
    description: "Gracias a nuestras certificaciones internacionales, compromiso con el bienestar y la felicidad de la comunidad, e innovación."
  },
  {
    image: "src/assets/brain04.png",
    alt: "brain image 3",
    title: "100% de maestros son Apple Teacher",
    description: "Un programa de aprendizaje diseñado para apoyar y reconocer a los maestros que usan productos Apple en la enseñanza."
  },
  {
    image: "src/assets/brain03.png",
    alt: "brain image 4",
    title: "Colegio Bicultural y Bilingüe",
    description: "El Colegio Senda hace que el alumno adquiera el inglés de manera natural a través de programas  interdisciplinarios."
  }
];

export default DataHome;
