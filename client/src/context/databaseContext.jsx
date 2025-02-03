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
  const fetchProgreso = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      console.log("Respuesta de Local:", token);
      if (!token) throw new Error("No autenticado");

      const res = await fetch(`${apiURL}/progreso`, {
        headers: { Authorization: `${token}` },
      });
      console.log("Respuesta de la API:", res);

      if (!res.ok) throw new Error("Error al obtener progreso");

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
  const updateProgreso = async (contenidoId, visto) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("No autenticado");

      const res = await fetch(`${apiURL}/progreso`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ contenido_id: contenidoId, visto }),
      });
      console.log("Respuesta de la API:", res);

      if (!res.ok) throw new Error("Error al actualizar el progreso");
      const updatedProgreso = await fetchProgreso();
      return updatedProgreso; // Retorna el array actualizado
    } catch (err) {
      handleFetchError(err);
      return []; // Retorna un array vacío si hay un error
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener puntajes del usuario
  const fetchPuntajes = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("No autenticado");

      const res = await fetch(`${apiURL}/puntajes`, {
        headers: { Authorization: `${token}` },
      });

      if (!res.ok) {
        const errorData = await res.json(); // Para capturar detalles del error en el servidor
        throw new Error(errorData.message || "Error al actualizar el progreso");
      }
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
  const registerPuntaje = async (quizId, puntaje) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("No autenticado");

      const completado = puntajes.some((obj) => obj.quiz === quizId);
      console.log(completado);

      const res = await fetch(`${apiURL}/puntajes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },

        body: JSON.stringify({
          quiz_id: quizId,
          puntaje,
          completado,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Para capturar detalles del error en el servidor
        throw new Error(errorData.message || "Error al actualizar el progreso");
      }

      const updatedPuntajes = await fetchPuntajes();
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
