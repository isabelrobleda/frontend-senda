import React from "react";
import { Link } from "react-router-dom";
import SimboloSenda from "../assets/simbolo_senda 1.png";
import Envelope from "../assets/footer/Envelope.png";
import Phone from "../assets/footer/Phone.png";
import Instagram from "../assets/Logo Instagram.png";
import Facebook from "../assets/Facebook.png";
import Spotify from "../assets/Spotify.png";

function Footer() {
  return (
    <div className="w-full h-auto p-12 bg-gradient-to-b from-[#0066b1] to-[#025693] flex-col justify-start items-start gap-12 inline-flex">
      <div className="w-full md:max-w-[1440px] self-center flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col justify-start items-start gap-12">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="w-36 h-[85.82px] flex ">
              <Link to="/">
                <img className="w-20 h-20" src={SimboloSenda} alt="Logo" />
              </Link>
            </div>
            <div className="h-[22px] pr-24 flex justify-start items-center">
              <div className="text-white text-base font-semibold font-['Inter'] leading-snug">
                Formando el futuro
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex justify-start items-center gap-2">
              <img className="w-6 h-6 relative" src={Envelope} />
              <a
                href="mailto:senda@colegiosenda.edu.mx"
                className="text-white text-sm font-normal font-['Inter'] leading-tight underline"
              >
                senda@colegiosenda.edu.mx
              </a>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img className="w-6 h-6 relative" src={Phone} />
              <div className="text-white text-sm font-normal font-['Inter'] leading-tight">
                (55) 5683-2060
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 pt-2">
              <div className="text-white text-sm font-normal font-['Inter'] leading-tight">
                Av.Toluca 541, Col. Olivar de los Padres, <br /> C.P. 01780,
                CDMX
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 pt-2">
              <Link to="/aviso-de-privacidad">
                <div className="text-white text-sm font-normal font-['Inter'] leading-tight hover:underline">
                  Aviso de Privacidad
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-10">
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Inter'] leading-snug">
              Sobre nosotros
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/misionyvision">Misión y Visión</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/nuestra-historia">Nuestra Historia</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/inspiracion-conviccion">Inspiración y Convicción</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/reconocimientos-certificaciones">
                Reconocimientos y Certificaciones
              </Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/casos-de-exito">Casos de Éxito</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/modelo-senda">Modelo Senda</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/cefr-framework">CEFR Framework</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/mapa-del-colegio">Mapa del Colegio</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/nuestro-equipo">Nuestro Equipo</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Inter'] leading-snug ">
              Oferta Educativa y Deportiva
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/maternal">Maternal</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/preescolar">Preescolar</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/primaria">Primaria</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/secundaria">Secundaria</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/after-school">After School</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/deportes">Deportes</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Inter'] leading-snug ">
              Admisiones
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/aplica-al-senda">Aplica al Senda</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/colegiaturas">Colegiaturas</Link>
            </div> 
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/planea-tu-visita">Planea tu visita</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/proceso-de-admision">Proceso de admisión</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Inter'] leading-snug">
              Vida en el Senda
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="text-[#f2f2f2] text-base font-light font-['Inter'] leading-snug hover:underline">
              <Link to="/proximos-eventos">Próximos Eventos</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px opacity-25 flex justify-center items-start">
        <div className="w-[1440px] h-[0px] border border-[#fef7ff]"></div>
      </div>
      <div className="w-full md:max-w-[1440px] flex flex-col md:flex-row justify-between self-center gap-4">
        <div className="text-[#f2f2f2] text-xs font-normal font-['Inter'] leading-tight md:inline-flex gap-10">
          <p className="py-1">Secundaria No. SECR 09160077</p>
          <p className="py-1">Primaria No. 09980102</p>
          <p className="py-1">Preescolar No. 09080403</p>
          <p className="py-1">Preprimaria No Incorporada</p>
          <p className="py-1">Educación Inicial No Incorporada</p>
        </div>
        {/* Adjust this part to align the social media icons */}
        <div className="flex flex-wrap justify-start md:justify-end items-start gap-4">
          <Link to="https://www.instagram.com/colegiosenda/" target="_blank">
            <img className="w-6 h-[24.10px]" src={Instagram} alt="Instagram Icon" />
          </Link>
          <Link
            to="https://open.spotify.com/show/6oUv7xtyQRpzLIlRPBpOI2?si=0385463c97324c7c"
            target="_blank"
          >
            <img className="w-6 h-[24.10px]" src={Spotify} alt="Spotify Icon" />
          </Link>
          <Link to="https://www.facebook.com/colegiosenda/" target="_blank">
            <img className="w-6 h-[24.10px]" src={Facebook} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
