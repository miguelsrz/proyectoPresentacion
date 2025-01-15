import { useContext, useState } from "react";
import { AppContext } from "../context/presentacionContext";

// import bgDecoration1 from "../assets/bgDecoration1.svg";
import bgDecoration1 from "../assets/bgDecoration1.svg";
import bgDecoration3 from "../assets/bgDecoration3.svg";
// import bgDecoration4 from "../assets/bgDecoration4.svg";
import plazaChe from "../assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.png";

const MetodologiaProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const [activeBox, setActiveBox] = useState(null);

  const thisComponent = "metodologia";

  const handleBox = (box) => {
    if (activeBox == box) {
      setActiveBox(null);
    } else {
      setActiveBox(box);
    }
    console.log(activeBox);
  };

  const boxes = [0, 1, 2, 3, 4];

  if (activeComponent === thisComponent) {
    return (
      <>
        <section
          id="intro"
          className="bg-blend- relative z-0 flex min-h-[750px] justify-center bg-gray-100 bg-parallax bg-cover px-10 py-20 text-gray-950 bg-blend-luminosity sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration3}
            alt=""
          />

          <div className="flex h-auto w-full max-w-[1320px] flex-col gap-8">
            <h2 className="mb-4 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
              DISEÑO DE <span className="text-purple-900">INVESTIGACION</span>
            </h2>
            <div className="grid w-full gap-4 lg:grid-cols-4">
              <div
                onClick={() => handleBox(boxes[0])}
                className="group relative z-0 col-span-2 h-80 cursor-pointer sm:col-span-1"
              >
                <figure className="absolute z-[-1] h-full w-full brightness-[0.25] transition-all duration-200 ease-in-out group-hover:brightness-50">
                  <img
                    className="h-full w-full object-cover"
                    src={plazaChe}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 mx-8 mb-8 transition-all duration-500 ease-in-out ${activeBox == boxes[0] ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="h-1 w-20 bg-purple-900"></div>
                  <h2 className="pt-4 text-2xl font-bold text-white">TIPO</h2>
                </div>

                <article
                  className={`absolute bottom-0 flex flex-col justify-end overflow-hidden bg-purple-400/40 px-6 text-white transition-all duration-500 ease-in-out ${activeBox == boxes[0] ? "h-full py-4" : "h-0 py-0"}`}
                >
                  <h2 className="mb-4 border-b-2 border-white pb-4 text-2xl font-bold">
                    TIPO{" "}
                    <span className="md:hidden xl:block">DE INVESTIGACION</span>
                  </h2>
                  <p>
                    Cuantitativa ya que esta nos permite realizar un estudio de
                    un población específica en nuestro caso sobre la educación
                    financiera en los estudiantes universitarios.
                  </p>
                </article>
              </div>

              <div
                onClick={() => handleBox(boxes[1])}
                className="group relative z-0 col-span-2 h-80 cursor-pointer sm:col-span-1"
              >
                <figure className="absolute z-[-1] h-full w-full brightness-[0.25] transition-all duration-200 ease-in-out group-hover:brightness-50">
                  <img
                    className="h-full w-full object-cover"
                    src={img2}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 mx-8 mb-8 transition-all duration-500 ease-in-out ${activeBox == boxes[1] ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="h-1 w-20 bg-purple-900"></div>
                  <h2 className="pt-4 text-2xl font-bold text-white">
                    POBLACION
                  </h2>
                </div>

                <article
                  className={`absolute bottom-0 flex flex-col justify-end overflow-hidden bg-purple-400/40 px-6 text-white transition-all duration-500 ease-in-out ${activeBox == boxes[1] ? "h-full py-4" : "h-0 py-0"}`}
                >
                  <h2 className="mb-4 border-b-2 border-white pb-4 text-2xl font-bold">
                    POBLACION
                  </h2>
                  <p>
                    Enfocándose en los estudiantes de primer semestre de
                    pregrado de Ingeniería de Sistemas y Computación.
                  </p>
                </article>
              </div>

              <div
                onClick={() => handleBox(boxes[2])}
                className="group relative z-0 col-span-2 h-80 cursor-pointer"
              >
                <figure className="absolute z-[-1] h-full w-full brightness-[0.25] transition-all duration-200 ease-in-out group-hover:brightness-50">
                  <img
                    className="h-full w-full object-cover"
                    src={img3}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 mx-8 mb-8 transition-all duration-500 ease-in-out ${activeBox == boxes[2] ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="h-1 w-20 bg-purple-900"></div>
                  <h2 className="pt-4 text-2xl font-bold text-white">
                    HIPOTESIS
                  </h2>
                </div>

                <article
                  className={`absolute bottom-0 flex flex-col justify-end overflow-hidden bg-purple-400/40 px-6 text-white transition-all duration-500 ease-in-out ${activeBox == boxes[2] ? "h-full py-4" : "h-0 py-0"}`}
                >
                  <h2 className="mb-4 border-b-2 border-white pb-4 text-2xl font-bold">
                    HIPOTESIS
                  </h2>
                  <p>
                    El desarrollo del sitio web con las interfaces de educación
                    y el gestor financiero logran mejorar de manera
                    significativa el conocimiento adquirido sobre educación
                    financiera y la capacidad de gestionar las finanzas
                    personales de manera eficiente
                  </p>
                </article>
              </div>

              <div
                onClick={() => handleBox(boxes[3])}
                className="group relative z-0 col-span-2 h-80 cursor-pointer sm:col-span-1 lg:col-span-2"
              >
                <figure className="absolute z-[-1] h-full w-full brightness-[0.25] transition-all duration-200 ease-in-out group-hover:brightness-50">
                  <img
                    className="h-full w-full object-cover"
                    src={plazaChe}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 mx-8 mb-8 transition-all duration-500 ease-in-out ${activeBox == boxes[3] ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="h-1 w-20 bg-purple-900"></div>
                  <h2 className="pt-4 text-2xl font-bold text-white">
                    RECOPILACION
                  </h2>
                </div>

                <article
                  className={`absolute bottom-0 flex w-full flex-col justify-end overflow-hidden bg-purple-400/40 px-6 text-white transition-all duration-500 ease-in-out ${activeBox == boxes[3] ? "h-full py-4" : "h-0 py-0"}`}
                >
                  <h2 className="mb-4 border-b-2 border-white pb-4 text-2xl font-bold">
                    RECOPILACION
                  </h2>
                  <p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        Encuestas en linea. Serie de preguntas mediante un
                        formulario el cual estará dirigido a los estudiantes.
                      </li>
                      <li>
                        Revision documental. Estudios e informes previos así
                        mismo como materiales académicos.
                      </li>
                    </ul>
                  </p>
                </article>
              </div>

              <div
                onClick={() => handleBox(boxes[4])}
                className="group relative z-0 col-span-2 h-80 cursor-pointer sm:col-span-1 lg:col-span-2"
              >
                <figure className="absolute z-[-1] h-full w-full brightness-[0.25] transition-all duration-200 ease-in-out group-hover:brightness-50">
                  <img
                    className="h-full w-full object-cover"
                    src={img2}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 mx-8 mb-8 transition-all duration-500 ease-in-out ${activeBox == boxes[4] ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="h-1 w-20 bg-purple-900"></div>
                  <h2 className="pt-4 text-2xl font-bold text-white">
                    ANALISIS
                  </h2>
                </div>

                <article
                  className={`absolute bottom-0 flex flex-col justify-end overflow-hidden bg-purple-400/40 px-6 text-white transition-all duration-500 ease-in-out ${activeBox == boxes[4] ? "h-full py-4" : "h-0 py-0"}`}
                >
                  <h2 className="mb-4 border-b-2 border-white pb-4 text-2xl font-bold">
                    ANALISIS
                  </h2>
                  <p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        Analisis descriptivo. Se resumen todos los datos
                        obtenidos de la encuesta.
                      </li>
                      <li>
                        Evalaucion usabilidad. evaluar la funcionalidad del
                        sitio web y de esta manera revisar su estructura.
                      </li>
                      <li>
                        Microsoft Excel. Organización y análisis de los datos
                        cuantitativos
                      </li>
                    </ul>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="intro"
          className="relative z-0 flex min-h-[750px] justify-center bg-white px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration1}
            alt=""
          />

          <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-8">
            <h2 className="mb-9 font-schabo text-5xl tracking-widest text-purple-900 sm:text-7xl lg:text-8xl">
              DISEÑO DE <span className="text-gray-950">INVESTIGACION</span>
            </h2>
            <div className="grid grid-cols-1 grid-rows-3 gap-8">
              <div className="grid grid-rows-1 gap-8 border-b-4 border-dotted border-black md:h-56 md:grid-cols-3 md:gap-16 md:border-0 lg:grid-cols-5 xl:h-48 xl:grid-cols-2">
                <figure className="relative z-10 col-span-1 flex h-full w-full lg:col-span-2 xl:col-span-1">
                  <img
                    src={img3}
                    alt="Proyecto"
                    className="z-10 h-full w-full rounded object-cover shadow"
                  />
                  <div className="absolute bottom-[5%] right-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  <div className="absolute bottom-[2%] right-[2%] z-0 h-full w-full bg-black"></div>
                </figure>

                <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
                  <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                    1. DEFINICION
                  </h2>
                  <p className="text-pretty pb-8">
                    Se centra en la falta de conocimientos y aplicaciones de las
                    finanzas personales como la principal problemática
                    enfrentada por los estudiantes. Este desconocimiento
                    financiero se presenta en una comprensión limitada de
                    conceptos fundamentales como presupuestación, ahorro,
                    inversión, manejo de crédito, entre otros.
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
                    Computación en primer semestre de la Universidad Nacional de
                    Colombia Sede Bogotá carecen de conocimientos y aplicaciones
                    de las finanzas personales.
                  </p>
                </div>

                <figure className="relative z-10 col-span-1 flex h-full w-full lg:col-span-2 xl:col-span-1">
                  <img
                    src={plazaChe}
                    alt="Proyecto"
                    className="z-10 h-full w-full rounded object-cover shadow"
                  />
                  <div className="absolute left-[5%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  <div className="absolute bottom-[2%] left-[2%] z-0 h-full w-full bg-black"></div>
                </figure>
              </div>

              <div className="grid grid-rows-1 gap-8 md:h-56 md:grid-cols-3 md:gap-16 lg:grid-cols-5 xl:h-48 xl:grid-cols-2">
                <figure className="relative z-10 col-span-1 flex h-full w-full lg:col-span-2 xl:col-span-1">
                  <img
                    src={img2}
                    alt="Proyecto"
                    className="z-10 h-full w-full rounded object-cover shadow"
                  />
                  <div className="absolute right-[5%] top-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                  <div className="absolute right-[2%] top-[2%] z-0 h-full w-full bg-black"></div>
                </figure>

                <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
                  <h2 className="mb-4 w-1/2 text-balance border-b-2 border-black pb-2 text-2xl font-bold">
                    3. SITUACION
                  </h2>
                  <p className="text-pretty pb-8">
                    A pesar de la diversidad cultural y económica de los
                    estudiantes, proviniendo de distintos entornos sociales, la
                    ausencia de estrategias financieras claras deja en
                    exposición una mala distribución de los recursos monetarios,
                    empeorando debido a la carencia de estrategias organizadas
                    para el acceso a la información financiera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default MetodologiaProyecto;
