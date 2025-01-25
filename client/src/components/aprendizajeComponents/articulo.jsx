// import React from "react";
import { useLocation } from "react-router-dom";

const Articulo = () => {
  const location = useLocation();
  const { content } = location.state;
  return (
    <div>
      <h2> {content.title}</h2>
      <p>{content.url}</p>
      {/* Aquí puedes cargar contenido dinámico basado en el módulo */}
    </div>
  );
};

export default Articulo;
