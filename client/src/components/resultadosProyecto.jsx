import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

const ResultadosProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "resultados";

  if (activeComponent === thisComponent) {
    return (
      <>
        <section id="sobre" className="bg-gray-100 p-20 text-gray-700">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">RESULTADOS</h2>
              <p>
                FOCUS nace para resolver las dificultades en la gestión
                financiera de estudiantes de pregrado, ofreciendo soluciones
                tecnológicas que combinan educación y herramientas prácticas.
              </p>
              <ul className="ml-5 mt-4 list-disc space-y-2">
                <li>Identificación del problema financiero.</li>
                <li>Diseño de soluciones educativas personalizadas.</li>
                <li>Implementación de un gestor financiero práctico.</li>
              </ul>
            </div>
            <div>
              <img
                src="/assets/project-overview.png"
                alt="Proyecto"
                className="rounded shadow"
              />
            </div>
          </div>
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

export default ResultadosProyecto;
