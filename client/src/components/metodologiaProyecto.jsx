import { useContext, useState } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration1 from "../../public/assets/bgDecoration1.svg";
// import bgDecoration2 from "../../public/assets/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../../public/assets/imgs/img2.jpg";
import img3 from "../../public/assets/imgs/img3.png";

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
          className="bg-parallax relative z-0 flex min-h-[750px] justify-center bg-gray-100 bg-cover bg-fixed px-10 py-20 text-gray-950 bg-blend-luminosity sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration3}
            alt=""
          />

          <div className="flex h-auto w-full max-w-[1320px] flex-col gap-12">
            <h2 className="font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
              DISEÑO DE <span className="text-purple-900">INVESTIGACION</span>
            </h2>
            <p className="text-pretty">
              En el diseño de la investigación se define el tipo de
              investigación junto con el análisis y técnicas a utilizar durante
              el desarrollo el mismo, se seleccionará una muestra de la
              población y se generarán unas hipótesis de acuerdo a lo planteado
              en el mismo.
            </p>
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
                    TIPO
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
                    personales eficientemente.
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
                    </ul>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

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
            <h2 className="font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
              METODOLOGIA <span className="text-purple-900">APLICADA</span>
            </h2>
            <p className="text-pretty">
              Se formula el modelo metodológico que nos será de ayuda para
              llevar a cabo los objetivos que se tienen planteados: análisis de
              la información recolectada por medio de la encuesta hecha a los
              estudiantes que servirán como muestra poblacional, adaptación de
              la misma para poder tomarla de base para crear el sitio web que
              servirá de mediación para conectar con la muestra poblacional,
              transformación de dicha información para exponer la solución
              propuesta independiente para cada sujeto a evaluar.
            </p>
            <div className="grid h-[1600px] w-full grid-cols-1 gap-2 sm:h-[1200px] md:h-[900px] md:grid-cols-2 xl:h-96 xl:grid-cols-4">
              <article className="group relative z-0 overflow-hidden bg-purple-900 text-white">
                <figure className="absolute z-[-1] h-full w-full opacity-25">
                  <img
                    className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:h-[115%] group-hover:w-[115%]"
                    src={img2}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out`}
                >
                  <h2 className="text-2xl font-bold">SOFTWARE</h2>
                  <div className="my-4 h-1 w-full bg-white"></div>
                  <p className="text-balance">
                    Se selecciona el modelo cascada como la metodología de
                    desarrollo de software gracias a su estructura ordenada y
                    sistemática. Permitiendo abordar todos los objetivos del
                    proyecto eficiente y claramente
                  </p>
                </div>
              </article>

              <article className="group relative z-0 overflow-hidden bg-gray-900 text-white">
                <figure className="absolute z-[-1] h-full w-full opacity-25">
                  <img
                    className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:h-[115%] group-hover:w-[115%]"
                    src={img2}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out`}
                >
                  <h2 className="text-2xl font-bold">REQUISITOS</h2>
                  <div className="my-4 h-1 w-full bg-white"></div>
                  <p className="text-balance">
                    Diseño de herramientas tecnológicas que sean capaces de
                    adaptarse a un número mayor de necesidades, como lo son
                    mayores usuarios o funcionalidades más complejas, sin
                    comprometer el rendimiento esperado
                  </p>
                </div>
              </article>

              <article className="group relative z-0 overflow-hidden bg-purple-900 text-white">
                <figure className="absolute z-[-1] h-full w-full opacity-25">
                  <img
                    className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:h-[115%] group-hover:w-[115%]"
                    src={img2}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out`}
                >
                  <h2 className="text-2xl font-bold">IMPLEMENTACION</h2>
                  <div className="my-4 h-1 w-full bg-white"></div>
                  <p className="text-balance">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sagittis eget orci in malesuada. Suspendisse varius
                    viverra arcu. Duis elementum rutrum pharetra. Integer tempor
                    diam a justo sollicitudin, a pulvinar.
                  </p>
                </div>
              </article>

              <article className="group relative z-0 overflow-hidden bg-gray-900 text-white">
                <figure className="absolute z-[-1] h-full w-full opacity-25">
                  <img
                    className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:h-[115%] group-hover:w-[115%]"
                    src={img2}
                    alt=""
                  />
                </figure>
                <div
                  className={`absolute bottom-0 m-8 transition-all duration-500 ease-in-out`}
                >
                  <h2 className="text-2xl font-bold">PRUEBAS</h2>
                  <div className="my-4 h-1 w-full bg-white"></div>
                  <p className="text-balance">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sagittis eget orci in malesuada. Suspendisse varius
                    viverra arcu. Duis elementum rutrum pharetra. Integer tempor
                    diam a justo sollicitudin, a pulvinar.
                  </p>
                </div>
              </article>
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
