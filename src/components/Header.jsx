import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({
    sobreNosotros: false,
    ofertaEducativa: false,
    admisiones: false,
    vidaSenda: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div>
      <div className="w-full h-24 p-8 bg-gradient-to-b from-white to-white flex justify-between items-center gap-6">
        <div className="w-[109px] h-[65px] bg-gradient-to-b from-white to-white flex justify-center items-center">
          <Link to="/">
            <img
              className="w-[109px] h-[65px] hover:cursor-pointer"
              src="src/assets/Logo-Senda.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4 md:ml-auto relative">
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer ">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Sobre nosotros
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
                <li className="p-2 hover:bg-neutral-100 relative">
                  <Link to="/misionyvision">Misión y Visión</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/nuestra-historia">Nuestra Historia</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/inspiracion-conviccion">
                    Inspiración y Convicción
                  </Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/reconocimientos-certificaciones">
                    Reconocimientos y Certificaciones
                  </Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/casos-de-exito">Casos de Éxito</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/modelo-senda">Modelo Senda</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/mapa-del-colegio">Mapa del Colegio</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/nuestro-equipo">Nuestro Equipo</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Oferta educativa y deportiva
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/maternal">Maternal</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/preescolar">Preescolar</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/primaria">Primaria</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/secundaria">Secundaria</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/after-school">After School</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/deportes">Deportes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Admisiones
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/aplica-al-senda">Aplica al Senda</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/colegiaturas">Colegiaturas</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/planea-tu-visita">Planea tu visita</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/proceso-de-admision">Proceso de admisión</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Vida en el Senda
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="p-2 hover:bg-neutral-100">
                  <Link to="/proximos-eventos">Próximos Eventos</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <Link to={"/contacto"}>
              <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
                Contacto
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="px-4 py-2 bg-[#009bce] rounded-2xl flex items-center hover:cursor-pointer">
            <Link to="/">
              <div className="text-white text-base font-normal font-['Inter'] leading-none">
                Comunidad Senda
              </div>
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#1e1e1e] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start p-8 bg-white">
          <div
            className="relative group p-2 hover:bg-neutral-100 rounded-lg flex flex-col items-start w-full hover:cursor-pointer"
            onClick={() => toggleMobileSubMenu("sobreNosotros")}
          >
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none flex justify-between w-full">
              Sobre nosotros
              <svg
                className={`w-5 h-5 transition-transform ${
                  mobileSubMenuOpen.sobreNosotros ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {mobileSubMenuOpen.sobreNosotros && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg">
                <ul>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/misionyvision">Misión y Visión</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/nuestra-historia">Nuestra Historia</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/inspiracion-conviccion">
                      Inspiración y Convicción
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/reconocimientos-certificaciones">
                      Reconocimientos y Certificaciones
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/casos-de-exito">Casos de Éxito</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/modelo-senda">Modelo Senda</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/mapa-del-colegio">Mapa del Colegio</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/nuestro-equipo">Nuestro Equipo</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative group p-2 rounded-lg flex flex-col items-start w-full hover:bg-neutral-100 hover:cursor-pointer"
            onClick={() => toggleMobileSubMenu("ofertaEducativa")}
          >
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none flex justify-between w-full">
              Oferta educativa y deportiva
              <svg
                className={`w-5 h-5 transition-transform ${
                  mobileSubMenuOpen.ofertaEducativa
                    ? "transform rotate-180"
                    : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {mobileSubMenuOpen.ofertaEducativa && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg">
                <ul>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/maternal">Maternal</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/preescolar">Preescolar</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/primaria">Primaria</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/secundaria">Secundaria</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/after-school">After School</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/deportes">Deportes</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative group p-2 rounded-lg flex flex-col items-start w-full hover:bg-neutral-100 hover:cursor-pointer"
            onClick={() => toggleMobileSubMenu("admisiones")}
          >
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none flex justify-between w-full">
              Admisiones
              <svg
                className={`w-5 h-5 transition-transform ${
                  mobileSubMenuOpen.admisiones ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {mobileSubMenuOpen.admisiones && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg">
                <ul>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/aplica-al-senda">Aplica al Senda</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/colegiaturas">Colegiaturas</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/planea-tu-visita">Planea tu visita</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/proceso-de-admision">Proceso de admisión</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative group p-2 rounded-lg flex flex-col items-start w-full hover:bg-neutral-100 hover:cursor-pointer"
            onClick={() => toggleMobileSubMenu("vidaSenda")}
          >
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none flex justify-between w-full">
              Vida en el Senda
              <svg
                className={`w-5 h-5 transition-transform ${
                  mobileSubMenuOpen.vidaSenda ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {mobileSubMenuOpen.vidaSenda && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg">
                <ul>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="p-2 hover:bg-neutral-100">
                    <Link to="/proximos-eventos">Próximos Eventos</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="p-2 hover:bg-neutral-100 rounded-lg flex items-center w-full hover:cursor-pointer">
            <Link to={"/contacto"}>
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Contacto
            </div>
            </Link>
          </div>
          <button className="px-4 py-2 mt-4 bg-[#009bce] rounded-2xl flex justify-center items-center w-full hover:cursor-pointer ">
            <p className="text-white text-base font-normal font-['Inter'] leading-none">
              Comunidad Senda
            </p>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
