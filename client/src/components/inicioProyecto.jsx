import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration1 from "../assets/bgDecoration1.svg";
import bgDecoration2 from "../assets/bgDecoration2.svg";
import plazaChe from "../assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.png";
const InicioProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "introduccion";

  if (activeComponent === thisComponent) {
    return (
      <>
        <div className="relative">
          <section
            id="intro"
            className="relative z-20 flex min-h-[750px] justify-center bg-white px-10 py-20 text-gray-950 sm:px-16"
          >
            <img
              className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
              src={bgDecoration1}
              alt=""
            />
            <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
              <figure className="relative z-10 flex w-full">
                <img
                  src={plazaChe}
                  alt="Proyecto"
                  className="z-10 h-full object-cover shadow"
                />
                <div className="absolute right-[5%] top-[5%] z-0 h-full w-full border-4 border-black"></div>
                <div className="absolute bottom-[2%] right-[2%] z-0 h-full w-full bg-black"></div>
              </figure>
              <div className="xl:ml-12">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-purple-900 sm:text-7xl lg:text-8xl">
                  INTRODUCCION
                </h2>
                <p className="mb-9 text-balance">
                  Mediante un proceso de investigación empírica, se recogen
                  datos demográficos que al analizarlos nos permiten identificar
                  problemáticas en común de gente que convive en mismos espacios
                  sociales y comunidades, como lo podría ser, para el menester
                  de este trabajo investigativo, la comunidad estudiantil de la
                  Universidad Nacional de Colombia, sede Bogotá. En este lugar
                  se recogen personas pertenecientes a todos los sectores de la
                  ciudad, tanto cultural como económicamente, por lo que la
                  diversidad de los datos está asegurada.
                </p>

                <p className="mb-9 text-balance">
                  Como método de recogida de datos de evaluación, se procederá a
                  hacer una encuesta digital, teniendo como sujetos de estudio a
                  los estudiantes de pregrado de Ingeniería de Sistemas y
                  Computación de primer semestre. Esto será la base con la que
                  se harán las distintas herramientas tecnológicas dispuestas
                  para este proyecto.
                </p>

                <ul className="ml-5 mt-4 list-disc space-y-2">
                  <li>
                    Se propone una solución aplicable por los distintos
                    estudiantes.
                  </li>

                  <li>
                    Se implementa una herramienta digital que funcione como
                    gestor financiero.
                  </li>
                </ul>
              </div>
            </div>

            <img
              className="absolute -bottom-[10px] left-0 w-1/2 -scale-y-100 md:-bottom-[25px] xl:-bottom-[40px]"
              src={bgDecoration1}
              alt=""
            />
          </section>

          <section
            id="intro"
            className="relative z-10 flex min-h-[750px] justify-center bg-purple-100 px-10 py-20 text-gray-950 sm:px-16"
          >
            <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
              <div className="col-span-1 grid-cols-subgrid xl:mr-12">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                  IDENTIDAD DEL{" "}
                  <span className="text-purple-900">PROYECTO</span>
                </h2>
                <p className="mb-9 text-pretty text-xl font-bold sm:text-2xl lg:text-3xl">
                  FOCUS: Finanzas Organizadas para Crecimiento y Uso Sostenible.
                </p>

                <p className="mb-9 text-balance">
                  La identidad del proyecto titulado FOCUS, busca transmitir a
                  la población objetivo un enfoque moderno, accesible y
                  profesional, que se alinea con los objetivos de desarrollar
                  soluciones tecnológicas innovadoras que cubran el déficit de
                  educación y gestión financiera en los estudiantes
                  universitarios. El nombre del proyecto busca combinar la
                  simplicidad, relevancia y el impacto en la población objetivo.
                  El acrónimo resalta una de las partes claras del proyecto, el
                  compromiso con la organización, el crecimiento en conocimiento
                  y la sostenibilidad financiera, conceptos fundamentales que
                  guiarán el desarrollo y aplicación de las soluciones.
                </p>
              </div>
              <figure className="relative z-10 flex w-full">
                <img
                  src={img2}
                  alt="Proyecto"
                  className="z-10 h-full object-cover shadow"
                />
                <div className="absolute bottom-[5%] left-[5%] z-0 h-full w-full border-4 border-purple-900"></div>
                <div className="absolute left-[2%] top-[2%] z-0 h-full w-full bg-black"></div>
              </figure>
            </div>

            <img
              className="absolute -bottom-[10px] right-0 w-1/2 -scale-100 bg-blend-lighten md:-bottom-[25px] xl:-bottom-[40px]"
              src={bgDecoration2}
              alt=""
            />
          </section>

          <section
            id="intro"
            className="relative z-0 flex min-h-[750px] justify-center bg-gray-100 px-10 py-20 text-gray-950 sm:px-16"
          >
            <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
              <figure className="relative z-10 flex w-full">
                <img
                  src={img3}
                  alt="Proyecto"
                  className="z-10 h-full object-cover shadow"
                />
                <div className="absolute bottom-[5%] right-[5%] z-0 h-full w-full border-4 border-black"></div>
                <div className="absolute right-[2%] top-[2%] z-0 h-full w-full bg-purple-900"></div>
              </figure>

              <div className="xl:ml-12">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                  RESUMEN
                </h2>
                <p className="mb-9 text-balance">
                  En el siguiente trabajo investigativo se procederá a hacer un
                  análisis de la situación socioeconómica expresada por
                  estudiantes de la Universidad Nacional de Colombia, revisando
                  si hay una satisfacción general por parte de estos estudiantes
                  en su gestión de los recursos que poseen, dependiendo de donde
                  vienen, sus gastos diarios, expectativas para crecer en el
                  futuro y demás factores.
                </p>

                <p className="mb-9 text-balance">
                  Esto resulta ser una problemática que se embarcará, para
                  efectos de este texto investigativo, en los estudiantes de
                  entre 16 y 20 años, que están empezando a adentrarse en la
                  vida adulta, teniendo sus primeros recursos económicos a la
                  mano y necesitando el saber del cómo usarlo correctamente.
                </p>
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

export default InicioProyecto;
