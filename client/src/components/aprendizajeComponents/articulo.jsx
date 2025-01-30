// import React from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext";
import { UserContext } from "../../context/userContext";

const Articulo = () => {
  const location = useLocation();
  const { content } = location.state;

  const info = content.contenido;

  const { usuario, getUser } = useContext(UserContext);
  const {
    progreso,
    updateProgreso,
    setProgreso,
    fetchProgreso,
    fetchPuntajes,
    setPuntajes,
  } = useContext(DatabaseContext);

  const maxLength = Math.max(info.imagenes.length, info.texto.length);

  function renderText(text) {
    // Primero, dividimos el texto por saltos de línea
    const lines = text.split("\n");

    // Mapeamos cada línea y procesamos negritas dentro de cada una
    return lines.map((line, index) => {
      // Primero, dividimos la línea por '**' para manejar las negritas
      const parts = line.split("**");

      return (
        <span key={index}>
          {parts.map((part, idx) => {
            // Si el índice es impar, se aplica la negrita
            if (idx % 2 !== 0) {
              return <strong key={idx}>{part}</strong>;
            }
            return part; // Si no es negrita, se devuelve el texto normal
          })}
          {/* Agregamos el salto de línea al final de cada línea */}
          <br />
        </span>
      );
    });
  }

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

  const handleVisto = () => {
    const includes = progreso.includes(content.id);

    if (includes) {
      updateProgreso(usuario, content.id, false);
      console.log("Enviando progreso:", usuario, content.id, false);
    } else {
      updateProgreso(usuario, content.id, true);
      console.log("Enviando progreso:", usuario, content.id, true);
    }
  };

  return (
    <div>
      <h2> {content.title}</h2>
      <h2> {content.tituloOriginal}</h2>
      <p>{content.url}</p>
      <p>{content.id}</p>
      <button
        onClick={() => handleVisto()}
        className="bg-purple-700 px-8 py-4 text-white"
      >
        MARCAR VISTO
      </button>
      <div>
        {Array.from({ length: maxLength }).map((_, index) => (
          <div key={index} className="content-block mb-8 flex flex-col gap-8">
            {index < info.imagenes.length && (
              <img
                src={info.imagenes[index]}
                alt={`Imagen ${index + 1}`}
                className="h-auto w-full rounded shadow"
              />
            )}
            {index < info.texto.length && (
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-gray-950">
                  {info.texto[index].subtitulo}
                </h1>
                <p className="text-lg text-gray-950">
                  {renderText(info.texto[index].sub)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Aquí puedes cargar contenido dinámico basado en el módulo */}
    </div>
  );
};

export default Articulo;
