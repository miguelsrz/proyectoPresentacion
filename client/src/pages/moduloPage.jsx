import { React, useContext, useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { fetchModuleById } from "../utils/api";
import { UserContext } from "../context/userContext";
import { DatabaseContext } from "../context/databaseContext";
import ApHeader from "../components/aprendizajeComponents/apHeader";
import ApAside from "../components/aprendizajeComponents/apAside";
import Footer from "../components/footer";
import m1Icon from "../../public/assets/icons/m1Icon.svg";

const ModuloPage = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);
  const [avanceModulo, setAvanceModulo] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Espera un ciclo de renderizado antes de ejecutar el scroll
    const timeout = setTimeout(() => {
      requestAnimationFrame(scrollToElement);
    }, 100); // Pequeño delay para asegurar que el contenido ya se montó

    return () => clearTimeout(timeout);
  }, [location]);

  const {
    progreso,
    fetchProgreso,
    puntajes,
    fetchPuntajes,
    setProgreso,
    setPuntajes,
  } = useContext(DatabaseContext);
  const { getUser, capitalizeFirstLetter, deleteToken } =
    useContext(UserContext);

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
    fetchModuleById(moduleId).then(setModule).catch(console.error);
  }, [moduleId]);

  if (!module) {
    return <div className="p-8 text-xl md:text-2xl">Cargando modulos...</div>;
  } else {
    return (
      <div id="0">
        <ApHeader></ApHeader>
        <div className="flex">
          <div className="relative mt-[72px]">
            <ApAside></ApAside>
          </div>

          <div className="mt-[72px] flex h-auto flex-col gap-8 overflow-x-hidden bg-gray-50 px-6 py-8 text-gray-700 sm:px-8 lg:px-16">
            <div className="relative z-0">
              {/* <figure className="absolute z-[-1] h-full w-full opacity-25">
              <img className="h-full w-full object-cover" src={banner} alt="" />
            </figure> */}
              <div className="flex flex-col">
                <div className="mb-8 flex flex-col gap-4 border-b border-black/25 pb-8">
                  <figure className="h-32">
                    <img className="h-full" src={m1Icon} alt="Focus LOGO" />
                  </figure>
                  <h1 className="text-4xl font-bold text-black md:text-5xl">
                    Modulo {module.moduleId}: {module.moduleTitle}
                  </h1>
                  <h2 className="text-xl">12 Contenidos - 4 Quizes</h2>
                </div>

                <section className="rounded border border-black/25 bg-white p-8">
                  <h1 className="mb-4 border-b border-black/25 pb-4 text-xl font-bold text-black md:text-2xl">
                    Acerca de este modulo
                  </h1>
                  <p className="max-h-48 overflow-y-auto text-pretty text-base">
                    {module.desc}
                  </p>
                </section>
              </div>
            </div>

            <section className="">
              <ul className="flex flex-col gap-8">
                {module.sections.map((section, index) => {
                  const quizPuntaje = puntajes.find(
                    (sect) => sect.quiz == section.quiz.id,
                  );
                  return (
                    <li
                      id={index + 1}
                      key={section.sectionTitle + index}
                      className="flex flex-col gap-4 rounded border border-black/25 bg-white p-8"
                    >
                      <h2 className="border-b border-black/25 pb-4 text-xl font-semibold text-black md:text-2xl">
                        Seccion {index + 1}: {section.sectionTitle}
                      </h2>
                      <section className="flex w-full flex-col justify-start gap-10 lg:flex-row">
                        <div className="flex-1">
                          <p className="mb-4 text-base font-bold text-black md:text-lg">
                            Aprende
                          </p>
                          <ul className="flex flex-col gap-2">
                            {section.activities?.map((activity, index) => {
                              const completado = progreso.includes(activity.id); // Si el ID existe, está completado

                              return (
                                <Link
                                  state={{ content: activity }}
                                  key={index}
                                  to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/${activity.type}/${activity.title}`}
                                  className={`rounded border-l-[24px] bg-gray-100 px-8 py-4 font-normal text-black hover:bg-purple-200 ${completado ? "border-green-200" : "border-gray-400"}`}
                                >
                                  <li className="">
                                    {capitalizeFirstLetter(activity.type)}:{" "}
                                    {activity.title}
                                  </li>{" "}
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="flex-1">
                          <p className="mb-4 text-base font-bold text-black md:text-lg">
                            Aplica
                          </p>
                          <ul className="flex flex-col gap-2">
                            <Link
                              state={{
                                content: section.quiz,
                                puntaje: quizPuntaje,
                              }}
                              key={index}
                              to={`/aprendizaje/modulo/${module.moduleId}/sections/${section.sectionId}/quiz/${section.quiz.title}`}
                              className={`rounded border-t-[24px] bg-purple-100 px-8 py-6 font-bold hover:bg-purple-200 ${quizPuntaje ? "border-green-200" : "border-gray-400"}`}
                            >
                              <li className="">
                                Quiz de seccion <br></br>
                                <span className="text-xl text-black md:text-2xl">
                                  {section.quiz.title}
                                </span>
                              </li>{" "}
                            </Link>
                            <p className="text-right text-base font-semibold text-black md:text-lg">
                              {quizPuntaje
                                ? `Puntaje obtenido: ${quizPuntaje?.puntaje}/${section.quiz.preguntas.length}`
                                : null}
                            </p>
                          </ul>
                        </div>
                      </section>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
};

export default ModuloPage;

// //  <div className="flex flex-col gap-8">
// {module.sections.map((section) => {
//   const quizPuntaje = puntajes.find(
//     (sect) => sect.quiz == section.quiz.id,
//   );

//   return (
//     <section key={section.sectionId} className="flex flex-col">
//       <h2>{section.sectionTitle}</h2>
//       <div>
//         {section.activities.map((activity) => {
//           const completado = progreso.includes(activity.id); // Si el ID existe, está completado
//           return (
//             <p
//               key={activity.title}
//               className={
//                 completado ? "text-green-500" : "text-black"
//               }
//             >
//               <Link
//                 state={{ content: activity }}
//                 to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/${activity.type}/${activity.title}`}
//               >
//                 {activity.title}
//               </Link>
//             </p>
//           );
//         })}
//         {/* {section.activities[0].title} */}
//       </div>
//       <p>
//         <Link
//           state={{
//             content: section.quiz,
//             puntaje: quizPuntaje,
//           }}
//           to={`/aprendizaje/modulo/${moduleId}/sections/${section.sectionId}/quiz/${section.quiz.title}`}
//         >
//           {section.quiz.title}
//           <span className="ml-4">
//             {quizPuntaje
//               ? `${quizPuntaje?.puntaje}/${section.quiz.preguntas.length}`
//               : null}
//           </span>
//         </Link>
//       </p>
//     </section>
//   );
// })}
// </div>
