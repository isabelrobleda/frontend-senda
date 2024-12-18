import React from "react";
import { Link } from "react-router-dom";
import Blog3 from "../assets/secundaria_01.jpg";
import Blog2 from "../assets/elecciones.png";
import Blog1 from "../assets/blog01.png";
import Blog4 from "../assets/blog/blog-4-min.jpeg";

function CardsNosotros() {
  return (
    <div className="w-full p-8 md:py-16 bg-white flex flex-col items-center gap-12">
      <h3 className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        Nuestro blog
      </h3>
      {/* Centered container with max width */}
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row md:justify-start justify-center items-center md:items-start gap-12">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex-grow flex flex-col justify-start items-start gap-6 pb-6 rounded-2xl"
            style={{ minHeight: "500px", width: "300px" }}
          >
            <img
              className="rounded-2xl h-72 w-full object-cover"
              src={card.image}
              alt={card.alt}
            />
            <div className="px-4 flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-[#b0cb4f] text-base font-semibold font-['Inter'] leading-snug">
                  {card.author}
                </div>
                <div className="text-[#1e1e1e] text-xl font-semibold font-['Inter'] leading-[28.80px]">
                  {card.title}
                </div>
                <div className="w-full h-auto text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  {card.description}
                </div>
              </div>
              <Link to={card.link}>
                <div className="px-6 py-2 bg-[#009bce] hover:bg-[#007cae] rounded-2xl flex justify-center items-center gap-2">
                  <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                    Ver más
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardsData = [
  /*{
    image: Blog2,
    alt: "elections-picture",
    author: "Mónica Sánchez Gavito",
    title: "El Colegio Senda y las Elecciones 2024",
    description:
      "La educación no sólo se trata de impartir conocimientos, sino de formar ciudadanos íntegros, conscientes y preparados para enfrentar los retos del mundo moderno.",
    link: "/blog-1"
  },*/
  {
    image: Blog1,
    alt: "blog-picture",
    author: "Mónica Sánchez Gavito",
    title: "El Colegio Senda haciendo el pensamiento visible",
    description:
      'En el Senda tenemos una metodología desarrollada en la Universidad de Harvard. Esta iniciativa tiene como objetivo transformar la manera en que se enseña y se aprende.',
    link: "/blog-2"
  },
  {
    image: Blog3,
    alt: "ethics-picture",
    author: "Ana Robleda",
    title: "La Enseñanza de la Ética a los Jóvenes",
    description:
      "En un mundo cada vez más globalizado, donde las interacciones sociales y digitales juegan un papel crucial en el desarrollo, la enseñanza de la ética se ha vuelto una necesidad.",
    link: "/blog-3"
  },
  {
    image: Blog4,
    alt: "magic-cosmos-picture",
    author: "Mónica Sánchez Gavito",
    title: "Estimulación Temprana: Construyendo los Cimientos del Futuro",
    description:
      "La estimulación temprana es una herramienta fundamental en el desarrollo integral de los niños desde el nacimiento hasta los seis años de edad.",
    link: "/blog-4"
  }
  
];

export default CardsNosotros;
