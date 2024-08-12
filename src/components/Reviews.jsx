import React from 'react';

function Reviews() {
  return (
    <div className="w-full md:h-screen p-8 md:p-16 bg-[#f9f9fe] flex flex-col justify-center items-center gap-8">
      <div className="text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
      Nuestro feedback
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="w-full md:w-[400px] h-auto p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-3">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img className="w-10 h-10" src="src/assets/emoji-01.png" alt="Reviewer" />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">Lucas</div>
                <div className="text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Alumno Senda</div>
              </div>
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              “Me gusta mucho el Senda porque aceptan a todos los niños. Las misses son justas, tengo muy buenos amigos, y la escuela creo que está muy bien hecha."
            </div>
          </div>
          <div className="w-full md:w-[400px] h-auto p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-3">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img className="w-10 h-10" src="src/assets/emoji-04.png" alt="Reviewer" />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">Laura</div>
                <div className="text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Padre de familia</div>
              </div>
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              “Excelente colegio, la atención de Miss Paty es de otro nivel, te hace sentir tranquila y en casa. Te explican súper!! No se pueden perder la oportunidad de tener a sus hijos dentro de este gran colegio!"
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="w-full md:w-[400px] h-auto p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-3">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img className="w-10 h-10" src="src/assets/emoji-02.png" alt="Reviewer" />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">Silvia</div>
                <div className="text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Maestra del Senda</div>
              </div>
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              “Excelencia en educación, maestras comprometidas y preparadas para esta nueva era. Niños felices y desarrollando su potencial día a día."
            </div>
            <div className="flex justify-start items-start gap-4">
              <img className="justify-start items-center gap-0.5 flex" src='src/assets/five-stars.png' />
              <div className="w-[25px] text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">5.0</div>
            </div>
          </div>
          <div className="w-full md:w-[400px] h-auto p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-3">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img className="w-10 h-10" src="src/assets/emoji-03.png" alt="Reviewer" />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">Moni</div>
                <div className="text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Padre de familia</div>
              </div>
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              “Desde hace mucho decidí meter a mis hijos en el Colegio Senda. Hoy puedo decir que ha sido la mejor decisión que he tomado en mi vida. Desde Comunidad Infantil, hasta Secundaria. <br/><br/>Este es un Colegio que permite que tus hijos estén en un ambiente contenido, que tengan un trato personalizado y que permite a los niños identificar cuáles son sus habilidades, cómo las pueden fortalecer. Los niños pueden crecer en un lugar donde el idioma, los principios y los valores son muy importantes.”
            </div>
            <div className="flex justify-start items-start gap-4">
              <img className="justify-start items-center gap-0.5 flex" src='src/assets/five-stars.png'/>
              <div className="w-[25px] text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">5.0</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="w-full md:w-[400px] h-auto p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-3">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img className="w-10 h-10" src="src/assets/emoji-05.png" alt="Reviewer" />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">Sofía</div>
                <div className="text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Padre de familia</div>
              </div>
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            “Extraordinario Colegio, en donde la educación es personalizada y la forma de educar es a través de pensar no de memorizar. Urgente forma de educar a nuestros niños en este país.”
            </div>
          </div>
          <div className="w-full md:w-[400px] h-auto p-6 bg-white rounded-[10px] shadow border border-[#e4e4de] flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-3">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img className="w-10 h-10" src="src/assets/emoji-06.png" alt="Reviewer" />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-[#757575] text-base font-semibold font-['Inter'] leading-snug">Diego</div>
                <div className="text-[#b3b3b3] text-base font-normal font-['Inter'] leading-snug">Alumno Senda</div>
              </div>
            </div>
            <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
            “Senda es para mi un hogar, es un ambiente que siempre me apoya cuando estoy triste o desanimado. Además tengo a mis amigos y mucha gente que quiero.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
