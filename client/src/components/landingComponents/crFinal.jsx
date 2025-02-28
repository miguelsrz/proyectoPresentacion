import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Flowbite, Carousel } from "flowbite-react";
const customTheme = {
  carousel: {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 group-hover:bg-purple-500 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full  -translate-x-1/2 -translate-y-1/2",
    },
    indicators: {
      active: {
        off: "bg-purple-400/50 hover:bg-purple-700 dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-purple-700 dark:bg-gray-800",
      },
    },
  },
};
const CrFinal = () => {
  const data1 = [
    { name: "Muy Alto", Total: 7 },
    { name: "Alto", Total: 12 },
    { name: "Medio", Total: 20 },
    { name: "Bajo", Total: 10 },
    { name: "Muy Bajo", Total: 5 },
  ];

  const data2 = [
    { name: "5 (Muy seguro/a)", Total: 6 },
    { name: "4 (Bastante seguro/a)", Total: 10 },
    { name: "3 (Neutral)", Total: 8 },
    { name: "2 (Poco seguro/a)", Total: 20 },
    { name: "1 (Nada seguro/a)", Total: 6 },
  ];

  const data3 = [
    { name: "Sí, siempre es suficiente", Total: 8 },
    { name: "Sí, pero con ajustes y limitaciones", Total: 24 },
    { name: "No, suele ser insuficiente", Total: 22 },
  ];

  const data4 = [
    { name: "Sí, regularmente", Total: 12 },
    { name: "Sí, ocasionalmente", Total: 30 },
    { name: "No, no recibo ingresos", Total: 12 },
  ];

  const data5 = [
    { name: "Frecuentemente", Total: 18 },
    { name: "Algunas veces", Total: 10 },
    { name: "Rara vez", Total: 18 },
    { name: "Nunca", Total: 8 },
  ];

  const data6 = [
    { name: "Alimentación", Total: 30 },
    { name: "Transporte", Total: 35 },
    { name: "Entretenimiento", Total: 24 },
    { name: "Materiales escolares", Total: 22 },
    { name: "Actividades sociales", Total: 20 },
    { name: "Ahorro", Total: 18 },
    { name: "Inversión", Total: 8 },
  ];

  const data7 = [
    { name: "Siempre", Total: 6 },
    { name: "A menudo", Total: 18 },
    { name: "Algunas veces", Total: 20 },
    { name: "Nunca", Total: 10 },
  ];

  const data8 = [
    { name: "Sí, he utilizado estas herramientas financieras", Total: 8 },
    { name: "Sí, tengo conocimiento básico sobre cómo funcionan", Total: 15 },
    { name: "Sé algo, pero no tengo experiencia directa", Total: 15 },
    { name: "No sé nada sobre crédito o préstamos", Total: 16 },
  ];

  const data9 = [
    {
      name: "Sí, conozco varios métodos para el ahorro e inversión",
      Total: 12,
    },
    {
      name: "Sí, tengo conocimiento básico sobre métodos para el ahorro e inversión",
      Total: 28,
    },
    {
      name: "Sé algo, pero no tengo gran conocimiento de métodos de ahorro e inversión",
      Total: 14,
    },
    {
      name: "No tengo conocimiento de métodos de ahorro e inversión",
      Total: 0,
    },
  ];

  const data10 = [
    { name: "Sí, tengo algún tipo de ahorro o inversión", Total: 22 },
    { name: "No, no tengo ahorros o inversiones", Total: 32 },
  ];

  const data11 = [
    { name: "Sí, tengo un fondo de emergencia", Total: 8 },
    { name: "Sí, pero recurriría a otras personas o préstamos", Total: 24 },
    { name: "No, no tengo recursos disponibles", Total: 22 },
  ];

  const data12 = [
    { name: "Sí, siempre", Total: 10 },
    { name: "Algunas veces", Total: 18 },
    { name: "Rara vez", Total: 12 },
    { name: "Nunca", Total: 14 },
  ];

  const data13 = [
    { name: "Falta de tiempo", Total: 6 },
    { name: "Falta de interés", Total: 6 },
    { name: "Falta de conocimiento adecuado", Total: 18 },
    { name: "Dificultad para entender conceptos complejos", Total: 15 },
  ];

  const data14 = [
    { name: "Siempre", Total: 14 },
    { name: "A veces", Total: 25 },
    { name: "Nunca", Total: 15 },
  ];

  const data15 = [
    { name: "Si, de manera formal", Total: 10 },
    { name: "Si, de manera ocasional", Total: 28 },
    { name: "No", Total: 16 },
  ];

  const data16 = [
    { name: "Muy buena", Total: 5 },
    { name: "Regular", Total: 16 },
    { name: "Insuficiente", Total: 18 },
    { name: "No recibí", Total: 18 },
  ];

  const data17 = [
    { name: "Familiares o amigos", Total: 10 },
    { name: "Medios de comunicación", Total: 10 },
    { name: "Internet", Total: 22 },
    { name: "No obtengo información", Total: 10 },
  ];

  const data18 = [
    { name: "Sí, es clara y comprensible", Total: 10 },
    { name: "A veces es clara, pero en general es confusa", Total: 28 },
    { name: "No, es difícil de entender", Total: 16 },
  ];

  const data19 = [
    { name: "Elaboración de presupuestos", Total: 38 },
    { name: "Gestión de dinero", Total: 40 },
    { name: "Ahorro e inversión", Total: 44 },
    { name: "Manejo del crédito", Total: 30 },
    { name: "Prevención de deudas", Total: 35 },
    { name: "Apoyos socioeconómicos", Total: 2 },
  ];

  const data20 = [
    { name: "Sí, definitivamente", Total: 48 },
    { name: "No realmente", Total: 6 },
  ];

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel
          slide={false}
          className="bg-white px-0"
          // leftControl="bg-black rounded"
        >
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Cómo calificarías tu nivel de conocimiento sobre finanzas
              personales actualmente?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`line-clamp-1 flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              En una escala del 1 al 5, ¿Cómo calificarías tu nivel de confianza
              al tomar decisiones financieras importantes (ahorrar para el
              futuro, etc.)?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#86efac"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Sientes que el dinero que recibes mensualmente es suficiente para
              cubrir tus gastos básicos (comida, transporte, materiales
              académicos, etc.)?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data3}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#7dd3fc"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Recibes ingresos de alguna fuente regular (por ejemplo,
              familiares, becas, trabajos)?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data4}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`line-clamp-1 flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Qué tan a menudo te quedas sin dinero antes de que termine el
              mes?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data5}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#86efac"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`line-clamp-1 flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Sueles comparar precios antes de realizar una compra importante?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data14}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#7dd3fc"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Cómo calificarías la educación financiera que recibiste en el
              colegio?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data16}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`line-clamp-1 flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Cuál es la fuente principal donde sueles obtener información
              sobre cómo manejar tu dinero?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data17}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#86efac"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Qué aspectos de las finanzas personales consideras has aprendido
              y aplicado mejor? (Selecciona todas las que apliquen)
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data19}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>

          <div
            className={`line-clamp-1 flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              ¿Consideras apropiados los contenidos y su estructura de la
              herramienta Aprendizaje para el correcto aprendizaje de las
              finanzas personales?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data20}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Total"
                  fill="#7dd3fc"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>{" "}
          </div>
        </Carousel>
      </Flowbite>
    </>
  );
};

export default CrFinal;
