import { useContext } from "react";
import { AppContext } from "../../context/presentacionContext";
import bgDecoration3 from "/public/assets/deco/bgDecoration3.svg";
import img38 from "/public/assets/imgs/img38.png";

import CarouselDesarrollo from "./carouselDesarrollo";

const DesarrolloProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "desarrollo";

  if (activeComponent === thisComponent) {
    return (
      <>
        <section
          id="intro"
          className="relative z-20 flex min-h-[750px] justify-center bg-gray-100 px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration3}
            alt=""
          />
          <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
            <div className="xl:mr-12">
              <h2 className="mb-9 font-schabo text-5xl tracking-widest text-black sm:text-7xl lg:text-8xl">
                DESARROLLO DE <span className="text-purple-900">PROYECTO</span>
              </h2>

              <li className="mb-9 text-balance">
                Presentación: Proporciona información detallada sobre el
                propósito, objetivos y funcionalidades de FOCUS, permitiendo a
                los usuarios comprender su importancia y alcance.
              </li>
              <li className="mb-9 text-balance">
                Aprendizaje: Ofrece módulos educativos organizados en secciones
                interactivas, donde los estudiantes pueden acceder a contenidos
                teóricos y actividades diseñadas para fortalecer su conocimiento
                financiero.
              </li>
              <li className="mb-9 text-balance">
                Gestor Financiero: Permite a los estudiantes llevar un control
                práctico de sus finanzas, aplicando los conceptos aprendidos
                para una mejor toma de decisiones económicas.
              </li>
              <p className="mb-9 text-pretty">
                El desarrollo de FOCUS ha sido implementado utilizando React y
                JS Base para el frontend y Node.js con Express y PHP para el
                backend, con una base de datos en MySQL para gestionar el
                progreso de los usuarios y sus puntajes en actividades
                evaluativas. Además, la plataforma incorpora autenticación
                segura y almacenamiento de sesiones, asegurando una experiencia
                personalizada para cada usuario. Con un diseño responsivo y una
                arquitectura escalable, FOCUS está optimizado para ofrecer un
                aprendizaje accesible y eficiente.
              </p>
            </div>
            <figure className="relative z-10 flex h-[320px] w-full sm:h-[480px] xl:h-auto">
              <img
                src={img38}
                alt="Proyecto"
                className="z-10 h-full w-full object-cover shadow"
              />
              <div className="absolute left-[5%] top-[5%] z-0 h-full w-full border-2 border-black"></div>
              <div className="absolute bottom-[2%] left-[2%] z-0 h-full w-full bg-black"></div>
            </figure>
          </div>

          <img
            className="absolute -bottom-[10px] left-0 w-1/2 -scale-y-100 md:-bottom-[25px] xl:-bottom-[40px]"
            src={bgDecoration3}
            alt=""
          />
        </section>

        <section
          id="intro"
          className="relative z-10 flex min-h-[900px] justify-center bg-white px-10 py-20 text-gray-950 sm:px-16"
        >
          <div className="flex h-auto max-w-[1320px] flex-col gap-12">
            <h2 className="font-schabo text-5xl tracking-widest text-black sm:text-7xl lg:text-8xl">
              GALERIA DE <span className="text-purple-900">IMAGENES</span>
            </h2>
            <p className="text-pretty">
              La galería de imágenes de FOCUS muestra el proceso de desarrollo y
              evolución del proyecto, desde los primeros bocetos hasta su
              implementación final. Aquí se incluyen capturas de la plataforma,
              esquemas de diseño, momentos clave del desarrollo y registros del
              equipo de trabajo. A través de estas imágenes, se dara a conocer
              la esencia del proyecto, su crecimiento y la dedicación detrás de
              cada etapa.
            </p>
            <div className="min-h-[360px] w-full rounded bg-black shadow-lg sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px]">
              <CarouselDesarrollo></CarouselDesarrollo>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default DesarrolloProyecto;
