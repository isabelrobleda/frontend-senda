import React, { useState } from "react";

const competencias = [
  {
    emoji: "🌐",
    titulo: "Habilidades Digitales",
    subtitulo: "Uso crítico, seguro y creativo de la tecnología",
    color: "#009bce",
    bg: "#e8f6fc",
    body: "Las habilidades digitales están orientadas al uso crítico, seguro y creativo de las tecnologías de la información y la comunicación en contextos educativos, sociales y laborales.",
    senda:
      "En Senda, la tecnología no es un fin sino una herramienta al servicio del aprendizaje profundo. Enseñamos a los estudiantes a preguntar antes de consumir, a crear antes de solo reproducir, y a usar la tecnología con responsabilidad ética.",
  },
  {
    emoji: "🌱",
    titulo: "Competencias Verdes",
    subtitulo: "Ciudadanos que cuidan el planeta",
    color: "#b0cb4f",
    bg: "#f4f8e8",
    body: "Las competencias verdes o de sostenibilidad están enfocadas en la comprensión del cambio climático, la protección del medio ambiente y el uso responsable de los recursos naturales.",
    senda:
      "En Senda, la conciencia ecológica hace parte de nuestra identidad desde hace años. Formar personas que se sientan responsables del mundo que habitan es parte central de nuestra misión.",
  },
  {
    emoji: "🧠",
    titulo: "Pensamiento Crítico",
    subtitulo: "Pensar, cuestionar, decidir con autonomía",
    color: "#7c5cbf",
    bg: "#f0ebf8",
    body: "Los representantes ministeriales coincidieron en la urgencia de fortalecer el pensamiento crítico, la resolución de problemas y las competencias digitales, junto con recuperar aprendizajes básicos como la lectoescritura y las matemáticas.",
    senda:
      "En Senda, el aula es un espacio de diálogo, no de dictado. Desde preescolar, los niños aprenden a dudar con inteligencia y a construir argumentos propios.",
  },
  {
    emoji: "🔧",
    titulo: "Resolución de Problemas",
    subtitulo: "De la teoría a la acción",
    color: "#e87c30",
    bg: "#fdf0e6",
    body: "Para 2030, la automatización podría sustituir 90 millones de puestos de trabajo, pero también generar otros 170 millones nuevos. Los sistemas educativos deben centrarse en las competencias verdes y digitales, la resolución de problemas y el pensamiento crítico.",
    senda:
      "En Senda, el aprendizaje basado en proyectos y situaciones reales ha sido nuestra forma de preparar estudiantes que no se paralizan ante los retos: los enfrentan.",
  },
  {
    emoji: "❤️",
    titulo: "Desarrollo Socioemocional",
    subtitulo: "Aprender a ser, aprender a convivir",
    color: "#d94f6b",
    bg: "#fce8ed",
    body: "El informe de la UNESCO Reimaginar juntos nuestros futuros (2021) planteó con claridad que la educación debe abarcar una ética de cuidado, reciprocidad y solidaridad, y fortalecer la educación como un esfuerzo público y un bien común.",
    senda:
      "En Senda, el desarrollo socioemocional no es una asignatura adicional: es el hilo que atraviesa toda la experiencia escolar. Que un niño aprenda a reconocer sus emociones, a trabajar en equipo y a celebrar el logro ajeno es tan importante como aprender a multiplicar.",
  },
];

const referentes = [
  {
    pais: "🇪🇺 Unión Europea",
    titulo: "Competencias para la vida",
    texto:
      "El Consejo Europeo reconoció que han cambiado los requisitos en materia de competencias: la automatización, la tecnología y los cambios sociales hacen que las competencias emprendedoras, sociales y cívicas sean más importantes que nunca para asegurar la resiliencia y la capacidad de adaptación.",
  },
  {
    pais: "🌍 OCDE",
    titulo: "Learning Compass 2030",
    texto:
      "El Marco de Aprendizaje 2030 explicita el compromiso de ayudar a cualquier estudiante a desarrollarse como una persona integral, desplegar su potencial y contribuir a conformar un futuro compartido construido a partir del bienestar de los individuos, las comunidades y el planeta.",
  },
  {
    pais: "🇫🇮 Finlandia",
    titulo: "Aprender a ser, no solo a saber",
    texto:
      "Los estudiantes en Finlandia exhiben un alto nivel de competencias transversales: creatividad, pensamiento crítico y resolución de problemas. Su modelo ha demostrado que cuando se confía en el estudiante y en el maestro, los resultados superan los de los sistemas más rígidos.",
  },
  {
    pais: "🇸🇬 Singapur",
    titulo: "Habilidades reales para el mundo real",
    texto:
      "El sistema educativo de Singapur se enfoca en desarrollar habilidades esenciales como el pensamiento crítico, la resolución de problemas y la creatividad desde una edad temprana, combinando equilibradamente conocimientos académicos y habilidades prácticas.",
  },
];

const tabla = [
  {
    competencia: "🌐 Habilidades digitales",
    senda: "Tecnología como herramienta crítica y creativa",
  },
  {
    competencia: "🌱 Competencias verdes",
    senda: "Conciencia ambiental integrada al currículo",
  },
  {
    competencia: "🧠 Pensamiento crítico",
    senda: "Aulas dialógicas, preguntas abiertas, debate",
  },
  {
    competencia: "🔧 Resolución de problemas",
    senda: "Aprendizaje por proyectos y situaciones reales",
  },
  {
    competencia: "❤️ Desarrollo socioemocional",
    senda: "Bienestar, convivencia y comunidad como ejes",
  },
  {
    competencia: "🌏 Ciudadanía global",
    senda: "Valores, diversidad y sentido de propósito",
  },
];

function CompetenciasUNESCO() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero */}
      <div className="w-full bg-[#f9f9fe] px-8 md:px-16 pt-28 pb-16 flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-[#009bce] text-white text-sm font-semibold font-['Inter'] px-4 py-1.5 rounded-full self-start">
            30 años formando lo que el mundo necesita hoy
          </div>
          <h1 className="text-[#1e1e1e] text-3xl md:text-5xl font-bold font-['Inter'] leading-tight">
            Las competencias UNESCO
          </h1>
          <p className="text-[#757575] text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Marco de Competencias para el Siglo XXI — Documento de referencia
            para padres, maestros y comunidad educativa.
          </p>
        </div>
      </div>

      {/* Por qué competencias */}
      <div className="w-full px-8 md:px-16 py-16 flex flex-col items-center bg-white">
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-[#1e1e1e] text-2xl font-bold font-['Inter']">
              ¿Por qué hablar de competencias y no solo de contenidos?
            </h2>
            <p className="text-[#757575] text-base font-normal font-['Inter'] leading-relaxed">
              Durante décadas, la educación tradicional se centró en transmitir
              conocimientos. Hoy, las principales organizaciones educativas del
              mundo confirman que eso no es suficiente.
            </p>
            <p className="text-[#757575] text-base font-normal font-['Inter'] leading-relaxed">
              La UNESCO ha señalado que la educación del futuro debe ir más allá
              de la transmisión de conocimientos tradicionales, integrando
              habilidades prácticas y valores que preparen a los estudiantes
              para una ciudadanía activa y responsable.
            </p>
          </div>
          <div className="md:w-1/2 bg-[#f9f9fe] rounded-2xl p-8 border-l-4 border-[#009bce] flex flex-col gap-3">
            <div className="text-[#009bce] text-4xl font-bold font-['Inter']">
              30
            </div>
            <div className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">
              años de práctica cotidiana
            </div>
            <p className="text-[#757575] text-base font-normal font-['Inter'] leading-relaxed">
              En el Colegio Senda llevamos 30 años trabajando exactamente desde
              esa convicción. Lo que hoy los organismos internacionales proponen
              como urgente, nosotros lo hemos vivido como práctica cotidiana.
              Este documento nombra y fundamenta ese camino con el lenguaje
              actual.
            </p>
          </div>
        </div>
      </div>

      {/* Las 5 competencias */}
      <div className="w-full px-8 md:px-16 py-16 bg-[#f9f9fe] flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1e1e1e] text-2xl font-bold font-['Inter']">
              Las 5 competencias clave según la UNESCO para 2030
            </h2>
            <p className="text-[#757575] text-base font-normal font-['Inter'] leading-relaxed max-w-2xl">
              La UNESCO reunió a ministros de Educación de distintos países para
              analizar qué habilidades deberán dominar los estudiantes antes de
              2030, en un escenario marcado por la automatización, la
              inteligencia artificial, el cambio climático y profundos cambios
              sociales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencias.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-200 hover:shadow-lg"
                style={{
                  borderTop: `4px solid ${c.color}`,
                  boxShadow:
                    activeCard === i
                      ? `0 8px 32px ${c.color}30`
                      : "0 2px 8px rgba(0,0,0,0.06)",
                }}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: c.bg }}
                  >
                    {c.emoji}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#1e1e1e] text-base font-bold font-['Inter']">
                      {c.titulo}
                    </div>
                    <div
                      className="text-xs font-medium font-['Inter']"
                      style={{ color: c.color }}
                    >
                      {c.subtitulo}
                    </div>
                  </div>
                </div>

                <p className="text-[#757575] text-sm font-normal font-['Inter'] leading-relaxed">
                  {c.body}
                </p>

                {activeCard === i && (
                  <div
                    className="mt-2 p-4 rounded-xl text-sm font-['Inter'] leading-relaxed"
                    style={{ backgroundColor: c.bg, color: "#1e1e1e" }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: c.color }}
                    >
                      En Senda:{" "}
                    </span>
                    {c.senda.replace(/^En Senda, /, "")}
                  </div>
                )}

                <button
                  className="text-xs font-semibold font-['Inter'] self-start mt-auto"
                  style={{ color: c.color }}
                >
                  {activeCard === i
                    ? "▲ Ocultar cómo lo vivimos"
                    : "▼ Cómo lo vivimos en Senda"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Referentes del mundo */}
      <div className="w-full px-8 md:px-16 py-16 bg-white flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col gap-8">
          <h2 className="text-[#1e1e1e] text-2xl font-bold font-['Inter']">
            Más allá de la UNESCO: lo que otros referentes del mundo confirman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {referentes.map((r, i) => (
              <div
                key={i}
                className="bg-[#f9f9fe] rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="text-lg font-bold font-['Inter'] text-[#1e1e1e]">
                  {r.pais}
                </div>
                <div className="text-[#009bce] text-base font-semibold font-['Inter']">
                  {r.titulo}
                </div>
                <p className="text-[#757575] text-sm font-normal font-['Inter'] leading-relaxed">
                  {r.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ciudadanía global */}
      <div className="w-full px-8 md:px-16 py-16 bg-[#009bce] flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-10 items-center">
          <div className="text-6xl md:text-8xl">🌏</div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl font-bold font-['Inter']">
              Una competencia que integra todas las demás: la ciudadanía global
            </h2>
            <p className="text-white/90 text-base font-normal font-['Inter'] leading-relaxed">
              El informe más importante de la UNESCO de los últimos años,{" "}
              <span className="font-semibold">
                Reimaginar juntos nuestros futuros: Un nuevo contrato social
                para la educación (2021)
              </span>
              , invita a construir futuros pacíficos, justos y sostenibles para
              todos.
            </p>
            <p className="text-white/90 text-base font-normal font-['Inter'] leading-relaxed">
              Ese "nuevo contrato" es exactamente lo que el Colegio Senda ha
              propuesto durante 30 años: una educación que no prepara solo para
              el mercado laboral, sino para la vida en comunidad, para el
              cuidado del otro y para la participación activa en la construcción
              de un mundo mejor.
            </p>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="w-full px-8 md:px-16 py-16 bg-white flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col gap-8">
          <h2 className="text-[#1e1e1e] text-2xl font-bold font-['Inter']">
            Lo que el Colegio Senda garantiza
          </h2>
          <div className="w-full overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-left font-['Inter']">
              <thead>
                <tr className="bg-[#009bce]">
                  <th className="px-6 py-4 text-white text-sm font-semibold">
                    Competencia UNESCO / OCDE
                  </th>
                  <th className="px-6 py-4 text-white text-sm font-semibold">
                    Cómo la vivimos en Senda
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabla.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#f9f9fe]"}
                  >
                    <td className="px-6 py-4 text-[#1e1e1e] text-sm font-medium">
                      {row.competencia}
                    </td>
                    <td className="px-6 py-4 text-[#757575] text-sm">
                      {row.senda}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cita y fuentes */}
      <div className="w-full px-8 md:px-16 py-16 bg-[#f9f9fe] flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col gap-10">
          {/* Cita */}
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#b0cb4f] flex flex-col gap-3">
            <div className="text-[#b0cb4f] text-4xl font-['Inter']">"</div>
            <p className="text-[#1e1e1e] text-xl font-semibold font-['Inter'] leading-snug">
              Aprender hoy para liderar mañana.
            </p>
            <p className="text-[#757575] text-sm font-normal font-['Inter']">
              — Título del diálogo ministerial de la UNESCO, 43.ª Conferencia
              General, 2025
            </p>
          </div>

          {/* Fuentes */}
          <div className="flex flex-col gap-3">
            <div className="text-[#1e1e1e] text-base font-semibold font-['Inter']">
              Fuentes de referencia
            </div>
            <ul className="flex flex-col gap-2 text-[#757575] text-sm font-normal font-['Inter'] leading-relaxed list-disc ml-5">
              <li>
                UNESCO. <span className="italic">Reimaginar juntos nuestros futuros: Un nuevo contrato social para la educación.</span> Comisión Internacional sobre los Futuros de la Educación, 2021.
              </li>
              <li>
                UNESCO. Diálogo ministerial "Aprender hoy, liderar mañana", 43.ª Conferencia General, 2025.
              </li>
              <li>
                OCDE. <span className="italic">Learning Compass 2030 / Marco de Aprendizaje 2030,</span> 2018.
              </li>
              <li>
                Consejo Europeo. <span className="italic">Recomendación sobre competencias clave para el aprendizaje permanente,</span> 2018.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetenciasUNESCO;
