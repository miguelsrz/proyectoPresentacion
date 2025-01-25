import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchModules } from "../utils/api"; // Asegúrate de que este fetch esté implementado en tu API utils.

const AprendizajePage = () => {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
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

  if (loading) return <div>Cargando módulos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
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
