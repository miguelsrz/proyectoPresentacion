import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { DatabaseContext } from "../../context/databaseContext";
import { fetchModules } from "../../utils/api";
import pig from "../../../public/assets/icons/courseIcon.svg";

function ApAside() {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currenModuleView, setCurrentModuleView] = useState(0);

  const {
    puntajes,
    progreso,
    fetchProgreso,
    fetchPuntajes,
    setProgreso,
    setPuntajes,
  } = useContext(DatabaseContext);
  const { login, usuario, getUser } = useContext(UserContext);

  // Fetch data when the component mounts

  useEffect(() => {
    getUser();
    const storedProgreso = localStorage.getItem("progreso");
    const storedPuntajes = localStorage.getItem("puntajes");
    if (storedProgreso) {
      setProgreso(JSON.parse(storedProgreso)); // Recupera del localStorage
    } else {
      // Si no hay datos en localStorage, realiza la petición a la base de datos
      fetchProgreso();
    }
    if (storedPuntajes) {
      setPuntajes(JSON.parse(storedPuntajes)); // Recupera del localStorage
    } else {
      // Si no hay datos en localStorage, realiza la petición a la base de datos
      fetchPuntajes();
    }
  }, []); // Dependencia en 'usuario' para que se ejecute cuando el usuario se loguee

  useEffect(() => {
    fetchModules()
      .then((data) => {
        setModulos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching modulos:", err);
        setError("No se pudieron cargar los módulos.");
        setLoading(false);
      });

    getUser();
  }, []);

  const location = useLocation();

  useEffect(() => {
    const moduleSelected = getModuleId();
    setCurrentModuleView(moduleSelected - 1);
  }, [location]);

  const getModuleId = () => {
    const pathParts = window.location.pathname.split("/");
    const moduleIndex = pathParts.indexOf("modulo") + 1; // Encuentra el índice después de "modulo"
    return moduleIndex ? pathParts[moduleIndex] : null;
  };

  return (
    <aside className="sticky top-[72px] hidden h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden px-6 py-6 shadow-lg sm:w-[280px] md:block lg:w-[356px] xl:w-[420px]">
      <Link to={"/aprendizaje"}>
        <div className="mb-4 flex flex-col items-start gap-3 border-l-8 border-purple-950 bg-purple-100 p-2 lg:flex-row lg:items-center">
          <figure className="hidden h-16 lg:block lg:h-24">
            <img className="h-full" src={pig} alt="Focus LOGO" />
          </figure>
          <div>
            <h2 className="text-xl font-bold">
              Educación Financiera para Estudiantes
            </h2>
            <p>4 Modulos | +12 Pruebas</p>
          </div>
        </div>
      </Link>

      <ul className="flex w-full flex-col gap-4 pb-6">
        {modulos.map((module, index) => {
          return (
            <li
              key={module.moduleId}
              className="flex flex-col gap-4 rounded bg-white"
            >
              <Link to={`/aprendizaje/modulo/${module.moduleId}/#0`}>
                <h2
                  className={`border-y border-black/25 px-4 py-4 text-base font-semibold text-black hover:bg-purple-200 ${currenModuleView === index ? "bg-purple-200" : null}`}
                >
                  Modulo {module.moduleId} <br></br>{" "}
                  <span className="font-normal"> {module.moduleTitle}</span>
                </h2>
              </Link>

              <section className="flex w-full flex-col justify-start">
                <div className="flex-1">
                  <ul className="flex flex-col gap-2">
                    {module.sections?.map((sect, index) => (
                      <Link
                        key={index}
                        to={`/aprendizaje/modulo/${module.moduleId}/#${index + 1}`}
                        className="font- rounded bg-gray-200 p-4 hover:bg-purple-200"
                      >
                        <li className="">{sect.sectionTitle}</li>{" "}
                      </Link>
                    ))}
                  </ul>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ApAside;
