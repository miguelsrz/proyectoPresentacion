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

              <p className="mb-9 text-pretty">
                El desarrollo de FOCUS ha sido implementado utilizando
                tecnologías modernas para garantizar una plataforma eficiente,
                segura y escalable. Con un diseño responsivo que se adapta a
                distintos dispositivos y una arquitectura modular que facilita
                su mantenimiento y expansión, FOCUS está optimizado para ofrecer
                una experiencia de aprendizaje accesible y eficiente.
              </p>
              <p className="mb-9 text-pretty">
                Para la interfaz de usuario, se ha empleado React con JavaScript
                Base, permitiendo una navegación fluida y dinámica. En el
                servidor, se han integrado Node.js con Express y PHP,
                facilitando la comunicación entre el frontend y la base de
                datos, optimizando la gestión del progreso de los usuarios y sus
                puntajes en actividades evaluativas. La base de datos utilizada
                es MySQL, estructurada para almacenar y administrar de manera
                eficiente la información relacionada con los contenidos
                educativos, el historial de aprendizaje y los registros
                financieros de los estudiantes. Además, la plataforma incorpora
                un sistema de autenticación segura y almacenamiento de sesiones,
                asegurando una experiencia personalizada y protegida para cada
                usuario.
              </p>

              <p className="mb-9 text-pretty">
                Para garantizar un acceso óptimo y estabilidad en su
                funcionamiento, FOCUS ha sido desplegado en AWS, utilizando:
              </p>
              <li className="mb-4 text-pretty">
                Amazon EC2 para la ejecución de la aplicación, proporcionando
                escalabilidad y alto rendimiento.
              </li>
              <li className="mb-9 text-pretty">
                Amazon RDS (MySQL) para la administración de la base de datos,
                asegurando integridad y disponibilidad de la información.
              </li>
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
