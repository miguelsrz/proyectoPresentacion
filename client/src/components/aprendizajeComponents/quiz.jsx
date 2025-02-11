import { useEffect, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext";
import { UserContext } from "../../context/userContext";
import CoAside from "./coAside";
import ApHeader from "./apHeader";
import Footer from "../footer";
// import { fetchSection, submitProgress } from "../../api";

const Quiz = () => {
  const location = useLocation();

  const { getUser, deleteToken } = useContext(UserContext);

  const { content } = location.state;
  const url = location.pathname;
  const nuevaUrl = url.split("/sections")[0];
  const {
    registerPuntaje,
    setProgreso,
    fetchProgreso,
    fetchPuntajes,
    setPuntajes,
    puntajes,
  } = useContext(DatabaseContext);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setQuizStarted(false);
  }, [location]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false); // Nuevo estado para verificar la respuesta

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setCorrectAnswers(0);
    setShowResult(false);
    setAnswerChecked(false);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setAnswerChecked(false); // Restablecer si se ha verificado la respuesta
  };

  const handleVerifyAnswer = () => {
    if (selectedAnswer === content.preguntas[currentQuestionIndex].correcta) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setAnswerChecked(true); // Cambiar el estado a "verificado"
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < content.preguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setAnswerChecked(false); // Restablecer para la siguiente pregunta
    } else {
      setShowResult(true);
      registerPuntaje(content.id, correctAnswers);
      console.log(content.id, correctAnswers);
    }
  };

  if (!content) return <p>Cargando preguntas del quiz...</p>;
  const quizPuntaje = puntajes.find((p) => p.quiz === content.id);

  return (
    <div className="flex flex-col">
      <ApHeader></ApHeader>
      <div className="flex flex-col md:flex-row">
        <div className="relative order-2 md:order-1 md:mt-[72px]">
          <CoAside></CoAside>
        </div>
        <div className="order-1 mt-[72px] flex w-full flex-col gap-8 bg-gray-50 px-8 py-8 pb-32 md:order-2 md:px-24">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-b border-black/25 pb-8">
              <p className="text-xl font-bold">Quiz</p>
              <h2 className="text-5xl font-bold"> {content.title}</h2>
            </div>
          </section>
          {!quizStarted ? (
            <>
              <div className="flex flex-col gap-2 rounded bg-gray-200 p-8">
                <h2 className="text-2xl font-bold">Descripción</h2>

                <p className="text-pretty text-base">{content.descripcion}</p>
                {quizPuntaje ? (
                  <p className="mt-4 border-t border-black pt-4">
                    Puntaje anteriormente obtenido: {quizPuntaje?.puntaje} de{" "}
                    {content.preguntas.length} preguntas
                  </p>
                ) : null}
              </div>

              <button
                onClick={handleStartQuiz}
                className="w-max self-end rounded bg-purple-700 px-24 py-4 font-bold text-white hover:bg-purple-500"
              >
                COMENZAR QUIZ
              </button>
            </>
          ) : (
            <div>
              {showResult ? (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 rounded bg-purple-200 p-8">
                    <h2 className="text-2xl font-bold">Resultado Final</h2>
                    <p>
                      Has acertado {correctAnswers} de{" "}
                      {content.preguntas.length} preguntas.
                    </p>
                  </div>
                  <Link className="self-end" to={nuevaUrl}>
                    <button
                      onClick={handleStartQuiz}
                      className="w-max rounded bg-purple-700 px-24 py-4 font-bold text-white"
                    >
                      FINALIZAR
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4 rounded">
                  <div className="flex flex-col gap-4 rounded bg-purple-200 p-8">
                    <div className="mb-4 border-b border-black pb-4">
                      <p className="mb-1 text-base">
                        Pregunta {currentQuestionIndex + 1} de{" "}
                        {content.preguntas.length}
                      </p>
                      <h2 className="text-2xl font-bold">
                        {content.preguntas[currentQuestionIndex].pregunta}
                      </h2>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4">
                      {content.preguntas[currentQuestionIndex].opciones.map(
                        (option, index) => (
                          <div
                            onClick={() => handleAnswerSelection(index + 1)}
                            key={index}
                            className="group flex items-center justify-start gap-4 hover:cursor-pointer"
                          >
                            <div
                              className={`h-4 w-4 rounded-full border border-black text-left ${selectedAnswer == index + 1 ? `bg-purple-700` : null}`}
                            ></div>
                            <button
                              disabled={answerChecked}
                              className={`flex-1 text-left underline-offset-8 ${selectedAnswer == index + 1 ? `underline` : "group-hover:underline"}`}
                            >
                              {option}
                            </button>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div
                    className={`rounded bg-gray-200 p-8 ${answerChecked ? "block" : "hidden"}`}
                  >
                    {answerChecked && (
                      <p className="flex flex-col gap-2">
                        {selectedAnswer ===
                        content.preguntas[currentQuestionIndex].correcta ? (
                          <>
                            <span className="text-2xl font-bold text-green-700">
                              ¡Correcto!
                            </span>
                            <span>Respuesta correcta. ¡Felicitaciones!</span>
                          </>
                        ) : (
                          <>
                            <span className="text-2xl font-bold text-red-700">
                              Incorrecto
                            </span>
                            <span className="italic line-through">
                              {
                                content.preguntas[currentQuestionIndex]
                                  .opciones[selectedAnswer - 1]
                              }
                            </span>
                            <span>
                              {
                                content.preguntas[currentQuestionIndex]
                                  .opciones[
                                  content.preguntas[currentQuestionIndex]
                                    .correcta - 1
                                ]
                              }
                            </span>
                          </>
                        )}
                      </p>
                    )}
                  </div>
                  {/* Verificar respuesta y mostrar mensaje */}
                  <div className="flex justify-end gap-8">
                    {" "}
                    {selectedAnswer && (
                      <div>
                        <button
                          disabled={answerChecked}
                          onClick={handleVerifyAnswer}
                          className={`rounded px-8 py-2 font-bold text-white ${answerChecked ? "hidden" : "block bg-purple-700 hover:bg-purple-500"}`}
                        >
                          VERIFICAR
                        </button>
                      </div>
                    )}
                    {/* Mostrar botón siguiente solo si se ha verificado */}
                    {answerChecked && (
                      <div>
                        <button
                          onClick={handleNextQuestion}
                          className="rounded bg-purple-700 px-8 py-2 font-bold text-white hover:bg-purple-500"
                        >
                          SIGUIENTE
                        </button>{" "}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

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

// return (
//   <div>
//     <h2>{content.title}</h2>
//     <h2>{puntaje?.puntaje}/100</h2>
//     <p>{content.descripcion}</p>
//     <div>
//       {content.preguntas.map((pr, index) => (
//         <>
//           <p key={index}>{pr.pregunta}</p>
//           <div className="flex flex-col" key={index + 1}>
//             {pr.opciones.map((opcion, index) => (
//               <p key={index}>{opcion}</p>
//             ))}
//           </div>
//           <p key={index + 2}>{pr.correcta}</p>
//         </>
//       ))}
//     </div>
//   </div>
// );

export default Quiz;
