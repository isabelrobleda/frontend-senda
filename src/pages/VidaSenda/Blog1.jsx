import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import ImgBlog1 from "../../assets/blog/Blog-1-image.png";
import Monica from "../../assets/equipo/Image-Nuestro_equipo-02.png";

function Blog1() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-[1440px]">
        <div className="w-full px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-8">
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="w-full max-w-[1312px] h-96 rounded-2xl object-cover"
              src={ImgBlog1}
              alt="Blog 1"
            />
          </div>
        </div>

        <div className="px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="text-center text-black/40 text-2xl font-semibold font-['Inter']">
              2 de junio de 2024
            </div>
            <div className="text-center text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[48px] md:leading-[68.40px]">
              El Colegio Senda y las Elecciones 2024
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full bg-[#d9d9d9] relative">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={Monica}
                  alt="Mónica Sánchez Gavito"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-black/90 text-xl font-normal">
                  Mónica Sánchez Gavito
                </div>
                <div className="text-black/60 text-base font-normal">
                  Directora General y Fundadora
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[800px] flex flex-col gap-12">
            <div className="text-[#009bce] text-base font-semibold font-['Inter'] leading-snug">
            En nuestra comunidad educativa, cada uno de nosotros- empleados, maestros, alumnos y padres de familia- juega un papel fundamental en la construcción de un mejor mañana. 
            </div>

            {/* Content Sections */}
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-lg md:text-xl font-semibold">
                  {section.title}
                </div>
                <div className="text-[#757575] text-base md:text-lg font-normal">
                  {section.text}
                </div>
              </div>
            ))}

            <div className="text-[#1e1e1e] text-lg md:text-xl font-semibold">
              
            </div>
            <div className="text-[#757575] text-base md:text-lg font-normal">
            Con profunda gratitud y esperanza, <br />Mónica Sánchez Gavito
            </div>
          </div>
        </div>

        {/* CardsNosotros Component */}
        <CardsNosotros />
      </div>
    </div>
  );
}

// Content sections data
const sections = [
  {
    
    text: `Querida Comunidad Educativa Senda
Nos encontramos en un momento trascendental para nuestro país, donde el cambio de gobierno y los desafíos económicos e institucionales se entrelazan, marcando el rumbo de nuestro futuro. En este contexto, nuestra responsabilidad como ciudadanos comprometidos se vuelve más crucial que nunca.
`,
  },
  {
    title: "Somos el motor de cambio",  
    text: "En nuestra comunidad educativa, cada uno de nosotros- empleados, maestros, alumnos y padres de familia- juega un papel fundamental en la construcción de un mejor mañana. Juntos, podemos ser el motor de cambio que nuestra sociedad necesita, promoviendo valores de responsabilidad, solidaridad y compromiso, ejerciendo nuestro voto en estas elecciones.",
  },
  {
    title: "Nuestro compromiso con la educación",
    text: "Como educadores compartimos el deber de actuar con integridad y ética, siendo ejemplos a seguir para nuestros niños y jóvenes. Fomentar un ambiente de respeto y participación, donde cada idea y esfuerzo se valore y se impulse hacia el logro de nuestros objetivos comunes. La educación no solo se trata de impartir conocimientos, sino de formar ciudadanos íntegros, conscientes y preparados para enfrentar los retos del mundo moderno.",
  },
  {
    title: "Un llamado a la acción",
    text: "A nuestros maestros, los pilares de nuestro sistema educativo, les agradezco que sigan inspirando a nuestros estudiantes con su dedicación y pasión. Ustedes tienen el poder de transformar el mundo con sus ideas y acciones. Sean agentes de cambio, promotores de la justicia y defensores de los valores.",
  },
  {
    title: "A los padres de familia",
    text: "Y a los padres de familia, les agradezco profundamente por su constante apoyo y colaboración. Su compromiso con la educación de sus hijos es fundamental para nuestro éxito compartido, ejerciendo nuestro voto en estas elecciones, siendo modelo de ciudadanos responsables y construyendo un entorno donde cada niño y joven pueda apreciar lo que hacemos como adultos en este ejercicio ciudadano.",
  },
  {
    title: "Unidos en la diversidad",
    text: "Enfrentamos grandes desafíos, pero también grandes oportunidades, unidos, como una comunidad educativa comprometida y solidaria, podemos superar cualquier obstáculo y alcanzar metas extraordinarias. Sigamos adelante con fe en nuestras capacidades y en el poder transformador de la educación.",
  },
  
  
];

export default Blog1;
