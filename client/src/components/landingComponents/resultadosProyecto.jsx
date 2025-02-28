import { useContext } from "react";
import { AppContext } from "../../context/presentacionContext";
import left from "/public/assets/icons/arrowLeft.svg";

import bgDecoration1 from "/public/assets/deco/bgDecoration1.svg";
import bgDecoration2 from "/public/assets/deco/bgDecoration2.svg";
import bgDecoration3 from "/public/assets/deco/bgDecoration3.svg";
import CrInicial from "./crInicial";
import CrFinal from "./crFinal";

const ResultadosProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "resultados";

  if (activeComponent === thisComponent) {
    return (
      <>
        <section
          id="intro"
          className="relative z-10 flex min-h-[900px] justify-center bg-purple-100 px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration2}
            alt=""
          />
          <div className="flex h-auto max-w-[1320px] flex-col gap-12">
            <h2 className="font-schabo text-5xl tracking-widest text-black sm:text-7xl lg:text-8xl">
              ENCUESTA <span className="text-purple-900">INICIAL</span>
            </h2>
            <p className="text-pretty">
              Como parte del desarrollo de FOCUS, se realizó una encuesta
              inicial para comprender las necesidades y desafíos que enfrentan
              los estudiantes en la gestión de sus finanzas personales. A través
              de esta recolección de datos, se exploraron hábitos financieros,
              conocimientos previos y expectativas sobre herramientas de
              aprendizaje en este ámbito. Los resultados obtenidos sirvieron
              como punto de partida para el diseño del proyecto, permitiendo
              orientar las funcionalidades y contenidos hacia las necesidades
              reales de los estudiantes.
            </p>
            <a
              href="https://forms.gle/v3o3tGSG61bm9wSQ7"
              target="_blank"
              className="h-11 w-max rounded-sm border-2 border-transparent bg-purple-700 px-8 align-middle font-semibold text-white hover:bg-purple-600"
            >
              <div className="flex h-full items-center justify-center">
                <p className="line-clamp-1">Encuesta Inicial</p>
                <img className="ml-2 h-7" src={left} alt="" />
              </div>
            </a>
            <div className="min-h-[360px] w-full rounded bg-black shadow-lg sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px]">
              <CrInicial></CrInicial>
            </div>
          </div>
        </section>

        <section
          id="intro"
          className="relative z-10 flex min-h-[900px] justify-center bg-gray-100 px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration3}
            alt=""
          />
          <div className="flex h-auto max-w-[1320px] flex-col gap-12">
            <h2 className="font-schabo text-5xl tracking-widest text-black sm:text-7xl lg:text-8xl">
              REVISION <span className="text-purple-900">FINAL</span>
            </h2>
            <p className="text-pretty">
              Al finalizar el desarrollo de FOCUS, se llevó a cabo una encuesta
              para evaluar la experiencia de los usuarios y medir el impacto del
              proyecto en su aprendizaje y gestión financiera. A través de esta
              recolección de datos, se exploraron aspectos como la utilidad de
              los contenidos, la facilidad de uso de la plataforma y la
              percepción de mejoras en sus conocimientos financieros. Los
              resultados obtenidos permitirán identificar fortalezas y
              oportunidades de mejora, proporcionando información valiosa para
              futuras optimizaciones del proyecto.
            </p>
            <a
              href="https://forms.gle/mYjguQK91qrbfqJn7"
              target="_blank"
              className="h-11 w-max rounded-sm border-2 border-transparent bg-purple-700 px-8 align-middle font-semibold text-white hover:bg-purple-600"
            >
              <div className="flex h-full items-center justify-center">
                <p className="line-clamp-1">Encuesta Final</p>
                <img className="ml-2 h-7" src={left} alt="" />
              </div>
            </a>
            <div className="min-h-[360px] w-full rounded bg-black shadow-lg sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px]">
              <CrFinal></CrFinal>
            </div>
          </div>
        </section>

        <section
          id="intro"
          className="items relative z-20 flex min-h-[750px] flex-col justify-between gap-16 bg-white px-10 py-20 text-gray-950 sm:px-16 md:gap-0 xl:flex-row"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration1}
            alt=""
          />
          <div className="relative z-10 grid h-auto max-w-[700px] gap-12 bg-purple-100 md:max-h-[900px] md:pb-24 xl:left-8 xl:ml-auto xl:max-w-[900px] xl:pb-0">
            <div className="m-6 h-96 overflow-x-hidden overflow-y-scroll sm:m-12 md:h-auto md:overflow-y-auto lg:pr-24">
              <div>
                <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                  CONCLUSION
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
              </div>

              <div className="absolute bottom-[5%] right-[6%] -z-10 hidden h-full w-full border-4 border-black md:block"></div>
              <div className="absolute left-0 top-0 -z-20 h-full w-full bg-purple-200"></div>
              <div className="absolute left-[6%] top-[5%] -z-30 h-full w-full border-2 border-purple-900"></div>
            </div>
          </div>

          <div className="relative z-10 grid h-auto gap-12 self-center bg-purple-400 md:bottom-24 md:left-24 md:max-h-[600px] md:max-w-[600px] xl:left-0 xl:right-8 xl:top-8 xl:mr-auto">
            <div className="p-6 sm:p-12">
              <h2 className="mb-9 font-schabo text-5xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                FINAL
              </h2>

              <p className="mb-9 text-balance">
                El correcto manejo de las finanzas personales es algo esencial
                para los jóvenes hoy en dia, en especial para los estudiantes
                universitarios ya que estos con frecuentemente enfrentan
                problemas financieros debido al desconocimiento en educación
                financiera, esto generalmente los lleva a realizar una mala
                gestión de su dinero y en algunos casos pueden presentar estrés
                o tener deudas.
              </p>

              <div className="absolute left-[10%] top-[10%] -z-20 h-full w-full border-b-4 border-r-4 border-black"></div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default ResultadosProyecto;
