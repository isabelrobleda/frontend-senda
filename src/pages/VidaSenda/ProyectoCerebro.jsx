import React, { useState } from "react";
import HeroBackground from "../../assets/deportes/main-background.png";
import PhotoAula from "../../assets/primaria/Primary-02.png";
import PhotoMovimiento from "../../assets/psicomotricidad.jpeg";
import WhatsAppButton from "../../components/WhatsAppButton";

/* ---------- Data ---------- */

const pillars = [
  {
    key: "neurociencia",
    number: "01",
    title: "Neurociencia",
    color: "#1f6fd1",
    light: "#d6e7fb",
    icon: "🧠",
    summary: "Entender cómo aprende, recuerda y se distrae mi cerebro.",
    headline: "Tres protagonistas del cerebro que aprende",
    cards: [
      {
        title: "La amígdala",
        tag: "La alarma",
        desc: "Detecta amenazas en milisegundos. Cuando se activa —miedo, enojo, vergüenza— apaga el pensamiento racional. Un niño alterado no puede aprender, aunque quiera.",
      },
      {
        title: "El hipocampo",
        tag: "El archivo",
        desc: "Convierte la experiencia en memoria. Se activa con el movimiento, la novedad y la emoción… y se ordena mientras el niño duerme.",
      },
      {
        title: "La corteza prefrontal",
        tag: "El director de orquesta",
        desc: "Planea, decide, espera, se concentra. Es la última zona en madurar: sigue en obra hasta cerca de los 25 años.",
      },
    ],
    takeaway: "Consecuencia práctica: primero se calma, después se enseña. Nunca al revés.",
    extra: {
      title: "El cerebro se esculpe con lo que repite",
      blocks: [
        {
          title: "Neuroplasticidad",
          desc: "Cada vez que un niño practica algo difícil, su cerebro fabrica conexiones nuevas. La inteligencia no es un tamaño fijo: es un músculo que se moldea con el esfuerzo, el error y la repetición.",
        },
        {
          title: "El poder del “todavía”",
          desc: "Carol Dweck (Stanford) mostró que la forma en que un adulto elogia cambia la disposición del niño a intentarlo de nuevo. Elogiar el proceso construye persistencia; elogiar el talento construye miedo a fallar.",
        },
      ],
      swaps: [
        { instead: "“Eres muy inteligente.”", say: "“Se nota todo el trabajo que le pusiste.”" },
        { instead: "“No eres bueno para las mates.”", say: "“Todavía no te sale. ¿Qué estrategia falta?”" },
        { instead: "“No te preocupes, no todos servimos para esto.”", say: "“Tu cerebro está construyendo esa conexión ahora.”" },
      ],
    },
  },
  {
    key: "movimiento",
    number: "02",
    title: "Movimiento",
    color: "#ee7a1f",
    light: "#fde5cf",
    icon: "🏃",
    summary: "Mover el cuerpo para oxigenar y activar el cerebro.",
    headline: "El ejercicio es abono para el cerebro",
    quote: {
      text: "El ejercicio es la herramienta más poderosa que tenemos para optimizar el funcionamiento del cerebro.",
      author: "John Ratey · Harvard Medical School",
    },
    intro:
      "Al moverse, el cerebro libera BDNF, una proteína que actúa como fertilizante de las neuronas. Además oxigena el hipocampo (memoria), eleva la dopamina y la serotonina (ánimo y atención) y reduce el cortisol (estrés).",
    homeTitle: "Qué pueden hacer en casa",
    home: [
      { title: "60 minutos al día", desc: "De actividad física moderada, aunque sea repartida. Caminar a la escuela ya cuenta." },
      { title: "Muévete antes de la tarea", desc: "10–15 minutos de juego o caminata antes de sentarse a estudiar mejoran la concentración." },
      { title: "Juego libre al aire libre", desc: "No estructurado, sin instrucciones de adulto. Es donde se entrena la creatividad." },
      { title: "Baile, no castigo", desc: "Poner una canción para recoger. El movimiento con ritmo conecta ambos hemisferios." },
    ],
    takeaway: "El movimiento no interrumpe el aprendizaje: lo construye.",
  },
  {
    key: "alimentacion",
    number: "03",
    title: "Alimentación",
    color: "#3d9a3f",
    light: "#d8f0d8",
    icon: "🥗",
    summary: "Nutrir las neuronas con intención, no por inercia.",
    headline: "Lo que desayuna hoy, es con lo que va a pensar hoy",
    intro:
      "El cerebro es el 2% del peso del cuerpo y consume el 20% de toda su energía. En un niño, esa proporción es todavía mayor.",
    nutrients: [
      { title: "Omega 3", desc: "Pescado, nuez, chía, linaza. Construye la membrana de las neuronas." },
      { title: "Glucosa estable", desc: "Cereal integral, fruta, leguminosa. Energía sostenida, sin picos ni caídas." },
      { title: "Antioxidantes", desc: "Moras, cacao puro, espinaca, betabel. Protegen a la neurona del desgaste." },
      { title: "Probióticos", desc: "Yogur natural, kéfir, fermentados. Regulan el eje intestino–cerebro." },
      { title: "Vitaminas B y D", desc: "Huevo, leguminosas y sol moderado. Fabrican neurotransmisores." },
      { title: "Agua", desc: "Una deshidratación del 2% ya reduce atención y memoria de trabajo." },
    ],
    yes: [
      "Proteína en el desayuno: huevo, frijol, yogur natural, queso.",
      "Una fruta entera (no jugo: la fibra es la que frena el pico de azúcar).",
      "Grasa buena: aguacate, nuez, semillas.",
      "Carbohidrato integral: avena, pan integral, tortilla de maíz.",
      "Agua natural en el termo, y que la vean beber a ustedes también.",
    ],
    no: [
      "Cereales de caja azucarados y pan dulce a primera hora.",
      "Jugos y bebidas azucaradas, incluidos los “100% natural”.",
      "Ultraprocesados y frituras: inflaman y provocan una caída de energía a media mañana.",
      "Saltarse el desayuno “porque no le da hambre”.",
      "Cafeína escondida: refrescos de cola, té negro, chocolate por la tarde.",
    ],
    takeaway:
      "Sus hijos van a llevar dos semanas un diario de desayunos y a graficar cómo se sintieron. Los datos van a salir de su cocina.",
  },
  {
    key: "bienestar",
    number: "04",
    title: "Bienestar",
    color: "#0f9aa3",
    light: "#d1eef0",
    icon: "🌼",
    summary: "Regular las emociones antes de exigir concentración.",
    headline: "Un cerebro alterado no aprende",
    intro:
      "Cuando un niño se enoja, se frustra o se angustia, la amígdala toma el control y desconecta la corteza prefrontal. En ese estado no puede razonar, ni recordar, ni obedecer instrucciones complejas. No es desafío: es fisiología.",
    stepsTitle: "Corregulación: prestarle nuestra calma antes de pedirle la suya",
    steps: [
      { title: "Conecto", desc: "Bajo a su altura, tono suave, cuerpo relajado. Primero el vínculo." },
      { title: "Nombro", desc: "“Veo que estás muy enojado.” Poner palabras a la emoción baja la amígdala." },
      { title: "Respiro con él", desc: "Inhalar 4, exhalar 6. La exhalación larga activa el freno del sistema nervioso." },
      { title: "Después redirijo", desc: "Solo cuando ya se calmó, hablamos de lo que pasó y de qué hacer distinto." },
    ],
    takeaway: "“Name it to tame it”: nombrar la emoción es el primer paso para dominarla. — Daniel Siegel, UCLA",
  },
  {
    key: "sueno",
    number: "05",
    title: "Sueño",
    color: "#6b3fa0",
    light: "#e3d6f3",
    icon: "🌙",
    summary: "Dormir para consolidar todo lo aprendido en el día.",
    headline: "El pilar que solo pueden cuidar ustedes",
    intro:
      "Ninguna estrategia de estudio compensa a un niño que durmió mal. El sueño no es el descanso del aprendizaje: es la parte del aprendizaje que ocurre en la noche.",
    sleepDoes: [
      { title: "Archiva lo aprendido", desc: "Durante el sueño profundo, lo que se practicó en el día pasa del hipocampo a la corteza y se vuelve memoria estable. Estudiar sin dormir es escribir sin guardar." },
      { title: "Se limpia por dentro", desc: "El sistema glinfático elimina los desechos que se acumularon en el día. Esta limpieza se activa sobre todo mientras dormimos." },
      { title: "Crece", desc: "La mayor parte de la hormona del crecimiento se libera en las primeras horas de sueño profundo de la noche." },
      { title: "Repara el ánimo", desc: "El sueño REM procesa las emociones del día y baja la reactividad de la amígdala. Un niño que durmió poco se enoja más rápido y tolera menos la frustración." },
    ],
    hours: [
      { age: "1 a 2 años", hours: "11 a 14 horas", note: "Incluyendo siestas" },
      { age: "3 a 5 años", hours: "10 a 13 horas", note: "Incluyendo siestas" },
      { age: "6 a 12 años", hours: "9 a 12 horas", note: "Ya sin siesta habitual" },
      { age: "13 a 18 años", hours: "8 a 10 horas", note: "La etapa donde más se incumple" },
    ],
    thieves: [
      { title: "Pantallas en la última hora", desc: "La luz retrasa la melatonina y el contenido deja al cerebro en alerta. El problema no es solo la luz: es la activación." },
      { title: "Horarios irregulares", desc: "Dormirse dos horas más tarde el fin de semana produce un “jet lag social” que se paga el lunes." },
      { title: "Cafeína escondida", desc: "Refrescos de cola, té negro, chocolate, bebidas energéticas. Su efecto puede durar hasta 6 horas." },
      { title: "Cenas tardías o pesadas", desc: "Azúcar y comidas abundantes cerca de la hora de dormir fragmentan el sueño profundo." },
      { title: "Cuarto con luz, ruido o calor", desc: "El cerebro necesita oscuridad y frescura para dormir profundo. Cualquier luz encendida cuenta." },
      { title: "Agenda sobrecargada", desc: "Tareas y actividades hasta las 10 pm. A veces la solución no es dormir mejor: es hacer menos." },
    ],
    routine: [
      { min: "90 min", title: "Cena ligera", desc: "Sin azúcar ni frituras. Cenar temprano protege el sueño profundo.", color: "#3d9a3f" },
      { min: "60 min", title: "Se apagan las pantallas", desc: "Y salen de la recámara. Este es el paso que más cuesta y el que más cambia.", color: "#e0145a" },
      { min: "45 min", title: "Baño tibio", desc: "Al salir, la temperatura corporal baja y esa caída induce el sueño.", color: "#0f9aa3" },
      { min: "30 min", title: "Luces bajas y cálidas", desc: "Bajar la iluminación de la casa le avisa al cerebro que ya es de noche.", color: "#f5a623" },
      { min: "20 min", title: "Lectura o conversación", desc: "Leer juntos, sin prisa. Es el mejor momento del día para escuchar de verdad.", color: "#1f6fd1" },
      { min: "10 min", title: "Respirar y agradecer", desc: "Inhalar 4, exhalar 6. Y decir tres cosas buenas del día.", color: "#6b3fa0" },
    ],
    byAge: [
      {
        label: "Preescolar",
        range: "3 a 5 años · 10–13 h",
        color: "#0f9aa3",
        tips: [
          "Ritual corto y siempre idéntico: baño, pijama, cuento, beso. Tres o cuatro pasos, no más.",
          "Cero pantallas después de la cena. A esta edad el efecto es inmediato.",
          "Objeto de apego permitido: peluche o cobija dan seguridad y acortan el tiempo para dormirse.",
          "Si aún hace siesta, que termine antes de las 4 pm.",
        ],
      },
      {
        label: "Primaria",
        range: "6 a 12 años · 9–12 h",
        color: "#1f6fd1",
        tips: [
          "Hora fija de dormir, negociada una vez y sostenida siempre.",
          "Ninguna pantalla en la recámara: ni tele, ni tablet, ni consola.",
          "Ejercicio al aire libre por la tarde; nunca justo antes de dormir.",
          "“Caja de preocupaciones”: escribir lo que le inquieta antes de apagar la luz.",
        ],
      },
      {
        label: "Secundaria",
        range: "13 a 18 años · 8–10 h",
        color: "#6b3fa0",
        tips: [
          "Acuerdo, no imposición: el celular se carga en la sala, y ellos ayudan a definir la hora.",
          "Luz natural apenas se despierta: es lo que reajusta su reloj interno.",
          "Sin cafeína después de las 3 pm y sin siestas de más de 30 minutos.",
          "Dormir hasta tarde el sábado no repone la semana: la desajusta más.",
        ],
      },
    ],
    takeaway: "Dormir bien no es un premio por haber estudiado. Es la condición para que estudiar sirva de algo.",
  },
];

const stats = [
  { value: "18%", desc: "del tiempo despierto de un niño transcurre en el colegio. El otro 82% ocurre con ustedes.", color: "#009bce" },
  { value: "86 mil M", desc: "de neuronas que se conectan —o se podan— según lo que el niño repite todos los días.", color: "#b0cb4f" },
  { value: "20%", desc: "de toda la energía del cuerpo la consume el cerebro. Lo que desayuna, lo alimenta.", color: "#009bce" },
];

const journey = [
  { title: "Investigo", desc: "Muro de preguntas, documentales y su primer experimento de atención." },
  { title: "Mapeo", desc: "Miden su rendimiento antes y después de moverse. Registran lo que desayunan." },
  { title: "Propongo", desc: "Diseñan recetas, pausas activas y su Mapa Personal de Aprendizaje." },
  { title: "Profundizo", desc: "Investigan pantallas, hábitos y adicciones según su nivel escolar." },
  { title: "Actúo", desc: "Campaña escolar de bienestar: pódcast, infografías, menús y talleres." },
];

const atSchool = [
  "Momento sagrado: cada clase abre con 3–5 minutos de respiración y atención plena.",
  "Pausas activas y yoga en el aula entre bloques de trabajo.",
  "Rutinas de pensamiento de Project Zero para hacer visible cómo piensan.",
  "Protocolo de autorregulación que ellos mismos diseñan y fundamentan.",
  "Huerto escolar, taller de cocina y menús analizados científicamente.",
];

const atHome = [
  "Sostener la hora de dormir y sacar los dispositivos de la recámara.",
  "Apoyar el diario de desayunos durante dos semanas (sin corregir los datos).",
  "Preguntar “¿qué aprendiste de tu cerebro hoy?” en lugar de “¿qué tarea tienes?”.",
  "Modelar: que nos vean movernos, comer bien y respirar cuando nos enojamos.",
  "Probar en familia las recetas del recetario que ellos van a crear.",
];

const habits = [
  { title: "Dormir suficiente, a la misma hora", desc: "El hábito con mayor impacto sobre la atención, el ánimo y la memoria.", icon: "🌙" },
  { title: "Desayunar de verdad", desc: "Con proteína. Es la diferencia entre llegar a clase encendido o apagado.", icon: "🥗" },
  { title: "Moverse todos los días", desc: "60 minutos, aunque sea caminando. El cerebro se oxigena con el cuerpo.", icon: "🏃" },
  { title: "15 minutos de conversación sin pantallas", desc: "El lenguaje construye cerebro. Escuchar sin corregir construye confianza.", icon: "💬" },
  { title: "Un adulto que se regula antes de corregir", desc: "Su calma es el modelo que el sistema nervioso del niño va a copiar.", icon: "💚" },
];

const references = [
  {
    title: "Sobre el sueño",
    color: "#6b3fa0",
    items: [
      "Paruthi, S. et al. (2016). Consensus Statement of the American Academy of Sleep Medicine on the Recommended Amount of Sleep for Healthy Children. J Clin Sleep Med.",
      "Walker, M. (2017). Por qué dormimos. Scribner.",
      "Carskadon, M. Regulation of Adolescent Sleep. Brown University.",
    ],
  },
  {
    title: "Sobre cerebro y aprendizaje",
    color: "#1f6fd1",
    items: [
      "Ratey, J. (2008). Spark: The Revolutionary New Science of Exercise and the Brain.",
      "Gómez-Pinilla, F. (2008). Brain foods: the effects of nutrients on brain function. Nature Reviews Neuroscience.",
      "Siegel, D. (2011). El cerebro del niño.",
    ],
  },
  {
    title: "Sobre pensamiento y crianza",
    color: "#e0145a",
    items: [
      "Ritchhart, R., Church, M. & Morrison, K. (2011). Making Thinking Visible. Project Zero, Harvard.",
      "Dweck, C. (2006). Mindset: la actitud del éxito.",
      "Brown, S. (2009). Play: How it Shapes the Brain.",
    ],
  },
];

/* ---------- Small helpers ---------- */

function SectionTitle({ eyebrow, title, subtitle, color = "#009bce" }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {eyebrow && (
        <span className="text-xs font-semibold font-['Inter'] tracking-widest uppercase" style={{ color }}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-[#1e1e1e] text-2xl md:text-4xl font-semibold font-pangea">{title}</h2>
      {subtitle && (
        <p className="text-[#757575] text-base font-['Inter'] max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function IconCard({ title, tag, desc, color }) {
  return (
    <div className="flex flex-col gap-2 p-5 bg-white rounded-2xl border border-[#e4e4de]">
      <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{title}</p>
      {tag && (
        <p className="text-xs font-semibold font-['Inter'] -mt-1" style={{ color }}>{tag}</p>
      )}
      <p className="text-[#757575] text-sm font-['Inter'] leading-snug">{desc}</p>
    </div>
  );
}

function Bullets({ items, color }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((t, i) => (
        <li key={i} className="text-[#49454f] text-sm font-['Inter'] leading-snug flex gap-2">
          <span className="flex-shrink-0" style={{ color }}>•</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Pillar detail bodies ---------- */

function PillarDetail({ p }) {
  const c = p.color;

  if (p.key === "neurociencia") {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-[#1e1e1e] text-lg font-semibold font-pangea mb-4">{p.headline}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {p.cards.map((card) => <IconCard key={card.title} {...card} color={c} />)}
          </div>
          <p className="mt-4 text-sm font-semibold font-['Inter']" style={{ color: c }}>{p.takeaway}</p>
        </div>
        <div>
          <p className="text-[#1e1e1e] text-lg font-semibold font-pangea mb-4">{p.extra.title}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.extra.blocks.map((b) => (
              <div key={b.title} className="p-5 rounded-2xl" style={{ backgroundColor: p.light }}>
                <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-2">{b.title}</p>
                <p className="text-[#49454f] text-sm font-['Inter'] leading-snug">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <p className="text-[#757575] text-xs font-semibold font-['Inter'] uppercase tracking-wider">En vez de decir</p>
            <p className="text-xs font-semibold font-['Inter'] uppercase tracking-wider hidden md:block" style={{ color: "#b0cb4f" }}>Pruebe decir</p>
            {p.extra.swaps.map((s, i) => (
              <React.Fragment key={i}>
                <p className="text-[#757575] text-sm font-['Inter'] md:border-t md:border-[#e4e4de] md:pt-3">{s.instead}</p>
                <p className="text-[#1e1e1e] text-sm font-semibold font-['Inter'] md:border-t md:border-[#e4e4de] md:pt-3 pb-2 md:pb-0 border-b border-[#e4e4de] md:border-b-0">{s.say}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (p.key === "movimiento") {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-[#1e1e1e] text-lg font-semibold font-pangea">{p.headline}</p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: p.light }}>
            <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] italic leading-relaxed">“{p.quote.text}”</p>
            <p className="text-xs font-semibold font-['Inter']" style={{ color: c }}>{p.quote.author}</p>
            <p className="text-[#49454f] text-sm font-['Inter'] leading-snug">{p.intro}</p>
            <p className="text-sm font-semibold font-['Inter']" style={{ color: c }}>{p.takeaway}</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{p.homeTitle}</p>
            {p.home.map((h, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold font-['Inter']" style={{ backgroundColor: c }}>{i + 1}</span>
                <div>
                  <p className="text-[#1e1e1e] text-sm font-semibold font-['Inter']">{h.title}</p>
                  <p className="text-[#757575] text-sm font-['Inter'] leading-snug">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (p.key === "alimentacion") {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-[#1e1e1e] text-lg font-semibold font-pangea">{p.headline}</p>
        <div className="p-5 rounded-2xl text-[#1e1e1e] text-sm font-['Inter'] leading-relaxed" style={{ backgroundColor: p.light }}>
          {p.intro}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.nutrients.map((n) => <IconCard key={n.title} {...n} color={c} />)}
        </div>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mt-2">El desayuno y la lonchera, traducidos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl" style={{ backgroundColor: p.light }}>
            <p className="text-base font-semibold font-['Inter'] mb-3" style={{ color: c }}>✓ Sí, todos los días</p>
            <Bullets items={p.yes} color={c} />
          </div>
          <div className="p-5 rounded-2xl bg-[#fbe3ea]">
            <p className="text-base font-semibold font-['Inter'] mb-3 text-[#e0145a]">✕ Mejor no, entre semana</p>
            <Bullets items={p.no} color="#e0145a" />
          </div>
        </div>
        <p className="text-[#757575] text-sm font-['Inter'] italic">{p.takeaway}</p>
      </div>
    );
  }

  if (p.key === "bienestar") {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-[#1e1e1e] text-lg font-semibold font-pangea">{p.headline}</p>
        <div className="p-5 rounded-2xl text-[#1e1e1e] text-sm font-['Inter'] leading-relaxed" style={{ backgroundColor: p.light }}>
          {p.intro}
        </div>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{p.stepsTitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.steps.map((s, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-[#e4e4de] flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-['Inter']" style={{ backgroundColor: c }}>{i + 1}</span>
                <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{s.title}</p>
              </div>
              <p className="text-[#757575] text-sm font-['Inter'] leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-['Inter'] italic" style={{ color: c }}>{p.takeaway}</p>
      </div>
    );
  }

  // sueño
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-[#1e1e1e] text-lg font-semibold font-pangea mb-2">{p.headline}</p>
        <p className="text-[#49454f] text-sm font-['Inter'] leading-relaxed max-w-3xl">{p.intro}</p>
      </div>

      <div>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-3">Lo que hace el cerebro mientras su hijo duerme</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {p.sleepDoes.map((s) => (
            <div key={s.title} className="p-5 rounded-2xl" style={{ backgroundColor: p.light }}>
              <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-1">{s.title}</p>
              <p className="text-[#49454f] text-sm font-['Inter'] leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-3">¿Cuántas horas necesita realmente mi hijo?</p>
          <div className="overflow-hidden rounded-2xl border border-[#e4e4de]">
            <table className="w-full text-sm font-['Inter']">
              <thead>
                <tr className="text-white text-left" style={{ backgroundColor: c }}>
                  <th className="px-4 py-3 font-semibold">Edad</th>
                  <th className="px-4 py-3 font-semibold">Horas por cada 24 h</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Nota</th>
                </tr>
              </thead>
              <tbody>
                {p.hours.map((h, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f9fe]"}>
                    <td className="px-4 py-3 text-[#1e1e1e] font-semibold">{h.age}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: c }}>{h.hours}</td>
                    <td className="px-4 py-3 text-[#757575] hidden sm:table-cell">{h.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#757575] text-xs font-['Inter'] mt-2">Academia Americana de Medicina del Sueño (AASM), consenso 2016.</p>
        </div>
        <div className="lg:w-80 p-5 bg-white rounded-2xl border border-[#e4e4de] flex flex-col gap-3">
          <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">Cuente hacia atrás</p>
          <p className="text-[#757575] text-sm font-['Inter'] leading-snug">
            No decida la hora de dormir: calcúlela. Tome la hora en que su hijo debe despertarse y reste las horas que necesita.
          </p>
          <p className="text-[#1e1e1e] text-sm font-semibold font-['Inter'] p-3 rounded-xl bg-[#fff3cd]">
            Se levanta a las 6:30 y tiene 9 años → debe estar dormido antes de las 9:00 pm.
          </p>
        </div>
      </div>

      <div>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-3">Los seis ladrones del sueño</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.thieves.map((t) => <IconCard key={t.title} {...t} color={c} />)}
        </div>
        <p className="mt-3 text-sm font-semibold font-['Inter']" style={{ color: c }}>
          Regla de oro: los dispositivos se cargan fuera de la recámara. Sin excepción, y también los de los adultos.
        </p>
      </div>

      <div>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-1">La hora antes de dormir, paso a paso</p>
        <p className="text-[#757575] text-sm font-['Inter'] mb-3">El cerebro no tiene interruptor: necesita una rampa de aterrizaje. La misma secuencia, en el mismo orden, todas las noches.</p>
        <div className="flex flex-col gap-2">
          {p.routine.map((r) => (
            <div key={r.min} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 bg-white rounded-xl border border-[#e4e4de]">
              <span className="text-white text-xs font-bold font-['Inter'] px-3 py-1 rounded-full w-fit flex-shrink-0" style={{ backgroundColor: r.color }}>{r.min}</span>
              <p className="text-[#1e1e1e] text-sm font-semibold font-['Inter'] sm:w-52 flex-shrink-0">{r.title}</p>
              <p className="text-[#757575] text-sm font-['Inter']">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 p-4 rounded-xl text-sm font-semibold font-['Inter']" style={{ backgroundColor: p.light, color: c }}>
          El cuarto: oscuro, silencioso y fresco (18–20 °C). Y siempre la misma hora, con un margen máximo de 30–60 min el fin de semana.
        </p>
      </div>

      <div>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-3">Qué hacer según la edad de su hijo</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {p.byAge.map((a) => (
            <div key={a.label} className="p-5 rounded-2xl bg-white border border-[#e4e4de] flex flex-col gap-3">
              <div>
                <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{a.label}</p>
                <p className="text-xs font-semibold font-['Inter']" style={{ color: a.color }}>{a.range}</p>
              </div>
              <Bullets items={a.tips} color={a.color} />
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl" style={{ backgroundColor: p.light }}>
        <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] mb-2">“No es flojera: su reloj biológico se movió”</p>
        <p className="text-[#49454f] text-sm font-['Inter'] leading-relaxed">
          En la pubertad, la melatonina empieza a liberarse cerca de dos horas más tarde que en la infancia. El adolescente no siente sueño a las 9 pm porque su cerebro todavía no le manda la señal. Pero la escuela empieza a la misma hora: el resultado es una deuda de sueño crónica que se acumula toda la semana.
        </p>
        <p className="text-[#49454f] text-sm font-['Inter'] leading-relaxed mt-3">
          <span className="font-semibold text-[#1e1e1e]">Cómo acompañarlo sin pelear:</span> luz al despertar, un acuerdo escrito que él mismo proponga, hora de despertar constante (máximo una hora extra el fin de semana) y explicarle la biología: los adolescentes responden mejor al dato que a la orden.
        </p>
      </div>

      <p className="text-sm font-semibold font-['Inter']" style={{ color: c }}>{p.takeaway}</p>
    </div>
  );
}

/* ---------- Page ---------- */

function ProyectoCerebro() {
  const [openPillar, setOpenPillar] = useState(null);

  return (
    <div className="w-full">

      {/* Hero */}
      <div className="relative w-full min-h-[70vh] flex justify-center items-center px-4 md:px-16 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HeroBackground} className="w-full h-full object-cover" alt="alumnos del Colegio Senda" />
          <div className="absolute inset-0 bg-[#1e1e1e]/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl">
          <span className="px-4 py-1 rounded-full bg-[#b0cb4f]/20 text-[#b0cb4f] text-sm font-semibold font-['Inter'] tracking-widest uppercase">
            Proyecto interdisciplinario · Ciclo escolar 2026–2027
          </span>
          <h1 className="text-white text-[36px] md:text-[64px] font-semibold font-pangea leading-tight">
            ¿Cómo funciona mi cerebro cuando aprendo?
          </h1>
          <p className="text-2xl md:text-3xl font-semibold font-pangea text-[#b0cb4f]">
            Heart &amp; Brain
          </p>
          <p className="text-white/80 text-base md:text-lg font-['Inter'] max-w-2xl leading-relaxed">
            Una invitación a las familias: cinco pilares para cuidar el cerebro que aprende.
            Sentimos · Pensamos · Aprendemos · Crecemos juntos.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {pillars.map((p) => (
              <div key={p.key} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-['Inter']">
                <span>{p.icon}</span>
                <span>{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guiding question */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col items-center gap-8 text-center">
          <span className="text-[#009bce] text-xs font-semibold font-['Inter'] tracking-widest uppercase">
            La pregunta que va a guiar todo el año
          </span>
          <p className="text-[#1e1e1e] text-2xl md:text-4xl font-semibold font-pangea leading-snug">
            “¿Qué le pasa a mi cerebro cuando pienso, me muevo, como y siento, y cómo puedo convertirme en el mejor arquitecto de mi propio aprendizaje?”
          </p>
          <div className="p-6 rounded-2xl bg-[#f9f9fe] border border-[#e4e4de] text-left">
            <p className="text-[#49454f] text-base font-['Inter'] leading-relaxed">
              <span className="font-semibold text-[#1e1e1e]">Sus hijos van a pasar el año investigando su propio cerebro.</span>{" "}
              No para saber más de biología, sino para tomar mejores decisiones sobre cómo duermen, comen, se mueven y se calman. Ustedes son parte del experimento.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-10">
          <SectionTitle eyebrow="Por qué convocamos a las familias" title="El colegio enseña. La casa consolida." />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="p-8 bg-white rounded-2xl border border-[#e4e4de] flex flex-col gap-3">
                <p className="text-4xl md:text-5xl font-bold font-pangea" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[#757575] text-base font-['Inter'] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#1e1e1e] text-base md:text-lg font-['Inter'] italic text-center max-w-3xl">
            Ningún proyecto escolar cambia un hábito por sí solo. Lo que se practica en el aula y se repite en casa es lo único que el cerebro guarda.
          </p>
        </div>
      </div>

      {/* Five pillars */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-10">
          <SectionTitle
            eyebrow="El proyecto en una imagen"
            title="Cinco pilares que sostienen un cerebro que aprende"
            subtitle="Los cuatro primeros se trabajan en el aula todos los días. El quinto —el sueño— solo puede cuidarse en casa. Toca cada pilar para ver la guía completa."
          />

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pillars.map((p, idx) => (
              <button
                key={p.key}
                onClick={() => setOpenPillar(openPillar === idx ? null : idx)}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl text-center transition-all duration-200 border-2 ${openPillar === idx ? "shadow-md" : "border-transparent"}`}
                style={{ backgroundColor: p.light, borderColor: openPillar === idx ? p.color : "transparent" }}
              >
                <span className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: p.color }}>
                  {p.icon}
                </span>
                <span className="text-lg font-semibold font-['Inter']" style={{ color: p.color }}>{p.title}</span>
                <span className="text-[#49454f] text-sm font-['Inter'] leading-snug">{p.summary}</span>
              </button>
            ))}
          </div>

          <div className="w-full flex flex-col gap-4">
            {pillars.map((p, idx) => (
              <div key={p.key} className="w-full bg-[#f9f9fe] rounded-2xl border border-[#e4e4de] overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left"
                  onClick={() => setOpenPillar(openPillar === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white text-sm font-bold font-['Inter'] px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }}>
                      Pilar {p.number}
                    </span>
                    <div>
                      <p className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">{p.title}</p>
                      <p className="text-[#757575] text-sm font-['Inter']">{p.headline}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#757575] flex-shrink-0 transition-transform duration-200 ${openPillar === idx ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openPillar === idx && (
                  <div className="px-6 md:px-8 pb-8 flex flex-col gap-6">
                    <div className="w-full h-px bg-[#e4e4de]" />
                    <PillarDetail p={p} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo + school vs home */}
      <div className="w-full bg-[#f9f9fe]">
        <div className="w-full grid md:grid-cols-2">
          <img src={PhotoAula} alt="alumnos trabajando en el aula" className="w-full h-72 md:h-full object-cover" loading="lazy" />
          <div className="px-8 md:px-16 py-16 flex flex-col justify-center gap-8">
            <div>
              <span className="text-[#009bce] text-xs font-semibold font-['Inter'] tracking-widest uppercase">Cómo trabajamos juntos</span>
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold font-pangea mt-2">
                Lo que hace el colegio, lo que hace la casa
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-5 rounded-2xl bg-white border border-[#e4e4de]">
                <p className="text-[#009bce] text-base font-semibold font-['Inter'] mb-3">🏫 En el colegio</p>
                <Bullets items={atSchool} color="#009bce" />
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e4e4de]">
                <p className="text-[#b0cb4f] text-base font-semibold font-['Inter'] mb-3">🏠 En casa</p>
                <Bullets items={atHome} color="#b0cb4f" />
              </div>
            </div>
            <p className="text-[#757575] text-sm font-['Inter'] italic">
              Ustedes no tienen que enseñar neurociencia. Solo tienen que sostener el ambiente donde lo aprendido se vuelve hábito.
            </p>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-12">
          <SectionTitle eyebrow="El camino del proyecto" title="Qué van a ver en sus hijos este año" />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {journey.map((j, i) => (
              <div key={j.title} className="flex flex-col items-center text-center gap-3">
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold font-pangea"
                  style={{ backgroundColor: i % 2 === 0 ? "#009bce" : "#b0cb4f" }}
                >
                  {i + 1}
                </span>
                <p className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">{j.title}</p>
                <p className="text-[#757575] text-sm font-['Inter'] leading-snug">{j.desc}</p>
              </div>
            ))}
          </div>
          <div className="w-full p-6 md:p-8 rounded-2xl text-white flex flex-col md:flex-row gap-6 items-start" style={{ backgroundColor: "#009bce" }}>
            <span className="text-4xl">📖</span>
            <div className="flex flex-col gap-2">
              <p className="text-lg md:text-xl font-semibold font-pangea">
                El producto final: “Manual para Aprender, Crecer y Trascender”
              </p>
              <p className="text-sm md:text-base font-['Inter'] text-white/90 leading-relaxed">
                Escrito e ilustrado por los propios alumnos, con evidencia científica. Incluye una guía de desayunos, un protocolo de bienestar para el aula, hábitos del buen aprendiz y una sección dedicada a las familias: cómo apoyar el aprendizaje desde casa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo + five habits */}
      <div className="w-full bg-[#f9f9fe]">
        <div className="w-full grid md:grid-cols-2">
          <div className="px-8 md:px-16 py-16 flex flex-col justify-center gap-8 order-2 md:order-1">
            <div>
              <span className="text-[#009bce] text-xs font-semibold font-['Inter'] tracking-widest uppercase">El papel de la familia</span>
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-semibold font-pangea mt-2">
                Cinco hábitos que hacen casi todo el trabajo
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {habits.map((h, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-[#e4e4de]">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-['Inter'] flex-shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? "#009bce" : "#b0cb4f" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">{h.title}</p>
                    <p className="text-[#757575] text-sm font-['Inter']">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#1e1e1e] text-base font-semibold font-['Inter']">
              Ninguno de estos cinco hábitos cuesta dinero. Todos cuestan constancia.
            </p>
          </div>
          <img src={PhotoMovimiento} alt="alumnos en movimiento" className="w-full h-72 md:h-full object-cover order-1 md:order-2" loading="lazy" />
        </div>
      </div>

      {/* References */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-white flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-10">
          <SectionTitle eyebrow="Para quien quiera profundizar" title="En qué nos apoyamos" />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((r) => (
              <div key={r.title} className="p-6 bg-[#f9f9fe] rounded-2xl border border-[#e4e4de] flex flex-col gap-4">
                <p className="text-[#1e1e1e] text-base font-semibold font-['Inter'] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: r.color }} />
                  {r.title}
                </p>
                <Bullets items={r.items} color={r.color} />
              </div>
            ))}
          </div>
          <p className="text-[#757575] text-sm font-['Inter'] italic text-center max-w-3xl">
            Inspirado en Project Zero · Harvard Graduate School of Education. Este proyecto se apoya en investigación revisada por pares; la guía de sueño sigue el consenso de la Academia Americana de Medicina del Sueño, avalado por la Academia Americana de Pediatría.
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="w-full px-4 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col items-center gap-6 text-center">
          <p className="text-[#757575] text-xl md:text-2xl font-pangea">Cuando el corazón y la mente trabajan juntos,</p>
          <p className="text-[#1e1e1e] text-4xl md:text-6xl font-semibold font-pangea">todo es posible.</p>
          <p className="text-[#757575] text-base font-['Inter'] max-w-2xl">
            Heart &amp; Brain · Educamos para la vida, formamos para el corazón y la mente.
          </p>
          <WhatsAppButton
            message="Hola, tengo preguntas sobre el proyecto Cerebro y Aprendizaje del Colegio Senda."
            source="proyecto_cerebro_cta"
            className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl text-[#f2f2f2] text-base font-medium text-center w-full sm:w-auto mt-2"
          >
            ¿Tienes preguntas? Escríbenos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>

    </div>
  );
}

export default ProyectoCerebro;
