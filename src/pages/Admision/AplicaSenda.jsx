import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from "sweetalert2";
import Group86 from "../../assets/aplica_senda/Group_86.png";
import Group87 from "../../assets/aplica_senda/Group_87.png";
import Group88 from "../../assets/aplica_senda/Group_88.png";
import HeaderBackground from "../../assets/Header-background.png";
import Phone from "../../assets/aplica_senda/📞.png";
import Email from "../../assets/aplica_senda/📨.png";
import WhatsApp from "../../assets/aplica_senda/image.png";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAImgMaternal from "../../assets/CTAs/img-maternal.png";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function AplicaSenda() {
  const [formData, setFormData] = useState({
    FullName: "",
    BirthDate: "",
    GradeRequested: "",
    SchoolCycle: "",
    SchoolYear: "",
    SchoolName: "",
    ReasonOfChange: "",
    ParentsNames: "",
    Phone: "",
    Email: "",
    HowDidYouKnow: "",
    Expectations: "",
    ImportantMatters: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      full_name: formData.FullName,
      birth_date: formData.BirthDate,
      grade_requested: formData.GradeRequested,
      school_cycle: formData.SchoolCycle,
      school_year: formData.SchoolYear,
      school_name: formData.SchoolName,
      reason_of_change: formData.ReasonOfChange || "—",
      parents_names: formData.ParentsNames,
      phone: formData.Phone,
      email: formData.Email,
      how_did_you_know: formData.HowDidYouKnow,
      expectations: formData.Expectations,
      important_matters: formData.ImportantMatters || "—",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Non-blocking: also post to backend for record-keeping
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/aplica-al-senda`,
          templateParams
        )
        .catch(() => {});

      Swal.fire({
        icon: "success",
        title: "Aplicación enviada",
        text: "¡Tu aplicación ha sido enviada exitosamente! Nos pondremos en contacto contigo pronto.",
        confirmButtonColor: "#009bce",
      });

      setFormData({
        FullName: "",
        BirthDate: "",
        GradeRequested: "",
        SchoolCycle: "",
        SchoolYear: "",
        SchoolName: "",
        ReasonOfChange: "",
        ParentsNames: "",
        Phone: "",
        Email: "",
        HowDidYouKnow: "",
        Expectations: "",
        ImportantMatters: "",
      });
    } catch (error) {
      console.error("Error sending application:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al enviar tu aplicación, por favor intenta nuevamente o contáctanos directamente.",
        confirmButtonColor: "#b0cb4f",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="relative md:h-[750px] w-full flex justify-center items-center p-4 mt-20">
        <div>
          <div className="absolute inset-0 z-0">
            <img
              className="w-screen object-cover opacity-10 z-0 md:h-[800px]"
              src={HeaderBackground}
              alt="Background"
            />
          </div>
        </div>
        <div className="self-center justify-center items-start gap-8 flex flex-col md:flex-row">
          <div className=" justify-start items-center flex">
            <div className="grow shrink basis-0 p-6 rounded-[20px]  flex-col justify-start items-center gap-6 md:gap-14 inline-flex">
              <div className="w-full md:w-[904px] text-center">
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  Somos una{" "}
                </span>
                <span className="text-[#b0cb4f] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  comunidad
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group87}
                    alt="image 2"
                    className="inline-block mx-1 md:mx-2 h-14"
                    loading="lazy"
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-pangea leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  educativa inmersa en la cultura de pensamiento,
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group86}
                    alt="image 2"
                    className="inline-block mx-1 md:mx-2 h-14"
                    loading="lazy"
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-pangea leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  comprometida con el{" "}
                </span>
                <span className="text-[#b0cb4f] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  bienestar emocional
                  <br />
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  de cada
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group88}
                    alt="image 2"
                    className="inline-block mx-1 md:mx-2 h-14"
                    loading="lazy"
                  />
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-pangea leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  alumno.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="min-h-screen max-w-screen-xl w-full mx-auto px-4 py-32 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full px-4 md:px-20 flex-col justify-start items-start gap-12 flex">
            <div className="w-full justify-start items-center gap-10 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter']">
                    Aplica al Colegio Senda
                  </div>
                  <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Por favor llena todos los campos con asterisco para poder
                    aplicar.
                  </div>
                </div>
                <div className="w-full py-6 bg-white rounded-lg flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      Nombre del Alumno(s) *
                    </div>
                    <input
                      type="text"
                      name="FullName"
                      value={formData.FullName}
                      onChange={handleChange}
                      required
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      Fecha de Nacimiento *
                    </div>
                    <input
                      type="date"
                      name="BirthDate"
                      value={formData.BirthDate}
                      onChange={handleChange}
                      required
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                    />
                  </div>

                  <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Grado Solicitado
                      </div>
                      <input
                        type="text"
                        name="GradeRequested"
                        value={formData.GradeRequested}
                        onChange={handleChange}
                        className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="6to Primaria"
                      />
                    </div>

                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Ciclo escolar
                      </div>
                      <input
                        type="text"
                        name="SchoolCycle"
                        value={formData.SchoolCycle}
                        onChange={handleChange}
                        className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="Ciclo 23/24"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Grado que cursa
                      </div>
                      <input
                        type="text"
                        name="SchoolYear"
                        value={formData.SchoolYear}
                        onChange={handleChange}
                        className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="1ro Secundaria"
                      />
                    </div>

                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Escuela de procedencia
                      </div>
                      <input
                        type="text"
                        name="SchoolName"
                        value={formData.SchoolName}
                        onChange={handleChange}
                        className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="Escuela Bonita"
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      Motivo de cambio
                    </div>
                    <input
                      type="text"
                      name="ReasonOfChange"
                      value={formData.ReasonOfChange}
                      onChange={handleChange}
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                      placeholder="Nuevas oportunidades"
                    />
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      Nombre de los padres *
                    </div>
                    <input
                      type="text"
                      name="ParentsNames"
                      value={formData.ParentsNames}
                      onChange={handleChange}
                      required
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                      placeholder="María Fernández y Juan Pérez"
                    />
                  </div>

                  <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Teléfono *
                      </div>
                      <input
                        type="text"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        required
                        className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="55-123-4567-89"
                      />
                    </div>

                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Email *
                      </div>
                      <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                        className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="juanperez@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      ¿Cómo se enteró del Colegio Senda? *
                    </div>
                    <select
                      name="HowDidYouKnow"
                      value={formData.HowDidYouKnow}
                      onChange={handleChange}
                      required
                      className="h-12 w-full pl-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Página Web">Página Web</option>
                      <option value="Ubicación/Lona">Ubicación/Lona</option>
                      <option value="Recomendación (amigos, familia, conocidos)">
                        Recomendación (amigos, familia, conocidos)
                      </option>
                      <option value="Redes Sociales (Facebook, Instagram, Influencers)">
                        Redes Sociales (Facebook, Instagram, Influencers)
                      </option>
                    </select>
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      ¿Qué expectativas tiene del Colegio Senda? *
                    </div>
                    <input
                      type="text"
                      name="Expectations"
                      value={formData.Expectations}
                      onChange={handleChange}
                      required
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                      placeholder="Que mi hijo haga más deporte"
                    />
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      ¿Considera que hay algo importante que debamos saber de su
                      hijo/a?
                    </div>
                    <input
                      type="text"
                      name="ImportantMatters"
                      value={formData.ImportantMatters}
                      onChange={handleChange}
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                      placeholder="Que mi hijo mejore su nivel de inglés"
                    />
                  </div>

                  <div className="w-full justify-start items-center gap-4 inline-flex">
                    <button
                      className="w-full md:w-auto h-12 px-6 bg-[#009bce] hover:bg-[#007cae] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg border border-[#009bce] text-white justify-center items-center transition-colors"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Mandar aplicación"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Contact Section */}
      <div className="h-auto w-screen px-4 md:px-16 py-16 md:py-32 bg-[#f9f9fe] flex-col justify-center items-center gap-20 inline-flex">
        <div className="self-stretch h-auto flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Contáctanos
          </div>
          <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            ¿Tienes dudas o prefieres contactarnos directamente para agendar una
            visita?
          </div>
        </div>
        <div className="self-stretch h-auto flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-center items-start gap-8 flex flex-col md:flex-row">
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <img
                    src={Phone}
                    alt="open phone"
                    className="h-12 self-center mb-3"
                    loading="lazy"
                  />
                  <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Teléfono
                  </div>
                  <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    55 56 83 20 60
                  </div>
                </div>
              </div>
              <a href="tel:5556832060">
                <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Marcar al teléfono
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <img
                    src={WhatsApp}
                    alt="whatsapp"
                    className="h-12 self-center mb-3"
                    loading="lazy"
                  />
                  <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    WhatsApp
                  </div>
                  <div className="self-stretch text-center text-[#757575] text-base font-medium font-['Inter'] leading-snug">
                    (+52) 5556832060
                  </div>
                </div>
              </div>
              <a href="https://wa.me/525556832060">
                <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Chatear en Whatsapp
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <img
                    src={Email}
                    alt="email"
                    className="h-12 self-center mb-3"
                    loading="lazy"
                  />
                  <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    Mail
                  </div>
                  <div className="self-stretch text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    admisiones@colegiosenda.edu.mx
                  </div>
                </div>
              </div>
              <a href="mailto:admisiones@colegiosenda.edu.mx">
                <div className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Enviar correo
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full px-8 md:px-16 py-16 md:py-24 bg-[#f9f9fe] flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-start items-stretch gap-0 rounded-lg md:rounded-none overflow-hidden shadow-md">
          <div className="relative flex-shrink-0">
            <img
              src={CTA1}
              alt="background green cta"
              className="w-full md:w-auto h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
              <h3 className="font-semibold font-pangea text-lg md:text-2xl text-white">
                ¿Tienes preguntas?
              </h3>
              <p className="font-light text-sm md:text-base text-white md:w-4/5">
                Si tienes alguna duda sobre admisiones, ¡no dudes en contactar a
                nuestra directora de admisiones, Paty González! ¡Ella estará feliz
                de ayudarte!
              </p>
              <a href="mailto:admisiones@colegiosenda.edu.mx">
                <div className="inline-flex px-8 py-2 bg-white rounded-2xl hover:bg-[#009bce] text-black/90 hover:text-white hover:cursor-pointer">
                  <span className="text-sm md:text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Contactar
                  </span>
                </div>
              </a>
            </div>
          </div>
          <img
            src={CTAImgMaternal}
            alt="image maternal"
            className="w-full md:w-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default AplicaSenda;
