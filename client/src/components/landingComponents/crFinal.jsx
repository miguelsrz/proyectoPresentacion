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

import { Carousel } from "flowbite-react";

const CrFinal = () => {
  const data1 = [
    {
      name: "Muy Alto",
      Total: 16,
    },
    {
      name: "Alto",
      Total: 27,
    },
    {
      name: "Medio",
      Total: 12,
    },
    {
      name: "Bajo",
      Total: 2,
    },
    {
      name: "Muy Bajo",
      Total: 2,
    },
  ];
  return (
    <>
      <Carousel
        slide={false}
        className="bg-white px-0"
        // leftControl="bg-black rounded"
      >
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-8 px-16 py-8`}
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
      </Carousel>
    </>
  );
};

export default CrFinal;
