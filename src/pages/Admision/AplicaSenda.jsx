import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Group86 from "../../assets/aplica_senda/Group_86.png";
import Group87 from "../../assets/aplica_senda/Group_87.png";
import Group88 from "../../assets/aplica_senda/Group_88.png";
import HeaderBackground from "../../assets/Header-background.png";
import Image from "../../assets/aplica_senda/image.png";
import Phone from "../../assets/aplica_senda/📞.png"
import Email from "../../assets/aplica_senda/📨.png";
import WhatsApp from "../../assets/aplica_senda/image.png";
import CTA1 from "../../assets/CTAs/CTA-01.png";
import CTAImgMaternal from "../../assets/CTAs/img-maternal.png";


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const structuredData = {
      FullName: formData.FullName,
      BirthDate: formData.BirthDate,
      GradeRequested: formData.GradeRequested,
      SchoolCycle: formData.SchoolCycle,
      Grade: formData.Grade,
      SchoolName: formData.SchoolName,
      ReasonOfChange: formData.ReasonOfChange,
      ParentsNames: formData.ParentsNames,
      Phone: formData.Phone,
      Email: formData.Email,
      HowDidYouKnow: formData.HowDidYouKnow,
      Expectations: formData.Expectations,
      ImportantMatters: formData.ImportantMatters,
    };
    

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/aplica-al-senda`,
        structuredData
      );
      Swal.fire({
        icon: "success",
        title: "Aplicación enviada",
        text: "¡Tu aplicación ha sido enviada exitosamente!",
        confirmButtonColor: "#009bce",
      });

    } catch (error) {
      console.error("There was an error submitting the application:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error con enviar tu aplicación, intenta nuevamente.",
        confirmButtonColor: "#b0cb4f",
      });
    }
  };

  return (
    <div>
      <div className="relative md:h-[750px] w-full flex justify-center items-center p-4">
        <div>
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat opacity-10"
              style={{
                backgroundImage: "url(src/assets/Header-background.png)",
              }}
            ></div>
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
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  educativa inmersa en la cultura de pensamiento,
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group86}
                    alt="image 2"
                    className="inline-block mx-1 md:mx-2 h-14"
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  comprometida con el{" "}
                </span>
                <span className="text-[#b0cb4f] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  bienestar emocional
                  <br />
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  de cada
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group88}
                    alt="image 2"
                    className="inline-block mx-1 md:mx-2 h-14"
                  />
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  alumno.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen max-w-screen-xl w-full mx-auto px-4 py-16 bg-white flex flex-col justify-center items-center gap-12">
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
                    <div>
                      <input
                        type="text"
                        name="FullName"
                        value={formData.FullName}
                        onChange={handleChange}
                        className="h-12 w-full md:w-[1070px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="Juan Pérez"
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      Fecha de Nacimiento *
                    </div>
                    <div>
                      <input
                        type="date"
                        name="BirthDate"
                        value={formData.BirthDate}
                        onChange={handleChange}
                        className="h-12 w-full md:w-[1070px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                    <div className="w-full  flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Grado Solicitado
                      </div>
                      <div>
                        <input
                          type="text"
                          name="GradeRequested"
                          value={formData.GradeRequested}
                          onChange={handleChange}
                          className="h-12 w-full md:w-[520px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                          placeholder="6to Primaria"
                        />
                      </div>
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
                        className="h-12 w-full md:w-[520px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9]"
                        placeholder="Ciclo 23/24"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                    <div className="w-full  flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Grado que cursa
                      </div>
                      <input
                        type="text"
                        className="h-12 w-full md:w-[520px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                        name="SchoolYear"
                        value={formData.SchoolYear}
                        onChange={handleChange}
                        placeholder="1ro Secundaria"
                      />
                    </div>

                    <div className="w-full  flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Escuela de procedencia
                      </div>
                      <input
                        type="text"
                        className="h-12 w-full md:w-[520px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                        name="SchoolName"
                        value={formData.SchoolName}
                        onChange={handleChange}
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
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                      name="ReasonOfChange"
                      value={formData.ReasonOfChange}
                      onChange={handleChange}
                      placeholder="Nuevas oportunidades"
                    />
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      Nombre de los padres *
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                      name="ParentsNames"
                      value={formData.ParentsNames}
                      onChange={handleChange}
                      placeholder="María Fernández y Juan Pérez "
                    />
                  </div>

                  <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                    <div className="w-full  flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Teléfono *
                      </div>
                      <input
                        type="text"
                        className="h-12 w-full md:w-[520px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        required={true}
                        placeholder="55-123-4567-89"
                      />
                    </div>

                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                        Email *
                      </div>
                      <input
                        type="email"
                        className="h-12 w-full md:w-[520px] px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required={true}
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
                      id="HowDidYouKnow"
                      value={formData.HowDidYouKnow}
                      onChange={handleChange}
                      required={true}
                      className="h-12 w-full pl-4 py-2  bg-white rounded-lg border border-[#d9d9d9]  items-center inline-flex"
                    >
                      <option value="Select" className="text-gray-500">
                        Selecciona una opción
                      </option>
                      <option value="Website">Página Web</option>
                      <option value="Location">Ubicación/Lona</option>
                      <option value="Recommendation">
                        Recomendación (amigos, familia, conocidos)
                      </option>
                      <option value="Social Network">
                        Redes Sociales(Facebook, Instagram, Influencers)
                      </option>
                    </select>
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      ¿Qué expectativas tiene del Colegio Senda? *
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                      name="Expectations"
                      value={formData.Expectations}
                      onChange={handleChange}
                      placeholder="Que mi hijo mejore su nivel de inglés"
                    />
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#1e1e1e] text-base font-normal font-['Inter']">
                      ¿Considera que hay algo importante que debamos saber de su
                      hijo/a?
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full px-4 py-2 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex"
                      name="ImportantMatters"
                      value={formData.ImportantMatters}
                      onChange={handleChange}
                      placeholder="Que mi hijo mejore su nivel de inglés"
                    />
                  </div>

                  <div className="w-full justify-start items-center gap-4 inline-flex">
                    <button
                      className="w-full md:w-auto h-12 px-6 bg-[#009bce] hover:opacity-85 rounded-lg border border-[#009bce] text-white justify-center items-center"
                      type="submit"
                    >
                      Mandar aplicación
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
                <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Marcar al teléfono
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch  flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                  <img
                    src={WhatsApp}
                    alt="whatsapp"
                    className="h-12 self-center mb-3"
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
                <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-[#f2f2f2] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                    Chatear en Whatsapp
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[350px] px-6 py-12 bg-white rounded-[10px] shadow-sm border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch  flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                  <img
                    src={Email}
                    alt="email"
                    className="h-12 self-center mb-3"
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
                <div className="px-6 py-3 bg-[#009bce] rounded-2xl justify-center items-center gap-2 inline-flex">
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
      <div className="relative md:h-[650px] w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
        <div className="relative flex flex-col-reverse md:flex-row justify-start items-start">
          <div className="abolute flex flex-col justify-between">
            <img
              src={CTA1}
              alt="background green cta"
              className="relative z-0 md:rounded-none rounded-lg"
            />
            <h3 className="absolute z-10 px-14 mt-20 font-semibold font-pangea md:text-2xl text-lg">
              ¿Tienes preguntas?
            </h3>
            <p className="absolute z-10 md:mt-32 mt-28 px-14 font-light md:w-1/2 text-sm md:text-base">
              Si tienes alguna duda sobre admisiones, ¡no dudes en contactar a
              nuestra directora de admisiones, Paty González! ¡Ella estará feliz
              de ayudarte!
            </p>
            <a href="mailto:admisiones@colegiosenda.edu.mx">
              <div className="absolute h-10 ml-14 px-8 z-10 md:bottom-14 bottom-10  py-2 bg-white rounded-2xl border border-white ">
                <span className="text-black/90 md:text-base text-sm font-medium font-['Roboto'] leading-normal tracking-tight hover:cursor-pointer">
                  Contactar
                </span>
              </div>
            </a>
          </div>
          <img
            src={CTAImgMaternal}
            alt="image maternal"
            className="md:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AplicaSenda;
