import React, { useState } from "react";
import HeaderBackground from "../../assets/Header-background.png";
import FutbolImg from "../../assets/deportes/futbol.jpeg";
import MainBackground from "../../assets/deportes/main-background.png";
import MexicoImg from "../../assets/proximos_eventos/mexico.png";
import CanchaImg from "../../assets/cancha-fut.jpeg";
import EscalarImg from "../../assets/deportes/deportes_escalar_02.png";
import Futbol2Img from "../../assets/deportes/Deportes_Futbol 2.png";

const weeks = [
  {
    number: "01",
    dates: "20–24 de abril",
    title: "Historia del fútbol",
    color: "#009bce",
    questions: [
      { level: "Recordar", q: "¿Dónde surgió el fútbol?" },
      { level: "Comprender", q: "¿Por qué se volvió tan popular?" },
      { level: "Aplicar", q: "¿Cómo se juega hoy comparado con antes?" },
      { level: "Analizar", q: "¿Qué cambios han sido más importantes?" },
      { level: "Evaluar", q: "¿Qué etapa del fútbol fue mejor?" },
      { level: "Crear", q: "Diseña tu versión del fútbol" },
    ],
    products: ["Línea del tiempo ilustrada", "Video explicativo"],
    routine: "Ver · Pensar · Preguntarse",
  },
  {
    number: "02",
    dates: "27–30 de abril",
    title: "Historia del Mundial varonil y femenil",
    color: "#b0cb4f",
    questions: [
      { level: "Recordar", q: "¿Cuándo inició el mundial?" },
      { level: "Comprender", q: "¿Cómo ha cambiado el torneo?" },
      { level: "Aplicar", q: "¿Cómo sería organizar uno hoy?" },
      { level: "Analizar", q: "¿Qué países dominan el fútbol?" },
      { level: "Evaluar", q: "¿Cuál mundial fue el más importante?" },
      { level: "Crear", q: "Diseña un mundial ideal" },
    ],
    products: ["Línea del tiempo comparativa", "Infografía", "Campaña de inclusión"],
    routine: "Afirmar · Apoyar · Preguntar",
  },
  {
    number: "03",
    dates: "18–22 de mayo",
    title: "Fair Play, valores y reglamentos",
    color: "#009bce",
    questions: [
      { level: "Recordar", q: "¿Qué es fair play?" },
      { level: "Comprender", q: "¿Por qué es importante?" },
      { level: "Aplicar", q: "¿Cómo lo practicas?" },
      { level: "Analizar", q: "Analiza casos reales" },
      { level: "Evaluar", q: "¿Qué conducta fue correcta?" },
      { level: "Crear", q: "Código de valores del grupo" },
    ],
    products: ["Cartel de valores", "Reglamento ético", "Reglamento del torneo Senda"],
    routine: "Círculo de perspectivas",
  },
  {
    number: "04",
    dates: "25–28 de mayo",
    title: "Países del Mundial",
    color: "#b0cb4f",
    questions: [
      { level: "Recordar", q: "¿Dónde está el país?" },
      { level: "Comprender", q: "¿Cómo es su cultura, geopolítica y contexto social?" },
      { level: "Aplicar", q: "Relaciona su cultura con el fútbol" },
      { level: "Analizar", q: "Compara países" },
      { level: "Evaluar", q: "¿Cuál tiene mejor desarrollo y por qué?" },
      { level: "Crear", q: "Presentación final: video, cartel o exposición" },
    ],
    products: ["Investigación documental de países", "Video documental"],
    routine: "12 grupos · 4 países por grupo · 48 países en total",
  },
  {
    number: "05",
    dates: "1–5 de junio",
    title: "Mundial 2026",
    color: "#009bce",
    questions: [
      { level: "Recordar", q: "¿Dónde será? Ubica los países sede" },
      { level: "Comprender", q: "¿Cómo se organiza?" },
      { level: "Aplicar", q: "Planea un evento similar" },
      { level: "Analizar", q: "Impacto económico y social" },
      { level: "Evaluar", q: "Beneficios vs. problemas" },
      { level: "Crear", q: '"El Mundial como herramienta para la paz"' },
    ],
    products: ["Mapa de sedes", "Presentación con rutina de pensamiento"],
    routine: "Rutina de pensamiento",
  },
  {
    number: "06",
    dates: "8–10 de junio",
    title: "Producto final",
    color: "#b0cb4f",
    questions: [
      { level: "Cierre", q: "¿Cómo cambió tu visión?" },
      { level: "Reflexión", q: '"Antes pensaba… y ahora pienso…"' },
    ],
    products: ["Feria del Mundial · Exposición", 'Campaña "El fútbol une"'],
    routine: "Antes pensaba… y ahora pienso…",
  },
];

const groups = [
  { group: "A", countries: ["México", "Sudáfrica", "Corea del Sur", "Play-off Europeo D"] },
  { group: "B", countries: ["Canadá", "Suiza", "Catar", "Play-off Europeo A"] },
  { group: "C", countries: ["Brasil", "Marruecos", "Haití", "Escocia"] },
  { group: "D", countries: ["Estados Unidos", "Paraguay", "Australia", "Play-off Europeo C"] },
  { group: "E", countries: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"] },
  { group: "F", countries: ["Países Bajos", "Japón", "Túnez", "Play-off Europeo B"] },
  { group: "G", countries: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"] },
  { group: "H", countries: ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"] },
  { group: "I", countries: ["Francia", "Senegal", "Noruega", "Play-off Intercontinental 2"] },
  { group: "J", countries: ["Argentina", "Argelia", "Austria", "Jordania"] },
  { group: "K", countries: ["Portugal", "Colombia", "Uzbekistán", "Play-off Intercontinental 1"] },
  { group: "L", countries: ["Inglaterra", "Croacia", "Ghana", "Panamá"] },
];

const sections = [
  { label: "Preescolar", desc: "Actividades visuales y juego. Productos: dibujos y banderas.", color: "#b0cb4f" },
  { label: "Primaria baja", desc: "Actividades guiadas. Productos: carteles y maquetas.", color: "#009bce" },
  { label: "Primaria alta", desc: "Investigación básica. Productos: presentaciones.", color: "#b0cb4f" },
  { label: "Secundaria", desc: "Análisis profundo. Productos: debates y ensayos.", color: "#009bce" },
];

function ProyectoMundial() {
  const [openWeek, setOpenWeek] = useState(null);

  return (
    <div className="w-full">

      {/* Hero */}
      <div className="relative w-full min-h-[70vh] flex justify-center items-center px-4 md:px-16 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MainBackground}
            className="w-full h-full object-cover"
            alt="fútbol background"
          />
          <div className="absolute inset-0 bg-[#1e1e1e]/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl">
          <span className="px-4 py-1 rounded-full bg-[#b0cb4f]/20 text-[#b0cb4f] text-sm font-semibold font-['Inter'] tracking-widest uppercase">
            Vida en el Senda
          </span>
          <h1 className="text-white text-[36px] md:text-[64px] font-semibold font-pangea leading-tight">
            Proyecto Mundial 2026
          </h1>
          <p className="text-white text-2xl md:text-3xl font-semibold font-pangea text-[#b0cb4f]">
            "Más que Fútbol"
          </p>
          <p className="text-white/80 text-base md:text-lg font-['Inter'] max-w-2xl leading-relaxed">
            Comprender el Mundial como fenómeno global que integra historia, cultura, valores,
            acuerdos internacionales y cooperación entre países.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {[
              { label: "8 semanas", icon: "📅" },
              { label: "12 grupos", icon: "👥" },
              { label: "48 países", icon: "🌍" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full text-white text-sm font-['Inter']">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="w-full grid grid-cols-3 h-48 md:h-64">
        <img src={FutbolImg} alt="Fútbol" className="w-full h-full object-cover" loading="lazy" />
        <img src={CanchaImg} alt="Cancha" className="w-full h-full object-cover" loading="lazy" />
        <img src={Futbol2Img} alt="Fútbol 2" className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Skills approach */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-8">
          <h2 className="text-[#1e1e1e] text-2xl md:text-4xl font-semibold font-pangea text-center">
            Enfoque de aprendizaje a través de habilidades
          </h2>
          <p className="text-[#757575] text-base font-['Inter'] text-center max-w-2xl leading-relaxed">
            Cada sesión trabajamos de manera intencional habilidades y contenido a la vez,
            siguiendo los niveles de la Taxonomía de Bloom.
          </p>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Recordar", num: "1", color: "#e8f4f8" },
              { label: "Comprender", num: "2", color: "#d4edda" },
              { label: "Aplicar", num: "3", color: "#fff3cd" },
              { label: "Analizar", num: "4", color: "#ffe0b2" },
              { label: "Evaluar", num: "5", color: "#f8d7da" },
              { label: "Crear", num: "6", color: "#e9d5f5" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-3xl font-bold font-pangea text-[#1e1e1e]/30">{item.num}</span>
                <span className="text-[#1e1e1e] text-base font-semibold font-['Inter'] text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly plan */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-8">
          <h2 className="text-[#1e1e1e] text-2xl md:text-4xl font-semibold font-pangea text-center">
            Planeación de 6 semanas
          </h2>

          <div className="w-full flex flex-col gap-4">
            {weeks.map((week, idx) => (
              <div
                key={idx}
                className="w-full bg-white rounded-2xl shadow-sm border border-[#e4e4de] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left"
                  onClick={() => setOpenWeek(openWeek === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-white text-sm font-bold font-['Inter'] px-3 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: week.color }}
                    >
                      Semana {week.number}
                    </span>
                    <div>
                      <p className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">{week.title}</p>
                      <p className="text-[#757575] text-sm font-['Inter']">{week.dates}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#757575] flex-shrink-0 transition-transform duration-200 ${openWeek === idx ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openWeek === idx && (
                  <div className="px-6 md:px-8 pb-6 flex flex-col gap-6">
                    <div className="w-full h-px bg-[#e4e4de]" />

                    {/* Questions */}
                    <div>
                      <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-3">
                        Preguntas detonadoras
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {week.questions.map((q, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <span
                              className="text-white text-xs font-semibold font-['Inter'] px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: week.color }}
                            >
                              {q.level}
                            </span>
                            <span className="text-[#757575] text-sm font-['Inter'] leading-snug">{q.q}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Products & Routine */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 p-4 bg-[#f9f9fe] rounded-xl">
                        <p className="text-[#1e1e1e] text-sm font-semibold font-['Inter'] mb-2">📦 Productos</p>
                        <ul className="flex flex-col gap-1">
                          {week.products.map((p, i) => (
                            <li key={i} className="text-[#757575] text-sm font-['Inter'] flex gap-2">
                              <span style={{ color: week.color }}>•</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1 p-4 rounded-xl" style={{ backgroundColor: week.color + "15" }}>
                        <p className="text-[#1e1e1e] text-sm font-semibold font-['Inter'] mb-1">🧠 Rutina de pensamiento</p>
                        <p className="text-sm font-['Inter']" style={{ color: week.color }}>{week.routine}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries / Groups */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-6">
          <h2 className="text-[#1e1e1e] text-2xl md:text-4xl font-semibold font-pangea text-center">
            Los 48 países clasificados
          </h2>
          <p className="text-[#757575] text-base font-['Inter'] text-center max-w-2xl leading-relaxed">
            El campeonato se jugará en <span className="font-semibold text-[#1e1e1e]">Estados Unidos, México y Canadá</span> entre el
            11 de junio y el 19 de julio de 2026. Primer Mundial con 48 selecciones,
            distribuidas en 12 grupos de 4 equipos.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {groups.map((g, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9fe] rounded-2xl p-5 border border-[#e4e4de] flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold font-['Inter'] flex-shrink-0"
                    style={{ backgroundColor: idx % 2 === 0 ? "#009bce" : "#b0cb4f" }}
                  >
                    {g.group}
                  </span>
                  <span className="text-[#1e1e1e] text-base font-semibold font-['Inter']">
                    Grupo {g.group}
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {g.countries.map((country, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#49454f] text-sm font-['Inter']">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: idx % 2 === 0 ? "#009bce" : "#b0cb4f" }}
                      />
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo + Adaptations */}
      <div className="w-full bg-[#f9f9fe]">
        <div className="w-full grid md:grid-cols-2">
          <img
            src={MexicoImg}
            alt="México sede del mundial"
            className="w-full h-72 md:h-full object-cover"
            loading="lazy"
          />
          <div className="px-8 md:px-16 py-16 flex flex-col justify-center gap-8">
            <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold font-pangea">
              Adaptación por secciones
            </h2>
            <div className="flex flex-col gap-4">
              {sections.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <div>
                    <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{s.label}</p>
                    <p className="text-[#757575] text-sm font-['Inter'] leading-snug">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold font-pangea">
              Evaluación
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { label: "Comprensión", desc: "Dominio de los temas investigados por semana." },
                { label: "Análisis", desc: "Capacidad de relacionar información y comparar contextos." },
                { label: "Creatividad", desc: "Originalidad en la presentación de productos." },
                { label: "Trabajo en equipo", desc: "Colaboración y contribución dentro del grupo." },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-[#f9f9fe] rounded-xl border border-[#e4e4de]">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-['Inter'] flex-shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? "#009bce" : "#b0cb4f" }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{c.label}</p>
                    <p className="text-[#757575] text-sm font-['Inter']">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-[#1e1e1e] text-xl font-semibold font-['Inter']">Productos evaluables</h3>
            <div className="flex flex-col gap-3">
              {["Presentaciones finales", "Reglamentos y actas de acuerdos", "Proyectos y productos finales", "Feria del Mundial"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#f9f9fe] rounded-xl border border-[#e4e4de]">
                  <span className="text-[#b0cb4f] text-lg">✓</span>
                  <span className="text-[#49454f] text-base font-['Inter']">{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-6 rounded-2xl text-white flex flex-col gap-3" style={{ backgroundColor: "#009bce" }}>
              <p className="text-lg font-semibold font-pangea">Cierre del proyecto</p>
              <p className="text-sm font-['Inter'] text-white/90 leading-relaxed">
                Feria del Mundial el <strong>8–10 de junio</strong>. Exposición de trabajos,
                campaña "El fútbol une" y rutina de cierre:
              </p>
              <p className="text-white font-semibold font-['Inter'] italic">
                "Antes pensaba… y ahora pienso…"
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProyectoMundial;
