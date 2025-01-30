// import React, { useState, useEffect } from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext";
import { UserContext } from "../../context/userContext";
// import { fetchSection } from "../../api";

const Video = () => {
  const location = useLocation();
  const { content } = location.state;
  const { usuario, getUser } = useContext(UserContext);

  const {
    progreso,
    updateProgreso,
    setProgreso,
    fetchProgreso,
    fetchPuntajes,
    setPuntajes,
  } = useContext(DatabaseContext);

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
      <h2>{content.title}</h2>
      <h2>{content.tituloOriginal}</h2>
      <p>{content.urlOriginal}</p>
      <p>{content.descripcion}</p>
      <button
        onClick={() => handleVisto()}
        className="bg-purple-700 px-8 py-4 text-white"
      >
        MARCAR VISTO
      </button>
      <iframe
        width="1096"
        height="616"
        src={content.url}
        title="Newton Leibniz y Usain Bolt"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
