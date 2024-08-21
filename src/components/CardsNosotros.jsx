import React from "react";

function CardsNosotros() {
  return (
    <div className="w-full md:h-screen p-8 md:p-16 bg-white flex flex-col justify-center items-center gap-12">
      <div className="md:text-center text-left text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
      Nuestro blog
      </div>
      <div className="w-full  max-w-[1440px] flex flex-col md:flex-row justify-start items-start gap-12">
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
              <div className="px-6 py-2 bg-[#009bce] rounded-2xl flex justify-center items-center gap-2">
                <button className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Ver más
                </button>
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
    image: "src/assets/elecciones.png",
    alt: "elections-picture",
    author: "Mónica Sánchez Gavito",
    title: "El Colegio Senda y las Elecciones 2024",
    description:
      "La educación no sólo se trata de impartir conocimientos, sino de formar ciudadanos íntegros, conscientes y preparados para enfrentar los retos del mundo moderno."
  },
  {
    image: "src/assets/blog01.png",
    alt: "blog-picture",
    author: "Mónica Sánchez Gavito",
    title: "El Colegio Senda haciendo el pensamiento visible",
    description:
      'En el Senda tenemos una metodología desarrollada en la Universidad de Harvard. Esta iniciativa tiene como objetivo transformar la manera en que se enseña y se aprende.'
  },
  {
    image: "src/assets/secundaria_01.jpg",
    alt: "ethics-picture",
    author: "Ana Robleda",
    title: "La Enseñanza de la Ética a los Jóvenes",
    description:
      "En la era de la informaciónLa enseñanza de la ética a los jóvenes de hoy en día es más que una simple asignatura académica; es una inversión en el futuro de nuestra sociedad."
  }
];

export default CardsNosotros;
