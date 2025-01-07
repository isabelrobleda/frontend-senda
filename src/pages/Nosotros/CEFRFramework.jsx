import React from "react";
import Preescolar from "../../assets/CEFR/Preescolar.jpeg";
import Primaria from "../../assets/CEFR/Primaria.jpeg";
import Secundaria from "../../assets/CEFR/Secundaria.jpeg";


function CEFRFramework() {
  return (
    <>
      {/* Header Section */}
      <div className="md:h-[545px] h-auto p-8 md:p-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-12">
        <div className="w-full max-w-[1440px] mt-20 flex flex-col justify-start items-left gap-12">
          <div className="max-w-max text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px] text-left ">
            Common European Framework of Reference (CEFR)
          </div>
          <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug md:mr-[28px]">
            <p >
              Nuestro compromiso con el Marco Común Europeo de Referencia para
              las Lenguas (CEFR) asegura que nuestros estudiantes desarrollen
              competencias lingüísticas reconocidas internacionalmente en cada
              etapa educativa.
            </p>
            <br />
            <p className="italic">
              Our commitment to the Common European Framework of Reference for
              Languages (CEFR) ensures that students acquire globally recognized
              language competencies at every stage of their education.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-8 md:px-[32px] py-16 md:py-32 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Preschool Section */}
          <div className="w-full md:w-[30%] flex flex-col justify-start items-start gap-6">
            <img
              className="w-96 h-64 rounded-lg"
              src={Preescolar}
              alt="Preschool"
            />
            <div className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">
              Preschool / Preescolar
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            <p >
                Los estudiantes desarrollan habilidades de comunicación básicas
                mediante entornos de aprendizaje inmersivos. El enfoque está en la adquisición
                natural del idioma utilizando unidades temáticas que conectan con los intereses y
                entornos inmediatos de los estudiantes, como la familia, la comunidad y el mundo.
                Esto ayuda a establecer una base sólida para el desarrollo futuro del lenguaje.
              </p>
              <br />
              <p className="italic">
                Students develop foundational communication skills through
                immersive learning environments. The focus is on natural language acquisition using
                thematic units that connect with students' immediate surroundings and interests,
                such as family, community, and the world. This helps to establish a strong base for
                future language development.
              </p>
              <br />
              
              <p>CEFR Levels / Niveles: A1 - A2</p>
            </div>
          </div>


          {/* Primary Section */}
          <div className="w-full md:w-[30%] flex flex-col justify-start items-start gap-6">
            <img
              className="w-96 h-64 rounded-lg"
              src={Primaria}
              alt="Primary"
            />
            <div className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">
              Primary / Primaria
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            <p>
                Los estudiantes refuerzan el vocabulario y la gramática,
                avanzando hacia habilidades prácticas de comunicación. A través de estrategias de
                aprendizaje integradas, los estudiantes participan en conversaciones significativas
                sobre temas familiares y asignaturas académicas. También comienzan a desarrollar
                habilidades de escritura narrativa y descriptiva, preparando el terreno para
                tareas lingüísticas más complejas en el futuro.
              </p>
              <br />
              <p className="italic">
                Students strengthen vocabulary and grammar, advancing to
                practical communication skills. Through integrated learning strategies, students
                engage in meaningful conversations about familiar topics and academic subjects.
                They also start developing narrative and descriptive writing abilities, setting
                the stage for more complex language tasks in the future.
              </p>
              <br />
              
              <p>CEFR Levels / Niveles: A2 - B1</p>
            </div>
          </div>

          {/* Secondary Section */}
          <div className="w-full md:w-[30%] flex flex-col justify-start items-start gap-6">
            <img
              className="w-96 h-64 rounded-lg"
              src={Secundaria}
              alt="Secondary"
            />
            <div className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">
              Secondary / Secundaria
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            <p>
                Los estudiantes logran fluidez y pensamiento crítico,
                preparándose para un futuro globalizado. El currículo enfatiza habilidades avanzadas
                en el idioma, incluyendo análisis crítico, argumentación y escritura creativa.
                Estas competencias permiten a los estudiantes desenvolverse con confianza en
                entornos multilingües y multiculturales, preparándolos para el éxito académico y
                profesional.
              </p>
              <br />
              <p className="italic">
                Students achieve fluency and critical thinking, preparing for a
                globalized future. The curriculum emphasizes advanced language skills, including
                critical analysis, argumentation, and creative writing. These competencies enable
                students to confidently navigate multilingual and multicultural environments,
                equipping them for academic and professional success.
              </p>
              <br />
             
              <p>CEFR Levels / Niveles: B1 - B2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CEFRFramework;
