import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { fetchSection, submitProgress } from "../../api";

const Quiz = () => {
  const location = useLocation();
  const { content } = location.state;
  // const [content, setContent] = useState(null);
  // const [answers, setAnswers] = useState({});

  // useEffect(() => {
  //   fetchSection(moduleId, "quiz").then((data) => setContent(data));
  // }, [moduleId]);

  // const handleAnswerChange = (questionIndex, selectedOption) => {
  //   setAnswers({ ...answers, [questionIndex]: selectedOption });
  // };

  // const handleSubmit = () => {
  //   const score = content.questions.reduce((acc, question, index) => {
  //     return question.answer === answers[index] ? acc + 20 : acc; // Cada respuesta vale 20 puntos
  //   }, 0);

  //   // submitProgress(1, moduleId, "quiz", true, score).then(() => {
  //   //   alert(`Progreso guardado con puntuación: ${score}`);
  //   // });
  // };

  if (!content) return <p>Cargando preguntas del quiz...</p>;

  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.descripcion}</p>
      <div>
        {content.preguntas.map((pr, index) => (
          <>
            <p key={index}>{pr.pregunta}</p>
            <div className="flex flex-col" key={index + 1}>
              {pr.opciones.map((opcion, index) => (
                <p key={index}>{opcion}</p>
              ))}
            </div>
            <p key={index + 2}>{pr.correcta}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
