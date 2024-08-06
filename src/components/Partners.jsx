import React from "react";

function Partners() {
  return (
    <div>
      <div className="w-full md:h-[245px] py-8 px-4 md:px-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8">
        <div className="w-full text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
          Trusted Partners
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 md:gap-20 ">
          <img src="src/assets/Apple.png" className="w-[120px] h-auto" alt="Apple" />
          <img src="src/assets/MARSA.png" className="w-[120px] h-auto" alt="MARSA" />
          <img src="src/assets/Knotion.png" className="w-[120px] h-auto" alt="Knotion" />
          <img src="src/assets/LARSA.png" className="w-[120px] h-auto" alt="LARSA" />
          <img src="src/assets/Idea-sport.png" className="w-[114px] h-auto" alt="Idea Sport" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
