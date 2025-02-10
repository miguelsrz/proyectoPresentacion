import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchModules } from "../utils/api"; // Asegúrate de que este fetch esté implementado en tu API utils.
import { UserContext } from "../context/userContext";
import { DatabaseContext } from "../context/databaseContext";
import ApHeader from "../components/aprendizajeComponents/apHeader";
import ApAside from "../components/aprendizajeComponents/apAside";
import Footer from "../components/footer";
// import banner from "/public/assets/imgs/bannerUnal.webp";
import left from "../../public/assets/icons/arrowLeft.svg";
import pig from "../../public/assets/icons/courseIcon.svg";

const apiURL = import.meta.env.VITE_API_URL;

const AprendizajePage = () => {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    puntajes,
    progreso,
    fetchProgreso,
    fetchPuntajes,
    setProgreso,
    setPuntajes,
  } = useContext(DatabaseContext);
  const { usuario, getUser, deleteToken } = useContext(UserContext);

  // Fetch data when the component mounts
  window.addEventListener("beforeunload", deleteToken);

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
  }, []);

  if (loading)
    return <div className="p-8 text-xl md:text-2xl"> Cargando módulos...</div>;
  if (error) return <div>{error}</div>;

  const porcentajeProgreso = Math.round((progreso.length / 36) * 100);
  return (
    <div className="text-pretty">
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
                  <img className="h-full" src={pig} alt="Focus LOGO" />
                </figure>
                <h1 className="text-4xl font-bold text-black md:text-5xl">
                  Educación Financiera para Estudiantes
                  <span className="text-3xl font-semibold md:text-4xl">
                    <br></br> Gestión Inteligente del Dinero
                  </span>
                </h1>
                <h2 className="text-xl">
                  Avance de curso: {porcentajeProgreso}%{" "}
                  <span className="hidden md:inline-block">
                    {" "}
                    - ({progreso.length}/36 contenidos vistos)
                  </span>
                </h2>
              </div>

              <section className="rounded border border-black/25 bg-white p-8">
                <h1 className="mb-4 border-b border-black/25 pb-4 text-xl font-bold text-black md:text-2xl">
                  Acerca de este curso
                </h1>
                <div className="max-h-48 overflow-y-auto">
                  <p className="text-pretty text-base md:h-auto">
                    Este curso está diseñado para proporcionar una base sólida
                    en educación financiera, ayudándote a comprender los
                    principios clave de las finanzas personales y la gestión del
                    presupuesto. A lo largo del programa, explorarás cómo
                    funciona el sistema económico y su impacto en tu vida
                    diaria, aprenderás a evaluar tu situación financiera actual
                    y desarrollarás estrategias efectivas para administrar tus
                    ingresos y gastos. Además, el curso te guiará en la
                    planificación de objetivos financieros realistas y
                    alcanzables, ofreciendo herramientas prácticas para el
                    control del gasto, el ahorro y la inversión. Con un enfoque
                    claro y aplicable, este curso te permitirá tomar decisiones
                    financieras más informadas y mejorar tu estabilidad
                    económica a largo plazo.
                  </p>
                </div>
              </section>
            </div>
          </div>

          <section className="">
            <ul className="flex flex-col gap-8">
              {modulos.map((module) => {
                return (
                  <li
                    key={module.moduleId}
                    className="flex flex-col gap-4 rounded border border-black/25 bg-white p-8"
                  >
                    <h2 className="border-b border-black/25 pb-4 text-xl font-semibold text-black md:text-2xl">
                      Modulo {module.moduleId}: {module.moduleTitle}
                    </h2>
                    <p className={`hidden text-pretty md:block`}>
                      {module.desc}
                    </p>
                    <section className="flex w-full flex-col justify-start gap-10 sm:flex-row">
                      <div className="flex-1">
                        <p className="mb-4 text-base font-bold text-black md:text-lg">
                          Aprende
                        </p>
                        <ul className="flex flex-col gap-2 text-black">
                          {module.sections?.map((sect, index) => (
                            <Link
                              key={index}
                              to={`/aprendizaje/modulo/${module.moduleId}/#${index + 1}`}
                              className="rounded bg-gray-200 px-8 py-6 hover:bg-purple-200"
                            >
                              <li className="">
                                Seccion {sect.sectionId}: {sect.sectionTitle}
                              </li>{" "}
                            </Link>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <p className="mb-4 text-base font-bold text-black md:text-lg">
                          Aplica
                        </p>
                        <ul className="flex flex-col gap-2">
                          {module.sections?.map((sect, index) => {
                            const quizPuntaje = puntajes.find(
                              (section) => section.quiz == sect.quiz.id,
                            );
                            return (
                              <Link
                                state={{
                                  content: sect.quiz,
                                  puntaje: quizPuntaje,
                                }}
                                key={index}
                                to={`/aprendizaje/modulo/${module.moduleId}/sections/${sect.sectionId}/quiz/${sect.quiz.title}`}
                                className="rounded bg-purple-100 px-8 py-6 text-black hover:bg-purple-200"
                              >
                                <li className="">
                                  Quiz {index + 1}: {sect.quiz.title}
                                </li>{" "}
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    </section>
                    <Link to={`/aprendizaje/modulo/${module.moduleId}/#0`}>
                      <button className="mt-4 h-12 w-full rounded-sm border-2 border-transparent bg-purple-700 px-0 align-middle font-semibold text-white hover:bg-purple-500 sm:w-max sm:px-16">
                        <div className="flex h-full items-center justify-center">
                          <p className="line-clamp-1">
                            Modulo {module.moduleId}
                          </p>
                          <img className="h-7" src={left} alt="" />
                        </div>
                      </button>{" "}
                    </Link>
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
};

export default AprendizajePage;
