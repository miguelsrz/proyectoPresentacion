import { createContext, useState } from "react";

const apiURL = import.meta.env.VITE_API_URL;

export const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [progreso, setProgreso] = useState([]);
  const [puntajes, setPuntajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar errores de las peticiones
  const handleFetchError = (err) => {
    console.error("Error en la petición:", err);
    setError(
      "Ocurrió un error al procesar la solicitud. Inténtalo nuevamente.",
    );
  };

  // Función para obtener progreso del usuario
  const fetchProgreso = async (usuarioId) => {
    try {
      setLoading(true);
      const res = await fetch(`${apiURL}/progreso?usuario_id=${usuarioId}`);
      if (!res.ok) throw new Error("Error al obtener el progreso");
      const data = await res.json();
      const progresoIDS = data.map((p) => p.contenido_id);
      localStorage.setItem("progreso", JSON.stringify(progresoIDS));
      setProgreso(progresoIDS);
      console.log(progresoIDS);
      return progresoIDS; // Retorna solo el array
    } catch (err) {
      handleFetchError(err);
      return []; // Retorna un array vacío si hay un error
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar progreso
  const updateProgreso = async (usuarioId, contenidoId, visto) => {
    try {
      setLoading(true);
      const res = await fetch(`${apiURL}/progreso`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario_id: usuarioId,
          contenido_id: contenidoId,
          visto,
        }),
      });
      if (!res.ok) throw new Error("Error al actualizar el progreso");
      const updatedProgreso = await fetchProgreso(usuarioId);
      return updatedProgreso; // Retorna el array actualizado
    } catch (err) {
      handleFetchError(err);
      return []; // Retorna un array vacío si hay un error
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener puntajes del usuario
  const fetchPuntajes = async (usuarioId) => {
    try {
      setLoading(true);
      const res = await fetch(`${apiURL}/puntajes?usuario_id=${usuarioId}`);
      if (!res.ok) throw new Error("Error al obtener los puntajes");
      const data = await res.json();
      const puntajes = data.map((p) => ({
        quiz: p.quiz_id,
        puntaje: p.puntaje,
      }));
      localStorage.setItem("puntajes", JSON.stringify(puntajes));
      console.log(puntajes);
      setPuntajes(puntajes);
      return puntajes; // Retorna solo el array
    } catch (err) {
      handleFetchError(err);
      return []; // Retorna un array vacío si hay un error
    } finally {
      setLoading(false);
    }
  };

  // Función para registrar puntaje
  const registerPuntaje = async (usuarioId, quizId, puntaje) => {
    try {
      setLoading(true);
      const res = await fetch(`${apiURL}/puntajes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario_id: usuarioId,
          quiz_id: quizId,
          puntaje,
        }),
      });
      if (!res.ok) throw new Error("Error al registrar el puntaje");
      const updatedPuntajes = await fetchPuntajes(usuarioId);
      return updatedPuntajes; // Retorna el array actualizado
    } catch (err) {
      handleFetchError(err);
      return []; // Retorna un array vacío si hay un error
    } finally {
      setLoading(false);
    }
  };

  return (
    <DatabaseContext.Provider
      value={{
        progreso,
        setProgreso,
        puntajes,
        setPuntajes,
        fetchProgreso,
        updateProgreso,
        fetchPuntajes,
        registerPuntaje,
        loading,
        error,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};
