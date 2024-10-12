import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import ImgBlog3 from "../../assets/blog/blog-3.png";
import Ana from "../../assets/blog/ana-robleda.jpeg";

function Blog3() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-[1440px]">
        <div className="w-full px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-8">
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="w-full max-w-[1312px] h-96 rounded-2xl object-cover "
              src={ImgBlog3}
              alt="Blog 2"
            />
          </div>
        </div>

        <div className="px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="text-center text-black/40 text-2xl font-semibold font-['Inter']">
              7 de septiembre de 2024
            </div>
            <div className="text-center text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[48px] md:leading-[68.40px]">
              La Enseñanza de la Ética a los Jóvenes
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full bg-[#d9d9d9] relative">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={Ana}
                  alt="Ana Robleda"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-black/90 text-xl font-normal">
                  Ana Robleda
                </div>
                <div className="text-black/60 text-base font-normal">
                  Titular del Equipo Legal, Etica, Seguridad y No Violencia
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[800px] flex flex-col gap-12">
            <div className="text-[#009bce] text-base font-semibold font-['Inter'] leading-snug">
              Educar en ética no solo les proporciona herramientas para
              reflexionar sobre el bien y el mal, sino que también les ayuda a
              tomar decisiones conscientes y responsables en un entorno de
              constante cambio.
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
              La enseñanza de la ética a los jóvenes es un pilar esencial en su
              formación como ciudadanos responsables. En un mundo lleno de
              desafíos y dilemas complejos, ofrecer a los adolescentes
              herramientas para reflexionar críticamente sobre su entorno y sus
              decisiones les ayudará a navegar la vida con una brújula moral
              sólida. La ética no solo se trata de aprender lo que está bien o
              mal, sino de formar personas capaces de actuar con integridad y
              respeto, construyendo así una sociedad más justa y humana.
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
    text: `En un mundo cada vez más globalizado y complejo, donde las interacciones sociales y digitales juegan un papel crucial en el desarrollo de los individuos, la enseñanza de la ética a los jóvenes se ha vuelto una necesidad indispensable. Educar en ética no solo les proporciona herramientas para reflexionar sobre el bien y el mal, sino que también les ayuda a tomar decisiones conscientes y responsables en un entorno de constante cambio. La ética, por lo tanto, no es solo una asignatura más en el currículo escolar, sino una guía fundamental para la vida.`,
  },
  {
    title: "¿Por qué es importante enseñar ética?",
    text: "Los adolescentes se encuentran en una etapa clave de su desarrollo, en la que están formando su identidad y su sistema de valores. Este proceso se ve influenciado por una serie de factores: su entorno familiar, las redes sociales, sus amigos y las instituciones educativas. En este contexto, la educación ética juega un papel crucial porque permite a los jóvenes desarrollar una visión crítica sobre su entorno y sus propias acciones. Les ayuda a entender las implicaciones de sus decisiones, tanto a nivel personal como social. Además, enseñar ética en las aulas fomenta el respeto por los derechos humanos, la justicia, la equidad y la responsabilidad social. En un mundo donde las desigualdades y las tensiones sociales son evidentes, formar ciudadanos conscientes y con sentido ético es una inversión en una sociedad más justa y empática.",
  },
  {
    title: "Desafíos en la enseñanza de la ética",
    text: "Uno de los principales retos en la enseñanza de la ética es que los jóvenes no solo necesitan aprender conceptos abstractos, sino que deben ser capaces de aplicarlos en situaciones cotidianas. La ética no puede enseñarse de manera puramente teórica; debe integrarse a través de ejemplos concretos y discusiones que los involucren activamente. Además, vivimos en una era digital donde los adolescentes están expuestos a una sobrecarga de información y estímulos. La influencia de las redes sociales, las noticias, y los medios de comunicación a menudo puede generar confusión acerca de lo que es correcto o incorrecto. Por lo tanto, es fundamental que las escuelas proporcionen un espacio seguro donde los estudiantes puedan debatir, analizar y reflexionar sobre dilemas éticos reales.",
  },
  {
    title: "Métodos efectivos para enseñar ética",
    text: "Un enfoque efectivo para la enseñanza de la ética es el uso de casos prácticos y debates. Plantear situaciones reales o simuladas que los jóvenes puedan enfrentar en su vida diaria permite que internalicen los principios éticos de una manera más profunda. Los profesores pueden facilitar debates en los que los estudiantes reflexionen sobre las consecuencias de diferentes acciones y cómo afectan no solo a quienes las realizan, sino también a su comunidad.",
  },
  {
    text: "El aprendizaje colaborativo es otra estrategia clave. Permitir que los estudiantes trabajen en equipo para analizar dilemas éticos promueve la empatía y la escucha activa. Al interactuar con las ideas de sus compañeros, los adolescentes desarrollan una mayor comprensión de puntos de vista diversos y cómo estos pueden enriquecer su propio razonamiento moral.",
  },
  {
    text: "Asimismo, es crucial integrar el uso de la tecnología de manera responsable en las clases de ética. Las redes sociales, por ejemplo, pueden ser herramientas útiles para analizar comportamientos y reflexionar sobre cuestiones de privacidad, ciberbullying o la difusión de información. Aprovechar estas plataformas para educar en valores puede ser una forma efectiva de llegar a los jóvenes en su propio contexto.",
  },
  {
    title: "El rol de los docentes y la familia",
    text: "La enseñanza de la ética no debe limitarse al aula. Los profesores, en colaboración con las familias, deben trabajar juntos para crear un entorno donde los valores se vivan día a día. Los jóvenes aprenden no solo de lo que se les dice, sino de lo que observan a su alrededor. Por lo tanto, tanto los educadores como los padres tienen el deber de modelar comportamientos éticos, actuando con integridad, respeto y responsabilidad. Los profesores pueden facilitar la reflexión ética, pero es en el hogar donde los valores se refuerzan y donde los jóvenes experimentan la importancia de la coherencia entre el discurso y las acciones.",
  },
];

export default Blog3;
