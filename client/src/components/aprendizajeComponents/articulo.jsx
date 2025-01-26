// import React from "react";
import { useLocation } from "react-router-dom";

const Articulo = () => {
  const location = useLocation();
  const { content } = location.state;

  const info = content.contenido;

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

  return (
    <div>
      <h2> {content.title}</h2>
      <h2> {content.tituloOriginal}</h2>
      <p>{content.url}</p>
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
