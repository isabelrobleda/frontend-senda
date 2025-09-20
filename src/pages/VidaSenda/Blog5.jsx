import React from "react";
import CardsNosotros from "../../components/CardsNosotros";
import Monica from "../../assets/equipo/Image-Nuestro_equipo-02.png";
import Blog5Img from "../../assets/blog/logo-paz-senda.png";

function Blog5() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-[1440px]">
        <div className="w-full px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-8">
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="w-full max-w-[1312px] h-96 rounded-2xl object-contain "
              src={Blog5Img}
              alt="Blog 4 image"
            />
          </div>
        </div>

        <div className="px-4 md:px-16 py-12 bg-white flex flex-col justify-center items-center gap-12">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="text-center text-black/40 text-2xl font-semibold font-['Inter']">
              20 de septiembre de 2025
            </div>
            <div className="text-center text-[#1e1e1e] text-[32px] md:text-[57px] font-semibold font-pangea leading-[48px] md:leading-[68.40px]">
            El diálogo como base transformadora del pensamiento crítico y la
            resolución de conflictos
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full bg-[#d9d9d9] relative">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={Monica}
                  alt="Mónica Sánchez Gavito"
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
            El diálogo en el ámbito pedagógico debe ser una herramienta poderosa y transformadora
que permita a los alumnos expresarse con libertad y compartir sus opiniones, ideas y
perspectivas de manera ordenada y siguiendo ciertas reglas. 
            </div>

            {/* Content Sections */}
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="text-[#1e1e1e] text-lg md:text-xl font-semibold">
                  {section.title}
                </div>
                <div className="text-[#757575] text-base md:text-lg font-normal">
                  {section.text}
                </div>
              </div>
            ))}

            
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
    text: `El diálogo en el ámbito pedagógico debe ser una herramienta poderosa y transformadora
que permita a los alumnos expresarse con libertad y compartir sus opiniones, ideas y
perspectivas de manera ordenada y siguiendo ciertas reglas. Es fundamental que se
facilite y promueva un intercambio vibrante de ideas, no solo entre el profesor y los
estudiantes, sino también entre los propios estudiantes. Reconocer que el conocimiento
no reside únicamente en el profesor, sino que es un proceso enriquecedor en el que
también se aprende de los alumnos, es clave para crear un entorno de aprendizaje
dinámico. Este intercambio de ideas y puntos de vista debe ser un reflejo de la
interacción mutua, siempre abierto a la crítica constructiva. Además, es esencial
proporcionar a los alumnos el tiempo y la tranquilidad necesarios para reflexionar
profundamente y formular sus propias ideas y argumentos, fomentando así un
aprendizaje significativo y de impacto duradero.
  `},
  {
    text: `
Frente a esto, se plantea que, para generar experiencias de diálogo enriquecedoras en el
aula, es necesario permitir que los estudiantes puedan expresar opiniones, ideas y
puntos de vista entre ellos, siguiendo reglas explícitas que faciliten la recepción de
críticas y opiniones adversas sin que esto genere malestar en otros, evitando así
situaciones de violencia. Por lo tanto, la actividad pedagógica reflexiva en el aula propicia
situaciones donde los estudiantes deben cuestionar su propio pensamiento y reacciones
hacia otros (en este caso, sus compañeros) y sobre sí mismos, con el objetivo de mejorar
la convivencia y los buenos tratos en clase y fuera de ella. Cabe señalar que estos son
los principios básicos para trabajar la formación según la propuesta metodológica de
“Hablar hasta Entenderse”
Bárbara Porro (1999) sugiere una serie de estrategias para trabajar la resolución de
conflictos en el aula, entre las cuales se encuentra “Hablar hasta Entenderse”. Esta
estrategia permite que los estudiantes, en un estado de calma mental, dialoguen con un
compañero con quien tuvieron un conflicto. Parte del procedimiento incluye elementos
como: hablar en primera persona, aplicar elementos y reglas esenciales para que una
conversación fluya, estar abiertos a comprender las necesidades del otro, asumir la
responsabilidad de lo ocurrido y proponer una solución y un plan de acción por parte de los estudiantes. Finalmente, se sugiere establecer una solución si no se lleva a cabo el
plan de acción por alguno de los involucrados en el conflicto.
El procedimiento de la estrategia (modificado según el contexto) y diversos referentes
teóricos validan su coherencia pedagógica como actividad reflexiva que promueve el
desarrollo de habilidades sociales en los estudiantes. Esta estrategia permite que los
niños y jóvenes desarrollen habilidades como la empatía, el respeto y el compromiso
social, contribuyendo así a ser miembros dentro de su espacio escolar y modificando el
clima del aula existente.` },


    { text: `
A continuación, se presentan las principales características de la estrategia para la
resolución de conflictos:
`},
    { title: `
I. Introducción a la Resolución de Conflictos` ,
        text: `
Comprender que la existencia de conflictos en el aula no solo es responsabilidad de
quien reclama una falta, sino que cualquier reacción que desagrade a otros (a veces sin
intención) también forma parte de un conflicto. Analiza la dinámica el grupo y la
capacidad de comprender la realidad, cuyo objetivo principal es entender las causas y
problemas de ciertos hechos y circunstancias, comprendiendo el porqué de las cosas.
Desde esta perspectiva, la concientización de los estudiantes sobre un conflicto como
algo que involucra a más personas que solo al afectado se vuelve esencial.
`  },
    {
        title: `II. Actitud reflexiva en la Resolución de Conflictos` ,
        text: `

Es crucial que los involucrados adopten una actitud propositiva al participar en la
resolución de conflictos. Para ello esta metodología enfatiza la necesidad de generar
autocontrol para que el cerebro funcione analíticamente, evitando que los estudiantes
utilicen conductas agresivas como mecanismos de defensa. El estrés excesivo puede
actuar como una barrera que impide el autocontrol reflexivo, haciendo que surjan
conductas agresivas. Recobrar la calma es un recurso fundamental para resolver
conflictos, permitiendo que los estudiantes desarrollen autocontrol, reflexión y
flexibilidad.
Los conflictos forman parte de nuestra vida cotidiana. Podemos negarlos e inhibirnos,
enfrentarnos al otro o afrontarlos como lo que son: una oportunidad para el aprendizaje y
el crecimiento personal, moral, relacional.
`  },
    {  title: `III. Diálogo como Recurso Principal `,   
        text: `

El diálogo es la herramienta que abre las puertas a la reflexión, la empatía y el
conocimiento la conversación de los miembros de la clase sobre problemas sociales
relevantes, permitiendo al alumnado reflexionar sosegadamente sobre un tema y situarse
moralmente ante él. Si se considera el diálogo como una forma válida de expresión en el
aula, se convierte en un recurso inherente a la formación y cohesión del grupo.
    `},
    {  title: `IV. Respeto como Base del Diálogo`,
        text: `
El respeto hacia los demás es esencial para cualquier enseñanza que se base en el
diálogo. En esta metodología, se considera que elementos como la atención y la escucha
son clave para la comunicación, ya que no solo transmiten información, sino también
actitudes y comportamientos propios de la realidad social en la que vivimos. Es
importante mantener una actitud que valore el proceso de comunicación como algo
importante dentro del grupo, ya que esto creará un ambiente de confianza y seguridad,
facilitando la expresión honesta de pensamientos y emociones.
    `},
    {  title: `
V. Enfrentar y Abordar Conflictos en el Aula`
,    text: `
Resolver y abordar los conflictos en el aula es esencial. Tanto los estudiantes como el
profesor deben ser responsables de los espacios de participación, ya que esto les
ayudará a desarrollar habilidades sociales importantes para la vida. Estas experiencias
permiten que los estudiantes piensen sobre situaciones reales de su vida personal y
social, comprendiendo las decisiones que toman y sus consecuencias.
Desde la resolución de conflictos, niños y niñas desarrollan valores de respeto y
compromiso con el otro, valores de paz y amor. Aprenden a identificar y expresar
adecuadamente sus emociones y a defender sus opiniones; a reconocer las emociones
de los otros y a escuchar y atender a otros puntos de vista distintos al propio. Aprenden a
dar soluciones variadas y creativas a los problemas, a consensuarlas y a negociar un
acuerdo que satisfaga a todos.
    `},
    {  title: "¿Por qué es importante enseñar a niños y niñas a resolver conflictos?",
        text: `
Niños y niñas están expuestos a situaciones de estrés diario. Existen evidencias de que
los programas de aprendizaje de habilidades socioemocionales en la escuela, una de
cuyas áreas fundamentales es la resolución de conflictos, reducen el estrés, incrementan
el bienestar, minimizan los problemas de conducta y mejoran el rendimiento. Además, la
dedicación a la resolución de conflictos en el aula “se recupera” en tiempo de trabajo
escolar efectivo, pues los conflictos no resueltos generan, además de malestar, una
pérdida importante de tiempo. Enseñar a resolver conflictos es cultivar en los niños y
niñas fortalezas para hacer frente a los obstáculos y circunstancias adversas de la vida y,
consecuentemente, una buena vía para prevenir dificultades.`,
  },
  {
    title: "Identificando el conflicto: Tenemos un “problema",
    text: `Bárbara Porro nos propone presentar a los niños y niñas la siguiente definición: Un
conflicto es un desacuerdo o pelea por algo que consideramos importante. Lo sentimos
como un “problema” que parece que no tiene solución, porque las partes implicadas en
un conflicto tienen puntos de vista o necesidades encontradas. Los conflictos ocurren
porque somos diferentes. Forman parte del ser humano, de nuestra vida cotidiana y
negarlos o evitarlos no suelen ser buenas soluciones.`,
    },
    { text: `
1. El punto de partida fundamental para enseñar a resolver conflictos es trabajar valores
de respeto, compromiso con el otro y amor, porque la única vía para llegar a un
acuerdo es aceptar que la posición del otro, sus opiniones, sus sentimientos, intereses
y, en definitiva, sus necesidades, son tan respetables como las mías.
Dicho esto, es importante aclarar que no todas las situaciones problemáticas con otros
implican un conflicto, en el sentido de que no todos los problemas con los otros
requieren una negociación. Muchos episodios de violencia entre iguales, entre los que
claramente se encuentran las situaciones de acoso escolar, no son conflictos entre
iguales y, por tanto, requieren otro tratamiento distinto a la metodología que aquí
exponemos.
Por otra parte, siendo cierto que los conflictos no hay que evitarlos, también es cierto
que es importante “limitarlos”, para que realmente podamos dedicarles el tiempo necesario y supongan una oportunidad de aprendizaje. En ese sentido, una buena
gestión de las normas de aula previene multitud de conflictos. Otras estrategias que
ayudan a prevenir la aparición de conflictos son “pasar por alto” en el aula conductas
que realmente no son tan importantes y atender al comportamiento positivo e ignorar,
en la medida de lo posible, el comportamiento negativo.
Trabajaremos herramientas para enseñar a los niños y niñas a identificar la existencia
de un conflicto (¿tenemos un problema que requiera solución o podemos seguir
adelante sin darle más importancia?), la dimensión o grado del problema (aplicación
del “termómetro” del conflicto) y plantearemos estrategias de abordaje distintas en
función de la capacidad de los niños y niñas para resolver el problema de forma
autónoma (¿podemos resolverlos solos? Si necesitamos ayuda, ¿quién nos puede
ayudar?). Tomando conciencia de nuestra manera de actuar ante el conflicto: “mirar
con nuevos ojos”`,
    },
    { text: `
No podemos trasmitir lo que no poseemos, por eso es importante tomar conciencia de
cómo reaccionamos a los conflictos interpersonales propios y ajenos. Es frecuente que
los adultos, con la intención de mitigar el dolor de los niños y niñas ante el conflicto,
actuemos negando el conflicto, evitándolo y, en definitiva, no respetando sus
sentimientos. A través de situaciones prácticas que utilizaremos como espejo de
nuestras conductas y emociones nos plantearemos las siguientes cuestiones: ¿Cómo
manejamos nuestros conflictos interpersonales? ¿Cómo reaccionamos cuando los
niños y niñas entran en conflicto?
Cuando tenemos un conflicto con nuestra pareja, nuestro vecino, nuestra compañera
de trabajo, nuestro amigo o el conductor que ha estado a punto de darle a nuestro
coche ¿cómo reaccionamos? ¿podemos identificarnos con alguno de estos tres
estilos?
Estilo inhibido: sumiso, pasivo, conformista, obediente, complaciente, dependiente,
retraído, tímido, vergonzoso, miedoso.`,
    },
    {
        text: `

• Estilo agresivo: dominante, autoritario, abusivo, manipulador, competitivo,
prepotente.`
    },
    {   text: `
• Estilo asertivo: auto afirmativo, auto expresivo, igualitario, amistoso.
Para poder enseñar comportamiento asertivo, hay que practicar comportamiento
asertivo.
    `},
    { text: `
2. La resolución de conflictos no es una habilidad social que podamos enseñar en unas
cuantas sesiones de clase, es un aprendizaje que puede durar toda la vida y que
incluye un conjunto amplio de pensamientos, emociones, conductas y también valores.
Cuando se enseña a resolver conflictos se está trabajando la inteligencia
socioemocional en todos sus ámbitos.
Por otra parte, nuestra forma de reaccionar ante los conflictos de los niños tiene un
papel fundamental.
Cuando somos sensibles a las señales que los niños nos emiten, los miramos
poniéndonos a su altura, los escuchamos abiertamente de manera que se sientan
comprendidos, y somos capaces de crear una sintonía con ellos, estamos abriendo
vías para la comunicación, facilitando así que cooperen en la resolución del conflicto.
Sin embargo, nuestras reacciones habituales, en muchas ocasiones inconscientes,
crean una barrera comunicativa entre nosotros y los niños que cierran las vías de una
posible cooperación: esto es lo que ocurre cuando negamos sus sentimientos, los
corregimos sin escucharlos o los juzgamos haciéndoles sentirse incomprendidos.
Herramientas y métodos de resolución de conflictos: “Hablar hasta Entenderse
Siguiendo la metodología propuesta por Bárbara Porro para la resolución eficaz de los
conflictos interpersonales, incorporando recursos de otros materiales que aparecen
referenciados al final de este documento. La propuesta consiste en el establecimiento
de una serie de pasos, adaptados a distintas edades, que permiten a los pequeños
interiorizar formas asertivas de resolución de conflicto.Se prestará especial atención al
reconocimiento de las propias emociones y deseos, la capacidad de autorregulación

emocional, la capacidad para escuchar y hacernos escuchar, la empatía, respeto y
compromiso con el otro, y la búsqueda de soluciones negociadas y satisfactorias para
todos los implicados en el conflicto.
La propuesta consiste en seguir seis pasos orientados al objetivo “Hablar hasta
entenderse”:
`  },
    { title: "Los seis pasos para resolver un conflicto",
        text: `
1. Hacer un alto. Recobrar la calma
2. Hablar y escucharse
3. Determinar lo que todos los implicados necesitamos
4. Proponer soluciones
5. Elegir la idea que más nos guste a todos
6. Diseñar un plan y ponerlo en práctica
`,
  },
  {
    title: "Hacer un alto. Recobrar la calma.",
    text: `Algunas situaciones conflictivas pueden hacer que nuestras emociones y pensamientos
se disparen y nos alteren. Antes de tomar decisiones hay que pararse y estar sereno.
Existen multitud de estrategias que pueden usarse en el aula para calmarse cuando las
emociones se convierten en un obstáculo. Pararse y sentir, transforma nuestra actitud
ante el conflicto y nos permite vivir las emociones como recursos para solucionar
creativamente los problemas. No hace falta dedicar mucho tiempo. Solo un par de
minutos de atención a la respiración o de conexión con el cuerpo, un par de minutos de
actividad física, de distracción con otra tarea… A cada niño y niña le vendrá mejor una
estrategia concreta, según su temperamento y personalidad. Lo que todos necesitan es
un alto, una retirada momentánea que les permita, como dice Siegel en su libro El
cerebro del niño, “surfear por las olas de las emociones”. Una buena estrategia es crear
en el aula un espacio para ello, un rincón de las emociones, donde niños y niñas puedan
retirarse un momento.
`,
  },
  {
    title: "Hablar y escucharse.",
    text: `Si escuchamos las ideas del otro y sabemos “leer” sus emociones, podemos comprender
su punto de vista en la situación de conflicto. Llegar a esa comprensión del otro es
fundamental para su resolución.
En este punto, es fundamental realizar con los niños y niñas experiencias vivenciales que
les permitan darse cuenta de la necesidad que todos tenemos de sentirnos reconocidos
y escuchados. La otra tarea básica es practicar con ellos formas concretas de expresar
de forma adecuada sus emociones y necesidades, con la clave fundamental de
expresarse en primera persona, hacer referencia expresa a la conducta que da lugar al
conflicto y a cómo esa conducta me afecta: “Me he sentido muy triste cuando has dicho
que no podía jugar porque me gusta jugar contigo”

`,
  },
  {
    title: "Determinar lo que necesitamos.",
    text: `Si partimos de la idea de que tras una conducta existe una necesidad o, dicho de otro
modo, si entendemos que la conducta es una manera de comunicar algo (ideas,
sentimientos o, en definitiva, necesidades), en una situación de conflicto tenemos que
detectar cuáles son las necesidades que tienen las partes. Es muy importante enseñar a
distinguir a los niños entre que quiero y me gustaría que ocurriera y lo que realmente
necesito. Si Manuel me ha empujado en el patio, es posible que quiera vengarme de él,
intentando, por ejemplo, que lo castiguen.
Pero, ¿es eso lo que realmente necesito?

`,
  },
  {
    title: "Proponer soluciones.",
    text: `Consiste en formular tantas salidas al conflicto como se les ocurra a los implicados. Lo
ideal es facilitar un espacio, por ejemplo, un rincón de los conflictos, mesa para la paz,
espacio de escucha, etc., que nos permita hablar para generar ideas con el compromiso
básico de hablar y escuchar.
Ya no hablamos de lo que ocurrió, sino de que lo que vamos a hacer ahora. Suele ser
muy importante que haya una figura de mediador que favorezca la lluvia de ideas y que
se cumpla la regla básica de respetar las soluciones inicialmente propuestas por todos.
De la misma manera, es importante que el mediador u observador (el propio docente u
otro niño ajeno al conflicto) no bloquee este proceso haciendo críticas a las soluciones
aportadas por las partes. Consiste en transformar la idea en un plan de acción que ha de
ponerse en práctica. A medida que se lleva a cabo, hay que evaluar si el plan se cumple,
las dificultades que puedan aparecer y buscar alternativas consensuadas para esos
casos.

`,
  },
    {
        title: "Elegir la idea que más nos guste a todos.",
        text: `De todas las posibles soluciones, las partes eligen aquella que satisfaga a todos. Es
importante que todos acepten una solución común para que las necesidades de todos se
vean satisfechas.
`,
  },
    {
        title: "Diseñar un plan y ponerlo en práctica.",
        text: `Consiste en transformar la idea en un plan de acción que ha de ponerse en práctica. A
medida que se lleva a cabo, hay que evaluar si el plan se cumple, las dificultades que
puedan aparecer y buscar alternativas consensuadas para esos casos.`,
  },

  {
    title: "Materiales y referencias",
    text: `Durkak et al (2011). The impact of enhancing students’ Social and Emotional Learning:
A meta-analysis of school-based universal interventions. Child Development, 82, 1,
405-432
• Equipo SATI. Programa Aulas Felices. http://catedu.es/psicologiapositiva/
• Fraile, A. (Ed.) (2008). La resolución de conflictos en y a través de la educación física.
Barcelona:Graó.
• Giménez-Dasí, M., Fernández, M. y Daniel, M-F. (2013). Pensando las emociones.
Programa de intervención para Educación Infantil. Madrid: Pirámide
• Huebner, D. (2011). Qué puedo hacer cuando estallo por cualquier cosa. Madrid: TEA.
• Kindler, H.S. (1998). Cómo gestionar los conflictos. Cómo utilizar constructivamente las
diferencias. Madrid: C.E. Ramón Aceres.
• Lantieri, L. (2008). Inteligencia emocional infantil y juvenil. Madrid: Aguilar
• Porro, B. (1999). La resolución de conflictos en el aula. Barcelona: Paidós.
• Siegel, D.J. y Payne Bryson, T. (2012). El cerebro del niño. 12 estrategias
revolucionarias para cultivar la mente de tu hijo. Barcelona:
• http://escuelasdespiertas.org/2014/03/11/escuelas-despiertas/ (mindfulness para niños)`,
},

] 

export default Blog5;
