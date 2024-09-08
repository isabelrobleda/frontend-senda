import React from "react";
import CardsNosotros from "../../components/CardsNosotros";

function Blog() {
  return (
    <div>
      <div className="relative md:h-[700px] w-full flex justify-center items-center p-4">
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
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  Escribiendo para
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <br />
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src="src/assets/blog/Group 86.png"
                    alt="image 1"
                    className="inline-block mx-1 md:mx-2 h-10 md:h-16"
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  formar el {" "}
                </span>

                <span className="text-[#b0cb4f] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  futuro
                  <br />
                </span>
              </div>
              <div>
                <p className="text-[#757575] text-center sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] ">
                  En nuestro blog encontrarás contenido
                  educativo, informativo y de interés general <br /> para que puedas
                  estar al tanto de las últimas tendencias en educación y
                  tecnología.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardsNosotros />
    </div>
  );
}

export default Blog;
