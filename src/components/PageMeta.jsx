import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://colegiosenda.edu.mx";

const DEFAULT_META = {
  title: "Colegio Senda | Colegio Bilingüe en Olivar de los Padres, CDMX",
  description:
    "Colegio bilingüe privado en Olivar de los Padres, Álvaro Obregón, CDMX. Maternal desde 1 año, preescolar, primaria y secundaria. Cultura de pensamiento, Montessori constructivista e inglés todos los días. Agenda tu visita.",
};

const META = {
  "/": DEFAULT_META,
  "/misionyvision": {
    title: "Misión y Visión | Colegio Senda",
    description:
      "Conoce la misión y visión del Colegio Senda: una comunidad que educa para trascender, con bienestar emocional e innovación educativa en el sur de CDMX.",
  },
  "/nuestra-historia": {
    title: "Nuestra Historia: 30 años | Colegio Senda",
    description:
      "30 años formando niños bilingües, seguros y felices en Olivar de los Padres, Álvaro Obregón. Conoce la historia del Colegio Senda.",
  },
  "/inspiracion-conviccion": {
    title: "Inspiración y Convicción | Colegio Senda",
    description:
      "La inspiración y convicción detrás del modelo educativo del Colegio Senda, colegio bilingüe en el sur de la Ciudad de México.",
  },
  "/reconocimientos-certificaciones": {
    title: "Reconocimientos y Certificaciones | Colegio Senda",
    description:
      "Top 15 de escuelas innovadoras, Top 100 de colegios y 100% de maestros certificados Apple Teacher. Conoce los reconocimientos del Colegio Senda.",
  },
  "/casos-de-exito": {
    title: "Casos de Éxito | Colegio Senda",
    description:
      "Historias reales de alumnos y familias del Colegio Senda, colegio bilingüe en Olivar de los Padres, CDMX.",
  },
  "/modelo-senda": {
    title: "Modelo Senda: Cultura de Pensamiento | Colegio Senda",
    description:
      "El Modelo Senda combina cultura de pensamiento, Montessori constructivista, inteligencias múltiples y bienestar emocional. Conócelo aquí.",
  },
  "/competencias-unesco": {
    title: "Competencias UNESCO | Colegio Senda",
    description:
      "Cómo el Colegio Senda desarrolla las competencias UNESCO en sus alumnos de maternal a secundaria.",
  },
  "/cefr-framework": {
    title: "Inglés con estándar CEFR | Colegio Senda",
    description:
      "Nuestros alumnos certifican su inglés con el Marco Común Europeo (CEFR). Colegio bilingüe en Álvaro Obregón, CDMX.",
  },
  "/mapa-del-colegio": {
    title: "Mapa del Colegio | Colegio Senda",
    description:
      "Recorre las instalaciones del Colegio Senda: ambientes Montessori, skatepark, muro de escalar, laboratorios y más. Av. Toluca 541, Olivar de los Padres.",
  },
  "/nuestro-equipo": {
    title: "Nuestro Equipo | Colegio Senda",
    description:
      "Conoce al equipo directivo y docente del Colegio Senda: educadoras certificadas y 100% maestros Apple Teacher.",
  },
  "/maternal": {
    title: "Maternal desde 1 año | Colegio Senda, Olivar de los Padres",
    description:
      "Maternal bilingüe desde 1 año en Olivar de los Padres, Álvaro Obregón. Ambiente Montessori constructivista, grupos pequeños, psicomotricidad e inglés desde el primer día. Agenda tu visita por WhatsApp.",
  },
  "/preescolar": {
    title: "Kínder y Preescolar Bilingüe | Colegio Senda, Olivar de los Padres",
    description:
      "Kínder bilingüe en el sur de CDMX: preescolar Montessori constructivista con 50% del día en inglés, 2 educadoras por salón y máximo 24 niños. Agenda tu visita por WhatsApp.",
  },
  "/primaria": {
    title: "Primaria Bilingüe en Álvaro Obregón | Colegio Senda",
    description:
      "Primaria bilingüe y constructivista en Olivar de los Padres, CDMX: cultura de pensamiento, tecnología con sentido pedagógico y deportes. Agenda tu visita.",
  },
  "/secundaria": {
    title: "Secundaria Bilingüe en Álvaro Obregón | Colegio Senda",
    description:
      "Secundaria bilingüe en el sur de CDMX: aprendizaje activo por proyectos, tecnología y formación en valores. Agenda tu visita al Colegio Senda.",
  },
  "/after-school": {
    title: "After School | Colegio Senda",
    description:
      "After School del Colegio Senda: academia de patineta, robótica, inglés intensivo y más actividades por la tarde en Olivar de los Padres.",
  },
  "/deportes": {
    title: "Deportes: patineta, escalada y más | Colegio Senda",
    description:
      "Skatepark, muro de escalar, fútbol y psicomotricidad: el programa deportivo del Colegio Senda en Álvaro Obregón, CDMX.",
  },
  "/aplica-al-senda": {
    title: "Aplica al Senda | Colegio Senda",
    description:
      "Aplica al Colegio Senda: llena la solicitud en línea o agenda tu visita por WhatsApp. Maternal, preescolar, primaria y secundaria en Olivar de los Padres.",
  },
  "/colegiaturas": {
    title: "Colegiaturas | Colegio Senda",
    description:
      "Consulta las colegiaturas y cuotas del Colegio Senda: maternal, preescolar, primaria y secundaria. Transparencia total en Olivar de los Padres, CDMX.",
  },
  "/planea-tu-visita": {
    title: "Planea tu Visita | Colegio Senda",
    description:
      "Agenda tu visita al Colegio Senda por WhatsApp o vive la Experiencia Senda: conoce los ambientes Montessori, el skatepark y cómo aprenden nuestros alumnos.",
  },
  "/proceso-de-admision": {
    title: "Proceso de Admisión | Colegio Senda",
    description:
      "Los 9 pasos del proceso de admisión al Colegio Senda, desde la solicitud hasta la inscripción. Colegio bilingüe en Olivar de los Padres, CDMX.",
  },
  "/curso-de-verano": {
    title: "Curso de Verano | Colegio Senda",
    description:
      "Curso de verano en el sur de CDMX: juego, deporte y aprendizaje en el Colegio Senda. Pide informes por WhatsApp.",
  },
  "/blog": {
    title: "Blog | Colegio Senda",
    description:
      "Artículos sobre crianza, educación bilingüe y cultura de pensamiento del equipo del Colegio Senda.",
  },
  "/blog-6": {
    title: "¿A qué edad debe empezar el inglés? | Colegio Senda",
    description:
      "Los primeros seis años son la ventana ideal para adquirir el inglés de forma natural. Mónica Sánchez Gavito, Directora del Colegio Senda, explica por qué y qué puedes hacer en casa.",
  },
  "/proximos-eventos": {
    title: "Próximos Eventos | Colegio Senda",
    description:
      "Calendario de eventos del Colegio Senda: Experiencia Senda, festivales y actividades para familias en Olivar de los Padres.",
  },
  "/proyecto-mundial-2026": {
    title: "Proyecto Mundial 2026 | Colegio Senda",
    description:
      "El Proyecto Mundial 2026 del Colegio Senda: aprendizaje por proyectos alrededor de la Copa del Mundo.",
  },
  "/contacto": {
    title: "Contacto | Colegio Senda",
    description:
      "Contacta al Colegio Senda: WhatsApp, teléfono (55) 5683-2060 y correo. Av. Toluca 541, Col. Olivar de los Padres, C.P. 01780, CDMX.",
  },
  "/aviso-de-privacidad": {
    title: "Aviso de Privacidad | Colegio Senda",
    description: "Aviso de privacidad del Colegio Senda.",
  },
};

function setTag(selector, attribute, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attribute, value);
}

function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = META[pathname] || DEFAULT_META;
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = meta.title;
    setTag('meta[name="description"]', "content", meta.description);
    setTag('link[rel="canonical"]', "href", url);
    setTag('meta[property="og:title"]', "content", meta.title);
    setTag('meta[property="og:description"]', "content", meta.description);
    setTag('meta[property="og:url"]', "content", url);
  }, [pathname]);

  return null;
}

export default PageMeta;
