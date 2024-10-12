import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import ImgBlog2 from "../../assets/blog/blog-2.png";
import Monica from "../../assets/equipo/Image-Nuestro_equipo-02.png";

function Blog2() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-[1440px]">
        <div className="w-full px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-8">
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="w-full max-w-[1312px] h-96 rounded-2xl object-cover "
              src={ImgBlog2}
              alt="Blog 2"
            />
          </div>
        </div>

        <div className="px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="text-center text-black/40 text-2xl font-semibold font-['Inter']">
              10 de Julio de 2024
            </div>
            <div className="text-center text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[48px] md:leading-[68.40px]">
            El Colegio Senda haciendo el pensamiento visible
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
              La educación no sólo se trata de impartir conocimientos, sino de
              formar ciudadanos íntegros, conscientes y preparados para enfrentar
              los retos del mundo moderno.
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
              Conclusión
            </div>
            <div className="text-[#757575] text-base md:text-lg font-normal">
              "Hacer Visible el Pensamiento" es una metodología innovadora que
              tiene el potencial de transformar la educación. Al promover una
              cultura de pensamiento, mejorar la comprensión profunda, fomentar la
              metacognición, facilitar la colaboración, desarrollar habilidades de
              comunicación y apoyar la evaluación formativa, esta metodología
              ofrece múltiples beneficios tanto para estudiantes como para
              profesores. Implementar "Hacer Visible el Pensamiento" en el Colegio
              Senda lleva a una educación más reflexiva, crítica y efectiva,
              preparando mejor a los estudiantes para enfrentar los desafíos del
              mundo moderno.
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
      
      text: `"Hacer Visible el Pensamiento" es una metodología educativa desarrollada por el Proyecto Cero de la Universidad de Harvard. Esta iniciativa tiene como objetivo transformar la manera en que se enseña y se aprende, promoviendo una cultura de pensamiento en las aulas. Al enfatizar la visibilidad del pensamiento, se busca que tanto profesores como estudiantes puedan comprender y valorar los procesos cognitivos que subyacen al aprendizaje. A continuación, exploraremos la importancia de esta metodología y cómo ésta, beneficia la educación en el Colegio Senda.`,
    },
    {
      title: "Promueve una Cultura de Pensamiento",  
      text: "Uno de los aspectos fundamentales de `Hacer Visible el Pensamiento` es la creación de una cultura de pensamiento. Esto significa que se fomenta un ambiente en el que pensar es valorado y reconocido. En lugar de centrarse únicamente en la memorización de datos y hechos, se alienta a los estudiantes a reflexionar, cuestionar y explorar ideas en profundidad. Esta cultura de pensamiento ayuda a los estudiantes a desarrollar habilidades críticas y creativas que son esenciales en el mundo moderno.",
    },
    {
      title: "Mejora la Comprensión Profunda",
      text: "El enfoque tradicional de la educación a menudo se centra en la adquisición de conocimientos superficiales. Sin embargo, `Hacer Visible el Pensamiento` se centra en la comprensión profunda. Al hacer explícitos los procesos de pensamiento, los estudiantes pueden ver cómo se construyen las ideas y conceptos. Esto no solo mejora su comprensión de los temas, sino que también les permite aplicar ese conocimiento de manera más efectiva en diferentes contextos.",
    },
    {
      title: "Facilita la Metacognición",
      text: "La metacognición, o la capacidad de reflexionar sobre el propio proceso de pensamiento, es una habilidad crucial para el aprendizaje autónomo. `Hacer Visible el Pensamiento` anima a los estudiantes a ser conscientes de cómo piensan y aprenden. Al utilizar rutinas de pensamiento y herramientas visuales, los estudiantes pueden identificar sus propias estrategias de aprendizaje y ajustarlas según sea necesario. Esta autoevaluación y ajuste continuo es vital para el desarrollo de aprendices independientes y competentes.",
    },
    {
      title: "Facilita la Colaboración",
      text: "En un salón donde el pensamiento es visible, la colaboración entre estudiantes se ve significativamente enriquecida. Los estudiantes pueden compartir sus ideas y procesos de pensamiento con sus compañeros, lo que facilita un intercambio de ideas más profundo. Esta colaboración no solo enriquece el aprendizaje individual, sino que también ayuda a construir una comunidad en la que todos se benefician del conocimiento y las perspectivas de los demás.",
    },
    {
      title: "Desarrolla Habilidades de Comunicación",
      text: "Hacer que el pensamiento sea visible implica expresar y articular ideas de manera clara y coherente. Esto desarrolla las habilidades de comunicación de los estudiantes, tanto oral como escrita. Los estudiantes aprenden a argumentar sus puntos de vista, a escuchar activamente y a responder de manera constructiva a las ideas de otros. Estas habilidades son esenciales no solo en el ámbito académico, sino también en la vida profesional y personal.",
    },
    {
      title: "Apoya la Evaluación Formativa",
      text: "La evaluación formativa es una herramienta clave en el proceso educativo, y `Hacer Visible el Pensamiento` facilita su implementación. Al hacer visibles los procesos de pensamiento, los profesores pueden evaluar de manera más precisa el progreso de sus estudiantes. Esto permite proporcionar retroalimentación específica y oportuna, ajustando la enseñanza para satisfacer mejor las necesidades individuales de los estudiantes. La evaluación formativa se convierte así en un proceso continuo y dinámico que apoya el aprendizaje.",
    },
];

export default Blog2;
