import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import Monica from "../../assets/equipo/Image-Nuestro_equipo-02.png";
import Blog4Img from "../../assets/blog/blog-4-min.jpeg";

function Blog4() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-[1440px]">
        <div className="w-full px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-8">
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="w-full max-w-[1312px] h-96 rounded-2xl object-cover "
              src={Blog4Img}
              alt="Blog 4 image"
            />
          </div>
        </div>

        <div className="px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="text-center text-black/40 text-2xl font-semibold font-['Inter']">
              12 de diciembre de 2024
            </div>
            <div className="text-center text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[48px] md:leading-[68.40px]">
              Estimulación Temprana: Construyendo los Cimientos del Futuro
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
              La estimulación temprana es una herramienta fundamental en el
              desarrollo integral de los niños desde el nacimiento hasta los
              seis años de edad.
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
    text: `La estimulación temprana es una herramienta fundamental en el desarrollo integral de los niños desde el nacimiento hasta los seis años de edad. Durante este período, el cerebro infantil tiene una extraordinaria capacidad de aprendizaje y plasticidad, lo que permite potenciar al máximo las habilidades físicas, cognitivas, emocionales y sociales de los pequeños. En un mundo cada vez más globalizado y complejo, donde las interacciones sociales y digitales juegan un papel crucial en el desarrollo de los individuos, la enseñanza de la ética a los jóvenes se ha vuelto una necesidad indispensable. Educar en ética no solo les proporciona herramientas para reflexionar sobre el bien y el mal, sino que también les ayuda a tomar decisiones conscientes y responsables en un entorno de constante cambio. La ética, por lo tanto, no es solo una asignatura más en el currículo escolar, sino una guía fundamental para la vida.`,
  },
  {
    title: "¿Qué es la estimulación temprana?",
    text: `La estimulación temprana se refiere a un conjunto de actividades y ejercicios diseñados para incentivar el desarrollo de las capacidades innatas de los niños. Estas actividades abarcan diversas áreas como:

Motricidad fina y gruesa: Ejercicios que ayudan al desarrollo de la coordinación y el control del cuerpo.
Lenguaje: Actividades que promueven la comprensión y expresión verbal.
Cognición: Juegos que estimulan el pensamiento crítico, la memoria y la resolución de problemas.
Socioemocional: Estrategias que fomentan la autonomía, la empatía y la seguridad emocional.
`,
  },
  {
    title: "Beneficios de la estimulación temprana",
    text: `Los beneficios de la estimulación temprana son amplios y contribuyen a construir una base sólida para el futuro de los niños. Algunos de los más destacados incluyen:

Desarrollo cerebral óptimo: Durante los primeros años de vida se forman millones de conexiones neuronales. La estimulación adecuada fortalece estas conexiones y facilita el aprendizaje.
Mejora de habilidades sociales: Los niños que participan en programas de estimulación temprana suelen ser más empáticos, comunicativos y cooperativos.
Prevención de rezagos: Identificar y trabajar en áreas de mejora desde una edad temprana puede prevenir dificultades futuras en el aprendizaje o el desarrollo.
Fortalecimiento del vínculo afectivo: La participación de padres y cuidadores en actividades de estimulación crea una conexión emocional más profunda con los niños.
Promoción de la autonomía: Las actividades les enseñan a los pequeños a enfrentar retos y a disfrutar del aprendizaje.
`,
  },
  {
    title: "Nuestra oferta de estimulación temprana",
    text: `En el Senda, entendemos la importancia de brindar a los niños un entorno enriquecedor que estimule su desarrollo integral. Por ello, ofrecemos un programa de estimulación temprana dirigido tanto a alumnos internos como a bebés y niños externos de la comunidad.

Nuestro programa cuenta con:

Profesionales especializados: Educadores y terapeutas capacitados en estimulación temprana.
Espacios adecuados: Aulas y materiales diseñados para garantizar un ambiente seguro y estimulante.
Participación activa de los padres y/o tutores: Creemos que los padres y/o tutores son los primeros educadores, por lo que promovemos su involucramiento en el proceso.

¡Te invitamos a formar parte de esta experiencia transformadora!

La estimulación temprana no solo potencia las capacidades de los niños, sino que también les permite construir las bases para una vida plena y exitosa. Si eres parte de nuestra comunidad o vives en los alrededores, te invitamos a conocer más sobre nuestro programa y a darle a tu pequeño las herramientas para alcanzar su máximo potencial.

Para más información o inscripciones, no dudes en contactarnos al 56 3003 9462‬. Estamos aquí para acompañarte en este maravilloso viaje de crecimiento y aprendizaje.

`,
  },
];

export default Blog4;
