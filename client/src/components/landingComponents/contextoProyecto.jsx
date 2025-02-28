import { useContext } from "react";
import { AppContext } from "../../context/presentacionContext";

import bgDecoration1 from "/public/assets/deco/bgDecoration1.svg";
// import bgDecoration2 from "/public/assets/deco/bgDecoration2.svg";
import bgDecoration3 from "/public/assets/deco/bgDecoration3.svg";
import img4 from "/public/assets/imgs/img4.webp";
import img5 from "/public/assets/imgs/img5.webp";
import img6 from "/public/assets/imgs/img6.webp";
import img31 from "/public/assets/imgs/img31.webp";
import img32 from "/public/assets/imgs/img32.webp";
import img33 from "/public/assets/imgs/img33.webp";
import img34 from "/public/assets/imgs/img34.webp";
import img35 from "/public/assets/imgs/img35.webp";
import img36 from "/public/assets/imgs/img36.webp";

const ContextoProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "contexto";

  if (activeComponent === thisComponent) {
    return (
      <>
        <div className="relative">
          <section
            id="intro"
            className="bg-parallax relative z-0 flex min-h-[750px] justify-center bg-white bg-cover bg-fixed px-10 py-20 text-gray-950 bg-blend-luminosity sm:px-16"
          >
            <img
              className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
              src={bgDecoration1}
              alt=""
            />

            <div className="flex h-auto w-full max-w-[1320px] flex-col justify-center gap-12">
              <h2 className="font-schabo text-6xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                DEFINICION <span className="text-purple-900">PROBLEMA</span>
              </h2>
              <p className="text-pretty">
                Se trabajará con base a las aflicciones económicas que una
                cantidad considerable de estudiantes han manifestado tener, con
                énfasis en el manejo del dinero, puesto que les resulta
                imposible conllevar los gastos que se les presentan diariamente,
                principalmente debido a la falta de conocimientos y aplicaciones
                de conceptos de finanzas personales.
              </p>
              <div className="snap-x snap-mandatory overflow-x-scroll pb-4 sm:overflow-auto">
                <div className="grid h-[480px] w-max grid-cols-3 gap-2 sm:h-[1200px] sm:w-full sm:grid-cols-1 md:h-[900px] md:grid-cols-2 xl:h-[480px] xl:grid-cols-3">
                  <article className="group relative z-0 w-72 snap-center snap-normal overflow-hidden bg-purple-900 text-white sm:w-auto">
                    <figure className="absolute z-[-1] h-full w-full opacity-25">
                      <img
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                        src={img5}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-2xl font-bold">DESCRIPCION</h2>
                      <div className="my-4 h-1 w-full bg-white"></div>
                      <p className="text-balance">
                        Se centra en la falta de conocimientos y aplicaciones de
                        las finanzas personales como la principal problemática
                        enfrentada por los estudiantes. Este desconocimiento
                        financiero se presenta en una comprensión limitada de
                        conceptos fundamentales.
                      </p>
                    </div>
                  </article>

                  <article className="group relative z-0 w-72 snap-center snap-normal overflow-hidden bg-gray-700 text-white sm:w-auto">
                    <figure className="absolute z-[-1] h-full w-full opacity-25">
                      <img
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                        src={img4}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-2xl font-bold">FORMULACION</h2>
                      <div className="my-4 h-1 w-full bg-white"></div>
                      <p className="text-balance">
                        Los estudiantes de pregrado de Ingeniería de Sistemas y
                        Computación en primer semestre de la Universidad
                        Nacional de Colombia Sede Bogotá carecen de
                        conocimientos y aplicaciones de las finanzas personales.
                      </p>
                    </div>
                  </article>

                  <article className="group relative z-0 w-72 snap-center snap-normal overflow-hidden bg-black text-white sm:w-auto md:col-span-2 xl:col-span-1">
                    <figure className="absolute z-[-1] h-full w-full opacity-25">
                      <img
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                        src={img6}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out md:w-3/5 xl:w-auto`}
                    >
                      <h2 className="text-2xl font-bold">SITUACION</h2>
                      <div className="my-4 h-1 w-full bg-white"></div>
                      <p className="text-pretty">
                        A pesar de la diversidad cultural y económica de los
                        estudiantes, proviniendo de distintos entornos sociales,
                        la ausencia de estrategias financieras claras deja en
                        exposición una mala distribución de los recursos
                        monetarios, empeorando debido a la carencia de
                        estrategias organizadas para el acceso a la información
                        financiera.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section
            id="intro"
            className="items relative z-20 flex min-h-[750px] flex-col justify-between gap-16 bg-gray-100 px-10 py-20 text-gray-950 sm:px-16 md:gap-0 xl:flex-row"
          >
            <img
              className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
              src={bgDecoration3}
              alt=""
            />
            <div className="relative z-10 grid h-auto max-w-[700px] gap-12 bg-purple-300 md:max-h-[900px] md:pb-24 xl:left-8 xl:ml-auto xl:max-w-[900px] xl:pb-0">
              <div className="m-6 h-96 overflow-x-hidden overflow-y-scroll sm:m-12 md:h-auto md:overflow-y-auto lg:pr-24">
                <div>
                  <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                    ORIENTACION
                  </h2>
                  <p className="mb-9 text-balance">
                    Nuestro proyecto busca orientar a los estudiantes por medio
                    de un sitio web donde habrán dos interfaces: la primera
                    busca brindar un espacio digital donde los estudiantes
                    tienen información a la mano y pueden aprender sobre
                    educación financiera con el fin de enriquecer su educación y
                    logren hacer hacer un mejor uso de su dinero y la segunda
                    contendrá un gestor financiero automático en el cual los
                    estudiantes podrán gestionar sus ingresos y gastos de una
                    manera más eficiente. Se ha de aclarar que nuestro proyecto
                    está orientado a contribuir con el cuarto Objetivo de
                    Desarrollo Sostenible (ODS): Educación de Calidad, el cual
                    busca un correcto desarrollo de la cognición de cualquier
                    persona, estableciendo que la educación es fundamental para
                    cada ser humano.
                  </p>

                  <p className="mb-9 text-balance">
                    Nuestro proyecto responde a la necesidad de integrar
                    soluciones digitales haciendo uso de la tecnología para
                    brindar un sitio web que ayude a fortalecer los
                    conocimientos en educación financiera de los universitarios
                    de manera accesible, personalizada y además fácil de usar.
                    Además, la creación de esta solución tecnológica se
                    justifica ya que esta guiará a los estudiantes en su
                    educación financiera y a su vez les permitirá gestionar su
                    dinero en un mismo lugar, lo cual es difícil de encontrar ya
                    que esta información generalmente se encuentra segmentada.
                  </p>
                </div>

                <div className="absolute bottom-[5%] right-[6%] -z-10 hidden h-full w-full border-4 border-purple-900 md:block"></div>
                <div className="absolute left-0 top-0 -z-20 h-full w-full bg-purple-300"></div>
                <div className="absolute left-[6%] top-[5%] -z-30 h-full w-full border-2 border-black"></div>
              </div>
            </div>

            <div className="relative z-10 grid h-auto gap-12 self-center bg-purple-200 md:bottom-24 md:left-24 md:max-h-[600px] md:max-w-[600px] xl:left-0 xl:right-8 xl:top-8 xl:mr-auto">
              <div className="p-6 sm:p-12">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                  JUSTIFICACION
                </h2>

                <p className="mb-9 text-balance">
                  El correcto manejo de las finanzas personales es algo esencial
                  para los jóvenes hoy en dia, en especial para los estudiantes
                  universitarios ya que estos con frecuentemente enfrentan
                  problemas financieros debido al desconocimiento en educación
                  financiera, esto generalmente los lleva a realizar una mala
                  gestión de su dinero y en algunos casos pueden presentar
                  estrés o tener deudas.
                </p>

                <div className="absolute left-[10%] top-[10%] -z-20 h-full w-full border-b-4 border-r-4 border-black"></div>
              </div>
            </div>

            <img
              className="absolute -bottom-[10px] right-0 w-1/2 -scale-100 md:-bottom-[25px] xl:-bottom-[40px]"
              src={bgDecoration3}
              alt=""
            />
          </section>

          <section
            id="intro"
            className="relative z-0 flex min-h-[750px] flex-col items-center justify-center gap-16 bg-white bg-opacity-60 px-10 py-20 text-gray-950 bg-blend-luminosity sm:px-16"
          >
            <div className="flex h-auto max-w-[1320px] flex-col">
              <h2 className="mb-9 font-schabo text-6xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                OBJETIVO <span className="-purple-900">PRINCIPAL</span>
              </h2>
              <div className="group flex flex-col justify-between gap-8 border-b-2 border-black py-8 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full bg-purple-400 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5 lg:ml-4">
                    <img
                      src={img31}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b border-black pb-2 text-2xl font-bold">
                      DEFINICION
                    </h2>
                    <p className="text-pretty">
                      Investigar y desarrollar estrategias tecnológicas como
                      solución al déficit de educación y gestión financiera de
                      estudiantes de pregrado de Ingeniería de Sistemas y
                      Computación en primer semestre de la Universidad Nacional
                      de Colombia Sede Bogotá.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end xl:mr-16">
                  <p className="block font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:hidden md:text-8xl lg:block lg:text-8xl">
                    GNRL
                  </p>
                  <p className="hidden font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:block md:text-8xl lg:hidden lg:text-8xl">
                    GN <br /> RL
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-auto max-w-[1320px] flex-col">
              <h2 className="mb-9 font-schabo text-6xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                <span className="text-purple-900">ESPECIFICOS</span>
              </h2>

              <section className="h-[640px] snap-y snap-mandatory overflow-x-hidden overflow-y-scroll sm:h-[560px] md:h-96 lg:h-72">
                <div className="group flex snap-center snap-normal flex-col justify-between gap-8 border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out sm:snap-normal md:h-80 md:flex-row md:gap-12 md:pb-8 lg:h-64">
                  <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                    <figure className="relative z-10 col-span-1 flex h-56 w-full bg-purple-400 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5 lg:ml-4">
                      <img
                        src={img32}
                        alt="Proyecto"
                        className="z-10 h-full w-full object-cover shadow"
                      />
                      <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
                    </figure>

                    <div className="w-full md:w-2/3 xl:w-1/2">
                      <h2 className="mb-4 w-1/2 text-balance border-b border-black pb-2 text-2xl font-bold">
                        PRIMERO
                      </h2>
                      <p className="text-pretty">
                        Recolectar diversa información de formación financiera
                        focalizada en la población estudiantil delimitada,
                        tomando en cuenta sus conocimientos y aplicaciones de
                        conceptos de las finanzas personales.
                      </p>
                    </div>
                  </div>
                  <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                    <p className="font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:text-8xl lg:text-8xl">
                      01
                    </p>
                  </div>
                </div>

                <div className="group flex snap-center snap-normal flex-col justify-between gap-8 border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out sm:snap-normal md:h-80 md:flex-row md:gap-12 md:pb-8 lg:h-64">
                  <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                    <figure className="relative z-10 col-span-1 flex h-56 w-full bg-purple-400 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5 lg:ml-4">
                      <img
                        src={img33}
                        alt="Proyecto"
                        className="z-10 h-full w-full object-cover shadow"
                      />
                      <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
                    </figure>

                    <div className="w-full md:w-2/3 xl:w-1/2">
                      <h2 className="mb-4 w-1/2 text-balance border-b border-black pb-2 text-2xl font-bold">
                        SEGUNDO
                      </h2>
                      <p className="text-pretty">
                        Analizar la información previamente recolectada,
                        definiendo los criterios clave y requisitos funcionales
                        necesarios para el desarrollo de estrategias de
                        educación y gestión financiera.
                      </p>
                    </div>
                  </div>
                  <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                    <p className="font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:text-8xl lg:text-8xl">
                      02
                    </p>
                  </div>
                </div>

                <div className="group flex snap-center snap-normal flex-col justify-between gap-8 border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out sm:snap-normal md:h-80 md:flex-row md:gap-12 md:pb-8 lg:h-64">
                  <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                    <figure className="relative z-10 col-span-1 flex h-56 w-full bg-purple-400 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5 lg:ml-4">
                      <img
                        src={img34}
                        alt="Proyecto"
                        className="z-10 h-full w-full object-cover shadow"
                      />
                      <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
                    </figure>

                    <div className="w-full md:w-2/3 xl:w-1/2">
                      <h2 className="mb-4 w-1/2 text-balance border-b border-black pb-2 text-2xl font-bold">
                        TERCERO
                      </h2>
                      <p className="text-pretty">
                        Orientar a los estudiantes hacia la apropiación de
                        conceptos de educación financiera mediante la
                        realización de una serie de guías en la web.
                      </p>
                    </div>
                  </div>
                  <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                    <p className="font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:text-8xl lg:text-8xl">
                      03
                    </p>
                  </div>
                </div>

                <div className="group flex snap-center snap-normal flex-col justify-between gap-8 border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out sm:snap-normal md:h-80 md:flex-row md:gap-12 md:pb-8 lg:h-64">
                  <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                    <figure className="relative z-10 col-span-1 flex h-56 w-full bg-purple-400 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5 lg:ml-4">
                      <img
                        src={img35}
                        alt="Proyecto"
                        className="z-10 h-full w-full object-cover shadow"
                      />
                      <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
                    </figure>

                    <div className="w-full md:w-2/3 xl:w-1/2">
                      <h2 className="mb-4 w-1/2 text-balance border-b border-black pb-2 text-2xl font-bold">
                        CUARTO
                      </h2>
                      <p className="text-pretty">
                        Argumentar la información recopilada y las soluciones
                        encontradas al divulgarse en diferentes contextos
                        sociales.
                      </p>
                    </div>
                  </div>
                  <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                    <p className="font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:text-8xl lg:text-8xl">
                      04
                    </p>
                  </div>
                </div>

                <div className="group flex snap-center snap-normal flex-col justify-between gap-8 border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out sm:snap-normal md:h-80 md:flex-row md:gap-12 md:pb-8 lg:h-64">
                  <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                    <figure className="relative z-10 col-span-1 flex h-56 w-full bg-purple-400 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5 lg:ml-4">
                      <img
                        src={img36}
                        alt="Proyecto"
                        className="z-10 h-full w-full object-cover shadow"
                      />
                      <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
                    </figure>

                    <div className="w-full md:w-2/3 xl:w-1/2">
                      <h2 className="mb-4 w-1/2 text-balance border-b border-black pb-2 text-2xl font-bold">
                        QUINTO
                      </h2>
                      <p className="text-pretty">
                        Construir un gestor financiero como herramienta de
                        acompañamiento que posibilite a los estudiantes entender
                        cuáles son sus gastos e ingresos, dándoles una
                        exposición organizada de alternativas para el ahorro.
                      </p>
                    </div>
                  </div>
                  <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                    <p className="font-schabo text-5xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:text-8xl lg:text-8xl">
                      05
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ContextoProyecto;
