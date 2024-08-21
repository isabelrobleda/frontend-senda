import React from "react";

function CasosExito() {
  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto mt-20 flex flex-col justify-center items-center gap-6 px-4">
        <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter']">
          Success stories
        </div>
        <div className="text-center text-[#757575] text-base font-normal font-['Inter'] leading-snug">
          Nuestras historias de éxito que nos hacen sentir muy orgullosos
        </div>

        <div className="relative w-full max-w-[780px] h-auto aspect-w-16 aspect-h-9 bg-white rounded-[10px] shadow border border-[#e4e4de] z-20 flex justify-center items-center">
          <video
            className="w-full h-full object-cover rounded-[10px]"
            src="src/assets/caso-exito-01-compressed.mp4"
            controls
            poster="src/assets/image-video.png"
          ></video>

          <img
            className="absolute top-0 md:top-[40px] left-[-20px] md:left-[-60px] z-10 w-[60px] md:w-[94px] h-[60px] md:h-[94px]"
            src="src/assets/medal.png"
            alt="Medal"
          />
          <img
            className="absolute bottom-0 md:bottom-[40px] right-[-25px] md:right-[-60px] z-10 w-[60px] md:w-36"
            src="src/assets/brain.png"
            alt="Brain"
          />
        </div>

        <img
          className="absolute top-24 md:top-10 right-[10px] md:right-72 z-0 w-[40px] md:w-auto"
          src="src/assets/green-dots.png"
          alt="Green Dots"
        />
        <img
          className="absolute bottom-[-15px] md:bottom-[-60px] left-[10px] md:left-56 z-0 w-[40px] md:w-auto"
          src="src/assets/blue-dots.png"
          alt="Blue Dots"
        />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto mt-40">
        <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
          Nuestro feedback
        </div>

        <div className="relative w-full mb-20 flex flex-col md:flex-row items-center justify-center mt-10 px-4 md:px-0">
          <div className="w-full md:w-[1138px] flex flex-col md:flex-row justify-start items-start gap-10">
            <div className="w-full md:w-[369px] h-auto p-6 bg-[#f7f7f7] rounded-[10px] shadow flex-col justify-between items-start inline-flex">
              <div className="h-auto flex-col justify-start items-start gap-6 flex">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">
                  Ex-alumno
                </div>
                <div className="text-[#1e1e1e] text-base  font-normal font-['Inter'] leading-normal pb-10">
                  “Me gusta mucho el Senda porque aceptan a todos los niños. Las
                  misses son justas, tengo muy buenos amigos, y la escuela creo
                  que está muy bien hecha."
                </div>
              </div>
              <div className="h-auto justify-between items-start inline-flex">
                <div className="flex-col justify-end items-start gap-4 inline-flex">
                  <div className="w-full md:w-[183px] justify-start items-start gap-3 inline-flex">
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <img src="src/assets/exito/vector-blue.png" alt="quote-vector" className="md:ml-56 ml-64" />
                      <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">
                        Lucas
                      </div>
                      <div className="w-[121.65px] h-7 relative">
                        <img src="src/assets/exito/five-stars.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[369px] h-auto p-6 bg-[#f7f7f7] rounded-[10px] shadow flex-col justify-between items-start inline-flex">
              <div className="h-auto flex-col justify-start items-start gap-6 flex">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">
                  Padre de Familia
                </div>
                <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-normal pb-10">
                  “Excelente colegio, la atención es de otro nivel, te hace
                  sentir tranquila y en casa. Te explican súper!! No se pueden
                  perder la oportunidad de tener a sus hijos dentro de este gran
                  colegio!"
                </div>
              </div>
              <div className="h-auto justify-between items-start inline-flex">
                <div className="flex-col justify-end items-start gap-4 inline-flex">
                  <div className="w-full md:w-[183px] justify-start items-start gap-3 inline-flex">
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <img src="src/assets/exito/vector-blue.png" alt="quote-vector" className="md:ml-56 ml-64" />
                      <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">
                        Laura
                      </div>
                      <div className="w-[121.65px] h-7 relative">
                        <img src="src/assets/exito/five-stars.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[369px] h-auto p-6 bg-[#f7f7f7] rounded-[10px] shadow flex-col justify-between items-start inline-flex">
              <div className="h-auto flex-col justify-start items-start gap-6 flex">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">
                  Maestra
                </div>
                <div className="text-[#1e1e1e] text-base font-normal font-['Inter'] leading-normal pb-16">
                  “Excelencia en educación, maestras comprometidas y preparadas
                  para esta nueva era. Niños felices y desarrollando su
                  potencial día a día."
                </div>
              </div>
              <div className="h-auto justify-between items-start inline-flex">
                <div className="flex-col justify-end items-start gap-4 inline-flex">
                  <div className="w-full md:w-[183px] justify-start items-start gap-3 inline-flex">
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <img src="src/assets/exito/vector-blue.png" alt="quote-vector" className="md:ml-56 ml-64" />
                      <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">
                        Silvia
                      </div>
                      <div className="w-[121.65px] h-7 relative">
                        <img src="src/assets/exito/five-stars.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CasosExito;
