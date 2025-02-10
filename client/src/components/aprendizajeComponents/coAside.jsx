import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { DatabaseContext } from "../../context/databaseContext";
import { fetchModules } from "../../utils/api";
import pig from "../../../public/assets/icons/courseIcon.svg";
import left from "../../../public/assets/icons/arrowLeft.svg";

function CoAside() {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currenModuleView, setCurrentModuleView] = useState(0);
  const [currentContent, setCurrentContent] = useState("");

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
    const newModuleID = getModuleId();
    setCurrentModuleView(newModuleID - 1);
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
    const newContent = getContentTitle();

    setCurrentContent(newContent);
  }, [location]);

  const getModuleId = () => {
    const pathParts = window.location.pathname.split("/");
    const moduleIndex = pathParts.indexOf("modulo") + 1; // Encuentra el índice después de "modulo"
    return moduleIndex ? pathParts[moduleIndex] : null;
  };

  const getContentTitle = () => {
    const pathParts = window.location.pathname.split("/");
    const contentIndex = decodeURIComponent(pathParts[7]); // Encuentra el índice después de "modulo"
    return contentIndex;
  };

  const handleNextModule = (opcion) => {
    if (opcion === 1) {
      if (currenModuleView < modulos.length - 1) {
        setCurrentModuleView(currenModuleView + 1);
      } else {
        setCurrentModuleView(0);
      }
    } else {
      if (currenModuleView > 0) {
        setCurrentModuleView(currenModuleView - 1);
      } else {
        setCurrentModuleView(modulos.length - 1);
      }
    }
  };

  return (
    <aside className="static flex h-[540px] w-full flex-col py-6 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] md:w-[280px] lg:w-[356px] xl:w-[420px]">
      <Link to={"/aprendizaje"}>
        <div className="mx-6 mb-4 flex flex-row items-center gap-3 border-l-8 border-purple-950 bg-purple-100 p-2 hover:bg-purple-200 md:flex-col lg:flex-row lg:items-center">
          <figure className="block h-16 md:hidden lg:block lg:h-24">
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

      <div className="mx-6 flex w-auto flex-row gap-4 border-b border-black/25 pb-4">
        <button
          onClick={() => handleNextModule(0)}
          className="h-12 w-full rounded-sm border-2 border-transparent bg-purple-700 align-middle font-semibold text-white hover:bg-purple-500"
        >
          <div className="flex h-full items-center justify-center">
            <img className="h-7 rotate-180" src={left} alt="" />
          </div>
        </button>

        <button
          onClick={() => handleNextModule(1)}
          className="h-12 w-full rounded-sm border-2 border-transparent bg-purple-700 align-middle font-semibold text-white hover:bg-purple-500"
        >
          <div className="flex h-full items-center justify-center">
            <img className="h-7" src={left} alt="" />
          </div>
        </button>
      </div>
      <ul className="h-fit w-auto flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden px-6">
        {modulos.map((module, index) => {
          return (
            <li
              key={module.moduleId}
              className={`flex flex-col gap-4 rounded border-black/25 bg-white pb-8 ${index == currenModuleView ? "block" : "hidden"}`}
            >
              <Link to={`/aprendizaje/modulo/${module.moduleId}/#0`}>
                <h2 className="border-b border-black/25 px-4 py-4 text-base font-semibold text-black hover:bg-purple-200">
                  Modulo {module.moduleId} <br></br>{" "}
                  <span className="font-normal"> {module.moduleTitle}</span>
                </h2>
              </Link>

              <section className="flex w-full flex-col justify-start">
                <div className="flex-1">
                  <ul className="flex flex-col gap-2">
                    {module.sections?.map((sect, index) => {
                      const completado0 = progreso.includes(
                        sect.activities[0].id,
                      );
                      const completado1 = progreso.includes(
                        sect.activities[1].id,
                      );
                      const completado2 = progreso.includes(
                        sect.activities[2].id,
                      );

                      const quizPuntaje = puntajes.some(
                        (p) => p.quiz === sect.quiz.id,
                      );

                      return (
                        <div key={index} className="flex flex-col gap-2">
                          <Link
                            to={`/aprendizaje/modulo/${module.moduleId}/#${index + 1}`}
                          >
                            <li className="rounded bg-gray-200 p-4 hover:bg-gray-300">
                              {sect.sectionTitle}
                            </li>
                          </Link>
                          <Link
                            state={{ content: sect.activities[0] }}
                            to={`/aprendizaje/modulo/${module.moduleId}/sections/${sect.sectionId}/${sect.activities[0].type}/${sect.activities[0].title}`}
                          >
                            <li
                              className={`rounded border-l-[24px] p-4 hover:bg-purple-200 ${completado0 ? "border-green-200" : "border-gray-200"} ${sect.activities[0].title.includes(currentContent) ? "bg-purple-200" : null}`}
                            >
                              {sect.activities[0].title}
                            </li>
                          </Link>
                          <Link
                            state={{ content: sect.activities[1] }}
                            to={`/aprendizaje/modulo/${module.moduleId}/sections/${sect.sectionId}/${sect.activities[1].type}/${sect.activities[1].title}`}
                          >
                            <li
                              className={`rounded border-l-[24px] p-4 hover:bg-purple-200 ${completado1 ? "border-green-200" : "border-gray-200"} ${sect.activities[1].title.includes(currentContent) ? "bg-purple-200" : null}`}
                            >
                              {sect.activities[1].title}
                            </li>
                          </Link>
                          <Link
                            state={{ content: sect.activities[2] }}
                            to={`/aprendizaje/modulo/${module.moduleId}/sections/${sect.sectionId}/${sect.activities[2].type}/${sect.activities[2].title}`}
                          >
                            <li
                              className={`rounded border-l-[24px] p-4 hover:bg-purple-200 ${completado2 ? "border-green-200" : "border-gray-200"} ${sect.activities[2].title.includes(currentContent) ? "bg-purple-200" : null}`}
                            >
                              {sect.activities[2].title}
                            </li>
                          </Link>
                          <Link
                            state={{ content: sect.quiz }}
                            to={`/aprendizaje/modulo/${module.moduleId}/sections/${sect.sectionId}/quiz/${sect.quiz.title}`}
                          >
                            <li
                              className={`mb-4 rounded border-2 p-4 text-center hover:border-purple-200 hover:bg-purple-200 ${sect.quiz.title.includes(currentContent) ? "border-purple-200 bg-purple-200" : "border-purple-300"}`}
                            >
                              Quiz {index + 1}: {sect.quiz.title}{" "}
                              {quizPuntaje
                                ? `- (${puntajes[module.moduleId - 1]?.puntaje}/${sect.quiz.preguntas.length})`
                                : null}
                            </li>
                          </Link>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
      <div className="mx-6 h-px w-auto bg-black/25"></div>
    </aside>
  );
}

export default CoAside;
