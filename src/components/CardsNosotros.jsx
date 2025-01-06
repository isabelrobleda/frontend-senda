import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog3 from "../assets/secundaria_01.jpg";
import Blog2 from "../assets/elecciones.png";
import Blog1 from "../assets/blog01.png";
import Blog4 from "../assets/blog/blog-4-min.jpeg";

function CardsNosotros() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 cards at a time for larger screens
  const cardsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= cardsData.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full p-8 md:py-16 bg-white flex flex-col items-center gap-12">
      <h3 className="text-center text-[#1e1e1e] text-2xl font-semibold">
        Nuestro blog
      </h3>

      {/* Large screens: Carousel */}
      <div className="hidden lg:block relative w-full max-w-[1440px]">
        {/* Previous Button */}
        <button
          className="absolute left-[-28px] top-1/2 transform -translate-y-1/2 bg-[#009bce] hover:bg-[#007cae] text-white rounded-full p-3 z-10 shadow-lg"
          onClick={handlePrev}
        >
          ←
        </button>

        {/* Carousel */}
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(cardsData.length / cardsToShow) * 100}%`,
            }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-start p-4"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="rounded-2xl shadow-lg overflow-hidden h-[550px]">
                  <img
                    className="w-full h-64 object-cover"
                    src={card.image}
                    alt={card.alt}
                  />
                  <div className="p-4">
                    <div className="text-[#b0cb4f] text-base font-semibold">
                      {card.author}
                    </div>
                    <div className="text-[#1e1e1e] text-xl font-semibold">
                      {card.title}
                    </div>
                    <div className="text-[#757575] text-base mt-2">
                      {card.description}
                    </div>
                    <Link to={card.link}>
                      <button className="mt-4 px-6 py-2 bg-[#009bce] hover:bg-[#007cae] text-white rounded-lg">
                        Ver más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-[-28px] top-1/2 transform -translate-y-1/2 bg-[#009bce] hover:bg-[#007cae] text-white rounded-full p-3 z-10 shadow-lg"
          onClick={handleNext}
        >
          →
        </button>
      </div>

      {/* Small screens: Column layout */}
      <div className="block lg:hidden w-full">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start mb-8 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover"
              src={card.image}
              alt={card.alt}
            />
            <div className="p-4">
              <div className="text-[#b0cb4f] text-base font-semibold">
                {card.author}
              </div>
              <div className="text-[#1e1e1e] text-xl font-semibold">
                {card.title}
              </div>
              <div className="text-[#757575] text-base mt-2">
                {card.description}
              </div>
              <Link to={card.link}>
                <button className="mt-4 px-6 py-2 bg-[#009bce] hover:bg-[#007cae] text-white rounded-lg">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardsData = [
  {
    image: Blog4,
    alt: "magic-cosmos-picture",
    author: "Mónica Sánchez Gavito",
    title: "Estimulación Temprana: Construyendo los Cimientos del Futuro",
    description:
      "La estimulación temprana es una herramienta fundamental en el desarrollo integral de los niños desde el nacimiento hasta los seis años de edad.",
    link: "/blog-4",
    
  },
  {
    image: Blog3,
    alt: "ethics-picture",
    author: "Ana Robleda",
    title: "La Enseñanza de la Ética a los Jóvenes",
    description:
      "En un mundo cada vez más globalizado, donde las interacciones sociales y digitales juegan un papel crucial en el desarrollo, la enseñanza de la ética se ha vuelto una necesidad.",
    link: "/blog-3",
  },
  {
    image: Blog2,
    alt: "elections-picture",
    author: "Mónica Sánchez Gavito",
    title: "El Colegio Senda y las Elecciones 2024",
    description:
      "La educación no sólo se trata de impartir conocimientos, sino de formar ciudadanos íntegros, conscientes y preparados para enfrentar los retos del mundo moderno.",
    link: "/blog-1",
  },
  {
    image: Blog1,
    alt: "blog-picture",
    author: "Mónica Sánchez Gavito",
    title: "El Colegio Senda haciendo el pensamiento visible",
    description:
      "En el Senda tenemos una metodología desarrollada en la Universidad de Harvard. Esta iniciativa tiene como objetivo transformar la manera en que se enseña y se aprende.",
    link: "/blog-2",
   
  },
];

export default CardsNosotros;
