import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration1 from "../../public/assets/bgDecoration1.svg";
import bgDecoration2 from "../../public/assets/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../../public/assets/imgs/img2.jpg";
import img3 from "../../public/assets/imgs/img3.png";

const FundamentosProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "fundamentos";

  if (activeComponent === thisComponent) {
    return (
      <>
        <section
          id="intro"
          className="relative z-20 flex min-h-[750px] justify-center bg-purple-100 px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration2}
            alt=""
          />
          <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
            <figure className="relative z-10 flex w-full">
              <img
                src={img3}
                alt="Proyecto"
                className="z-10 h-full object-cover shadow"
              />
              <div className="absolute right-[5%] top-[5%] z-0 h-full w-full border-2 border-black"></div>
              <div className="absolute bottom-[2%] right-[2%] z-0 h-full w-full bg-black"></div>
            </figure>
            <div className="xl:ml-12">
              <h2 className="mb-9 font-schabo text-5xl tracking-widest sm:text-7xl lg:text-8xl">
                ANTECEDENTE <span className="text-purple-900">DESTACADO</span>
              </h2>
              <p className="mb-9 text-balance">
                Este proyecto fue inspirado por el plan realizado en el año 2013
                por el Banco de la República de Colombia, el cual consistía en
                crear un programa de educación financiera para los jóvenes de
                las escuelas.
              </p>
              <p className="mb-9 text-balance">
                El propósito fue encargado por el ministerio de educación
                nacional (MEN), que buscaba aumentar el conocimiento y el uso de
                servicios y productos financieros por parte de los jóvenes, todo
                esto con el fin de fomentar el ahorro y el uso responsable del
                dinero de los mismos, para lograr esto creó un programa
                educativo para transmitir los conceptos y planificación básicos
                de las finanzas personales con el objetivo de educar a los
                jóvenes en educación financiera (Banco de la República, 2013).
                Esto inspiró nuestro proyecto a desarrollar una solución
                tecnológica donde buscamos orientar a los estudiantes
                universitarios a mejorar sus gestiones financieras de una manera
                práctica y accesible.
              </p>
            </div>
          </div>

          <img
            className="absolute -bottom-[10px] left-0 w-1/2 -scale-y-100 md:-bottom-[25px] xl:-bottom-[40px]"
            src={bgDecoration2}
            alt=""
          />
        </section>

        <section id="facetas" className="bg-white p-20">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Facetas del Proyecto
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded bg-gray-100 p-6 shadow hover:shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Faceta de Aprendizaje</h3>
              <p className="text-gray-700">
                Explora recursos educativos diseñados para mejorar la gestión
                financiera de estudiantes.
              </p>
              <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Explorar
              </button>
            </div>
            <div className="rounded bg-gray-100 p-6 shadow hover:shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Gestor Financiero</h3>
              <p className="text-gray-700">
                Herramientas prácticas para la planificación y seguimiento
                financiero.
              </p>
              <button className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                Ir al Gestor
              </button>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default FundamentosProyecto;
