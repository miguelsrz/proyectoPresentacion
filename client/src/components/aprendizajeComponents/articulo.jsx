// import React from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext";
import { UserContext } from "../../context/userContext";
import CoAside from "./coAside";
import ApHeader from "./apHeader";
import Footer from "../footer";

const Articulo = () => {
  const location = useLocation();
  const { content } = location.state;

  const info = content.contenido;

  const { usuario, getUser, capitalizeFirstLetter, deleteToken } =
    useContext(UserContext);
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
    const scrollToElement = () => {
      if (location) {
        const element = document.getElementById("0");
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

  const includes = progreso.includes(content.id);

  const handleVisto = () => {
    if (includes) {
      updateProgreso(content.id, false);
      console.log("Enviando progreso:", content.id, false);
    } else {
      updateProgreso(content.id, true);
      console.log("Enviando progreso:", content.id, true);
    }

    const scrollToElement = () => {
      if (location) {
        const element = document.getElementById("0");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    scrollToElement();
  };

  return (
    <div id="0">
      <ApHeader></ApHeader>
      <section className="flex flex-col md:flex-row">
        <div className="relative order-2 md:order-1 md:mt-[72px]">
          <CoAside></CoAside>
        </div>
        <div className="order-1 mt-[72px] flex flex-col gap-8 bg-gray-50 px-8 py-8 md:order-2 md:px-24">
          <div className="flex flex-col gap-2 border-b border-black/25 pb-8">
            <p className="text-xl font-bold">
              {capitalizeFirstLetter(content.type)}
            </p>
            <h2 className="text-5xl font-bold"> {content.title}</h2>
          </div>
          <div className="flex flex-col gap-2 rounded bg-purple-100 p-8">
            <h2 className="text-2xl font-bold">Articulo original</h2>
            <a
              className="underline-offset-8 hover:underline"
              target="_blank"
              href={content.url}
            >
              {" "}
              {content.tituloOriginal} | {content.autor}
            </a>
          </div>

          <div>
            {Array.from({ length: maxLength }).map((_, index) => (
              <div
                key={index}
                className="content-block mb-12 flex flex-col gap-12"
              >
                {index < info.imagenes.length && (
                  <img
                    src={info.imagenes[index]}
                    alt={`Imagen ${index + 1}`}
                    className="h-auto w-full rounded shadow"
                  />
                )}
                {index < info.texto.length && (
                  <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-950">
                      {info.texto[index].subtitulo}
                    </h1>
                    <p className="text-pretty text-lg text-gray-950">
                      {renderText(info.texto[index].sub)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleVisto()}
            className="w-max self-end rounded bg-purple-700 px-8 py-4 font-bold text-white hover:bg-purple-500"
          >
            {includes ? "MARCAR NO VISTO" : "MARCAR VISTO"}
          </button>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Articulo;
