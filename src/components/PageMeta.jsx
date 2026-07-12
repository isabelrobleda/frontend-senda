import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE =
  "Colegio Senda | Colegio Bilingüe en Olivar de los Padres, CDMX";

const TITLES = {
  "/": DEFAULT_TITLE,
  "/misionyvision": "Misión y Visión | Colegio Senda",
  "/nuestra-historia": "Nuestra Historia: 30 años | Colegio Senda",
  "/inspiracion-conviccion": "Inspiración y Convicción | Colegio Senda",
  "/reconocimientos-certificaciones":
    "Reconocimientos y Certificaciones | Colegio Senda",
  "/casos-de-exito": "Casos de Éxito | Colegio Senda",
  "/modelo-senda": "Modelo Senda: Cultura de Pensamiento | Colegio Senda",
  "/competencias-unesco": "Competencias UNESCO | Colegio Senda",
  "/cefr-framework": "Inglés con estándar CEFR | Colegio Senda",
  "/mapa-del-colegio": "Mapa del Colegio | Colegio Senda",
  "/nuestro-equipo": "Nuestro Equipo | Colegio Senda",
  "/maternal": "Maternal desde 1 año | Colegio Senda, Olivar de los Padres",
  "/preescolar":
    "Kínder y Preescolar Bilingüe | Colegio Senda, Olivar de los Padres",
  "/primaria": "Primaria Bilingüe en Álvaro Obregón | Colegio Senda",
  "/secundaria": "Secundaria Bilingüe en Álvaro Obregón | Colegio Senda",
  "/after-school": "After School | Colegio Senda",
  "/deportes": "Deportes: patineta, escalada y más | Colegio Senda",
  "/aplica-al-senda": "Aplica al Senda | Colegio Senda",
  "/colegiaturas": "Colegiaturas | Colegio Senda",
  "/planea-tu-visita": "Planea tu Visita | Colegio Senda",
  "/proceso-de-admision": "Proceso de Admisión | Colegio Senda",
  "/curso-de-verano": "Curso de Verano | Colegio Senda",
  "/blog": "Blog | Colegio Senda",
  "/proximos-eventos": "Próximos Eventos | Colegio Senda",
  "/proyecto-mundial-2026": "Proyecto Mundial 2026 | Colegio Senda",
  "/contacto": "Contacto | Colegio Senda",
  "/aviso-de-privacidad": "Aviso de Privacidad | Colegio Senda",
};

function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || DEFAULT_TITLE;
  }, [pathname]);

  return null;
}

export default PageMeta;
