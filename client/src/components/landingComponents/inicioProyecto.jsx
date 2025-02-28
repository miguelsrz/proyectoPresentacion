import { useContext } from "react";
import { AppContext } from "../../context/presentacionContext";

import bgDecoration1 from "/public/assets/deco/bgDecoration1.svg";
import bgDecoration2 from "/public/assets/deco/bgDecoration2.svg";
import poster from "/public/assets/imgs/posterFocus.png";
import img2 from "/public/assets/imgs/img2.webp";
import img3 from "/public/assets/imgs/img3.webp";

import left from "/public/assets/icons/arrowLeft.svg";

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
              <figure className="relative z-10 flex max-h-[320px] w-full sm:max-h-[480px] xl:max-h-[764px]">
                <img
                  src={poster}
                  alt="Proyecto"
                  className="z-10 h-full w-full object-cover shadow"
                />
                <div className="absolute right-[5%] top-[5%] z-0 h-full w-full border-2 border-black"></div>
                <div className="absolute bottom-[2%] right-[2%] z-0 h-full w-full bg-black"></div>
              </figure>
              <div className="xl:ml-12">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-purple-900 sm:text-7xl lg:text-8xl">
                  INTRODUCCION
                </h2>
                <p className="mb-9 text-pretty">
                  Bienvenido a la página{" "}
                  <span className="font-bold">"Presentación"</span> de FOCUS, un
                  proyecto diseñado para proporcionar herramientas tecnológicas
                  que faciliten la educación financiera y la gestión de recursos
                  para estudiantes universitarios. En la pagina{" "}
                  <span className="font-bold">"Presentación" </span>
                  encontrarás información resumida sobre la elaboración del
                  proyecto, dividido en: Introduccion, contexto, fundamentos,
                  metodologia, desarrollo y resultados. Accede a cada uno de
                  ellos desde la barra de navegación.
                </p>

                <p className="mb-9 text-pretty">
                  Desde aquí, también puedes acceder a las dos herramientas
                  principales de FOCUS. Para comenzar a utilizar estas
                  herramientas, accede a los botones morados{" "}
                  <span className="font-bold">"Aprendizaje"</span> o{" "}
                  <span className="font-bold">"Gestor Finanicero"</span>, crea o
                  ingresa a tu cuenta de forma rapida, gratuita y segura para
                  explorar los recursos disponibles:
                </p>

                <ul className="mb-9 ml-5 mt-4 list-disc space-y-2">
                  <li>
                    <span className="font-bold">Aprendizaje:</span> Una
                    herramienta de formación en linea estructurado para orientar
                    desde cero los principios fundamentales de las finanzas
                    personales.
                  </li>

                  <li>
                    <span className="font-bold">Gestor Financiero:</span> Una
                    herramienta que te permitirá organizar y administrar tus
                    ingresos y gastos de manera eficiente en linea.
                  </li>
                </ul>

                <p className="mb-9 text-pretty">
                  Si deseas conocer más detalles especificos sobre el desarrollo
                  del proyecto, puedes consultar el{" "}
                  <span className="font-bold">"Documento Escrito Formal" </span>
                  haciendo clic en el botón que encontrarás a continuación
                  (requiere cuenta @unal.edu.co).
                </p>
                <a
                  href="https://docs.google.com/document/d/1jimpbzKGrfzTWkiKOQ7PUVdeVe5Dlgm8/edit?usp=sharing&ouid=107374551304849690595&rtpof=true&sd=true"
                  target="_blank"
                  className="mt-9 flex h-11 w-max rounded-sm border-2 border-transparent bg-purple-700 px-8 align-middle font-semibold text-white hover:bg-purple-600"
                >
                  <div className="flex h-auto w-auto items-center justify-center">
                    <p className="">Documento Escrito Formal</p>
                    <img className="ml-1 h-7" src={left} alt="" />
                  </div>
                </a>
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
                <p className="mb-9 text-pretty">
                  Desarrollado por los estudiantes de Ingenieria de Sistemas y
                  Computacion de primer semestre Miguel Suarez, David Arias y
                  Cristian Parada como proyecto final del curso "Introduccion a
                  la Ingenieria de Sistemas y Computacion" dado por Sandra
                  Rojas, informacion de contacto de los estudiantes al pié de
                  página.
                </p>
                <p className="mb-9 text-pretty">
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
              <figure className="relative z-10 flex h-[320px] w-full sm:h-[480px] xl:h-auto">
                <img
                  src={img2}
                  alt="Proyecto"
                  className="z-10 h-full w-full object-cover shadow"
                />
                <div className="absolute bottom-[5%] left-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
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
              <figure className="relative z-10 flex h-[320px] w-full sm:h-[480px] xl:h-auto">
                <img
                  src={img3}
                  alt="Proyecto"
                  className="z-10 h-full w-full object-cover shadow"
                />
                <div className="absolute bottom-[5%] right-[5%] z-0 h-full w-full border-2 border-black"></div>
                <div className="absolute right-[2%] top-[2%] z-0 h-full w-full bg-purple-900"></div>
              </figure>

              <div className="xl:ml-12">
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                  RESUMEN
                </h2>
                <p className="mb-9 text-pretty text-xl font-bold xl:text-2xl">
                  Herramientas para el déficit de educación y gestión financiera
                  de estudiantes de pregrado en Ingenieria de Sistemas y
                  Computación en primer semestre de la Universidad Nacional de
                  Colombia - Sede Bogotá.{" "}
                </p>
                <p className="mb-9 text-pretty">
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

                <p className="mb-9 text-pretty">
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
          </section>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default InicioProyecto;
