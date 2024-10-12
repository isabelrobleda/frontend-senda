import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import Group86 from "../../assets/blog/Group 86.png";
import HeaderBackground from "../../assets/Header-background.png";

function Blog() {
  return (
    <div>
      <div className="relative md:h-[750px] pt-20 w-full flex justify-center items-center p-4">
        <div>
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-screen object-cover md:block hidden opacity-10 z-0 md:h-[800px]"
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
                  Escribiendo para
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-pangea leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>
                <br />
                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[38.40px] md:leading-[68.40px]">
                  <span style={{ display: "inline-block" }}></span>
                  <img
                    src={Group86}
                    alt="image 1"
                    className="inline-block mx-1 md:mx-2 h-10 md:h-16"
                  />
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-normal font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  {" "}
                </span>

                <span className="text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  formar el{" "}
                </span>

                <span className="text-[#b0cb4f] text-[32px] md:text-[57px] font-semibold font-['Pangea'] leading-[38.40px] md:leading-[68.40px]">
                  futuro
                  <br />
                </span>
              </div>
              <div>
                <p className="text-[#757575] text-center sm:text-lg md:text-xl font-semibold font-['Inter'] leading-[1.4] ">
                  En nuestro blog encontrarás contenido educativo, informativo y
                  de interés general <br /> para que puedas estar al tanto de
                  las últimas tendencias en educación y tecnología.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CardsNosotros />
      </div>
    </div>
  );
}

export default Blog;
