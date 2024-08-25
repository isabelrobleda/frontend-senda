import React from "react";
import CardsNosotros from "../../components/CardsNosotros";

function Blog() {
  return (
    <div>
      <div className="h-[242px] px-[60px] flex-col justify-start items-center inline-flex">
        <div className="w-[826px] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 p-6 rounded-[20px] shadow flex-col justify-start items-center gap-14 inline-flex">
            <div className="w-[904px] text-center">
              <span className="text-[#1e1e1e] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                Escribiendo para
                <br /> formar el{" "}
              </span>
              <span className="text-[#b0cb4f] text-[57px] font-semibold font-['Pangea'] leading-[68.40px]">
                futuro
              </span>
            </div>
          </div>
        </div>
        <div className="w-[89.48px] h-[51px] relative">
          <div className="w-[89.48px] h-[51px] left-0 top-0 absolute">
            <img
              className="w-[45px] h-[60px] left-[39.26px] top-[-4px] absolute"
              src="https://via.placeholder.com/45x60"
            />
          </div>
          <div className="w-[89.48px] h-[51px] left-0 top-0 absolute">
            <img
              className="w-[71.90px] h-[48.92px] left-[7.26px] top-[7.08px] absolute"
              src="https://via.placeholder.com/72x49"
            />
          </div>
        </div>
        <div className="w-[764px] text-center text-[#757575] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
      </div>
      <CardsNosotros />
    </div>
  );
}

export default Blog;
