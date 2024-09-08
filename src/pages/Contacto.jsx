import React from "react";

function Contacto() {
  return (
    <div>
      <div className="h-[939px] p-40 bg-[#f9f9fe] justify-start items-center gap-12 inline-flex">
        <div className="grow shrink basis-0 px-2 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Contáctanos
          </div>
          <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            ¿Tienes dudas sobre nuestro Colegio o no encontraste la información
            necesaria? Contáctanos
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
              General
            </div>
            <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              senda@colegiosenda.edu.mx
              <br />
              (55) 5683-2060
            </div>
          </div>
          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
              Admisiones
            </div>
            <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              admisiones@colegiosenda.edu.mx
              <br />
              (55) 5683-2060
              <br />
              WhastApp: (+52) 5556832060
            </div>
          </div>
        </div>
        <div className="w-[576px] p-10 bg-white rounded-[10px] shadow border border-[#e4e4de] flex-col justify-start items-center gap-6 inline-flex">
          <div className="self-stretch justify-start items-center gap-10 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
              <div className="self-stretch h-[81px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                  Contáctanos
                </div>
                <div className="self-stretch text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  Por favor llena el siguiente formulario y nos pondremos en contacto contigo:
                </div>
              </div>
              <div className="self-stretch h-[442px] py-6 rounded-lg flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                      Nombre
                    </div>
                    <div className="self-stretch h-[57px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">
                        Value
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[86px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                      Apellido
                    </div>
                    <div className="self-stretch h-14 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">
                        Value
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                      Correo electrónico
                    </div>
                    <div className="self-stretch h-[55px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">
                        Value
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                      Teléfono
                    </div>
                    <div className="self-stretch h-[55px] px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-none">
                        Value
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[110px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                    Mensaje
                  </div>
                  <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">
                      Value
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="p-3 bg-[#009bce] rounded-lg border border-[#009bce] justify-center items-center gap-2 flex">
                    <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
                      Mandar mensaje
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
