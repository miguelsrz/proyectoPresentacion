import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration1 from "../../public/assets/deco/bgDecoration1.svg";
import bgDecoration2 from "../../public/assets/deco/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/deco/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.webp";
import img2 from "../../public/assets/imgs/img2.webp";
import img3 from "../../public/assets/imgs/img3.webp";
import CrInicial from "./crInicial";

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
              Sed bibendum aliquam magna, non finibus mauris gravida sed.
              Curabitur mollis suscipit orci, id commodo nisl efficitur in. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Quisque vel aliquam neque. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Suspendisse tincidunt condimentum cursus. Aliquam
              efficitur leo non est viverra fermentum. Aliquam placerat sapien
              non ante condimentum mollis. Nam lectus erat, blandit ornare
              libero et, pharetra ornare enim. Vestibulum elementum dolor est,
              in pellentesque est laoreet id. Aliquam ac sodales tellus, at
              laoreet diam. Maecenas aliquet quam non tortor congue porta. In
              dui velit, aliquam sed dignissim eu.
            </p>
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
              Sed bibendum aliquam magna, non finibus mauris gravida sed.
              Curabitur mollis suscipit orci, id commodo nisl efficitur in. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Quisque vel aliquam neque. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Suspendisse tincidunt condimentum cursus. Aliquam
              efficitur leo non est viverra fermentum. Aliquam placerat sapien
              non ante condimentum mollis. Nam lectus erat, blandit ornare
              libero et, pharetra ornare enim. Vestibulum elementum dolor est,
              in pellentesque est laoreet id. Aliquam ac sodales tellus, at
              laoreet diam. Maecenas aliquet quam non tortor congue porta. In
              dui velit, aliquam sed dignissim eu.
            </p>
            <div className="min-h-[360px] w-full rounded bg-black shadow-lg sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px]">
              <CrInicial></CrInicial>
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
