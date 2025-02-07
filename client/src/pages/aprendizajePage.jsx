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

  const handleLogin = async () => {
    const inputID = prompt("INGRESA EL NUMERO ID DE USUARIO");

    if (!inputID || isNaN(inputID)) {
      alert("ID inválido");
      return;
    }

    try {
      setLoading(true);

      // Generar token aleatorio (simulación simple)
      const token = await generateEncryptedToken(inputID);

      // Eliminar sesiones previas del usuario
      await fetch(`${apiURL}/sesiones`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario_id: inputID }),
      });

      // Registrar nueva sesión con el token
      const res = await fetch(`${apiURL}/sesiones`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario_id: inputID, token }),
      });

      if (!res.ok) throw new Error("Error al iniciar sesión");

      // Guardar token en LocalStorage
      login(token);

      alert("Sesión iniciada con éxito. Recargando progreso...");
      fetchProgreso();
      fetchPuntajes();
    } catch (err) {
      alert("Error al iniciar sesión");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const generateEncryptedToken = async (inputId) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(`secret-${inputId}-${Date.now()}`);
    const hashArray = Array.from(new Uint8Array(data));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  if (loading) return <div>Cargando módulos...</div>;
  if (error) return <div>{error}</div>;

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
                <h2 className="text-xl">Avance de curso: 40%</h2>
              </div>

              <section className="rounded border border-black/25 bg-white p-8">
                <h1 className="mb-4 border-b border-black/25 pb-4 text-2xl font-bold text-black">
                  Acerca de este curso
                </h1>
                <p className="text-pretty text-base">
                  Este curso está diseñado para proporcionar una base sólida en
                  educación financiera, ayudándote a comprender los principios
                  clave de las finanzas personales y la gestión del presupuesto.
                  A lo largo del programa, explorarás cómo funciona el sistema
                  económico y su impacto en tu vida diaria, aprenderás a evaluar
                  tu situación financiera actual y desarrollarás estrategias
                  efectivas para administrar tus ingresos y gastos. Además, el
                  curso te guiará en la planificación de objetivos financieros
                  realistas y alcanzables, ofreciendo herramientas prácticas
                  para el control del gasto, el ahorro y la inversión. Con un
                  enfoque claro y aplicable, este curso te permitirá tomar
                  decisiones financieras más informadas y mejorar tu estabilidad
                  económica a largo plazo.
                </p>
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
                    <h2 className="border-b border-black/25 pb-4 text-2xl font-semibold text-black">
                      Modulo {module.moduleId}: {module.moduleTitle}
                    </h2>
                    <p className="text-pretty">{module.desc}</p>
                    <section className="flex w-full flex-col justify-start gap-10 sm:flex-row">
                      <div className="flex-1">
                        <p className="mb-4 text-lg font-bold text-black">
                          Aprende
                        </p>
                        <ul className="flex flex-col gap-2">
                          {module.sections?.map((sect, index) => (
                            <Link
                              key={index}
                              to={`/aprendizaje/modulo/${module.moduleId}/#${index + 1}`}
                              className="rounded bg-gray-200 px-8 py-6 font-bold"
                            >
                              <li className="">
                                Seccion {sect.sectionId}: {sect.sectionTitle}
                              </li>{" "}
                            </Link>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <p className="mb-4 text-xl font-bold text-black">
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
                                className="rounded bg-purple-100 px-8 py-6 font-bold"
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
                      <button className="mt-4 h-12 w-full rounded-sm border-2 border-transparent bg-purple-700 px-0 align-middle font-semibold text-white hover:bg-purple-600 sm:w-max sm:px-16">
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

          <button
            onClick={() => handleLogin()}
            className="mb-8 w-max self-center rounded bg-purple-700 px-8 py-4 font-bold tracking-wider text-white"
          >
            Cambiar Usuario
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AprendizajePage;
