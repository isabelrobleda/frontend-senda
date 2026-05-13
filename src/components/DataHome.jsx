import React from 'react';
import TechIcon from '../assets/icons/tech-icon.png';
import GraduateIcon from '../assets/icons/graduate-icon.png';
import AppleIcon from '../assets/icons/apple-icon.png';
import WorldIcon from '../assets/icons/world-icon.png';
import Logo30Anos from '../assets/logo_30_anos.png';
import StarIcon from '../assets/star.png';


function DataHome() {
  const renderCard = (card, index) => (
    <div
      key={index}
      className="w-full md:w-80 grow shrink basis-0 p-8 bg-white rounded-2xl flex flex-col justify-start items-center gap-6 shadow-md min-h-[300px] md:h-[360px]"
    >
      <div className="relative w-20 h-20 flex justify-center items-center">
        <img
          className="absolute w-16 h-16 object-contain"
          src={card.image}
          alt={card.alt}
          style={{ top: '-32px' }}
          loading="lazy"
        />
      </div>
      <div className="self-stretch flex flex-col justify-start items-center gap-4">
        <div className="self-stretch flex flex-col justify-start items-center gap-2">
          <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-normal font-['Inter'] leading-[28.80px]">
            {card.title}
          </div>
          <div className="self-stretch text-center text-[#757575] text-base font-light font-inter leading-[22.40px]">
            {card.description}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-8 py-16 md:py-32 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8 md:gap-20">
      <h3 className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Sobre el Colegio Senda
      </h3>
      <div className="max-w-[1440px] md:px-[64px] self-center flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-8">
          {cardsData.slice(0, 3).map((card, index) => renderCard(card, index))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          {cardsData.slice(3).map((card, index) => renderCard(card, index + 3))}
        </div>
      </div>
    </div>
  );
}

const cardsData = [
  {
    image: TechIcon,
    alt: "tech image",
    title: "Top 15 escuelas innovadoras",
    description: "“El colegio despierta en el alumno capacidades de indagación, creación, descubrimiento y cuidado de la naturaleza.“"
  },
  {
    image: GraduateIcon,
    alt: "graduate image 2",
    title: "Top 100 mejores escuelas",
    description: "Gracias a nuestras certificaciones internacionales, compromiso con el bienestar y la felicidad de la comunidad, e innovación."
  },
  {
    image: AppleIcon,
    alt: "brain image 3",
    title: "100% de maestros son Apple Teacher",
    description: "Un programa de aprendizaje diseñado para apoyar y reconocer a los maestros que usan productos Apple en la enseñanza."
  },
  {
    image: WorldIcon,
    alt: "brain image 4",
    title: "Colegio Bicultural y Bilingüe",
    description: "El Colegio Senda hace que el alumno adquiera el inglés de manera natural a través de programas  interdisciplinarios."
  },
  {
    image: Logo30Anos,
    alt: "30 años de experiencia",
    title: "30 años de experiencia",
    description: "Tres décadas de experiencia nos avalan. Un equipo comprometido con la educación de calidad y el desarrollo integral de cada alumno."
  },
  {
    image: StarIcon,
    alt: "tecnología con propósito",
    title: "Tecnología con propósito",
    description: "La tecnología la usamos como herramienta, como un recurso pedagógico. Entendemos la diferencia crítica entre simplemente digitalizar una escuela y transformar realmente el aprendizaje."
  }
];

export default DataHome;
