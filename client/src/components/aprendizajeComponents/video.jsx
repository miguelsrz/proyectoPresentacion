// import React, { useState, useEffect } from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext";
import { UserContext } from "../../context/userContext";
import Footer from "../footer";
import CoAside from "./coAside";
import ApHeader from "./apHeader";
// import { fetchSection } from "../../api";

const Video = () => {
  const location = useLocation();
  const { content } = location.state;
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

  window.addEventListener("beforeunload", deleteToken);

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
  };

  return (
    <div id="0">
      <ApHeader></ApHeader>
      <section className="flex flex-col md:flex-row">
        <div className="relative order-2 md:order-1 md:mt-[72px]">
          <CoAside></CoAside>
        </div>
        <div className="order-1 mt-[72px] bg-gray-50 px-8 py-8 md:order-2 md:px-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-b border-black/25 pb-8">
              <p className="text-xl font-bold">
                {capitalizeFirstLetter(content.type)}
              </p>
              <h2 className="text-5xl font-bold"> {content.title}</h2>
            </div>
            <div className="flex flex-col gap-2 rounded bg-purple-100 p-8">
              <h2 className="text-2xl font-bold">Video original</h2>

              <a
                className="underline-offset-8 hover:underline"
                target="_blank"
                href={content.urlOriginal}
              >
                {content.tituloOriginal} | {content.autor}
              </a>
            </div>

            <iframe
              width="100%"
              height="620px"
              src={content.url}
              title="Newton Leibniz y Usain Bolt"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col gap-2 rounded bg-gray-200 p-8">
              <h2 className="text-2xl font-bold">Descripción</h2>

              <p className="text-pretty text-base">{content.descripcion}</p>
            </div>
            <button
              onClick={() => handleVisto()}
              className="w-max self-end rounded bg-purple-700 px-8 py-4 font-bold text-white hover:bg-purple-500"
            >
              {includes ? "MARCAR NO VISTO" : "MARCAR VISTO"}
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Video;
