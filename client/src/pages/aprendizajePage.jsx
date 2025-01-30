import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchModules } from "../utils/api"; // Asegúrate de que este fetch esté implementado en tu API utils.
import { UserContext } from "../context/userContext";
import { DatabaseContext } from "../context/databaseContext";

const AprendizajePage = () => {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { fetchProgreso, fetchPuntajes, setProgreso, setPuntajes } =
    useContext(DatabaseContext);
  const { login, usuario, getUser } = useContext(UserContext);

  // Fetch data when the component mounts

  useEffect(() => {
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

  const changeUser = () => {
    const userID = prompt("INGRESA ID DE USUARIO");
    login(userID);
    fetchProgreso(userID);
    fetchPuntajes(userID);
  };

  if (loading) return <div>Cargando módulos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <button
        onClick={() => changeUser()}
        className="mb-8 bg-purple-700 px-8 py-4 text-white"
      >
        CAMBIAR USUARIO
      </button>
      <h1 className="mb-4 text-2xl font-bold">Lista de Módulos</h1>
      <ul className="flex flex-col gap-4">
        {modulos.map((module) => (
          <li key={module.moduleId} className="rounded-md border p-4">
            <h2 className="text-xl font-semibold">{module.moduleTitle}</h2>
            <p>{module.description}</p>
            <Link
              to={`/aprendizaje/modulo/${module.moduleId}`}
              className="mt-2 inline-block text-blue-500 underline"
            >
              Ver módulo
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AprendizajePage;
