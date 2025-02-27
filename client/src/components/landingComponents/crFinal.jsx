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
const CrInicial = () => {
  const data1 = [
    {
      name: "Muy Alto",
      Total: 2,
    },
    {
      name: "Alto",
      Total: 5,
    },
    {
      name: "Medio",
      Total: 18,
    },
    {
      name: "Bajo",
      Total: 18,
    },
    {
      name: "Muy Bajo",
      Total: 11,
    },
  ];

  const data2 = [
    { name: "5 (Muy seguro/a)", Total: 2 },
    { name: "4 (Bastante seguro/a)", Total: 5 },
    { name: "3 (Neutral)", Total: 3 },
    { name: "2 (Poco seguro/a)", Total: 25 },
    { name: "1 (Nada seguro/a)", Total: 9 },
  ];

  const data3 = [
    { name: "Sí, siempre es suficiente", Total: 4 },
    { name: "Sí, pero con ajustes y limitaciones", Total: 21 },
    { name: "No, suele ser insuficiente", Total: 29 },
  ];

  const data4 = [
    { name: "Sí, regularmente", Total: 8 },
    { name: "Sí, ocasionalmente", Total: 29 },
    { name: "No, no recibo ingresos", Total: 17 },
  ];

  const data5 = [
    { name: "Frecuentemente", Total: 12 },
    { name: "Algunas veces", Total: 6 },
    { name: "Rara vez", Total: 22 },
    { name: "Nunca", Total: 14 },
  ];

  const data6 = [
    { name: "Alimentación", Total: 31 },
    { name: "Transporte", Total: 38 },
    { name: "Entretenimiento", Total: 26 },
    { name: "Materiales escolares", Total: 26 },
    { name: "Actividades sociales", Total: 23 },
    { name: "Ahorro", Total: 13 },
    { name: "Inversión", Total: 5 },
  ];

  const data7 = [
    { name: "Siempre", Total: 4 },
    { name: "A menudo", Total: 14 },
    { name: "Algunas veces", Total: 22 },
    { name: "Nunca", Total: 14 },
  ];

  const data8 = [
    { name: "Sí, he utilizado estas herramientas financieras", Total: 5 },
    { name: "Sí, tengo conocimiento básico sobre cómo funcionan", Total: 12 },
    { name: "Sé algo, pero no tengo experiencia directa", Total: 12 },
    { name: "No sé nada sobre crédito o préstamos", Total: 25 },
  ];

  const data9 = [
    { name: "Sí, conozco varios métodos para el ahorro e inversión", Total: 8 },
    {
      name: "Sí, tengo conocimiento básico sobre métodos para el ahorro e inversión",
      Total: 25,
    },
    {
      name: "Sé algo, pero no tengo gran conocimiento de métodos de ahorro e inversión",
      Total: 19,
    },
    {
      name: "No tengo conocimiento de métodos de ahorro e inversión",
      Total: 2,
    },
  ];

  const data10 = [
    { name: "Sí, tengo algún tipo de ahorro o inversión", Total: 16 },
    { name: "No, no tengo ahorros o inversiones", Total: 38 },
  ];

  const data11 = [
    { name: "Sí, tengo un fondo de emergencia", Total: 4 },
    { name: "Sí, pero recurriría a otras personas o préstamos", Total: 20 },
    { name: "No, no tengo recursos disponibles", Total: 30 },
  ];

  const data12 = [
    { name: "Sí, siempre", Total: 6 },
    { name: "Algunas veces", Total: 13 },
    { name: "Rara vez", Total: 15 },
    { name: "Nunca", Total: 20 },
  ];

  const data13 = [
    { name: "Falta de tiempo", Total: 7 },
    { name: "Falta de interés", Total: 7 },
    { name: "Falta de conocimiento adecuado", Total: 22 },
    { name: "Dificultad para entender conceptos complejos", Total: 18 },
  ];

  const data14 = [
    { name: "Siempre", Total: 11 },
    { name: "A veces", Total: 22 },
    { name: "Nunca", Total: 21 },
  ];

  const data15 = [
    { name: "Si, de manera formal", Total: 6 },
    { name: "Si, de manera ocasional", Total: 25 },
    { name: "No", Total: 23 },
  ];

  const data16 = [
    { name: "Muy buena", Total: 2 },
    { name: "Regular", Total: 12 },
    { name: "Insuficiente", Total: 20 },
    { name: "No recibí", Total: 21 },
  ];

  const data17 = [
    { name: "Familiares o amigos", Total: 11 },
    { name: "Medios de comunicación", Total: 12 },
    { name: "Internet", Total: 18 },
    { name: "No obtengo información", Total: 13 },
  ];

  const data18 = [
    { name: "Sí, es clara y comprensible", Total: 6 },
    { name: "A veces es clara, pero en general es confusa", Total: 27 },
    { name: "No, es difícil de entender", Total: 21 },
  ];

  const data19 = [
    { name: "Elaboración de presupuestos", Total: 35 },
    { name: "Gestión de dinero", Total: 38 },
    { name: "Ahorro e inversión", Total: 41 },
    { name: "Manejo del crédito", Total: 26 },
    { name: "Prevención de deudas", Total: 33 },
    { name: "Apoyos socioeconómicos", Total: 1 },
    { name: "Todo", Total: 1 },
    { name: "Sobre todo", Total: 1 },
    { name: "Montar empresas", Total: 1 },
  ];

  const data20 = [
    { name: "Sí, definitivamente", Total: 52 },
    { name: "No, no me interesa ahora mismo", Total: 2 },
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
            className={`flex h-full w-full flex-col items-center justify-center gap-8 px-0 py-8 lg:px-16`}
          >
            <h1 className="mb-8 line-clamp-2 text-center font-bold text-black sm:line-clamp-none md:text-2xl">
              Seleccione 3 categorías de uso del dinero más frecuentes
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data6}
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
              ¿Sueles ahorrar una parte de tus ingresos (Mensual, semanal)?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data7}
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
              ¿Sabes actualmente sobre el uso de tarjetas de crédito, préstamos
              o créditos?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data8}
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
              ¿Tienes conocimiento de métodos de ahorro e inversión?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data9}
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
              ¿Tienes algún ahorro o inversión actual (en cuentas bancarias,
              fondos, criptomonedas, etc.)?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data10}
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
              Si tuvieras una emergencia financiera, ¿tienes recursos para
              cubrirla?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data11}
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
              ¿Sueles establecer metas financieras mensuales o anuales?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data12}
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
              ¿Qué principal obstáculo crees que podrías enfrentar al intentar
              aplicar conocimientos financieros básicos en tu vida diaria?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data13}
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
              ¿Recibiste clases o talleres sobre educación financiera en la
              escuela?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data15}
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
              ¿Consideras que la información financiera disponible es clara y
              fácil de entender para ti?
            </h1>
            <ResponsiveContainer width="100%" height="75%">
              <BarChart
                width={500}
                height={300}
                data={data18}
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
              ¿Qué aspectos de las finanzas personales te gustaría aprender más
              a fondo? (Selecciona todas las que apliquen)
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
              ¿Te gustaría aprender a ahorrar o gestionar mejor tu dinero para
              tus estudios y metas personales?
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
                  fill="#86efac"
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

export default CrInicial;
