// import React from "react";
import focus from "../../public/assets/icons/focus.svg";
import github from "../../public/assets/icons/github.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";
import instagram from "../../public/assets/icons/instagram.svg";
import left from "../../public/assets/icons/arrowLeft.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-black px-10 py-16">
      <div className="flex h-auto w-full max-w-[1320px] flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-12 text-white sm:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6 flex flex-col gap-4 pr-2">
            <div className="flex flex-row gap-4">
              <figure className="mb-1 h-16 animate-[spin_16s_linear_infinite]">
                <img className="h-full" src={focus} alt="Focus LOGO" />
              </figure>
              <h1 className="select-none font-schabo text-6xl tracking-widest">
                FOCUS
              </h1>
            </div>
            <p className="text-pretty text-xl font-bold">
              Finanzas Organizadas para Crecimiento y Uso Sostenible
            </p>
            <p className="text-pretty">
              Soluciones tecnologicas para el déficit de educación y gestión
              financiera.
            </p>
            <button className="h-11 w-full rounded-sm border-2 border-transparent bg-purple-700 px-8 align-middle font-semibold hover:bg-purple-600">
              <div className="flex h-full items-center justify-center">
                <p className="line-clamp-1">Aprendizaje</p>
                <img className="h-7" src={left} alt="" />
              </div>
            </button>
            <button className="h-11 w-full rounded-sm border-2 border-transparent bg-purple-700 px-8 align-middle font-semibold hover:bg-purple-600">
              <div className="flex h-full items-center justify-center">
                <p className="line-clamp-1">Gestor Financiero</p>
                <img className="h-7" src={left} alt="" />
              </div>
            </button>
          </div>

          <div className="">
            <h2 className="mb text-xl font-bold">NORMATIVAS</h2>
            <div className="my-4 h-2 w-20 bg-purple-900"></div>
            <ul className="flex list-disc flex-col gap-2">
              <a
                target="_blank"
                href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Ley 1581 de 2012
              </a>

              <a
                target="_blank"
                href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36841"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Ley 1328 de 2009
              </a>

              <a
                target="_blank"
                href="https://www.ramajudicial.gov.co/documents/5454330/14491339/norma-iso-19011-2018.pdf/5e630ca4-b75d-4cb9-89be-7fbd1b4b5b27"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Ley 1901 de 2018
              </a>
              <a
                target="_blank"
                href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3431"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Ley 23 de 1982
              </a>
              <a
                target="_blank"
                href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Decreto 1377 de 2013
              </a>
              <a
                target="_blank"
                href="https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3674.pdf"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                CONPES 3674 de 2010
              </a>
              <a
                target="_blank"
                href="https://www.un.org/sustainabledevelopment/es/"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                17 ODS de la ONU
              </a>
            </ul>
          </div>

          <div className="">
            <h2 className="mb text-xl font-bold">RECURSOS</h2>
            <div className="my-4 h-2 w-20 bg-purple-900"></div>
            <ul className="flex list-disc flex-col gap-2">
              <a
                target="_blank"
                href="https://es.khanacademy.org/"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Khan Academy
              </a>
              <a
                target="_blank"
                href="https://www.bbva.com.co/personas/blog/educacion-financiera.html"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Banco BBVA
              </a>
              <a
                target="_blank"
                href="https://mispropiasfinanzas.com/"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Mis Propias Finanzas
              </a>
              <a
                target="_blank"
                href="https://www.svgrepo.com/"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                SVGREPO
              </a>
              <a
                target="_blank"
                href="https://www.freepik.com/"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Freepik
              </a>
              <a
                target="_blank"
                href="https://dribbble.com/shots/popular/web-design"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                Dribbble
              </a>
              <a
                target="_blank"
                href="https://unal.edu.co/"
                className="underline-offset-8 hover:text-purple-500 hover:underline"
              >
                UNAL
              </a>
            </ul>
          </div>

          <div className="">
            <h2 className="mb text-xl font-bold">CONTACTO</h2>
            <div className="my-4 h-2 w-20 bg-purple-900"></div>
            <ul className="flex list-disc flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p>Miguel Angel Suarez Montiel</p>
                <div className="flex w-full flex-row gap-4">
                  <a
                    target="_blank"
                    href="https://github.com/miguelsrz"
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={github} alt="" />
                    </figure>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white p-2 transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={linkedin} alt="" />
                    </figure>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white p-2 transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={instagram} alt="" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p>Cristian Rodolfo Parada Estupiñan</p>
                <div className="flex w-full flex-row gap-4">
                  <a
                    target="_blank"
                    href="https://github.com/miguelsrz"
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={github} alt="" />
                    </figure>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white p-2 transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={linkedin} alt="" />
                    </figure>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white p-2 transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={instagram} alt="" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p>Edgar David Arias Castañeda</p>
                <div className="flex w-full flex-row gap-4">
                  <a
                    target="_blank"
                    href="https://github.com/miguelsrz"
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={github} alt="" />
                    </figure>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white p-2 transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={linkedin} alt="" />
                    </figure>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="underline-offset-8 hover:text-purple-500 hover:underline"
                  >
                    <figure className="h-10 w-10 rounded-full bg-white p-2 transition-all duration-200 ease-in-out hover:bg-purple-400">
                      <img className="h-full w-full" src={instagram} alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 text-gray-400">
          <div className="flex flex-col gap-8 pt-8 xl:flex-row xl:justify-between">
            <p className="text-center xl:text-left">
              Universidad Nacional de Colombia - Sede Bogota
            </p>
            <div className="flex flex-col justify-center gap-1 sm:flex-row xl:justify-start">
              <p className="text-center xl:text-left">Creador pagina: </p>
              <a
                className="text-center underline-offset-8 hover:text-white hover:underline xl:text-left"
                target="_blank"
                href="https://github.com/miguelsrz"
              >
                Miguel Angel Suarez Montiel
              </a>
            </div>
            <p className="text-center xl:text-left">
              Ultima actualizacion: Enero 18 de 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
