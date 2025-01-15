import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration1 from "../../public/assets/bgDecoration1.svg";
// import bgDecoration2 from "../../public/assets/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../../public/assets/imgs/img2.jpg";
import img3 from "../../public/assets/imgs/img3.png";

const ContextoProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "contexto";

  if (activeComponent === thisComponent) {
    return (
      <>
        <div className="relative">
          <section
            id="intro"
            className="bg--100 relative z-0 flex min-h-[750px] justify-center px-10 py-20 text-gray-950 sm:px-16"
          >
            <img
              className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
              src={bgDecoration1}
              alt=""
            />

            <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-8">
              <h2 className="text-gray-950sm:text-7xl mb-9 font-schabo text-5xl tracking-widest sm:text-7xl lg:text-8xl">
                DEFINICION PROBLEMA
              </h2>
              <div className="grid grid-cols-1 grid-rows-3 gap-8">
                <div className="grid grid-rows-1 gap-8 border-b-4 border-dotted border-black md:h-56 md:grid-cols-3 md:gap-16 md:border-0 lg:grid-cols-5 xl:h-48 xl:grid-cols-2">
                  <figure className="relative z-10 col-span-1 flex h-full w-full lg:col-span-2 xl:col-span-1">
                    <img
                      src={img3}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />

                    <div className="absolute bottom-[4%] right-[1%] z-0 h-full w-full bg-black"></div>
                  </figure>

                  <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                      1. DESCRIPCION
                    </h2>
                    <p className="text-pretty pb-8">
                      Se centra en la falta de conocimientos y aplicaciones de
                      las finanzas personales como la principal problemática
                      enfrentada por los estudiantes. Este desconocimiento
                      financiero se presenta en una comprensión limitada de
                      conceptos fundamentales.
                    </p>
                  </div>
                </div>

                <div className="grid grid-rows-1 gap-8 border-b-4 border-dotted border-black pb-8 md:mb-0 md:h-56 md:grid-cols-3 md:gap-16 md:border-0 lg:grid-cols-5 xl:h-48 xl:grid-cols-2">
                  <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold text-gray-950">
                      2. FORMULACION
                    </h2>
                    <p className="text-pretty md:pb-8">
                      Los estudiantes de pregrado de Ingeniería de Sistemas y
                      Computación en primer semestre de la Universidad Nacional
                      de Colombia Sede Bogotá carecen de conocimientos y
                      aplicaciones de las finanzas personales.
                    </p>
                  </div>

                  <figure className="relative z-10 col-span-1 flex h-full w-full lg:col-span-2 xl:col-span-1">
                    <img
                      src={plazaChe}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute bottom-[4%] left-[1%] z-0 h-full w-full bg-black"></div>
                  </figure>
                </div>

                <div className="grid grid-rows-1 gap-8 md:h-56 md:grid-cols-3 md:gap-16 lg:grid-cols-5 xl:h-48 xl:grid-cols-2">
                  <figure className="relative z-10 col-span-1 flex h-full w-full lg:col-span-2 xl:col-span-1">
                    <img
                      src={img2}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute right-[1%] top-[4%] z-0 h-full w-full bg-black"></div>
                  </figure>

                  <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                      3. SITUACION
                    </h2>
                    <p className="text-pretty pb-8">
                      A pesar de la diversidad cultural y económica de los
                      estudiantes, proviniendo de distintos entornos sociales,
                      la ausencia de estrategias financieras claras deja en
                      exposición una mala distribución de los recursos
                      monetarios, empeorando debido a la carencia de estrategias
                      organizadas para el acceso a la información financiera.
                    </p>
                  </div>
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
              <div className="p-12 lg:pr-24">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                  ORIENTACION
                </h2>
                <p className="mb-9 text-balance">
                  Nuestro proyecto busca orientar a los estudiantes por medio de
                  un sitio web donde habrán dos interfaces: la primera busca
                  brindar un espacio digital donde los estudiantes tienen
                  información a la mano y pueden aprender sobre educación
                  financiera con el fin de enriquecer su educación y logren
                  hacer hacer un mejor uso de su dinero y la segunda contendrá
                  un gestor financiero automático en el cual los estudiantes
                  podrán gestionar sus ingresos y gastos de una manera más
                  eficiente. Se ha de aclarar que nuestro proyecto está
                  orientado a contribuir con el cuarto Objetivo de Desarrollo
                  Sostenible (ODS): Educación de Calidad, el cual busca un
                  correcto desarrollo de la cognición de cualquier persona,
                  estableciendo que la educación es fundamental para cada ser
                  humano.
                </p>

                <p className="mb-9 text-balance">
                  Nuestro proyecto responde a la necesidad de integrar
                  soluciones digitales haciendo uso de la tecnología para
                  brindar un sitio web que ayude a fortalecer los conocimientos
                  en educación financiera de los universitarios de manera
                  accesible, personalizada y además fácil de usar. Además, la
                  creación de esta solución tecnológica se justifica ya que esta
                  guiará a los estudiantes en su educación financiera y a su vez
                  les permitirá gestionar su dinero en un mismo lugar, lo cual
                  es difícil de encontrar ya que esta información generalmente
                  se encuentra segmentada.
                </p>
                <div className="absolute bottom-[5%] right-[6%] h-full w-full border-4 border-purple-900"></div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-purple-300"></div>
                <div className="absolute left-[6%] top-[5%] -z-20 h-full w-full border-2 border-black"></div>
              </div>
            </div>

            <div className="relative z-10 grid h-auto gap-12 self-center bg-purple-200 md:bottom-24 md:left-24 md:max-h-[600px] md:max-w-[600px] xl:left-0 xl:right-8 xl:top-8 xl:mr-auto">
              <div className="p-12">
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
              <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                OBJETIVO <span className="-purple-900">PRINCIPAL</span>
              </h2>
              <div className="group flex flex-col justify-between gap-8 rounded border-b-2 border-black py-8 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 md:hover:bg-gray-200/60 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full pl-4 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5">
                    <img
                      src={img3}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
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
                  <p className="block font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:hidden lg:block lg:text-9xl">
                    GNRL
                  </p>
                  <p className="hidden font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 md:block lg:hidden lg:text-9xl">
                    GN <br /> RL
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-auto max-w-[1320px] flex-col">
              <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                <span className="text-purple-900">ESPECIFICOS</span>
              </h2>

              <div className="group flex flex-col justify-between gap-8 rounded border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 md:hover:bg-gray-200/60 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full pl-4 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5">
                    <img
                      src={plazaChe}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                      PRIMERO
                    </h2>
                    <p className="text-pretty">
                      Recolectar diversa información de formación financiera
                      focalizada en la población estudiantil delimitada, tomando
                      en cuenta sus conocimientos y aplicaciones de conceptos de
                      las finanzas personales.
                    </p>
                  </div>
                </div>
                <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                  <p className="font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 lg:text-9xl">
                    01
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between gap-8 rounded border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 md:hover:bg-gray-200/60 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full pl-4 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5">
                    <img
                      src={img2}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                      SEGUNDO
                    </h2>
                    <p className="text-pretty">
                      Analizar la información previamente recolectada,
                      definiendo los criterios clave y requisitos funcionales
                      necesarios para el desarrollo de estrategias de educación
                      y gestión financiera.
                    </p>
                  </div>
                </div>
                <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                  <p className="font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 lg:text-9xl">
                    02
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between gap-8 rounded border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 md:hover:bg-gray-200/60 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full pl-4 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5">
                    <img
                      src={img3}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                      TERCERO
                    </h2>
                    <p className="text-pretty">
                      Orientar a los estudiantes hacia la apropiación de
                      conceptos de educación financiera mediante la realización
                      de una serie de guías en la web.
                    </p>
                  </div>
                </div>
                <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                  <p className="font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 lg:text-9xl">
                    03
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between gap-8 rounded border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 md:hover:bg-gray-200/60 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full pl-4 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5">
                    <img
                      src={plazaChe}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
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
                  <p className="font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 lg:text-9xl">
                    04
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between gap-8 rounded border-b-2 border-black py-10 pb-4 transition-all duration-500 ease-in-out md:h-80 md:flex-row md:gap-12 md:pb-8 md:hover:bg-gray-200/60 lg:h-64">
                <div className="flex w-full flex-col justify-start gap-8 md:flex-row xl:gap-16">
                  <figure className="relative z-10 col-span-1 flex h-56 w-full pl-4 transition-all duration-500 ease-in-out md:h-full md:w-1/4 md:group-hover:w-2/5">
                    <img
                      src={img2}
                      alt="Proyecto"
                      className="z-10 h-full w-full object-cover shadow"
                    />
                    <div className="absolute left-[10%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  </figure>

                  <div className="w-full md:w-2/3 xl:w-1/2">
                    <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                      QUINTO
                    </h2>
                    <p className="text-pretty">
                      Construir un gestor financiero como herramienta de
                      acompañamiento que posibilite a los estudiantes entender
                      cuáles son sus gastos e ingresos, dándoles una exposición
                      organizada de alternativas para el ahorro.
                    </p>
                  </div>
                </div>
                <div className="flex min-w-32 items-center justify-end lg:min-w-64 xl:mr-16">
                  <p className="font-schabo text-9xl tracking-widest text-gray-950/50 transition-all duration-500 ease-in-out group-hover:text-gray-950 lg:text-9xl">
                    05
                  </p>
                </div>
              </div>
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
