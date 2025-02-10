import { createContext, useState, useEffect } from "react";

const apiURL = import.meta.env.VITE_API_URL;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // const storedUserId = localStorage.getItem("token");
    // if (storedUserId) {
    //   fetch(`http://localhost:3000/api/usuario?usuario_id=${storedUserId}`)
    //     .then((res) => res.json())
    //     .then((data) => setUsuario(data))
    //     .catch(() => localStorage.removeItem("token"));
    // }
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getUser = async () => {
    // Intentar obtener el token desde localStorage
    let newToken = localStorage.getItem("token");

    // Si no hay token en localStorage, buscarlo en la URL
    const params = new URLSearchParams(window.location.search);
    if (params.has("token")) {
      newToken = params.get("token");
      localStorage.setItem("token", newToken); // Guardarlo en localStorage
      window.history.replaceState({}, document.title, "/aprendizaje"); // Limpiar la URL
    }

    if (!newToken && !params.has("token")) {
      window.location.href = "https://focus.42web.io/sesion_aprendizaje.php"; // Redirigir si no hay token
      localStorage.removeItem("progreso");
      localStorage.removeItem("puntajes");
      return;
    }

    // Verificar el token en InfinityFree
    try {
      console.log(newToken);
      const response = await fetch(`${apiURL}/sesiones`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newToken }),
      });

      if (!response.ok) throw new Error("Error en el servidor");

      const data = await response.json();
      if (!data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("progreso");
        localStorage.removeItem("puntajes");
        alert("DATA NO SUCCESS");
        window.location.href = "https://focus.42web.io/sesion_aprendizaje.php";
      } else {
        setUsuario(data.user[0].user);
      }
    } catch (error) {
      console.error("Error al validar token:", error);
      alert("ERROR");
      window.location.href = "https://focus.42web.io/sesion_aprendizaje.php";
    }
  };

  const deleteToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch(`${apiURL}/cierre`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        keepalive: true, // Importante para que funcione al cerrar la pestaña
      });

      localStorage.removeItem("token");
      localStorage.removeItem("progreso");
      localStorage.removeItem("puntajes");
      setUsuario(null);
    }
  };

  const useTokenCleanup = () => {
    useEffect(() => {
      if (!sessionStorage.getItem("firstVisit")) {
        sessionStorage.setItem("firstVisit", "true");
        return; // Evita ejecutar el código en la primera visita
      }

      const handleBeforeUnload = () => {
        sessionStorage.setItem("reloading", "true");
      };

      const handleLoad = () => {
        if (!sessionStorage.getItem("reloading")) {
          deleteToken(); // Solo elimina el token si no es una recarga
        }
        sessionStorage.removeItem("reloading");
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("load", handleLoad);
      };
    }, []);
  };

  return (
    <UserContext.Provider
      value={{
        usuario,
        setUsuario,
        getUser,
        deleteToken,
        capitalizeFirstLetter,
        useTokenCleanup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
