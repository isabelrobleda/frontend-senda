import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-Senda.png";

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

  const closeMenu = () => {
    setMenuOpen(false); 
  };


  return (
    <div className="absolute top-0 left-0 w-full z-20 ">
      <div className="w-full h-auto pt-4 px-8 bg-gradient-to-b from-white to-transparent flex justify-between items-center gap-6">
        <div className="w-[109px] h-[65px] flex justify-center items-center">
          <Link to="/" onClick={closeMenu}>
            <img
              className="w-[100px] h-[60px] mb-2 hover:cursor-pointer"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex md:flex-row md:items-center md:gap-4 md:ml-auto">
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer active:bg-neutral-100">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Sobre nosotros
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
              <Link to="/misionyvision">
                <li className="p-2 hover:bg-neutral-100 relative">
                  Misión y Visión
                </li>
                </Link>
                <Link to="/nuestra-historia">
                <li className="p-2 hover:bg-neutral-100">
                  Nuestra Historia
                </li>
                </Link>
                <Link to="/inspiracion-conviccion">
                <li className="p-2 hover:bg-neutral-100">
                  
                    Inspiración y Convicción
                  
                </li>
                </Link>
                <Link to="/reconocimientos-certificaciones">
                <li className="p-2 hover:bg-neutral-100">
                 
                    Reconocimientos y Certificaciones
                 
                </li>
                </Link>
                <Link to="/casos-de-exito">
                <li className="p-2 hover:bg-neutral-100">
                 Casos de Éxito
                </li>
                </Link>
                <Link to="/modelo-senda">
                <li className="p-2 hover:bg-neutral-100">
                  Modelo Senda
                </li>
                </Link>
                <Link to="/mapa-del-colegio">
                <li className="p-2 hover:bg-neutral-100">
                  Mapa del Colegio
                </li>
                </Link>
                <Link to="/nuestro-equipo">
                <li className="p-2 hover:bg-neutral-100">
                  Nuestro Equipo
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Oferta educativa y deportiva
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
                <Link to="/maternal">
                <li className="p-2 hover:bg-neutral-100">
                  Maternal
                </li>
                </Link>
                <Link to="/preescolar">
                <li className="p-2 hover:bg-neutral-100">
                  Preescolar
                </li>
                </Link>
                <Link to="/primaria">
                <li className="p-2 hover:bg-neutral-100">
                  Primaria
                </li>
                </Link>
                <Link to="/secundaria">
                <li className="p-2 hover:bg-neutral-100">
                  Secundaria
                </li>
                </Link>
                <Link to="/after-school">
                <li className="p-2 hover:bg-neutral-100">
                  After School
                </li>
                </Link>
                <Link to="/deportes">
                <li className="p-2 hover:bg-neutral-100">
                 Deportes
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Admisiones
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
              <Link to="/aplica-al-senda">
                <li className="p-2 hover:bg-neutral-100">
                  Aplica al Senda
                </li>
                </Link>
                {/* <Link to="/colegiaturas">
                <li className="p-2 hover:bg-neutral-100">
                  Colegiaturas
                </li>
                </Link> */}
                <Link to="/planea-tu-visita">
                <li className="p-2 hover:bg-neutral-100">
                  Planea tu visita
                </li>
                </Link>
                <Link to="/proceso-de-admision">
                <li className="p-2 hover:bg-neutral-100">
                 Proceso de admisión
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="relative group p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
            <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
              Vida en el Senda
            </div>
            <div className="invisible top-full absolute z-50 flex w-80 flex-col bg-white shadow-lg rounded-lg py-2 px-4 text-gray-800 group-hover:visible">
              <ul>
                <Link to="/blog">
                  <li className="p-2 hover:bg-neutral-100">Blog</li>
                </Link>
                <Link to="/proximos-eventos">
                  <li className="p-2 hover:bg-neutral-100">Próximos Eventos</li>
                </Link>
              </ul>
            </div>
          </div>
          <Link to={"/contacto"}>
            <div className="p-2 hover:bg-neutral-100 rounded-lg flex items-center hover:cursor-pointer">
              <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
                Contacto
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="px-4 py-2 bg-[#009bce] hover:bg-[#b0cb4f] rounded-2xl flex items-center hover:cursor-pointer">
            <Link to="https://www.comunidad.colegiosenda.edu.mx/">
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
        <div className="md:hidden flex flex-col items-start p-8 bg-white ">
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
                  <Link to="/misionyvision" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Misión y Visión
                    </li>
                  </Link>
                  <Link to="/nuestra-historia" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Nuestra Historia
                    </li>
                  </Link>
                  <Link to="/inspiracion-conviccion" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Inspiración y Convicción
                    </li>
                  </Link>
                  <Link to="/reconocimientos-certificaciones" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Reconocimientos y Certificaciones
                    </li>
                  </Link>
                  <Link to="/casos-de-exito" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Casos de Éxito</li>
                  </Link>
                  <Link to="/modelo-senda" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Modelo Senda</li>
                  </Link>
                  <Link to="/mapa-del-colegio" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Mapa del Colegio
                    </li>
                  </Link>
                  <Link to="/nuestro-equipo" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Nuestro Equipo</li>
                  </Link>
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
                  <Link to="/maternal" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Maternal</li>
                  </Link>
                  <Link to="/preescolar" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Preescolar</li>
                  </Link>
                  <Link to="/primaria" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Primaria</li>
                  </Link>
                  <Link to="/secundaria" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Secundaria</li>
                  </Link>
                  <Link to="/after-school" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">After School</li>
                  </Link>
                  <Link to="/deportes" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Deportes</li>
                  </Link>
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
                  <Link to="/aplica-al-senda" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Aplica al Senda
                    </li>
                  </Link>
                  {/* <Link to="/colegiaturas" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">Colegiaturas</li>
                  </Link> */}
                  <Link to="/planea-tu-visita" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Planea tu visita
                    </li>
                  </Link>
                  <Link to="/proceso-de-admision" onClick={closeMenu}>
                    <li className="p-2 hover:bg-neutral-100">
                      Proceso de admisión
                    </li>
                  </Link>
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
                <Link to="/blog" onClick={closeMenu}>
                  <li className="p-2 hover:bg-neutral-100">
                    Blog
                  </li>
                  </Link>
                  <Link to="/proximos-eventos" onClick={closeMenu}>
                  <li className="p-2 hover:bg-neutral-100">
                   Próximos Eventos
                  </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link to={"/contacto"} onClick={closeMenu}>
          <div className="p-2 hover:bg-neutral-100 rounded-lg flex items-center w-full hover:cursor-pointer">
            
              <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none">
                Contacto
              </div>
            
          </div>
          </Link>
          <Link to="https://www.comunidad.colegiosenda.edu.mx/" onClick={closeMenu}>
            <button className="px-4 py-2 mt-4 bg-[#009bce] rounded-2xl flex justify-center items-center w-full hover:cursor-pointer ">
              <p className="text-white text-base font-normal font-['Inter'] leading-none">
                Comunidad Senda
              </p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
