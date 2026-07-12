import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import ImgBlog6 from "../../assets/blog/blog-6-ingles.jpg";
import Monica from "../../assets/equipo/Image-Nuestro_equipo-02.png";
import WhatsAppButton from "../../components/WhatsAppButton";

function Blog6() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-[1440px]">
        <div className="w-full px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-8">
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="w-full max-w-[1312px] h-96 rounded-2xl object-cover"
              src={ImgBlog6}
              alt="Alumno del Colegio Senda programando un robot con un iPad"
              loading="lazy"
            />
          </div>
        </div>

        <div className="px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="text-center text-black/40 text-2xl font-semibold font-['Inter']">
              12 de julio de 2026
            </div>
            <h1 className="text-center text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[48px] md:leading-[68.40px]">
              ¿A qué edad debe empezar el inglés?
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full bg-[#d9d9d9] relative">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={Monica}
                  alt="Mónica Sánchez Gavito"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-black/90 text-xl font-normal">
                  Mónica Sánchez Gavito
                </div>
                <div className="text-black/60 text-base font-normal">
                  Directora General y Fundadora
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[800px] flex flex-col gap-12">
            <div className="text-[#009bce] text-base font-semibold font-['Inter'] leading-snug">
              Es la pregunta que más escucho de mamás y papás que visitan el
              Colegio por primera vez. Y la respuesta corta es: antes de lo que
              crees. La respuesta larga es esta carta.
            </div>

            {/* Content Sections */}
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-lg md:text-xl font-semibold">
                  {section.title}
                </div>
                <div className="text-[#757575] text-base md:text-lg font-normal whitespace-pre-line">
                  {section.text}
                </div>
              </div>
            ))}

            <div className="text-[#757575] text-base md:text-lg font-normal">
              Con cariño y convicción,
              <br />
              Mónica Sánchez Gavito
            </div>

            <div className="w-full p-6 bg-[#f9f9fe] rounded-[10px] border border-[#e4e4de] flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <div className="text-[#1e1e1e] text-lg font-semibold font-['Inter']">
                  Ven a escuchar a nuestros niños hablar inglés
                </div>
                <div className="text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                  La mejor manera de entender este artículo es visitarnos.
                </div>
              </div>
              <WhatsAppButton
                message="Hola, leí el artículo sobre el inglés y me gustaría agendar una visita al Colegio Senda."
                source="blog_6_ingles"
                className="px-6 py-3 bg-[#009bce] hover:bg-[#007cae] rounded-2xl text-[#f2f2f2] text-base font-medium text-center w-full sm:w-auto shrink-0"
              >
                Agenda tu visita por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* CardsNosotros Component */}
        <CardsNosotros />
      </div>
    </div>
  );
}

// Content sections data
const sections = [
  {
    text: `Cuando una familia piensa en el inglés, casi siempre lo imagina como una materia: libros, exámenes, tareas. Por eso muchos papás suponen que lo razonable es esperar a la primaria, "cuando el niño ya pueda estudiar". Es una idea comprensible… y es exactamente al revés. El inglés no se estudia mejor de grande; se adquiere mejor de pequeño.`,
  },
  {
    title: "La ventana que no vuelve a abrirse igual",
    text: `Los primeros seis años de vida son el periodo de mayor plasticidad del cerebro humano. Un niño pequeño no aprende un idioma: lo absorbe, igual que absorbió el español, sin que nadie le explicara una regla de gramática. Distingue sonidos que un adulto ya no percibe, imita acentos sin esfuerzo y no siente vergüenza de equivocarse, porque todavía no sabe que "equivocarse" existe.

Esa ventana no se cierra de golpe a los seis años — siempre se puede aprender un idioma — pero nunca vuelve a abrirse igual. Lo que en el kínder ocurre jugando y cantando, en la adolescencia cuesta horas de estudio, y aun así rara vez alcanza la misma naturalidad. Por eso en el Senda decimos que el kínder no es la antesala del colegio: es la decisión más importante.`,
  },
  {
    title: "Aprender inglés no es estudiar inglés",
    text: `Un niño de dos o tres años no necesita clases de inglés; necesita vivir en inglés una parte de su día. Necesita que la miss lo salude en inglés, que las canciones de la mañana sean en inglés, que las instrucciones del juego lleguen en inglés y que su cerebro, poco a poco, deje de traducir y empiece simplemente a entender.

Cuando el idioma llega así — con afecto, con juego, con rutinas — el niño lo asocia con alegría y no con calificaciones. Y un idioma que se asocia con alegría se queda para toda la vida.`,
  },
  {
    title: "“¿Y no se confunde con dos idiomas?”",
    text: `Es la duda más frecuente, y la evidencia es tranquilizadora: no. Que un niño pequeño mezcle palabras de dos idiomas en una misma frase no es confusión; es una etapa completamente normal del desarrollo bilingüe, y desaparece sola. A cambio, el cerebro bilingüe entrena desde temprano habilidades que van mucho más allá del idioma: flexibilidad para cambiar de perspectiva, atención para elegir entre dos sistemas y una sensibilidad especial para entender que otras personas ven el mundo de otra manera. El bilingüismo temprano no solo forma niños que hablan inglés: forma niños que piensan con más amplitud.`,
  },
  {
    title: "Entonces, ¿cuál es la edad ideal?",
    text: `Entre el primer año y los seis. No porque después sea imposible, sino porque antes de los seis el inglés entra sin fricción, sin miedo y sin acento, mientras el niño construye al mismo tiempo su confianza y su identidad. Un niño que llega a primaria ya bilingüe no dedica esos años a "aprender inglés": los dedica a aprender en inglés — a leer, investigar, programar un robot o presentar un proyecto — que es algo muy distinto.`,
  },
  {
    title: "Cómo se vive en el Senda",
    text: `En nuestro Colegio el inglés empieza en maternal, desde el primer día. En preescolar, los niños pasan la mitad de su jornada en inglés, con una miss de inglés en cada salón además de sus dos educadoras, y con momentos como Sing and Play en los que el idioma llega cantando. No hay traducción ni memorización: hay ambientes Montessori constructivistas donde el inglés es la lengua del juego y del descubrimiento. Años después, nuestros alumnos certifican su nivel con estándares internacionales — pero la semilla se sembró a los dos, tres, cuatro años, sin que ellos se dieran cuenta.`,
  },
  {
    title: "Lo que puedes hacer hoy en casa",
    text: `No necesitas hablar inglés perfecto para ayudar a tu hijo. Pon canciones infantiles en inglés en el coche. Lean juntos un cuento sencillo, aunque pronuncies a tu manera. Deja que vea sus caricaturas favoritas en inglés. Y sobre todo: nunca lo corrijas con impaciencia ni lo obligues a "decir algo en inglés" frente a la familia. La regla de oro es la misma en casa que en el colegio — que el inglés se sienta como juego, nunca como examen.

Si tu hijo tiene entre uno y cinco años, estás justo a tiempo. No para inscribirlo a un curso, sino para regalarle la que probablemente sea la ventaja más duradera de toda su vida escolar.`,
  },
];

export default Blog6;
