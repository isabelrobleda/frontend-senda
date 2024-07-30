import React from "react";

function CTAApply() {
  return (
    <div className="w-full px-8 md:px-16 py-16 md:py-24 bg-white flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 w-full">
        <div className="bg-gradient-to-r from-[#00a4da] to-[#b3cf3f] rounded-2xl flex flex-col md:flex-row justify-start items-end">
          <div className="w-full md:w-[528px] p-10 md:pl-10 md:pr-4 md:pb-10 flex flex-col justify-start items-start gap-6">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
              <div className="w-full text-[#1e1e1e] text-2xl md:text-[32px] font-medium text-pangea leading-snug md:leading-[38.40px]">
                Promoviendo una cultura
                <br />
                del pensamiento para todos
              </div>
              <div className="w-full text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </div>
            </div>
            <div className="px-6 py-2 bg-[#f9f9fe] rounded-2xl flex justify-center items-center gap-2">
              <div className="text-[#303030] text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                Ver más
              </div>
            </div>
          </div>
          <div className="w-full md:w-[397px] h-96 relative">
            <img className="h-full w-full md:absolute md:top-0 md:left-0 md:w-auto" src="src/assets/cta_img.png" alt="CTA" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTAApply;
