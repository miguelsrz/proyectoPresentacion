import { React, useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchModuleById } from "../utils/api";
import { UserContext } from "../context/userContext";
import { DatabaseContext } from "../context/databaseContext";

const ModuloPage = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);

  const {
    progreso,
    fetchProgreso,
    puntajes,
    fetchPuntajes,
    setProgreso,
    setPuntajes,
  } = useContext(DatabaseContext);
  const { usuario, getUser } = useContext(UserContext);

  // Fetch data when the component mounts

  useEffect(() => {
    getUser();
    const storedProgreso = localStorage.getItem("progreso");
    const storedPuntajes = localStorage.getItem("puntajes");
    if (storedProgreso) {
      setProgreso(JSON.parse(storedProgreso)); // Recupera del localStorage
    } else {
      // Si no hay datos en localStorage, realiza la petición a la base de datos
      fetchProgreso(usuario);
    }
    if (storedPuntajes) {
      setPuntajes(JSON.parse(storedPuntajes)); // Recupera del localStorage
    } else {
      // Si no hay datos en localStorage, realiza la petición a la base de datos
      fetchPuntajes(usuario);
    }

    console.log("RECARGA");
  }, []); // Dependencia en 'usuario' para que se ejecute cuando el usuario se loguee

  useEffect(() => {
    fetchModuleById(moduleId).then(setModule).catch(console.error);
  }, [moduleId]);

  if (!module) {
    return <div>Modulo no encontrado!</div>;
  } else {
    return (
      <div className="flex flex-col gap-8">
        <h1>{module.moduleTitle}</h1>
        <div className="flex flex-col gap-8">
          {module.sections.map((section) => {
            const quizPuntaje = puntajes.find(
              (sect) => sect.quiz == section.quiz.id,
            );

            return (
              <section key={section.sectionId} className="flex flex-col">
                <h2>{section.sectionTitle}</h2>
                <div>
                  {section.activities.map((activity) => {
                    const completado = progreso.includes(activity.id); // Si el ID existe, está completado
                    return (
                      <p
                        key={activity.title}
                        className={completado ? "text-green-500" : "text-black"}
                      >
                        <Link
                          state={{ content: activity }}
                          to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/${activity.type}/${activity.title}`}
                        >
                          {activity.title}
                        </Link>
                      </p>
                    );
                  })}
                  {/* {section.activities[0].title} */}
                </div>
                <p>
                  <Link
                    state={{ content: section.quiz, puntaje: quizPuntaje }}
                    to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/quiz/${section.quiz.title}`}
                  >
                    {section.quiz.title}
                    <span className="ml-4">
                      {quizPuntaje ? `${quizPuntaje?.puntaje}/100` : null}
                    </span>
                  </Link>
                </p>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
};

export default ModuloPage;
