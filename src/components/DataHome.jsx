import React from 'react';

function DataHome() {
  return (
    <div className="w-full px-8 md:px-16 py-16 md:py-32 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8 md:gap-20">
      <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Sobre el Colegio Senda
      </div>
      <div className="self-stretch flex flex-col md:flex-row justify-start items-center md:items-start gap-8 md:gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-80 grow shrink basis-0 p-8 bg-white rounded-2xl flex flex-col justify-start items-center gap-6"
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
            <div className="self-stretch flex flex-col justify-start items-center gap-4 mt-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-2">
                <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  {card.title}
                </div>
                <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
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
    alt: "Placeholder",
    title: "Top 100 mejores escuelas",
    description: "De acuerdo con tres criterios: certificaciones internacionales, compromiso con el bienestar de la comunidad educativa y la felicidad de los alumnos, e innovación."
  },
  {
    image: "src/assets/brain04.png",
    alt: "Placeholder",
    title: "100% de nuestros maestros son Apple Teacher",
    description: "Un programa de aprendizaje profesional diseñado para apoyar y reconocer a los maestros que usan productos Apple en la enseñanza."
  },
  {
    image: "src/assets/brain03.png",
    alt: "Placeholder",
    title: "Bicultural",
    description: "El Colegio Senda hace que el alumno adquiera el inglés de manera natural a través de programas integrados e interdisciplinarios."
  }
];

export default DataHome;
