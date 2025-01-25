import { act, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchModuleById } from "../utils/api";

const ModuloPage = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);

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
          {module.sections.map((section) => (
            <section key={section.sectionId} className="flex flex-col">
              <h2>{section.sectionTitle}</h2>
              <div>
                {section.activities.map((activity) => (
                  <p key={activity.title}>
                    <Link
                      state={{ content: activity }}
                      to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/${activity.type}/${activity.title}`}
                    >
                      {activity.title}
                    </Link>
                  </p>
                ))}
                {/* {section.activities[0].title} */}
              </div>
              <p>
                <Link
                  state={{ content: section.quiz }}
                  to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/quiz/${section.quiz.title}`}
                >
                  {section.quiz.title}
                </Link>
              </p>
            </section>
          ))}
        </div>
      </div>
    );
  }
};

export default ModuloPage;
