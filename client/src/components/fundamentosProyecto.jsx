import { useContext, useState } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration2 from "../../public/assets/deco/bgDecoration2.svg";
import img10 from "../../public/assets/imgs/img10.webp";
import img11 from "../../public/assets/imgs/img11.webp";
import img12 from "../../public/assets/imgs/img12.webp";
import img13 from "../../public/assets/imgs/img13.avif";
import img4 from "../../public/assets/imgs/img4.webp";
import img5 from "../../public/assets/imgs/img5.webp";
import img8 from "../../public/assets/imgs/img8.webp";
import img9 from "../../public/assets/imgs/img9.webp";
import down from "../../public/assets/icons/arrowDown.svg";

// import techWave from "../../public/assets/pngGradient.png";

const FundamentosProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "fundamentos";

  const [activeBox, setActiveBox] = useState(null);

  const handleBox = (box) => {
    if (activeBox == box) {
      setActiveBox(null);
    } else {
      setActiveBox(box);
    }
    console.log(activeBox);
  };

  const boxes = [0, 1, 2, 3, 4, 5];

  if (activeComponent === thisComponent) {
    return (
      <>
        <section
          id="intro"
          className="relative z-20 flex min-h-[750px] justify-center bg-purple-100 px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration2}
            alt=""
          />
          <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
            <figure className="relative z-10 flex h-[320px] w-full sm:h-[480px] xl:h-auto">
              <img
                src={img9}
                alt="Proyecto"
                className="z-10 h-full w-full object-cover shadow"
              />
              <div className="absolute right-[5%] top-[5%] z-0 h-full w-full border-2 border-black"></div>
              <div className="absolute bottom-[2%] right-[2%] z-0 h-full w-full bg-black"></div>
            </figure>
            <div className="xl:ml-12">
              <h2 className="mb-9 font-schabo text-6xl tracking-widest sm:text-7xl lg:text-8xl">
                ANTECEDENTE <span className="text-purple-900">DESTACADO</span>
              </h2>
              <p className="mb-9 text-balance">
                Este proyecto fue inspirado por el plan realizado en el año 2013
                por el Banco de la República de Colombia, el cual consistía en
                crear un programa de educación financiera para los jóvenes de
                las escuelas.
              </p>
              <p className="mb-9 text-balance">
                El propósito fue encargado por el ministerio de educación
                nacional (MEN), que buscaba aumentar el conocimiento y el uso de
                servicios y productos financieros por parte de los jóvenes, todo
                esto con el fin de fomentar el ahorro y el uso responsable del
                dinero de los mismos, para lograr esto creó un programa
                educativo para transmitir los conceptos y planificación básicos
                de las finanzas personales con el objetivo de educar a los
                jóvenes en educación financiera (Banco de la República, 2013).
                Esto inspiró nuestro proyecto a desarrollar una solución
                tecnológica donde buscamos orientar a los estudiantes
                universitarios a mejorar sus gestiones financieras de una manera
                práctica y accesible.
              </p>
            </div>
          </div>

          <img
            className="absolute -bottom-[10px] left-0 w-1/2 -scale-y-100 md:-bottom-[25px] xl:-bottom-[40px]"
            src={bgDecoration2}
            alt=""
          />
        </section>

        <section
          id="intro"
          className="relative z-10 flex min-h-[750px] justify-center bg-white px-10 py-20 text-gray-950 sm:px-16"
        >
          <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 md:grid-cols-2 xl:gap-8">
            <div className="col-span-1 grid-cols-subgrid xl:mr-12">
              <h2 className="mb-9 font-schabo text-6xl tracking-widest text-gray-950 sm:text-7xl lg:text-8xl">
                MARCO <span className="text-purple-900">REFERENCIAL</span>
              </h2>
              <div className="flex flex-col gap-8">
                <section className="relative z-0 h-auto w-auto rounded bg-black shadow-lg sm:col-span-1">
                  <div
                    onClick={() => handleBox(boxes[0])}
                    className="group relative h-16 cursor-pointer"
                  >
                    <figure className="absolute z-[-1] h-16 w-full opacity-15 bg-blend-luminosity transition-all duration-200 ease-in-out group-hover:opacity-30">
                      <img
                        className="h-full w-full object-cover"
                        src={img10}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`flex h-full justify-start align-middle transition-all duration-500 ease-in-out`}
                    >
                      {/* <div className="h-1 w-20 bg-purple-900"></div> */}
                      <h2 className="flex h-full w-48 flex-col justify-center bg-black px-8 text-base font-bold text-white sm:w-[220px] sm:text-xl">
                        <div className="h-max">TEORICO</div>
                      </h2>
                    </div>

                    <figure
                      className={`absolute bottom-0 right-0 h-16 p-2 transition-all duration-500 ease-in-out ${activeBox == boxes[0] ? "rotate-180" : "rotate-0"}`}
                    >
                      <img className="h-full" src={down} alt="Pen SVG" />
                    </figure>
                  </div>

                  <article
                    className={`relative z-0 flex flex-col justify-start overflow-hidden overflow-y-scroll rounded bg-white text-black transition-all duration-500 ease-in-out ${activeBox == boxes[0] ? "h-64 border border-black" : "h-0 border-0"}`}
                  >
                    {/* <figure className="absolute z-[-1] h-full w-full opacity-25 transition-all duration-200 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={img9}
                      alt=""
                    />
                  </figure> */}

                    <div
                      className={`px-8 ${activeBox == boxes[0] ? "py-8" : "py-0"} transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-xl font-bold">
                        BASES DE CONOCIMIENTO
                      </h2>
                      <div className="my-4 h-0.5 bg-black"></div>
                      <p className="mb-8">
                        <span className="font-bold">
                          Finanzas personales en jovenes.
                        </span>{" "}
                        La educación financiera le permite a muchos jóvenes
                        establecer sus propias metas financieras de forma
                        realista, logrando que los jóvenes puedan planificar y
                        trabajar en sus propios objetivos financieros a largo
                        plazo e impulsandolos a su vez a tomar decisiones
                        responsables ayudándoles a vivir de acuerdo a sus
                        capacidades económicas y de esta manera evitandoles
                        deudas y gastos innecesarios.
                      </p>

                      <p className="mb-8">
                        <span className="font-bold">
                          Estrategias financieras.
                        </span>{" "}
                        Las estrategias financieras son muy esenciales en las
                        empresas ya que estas ayudan a garantizar su
                        sostenibilidad y desarrollo, de esta manera se logra
                        crear un ambiente de confianza para los inversionistas,
                        logrando garantizar un flujo del dinero de manera
                        adecuada, para esto se proponen estrategias como: la
                        inversión, estrategias de costes y la gestión de los
                        riesgos.
                      </p>
                      <p className="mb-8">
                        <span className="font-bold">Desarrollo web.</span> Los
                        sitios web es una de las herramientas fundamentales en
                        nuestra vida diaria y que las empresas sin importar su
                        tamaño también dependen de estas herramientas digitales
                        para lograr llegar a sus clientes más potenciales,
                        además los desarrollos web son esenciales a la hora de
                        mejorar la calidad educativa y el entretenimiento de las
                        personas
                      </p>
                    </div>
                  </article>
                </section>

                <section className="relative z-0 h-auto w-auto rounded bg-gray-600 shadow-lg sm:col-span-1">
                  <div
                    onClick={() => handleBox(boxes[1])}
                    className="group relative h-16 cursor-pointer"
                  >
                    <figure className="absolute z-[-1] h-16 w-full opacity-15 bg-blend-luminosity transition-all duration-200 ease-in-out group-hover:opacity-30">
                      <img
                        className="h-full w-full object-cover"
                        src={img11}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`flex h-full justify-start align-middle transition-all duration-500 ease-in-out`}
                    >
                      {/* <div className="h-1 w-20 bg-purple-900"></div> */}
                      <h2 className="flex h-full w-48 flex-col justify-center bg-gray-600 px-8 text-base font-bold text-white sm:w-[220px] sm:text-xl">
                        <div className="h-max">CONCEPTUAL</div>
                      </h2>
                    </div>
                    <figure
                      className={`absolute bottom-0 right-0 h-16 p-2 transition-all duration-500 ease-in-out ${activeBox == boxes[1] ? "rotate-180" : "rotate-0"}`}
                    >
                      <img className="h-full" src={down} alt="Pen SVG" />
                    </figure>
                  </div>
                  <article
                    className={`relative z-0 flex flex-col justify-start overflow-hidden overflow-y-scroll rounded bg-white text-black transition-all duration-500 ease-in-out ${activeBox == boxes[1] ? "h-64 border border-black" : "h-0 border-0"}`}
                  >
                    {/* <figure className="absolute z-[-1] h-full w-full opacity-25 transition-all duration-200 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={img9}
                      alt=""
                    />
                  </figure> */}

                    <div
                      className={`px-8 ${activeBox == boxes[1] ? "py-8" : "py-0"} transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-xl font-bold">
                        COMPRESION DEL PROYECTO
                      </h2>
                      <div className="my-4 h-0.5 bg-black"></div>
                      <p className="mb-8">
                        <span className="font-bold">Finanzas.</span> Se definen
                        las finanzas como el campo de estudio que ocupa la
                        gestión del dinero en sus diferentes formas. Activos,
                        pasivos, inversiones, entre otros. Esto tanto a nivel
                        personal como empresarial.
                      </p>
                      <p className="mb-8">
                        <span className="font-bold">Finanzas personales.</span>{" "}
                        Se centra en la administración de los recursos
                        financieros de manera individual. Refiriendo al
                        desarrollo de habilidades y conocimientos para acertadas
                        decisiones respecto al establecimiento de objetivos con
                        excelente planificación al futuro, ahorro, inversión,
                        control de deudas.
                      </p>
                      <p className="mb-8">
                        <span className="font-bold">Ciencia de datos.</span>{" "}
                        Disciplina que emplea métodos, algoritmos y sistemas
                        para la extracción de conocimiento, obteniendo
                        conclusiones a partir de los datos. Por medio de la
                        recolección, limpieza, análisis y visualización de datos
                        se toman decisiones objetivas para la resolución de
                        problemas.
                      </p>
                      <p className="mb-8">
                        <span className="font-bold">
                          Ingenieria de software.
                        </span>{" "}
                        Disciplina de la ingeniería encargada del diseño,
                        desarrollo, mantenimiento y gestión del software. Al
                        utilizar los principios de la ingeniería, se garantizan
                        sistemas informáticos eficientes, escalables y
                        funcionales.
                      </p>
                      <p className="mb-8">
                        <span className="font-bold">Desarrollo web.</span>{" "}
                        Creación y mantenimiento de sitios web. Abarcando el
                        diseño y programación de las diversas interfaces,
                        asegurando además la funcionalidad y experiencia del
                        usuario.
                      </p>
                    </div>
                  </article>
                </section>

                <section className="relative z-0 h-auto w-auto rounded bg-purple-900 shadow-lg sm:col-span-1">
                  <div
                    onClick={() => handleBox(boxes[2])}
                    className="group relative h-16 cursor-pointer"
                  >
                    <figure className="absolute z-[-1] h-16 w-full opacity-15 bg-blend-luminosity transition-all duration-200 ease-in-out group-hover:opacity-30">
                      <img
                        className="h-full w-full object-cover"
                        src={img12}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`flex h-full justify-start align-middle transition-all duration-500 ease-in-out`}
                    >
                      {/* <div className="h-1 w-20 bg-purple-900"></div> */}
                      <h2 className="flex h-full w-48 flex-col justify-center bg-purple-900 px-8 text-base font-bold text-white sm:w-[220px] sm:text-xl">
                        <div className="h-max">HISTORICO</div>
                      </h2>
                    </div>
                    <figure
                      className={`absolute bottom-0 right-0 h-16 p-2 transition-all duration-500 ease-in-out ${activeBox == boxes[2] ? "rotate-180" : "rotate-0"}`}
                    >
                      <img className="h-full" src={down} alt="Pen SVG" />
                    </figure>
                  </div>

                  <article
                    className={`relative z-0 flex flex-col justify-start overflow-hidden overflow-y-scroll rounded bg-white text-black transition-all duration-500 ease-in-out ${activeBox == boxes[2] ? "h-64 border border-black" : "h-0 border-0"}`}
                  >
                    {/* <figure className="absolute z-[-1] h-full w-full opacity-25 transition-all duration-200 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={img9}
                      alt=""
                    />
                  </figure> */}

                    <div
                      className={`px-8 ${activeBox == boxes[2] ? "py-8" : "py-0"} transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-xl font-bold">AVANCE PROBLEMATICA</h2>
                      <div className="my-4 h-0.5 bg-black"></div>
                      <p className="mb-8">
                        Se denota una ausencia de educación financiera en la
                        formación académica fundamental que la mayoría de las
                        personas recibe por los distintos organismos educativos,
                        principalmente en el colegio. Haciendo un censo general,
                        podemos ver cómo la mayoría de la gente está inconforme
                        con no haber tenido educación financiera antes de
                        cumplir la mayoría de edad. Esto puede llegar a ser
                        justificable puesto que a una temprana edad no se suele
                        tener acceso a recursos económicos, lo cual es
                        indispensable para el aprendizaje del manejo de estos.
                      </p>
                      <p className="mb-8">
                        Sin embargo, esto debe cambiar cuando se trata de la
                        educación superior, pues estamos hablando de estudiantes
                        adultos o a punto de serlo, que se aproximan a temas
                        como el trabajo y demás aspiraciones profesionales. Aún
                        en nuestra época no vemos un esfuerzo por parte de esta
                        alma mater para inducir a los estudiantes a una correcta
                        vida financiera, habiendo departamentos de desarrollo
                        integral como los de actividad física, cultura, salud,
                        pero no en el campo financiero.
                      </p>
                    </div>
                  </article>
                </section>

                <section className="relative z-0 h-auto w-auto rounded bg-black shadow-lg sm:col-span-1">
                  <div
                    onClick={() => handleBox(boxes[3])}
                    className="group relative h-16 cursor-pointer"
                  >
                    <figure className="absolute z-[-1] h-16 w-full opacity-15 bg-blend-luminosity transition-all duration-200 ease-in-out group-hover:opacity-30">
                      <img
                        className="h-full w-full object-cover"
                        src={img13}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`flex h-full justify-start align-middle transition-all duration-500 ease-in-out`}
                    >
                      {/* <div className="h-1 w-20 bg-purple-900"></div> */}
                      <h2 className="flex h-full w-48 flex-col justify-center bg-black px-8 text-base font-bold text-white sm:w-[220px] sm:text-xl">
                        <div className="h-max">DEMOGRAFICO</div>
                      </h2>
                    </div>
                    <figure
                      className={`absolute bottom-0 right-0 h-16 p-2 transition-all duration-500 ease-in-out ${activeBox == boxes[3] ? "rotate-180" : "rotate-0"}`}
                    >
                      <img className="h-full" src={down} alt="Pen SVG" />
                    </figure>
                  </div>

                  <article
                    className={`relative z-0 flex flex-col justify-start overflow-hidden overflow-y-scroll rounded bg-white text-black transition-all duration-500 ease-in-out ${activeBox == boxes[3] ? "h-64 border border-black" : "h-0 border-0"}`}
                  >
                    {/* <figure className="absolute z-[-1] h-full w-full opacity-25 transition-all duration-200 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={img9}
                      alt=""
                    />
                  </figure> */}

                    <div
                      className={`px-8 ${activeBox == boxes[3] ? "py-8" : "py-0"} transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-xl font-bold">POBLACION ENFOCADA</h2>
                      <div className="my-4 h-0.5 bg-black"></div>
                      <p className="mb-8">
                        Estando el mismo centrado en el desarrollo de las
                        habilidades y conocimientos financieros de los distintos
                        estudiantes, hemos de conocer la población que recorre
                        la Universidad Nacional de Colombia todos los días. Nos
                        damos cuenta fácilmente que dicha población es diversa y
                        heterogénea, permitiendo un extenso catálogo de
                        resultados dependiendo de, por mencionar algunos
                        factores, el estrato socioeconómico, la edad, los
                        ingresos y gastos mensuales, historial académico, etc
                      </p>
                      <p className="mb-8">
                        Esta población estudio demuestra no tener los
                        suficientes conocimientos financieros para tener un
                        correcto manejo de sus recursos económicos, según
                        situaciones expresadas por los mismos estudiantes. Es
                        preciso aclarar que estos problemas están presentes en
                        todos los estratos, pero es más evidente en personas
                        provenientes de estratos un poco bajos. Por lo tanto, es
                        menester general proveer las herramientas necesarias
                        para que jóvenes a punto de entrar en su vida adulta
                        sepan cómo no quedarse varados por dinero.
                      </p>
                    </div>
                  </article>
                </section>

                <section className="relative z-0 h-auto w-auto rounded bg-gray-600 shadow-lg sm:col-span-1">
                  <div
                    onClick={() => handleBox(boxes[4])}
                    className="group relative h-16 cursor-pointer"
                  >
                    <figure className="absolute z-[-1] h-16 w-full opacity-15 bg-blend-luminosity transition-all duration-200 ease-in-out group-hover:opacity-30">
                      <img
                        className="h-full w-full object-cover"
                        src={img4}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`flex h-full justify-start align-middle transition-all duration-500 ease-in-out`}
                    >
                      {/* <div className="h-1 w-20 bg-purple-900"></div> */}
                      <h2 className="flex h-full w-48 flex-col justify-center bg-gray-600 px-8 text-base font-bold text-white sm:w-[220px] sm:text-xl">
                        <div className="h-max">LEGAL</div>
                      </h2>
                    </div>
                    <figure
                      className={`absolute bottom-0 right-0 h-16 p-2 transition-all duration-500 ease-in-out ${activeBox == boxes[4] ? "rotate-180" : "rotate-0"}`}
                    >
                      <img className="h-full" src={down} alt="Pen SVG" />
                    </figure>
                  </div>

                  <article
                    className={`relative z-0 flex flex-col justify-start overflow-hidden overflow-y-scroll rounded bg-white text-black transition-all duration-500 ease-in-out ${activeBox == boxes[4] ? "h-64 border border-black" : "h-0 border-0"}`}
                  >
                    {/* <figure className="absolute z-[-1] h-full w-full opacity-25 transition-all duration-200 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={img9}
                      alt=""
                    />
                  </figure> */}

                    <div
                      className={`px-8 ${activeBox == boxes[4] ? "py-8" : "py-0"} transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-xl font-bold">
                        PROTECCION DE DERECHOS
                      </h2>
                      <div className="my-4 h-0.5 bg-black"></div>
                      <p className="mb-8">
                        Como primer enfoque, se establecen las bases para el
                        manejo de datos personales de usuarios, especialmente
                        por las encuestas necesarias y el gestor financiero: La
                        Ley 1581 de 2012 (Ley Habeas Data) de Protección de
                        Datos Personales junto con el Decreto 1377 de 2013
                        garantizan que la información personal de los usuarios
                        sea recolectada y almacenada de manera ética, incluyendo
                        la implementación de consentimientos informados e
                        información disponible a los estudiantes sobre sus
                        derechos respecto a sus datos.
                      </p>
                      <p className="mb-8">
                        En un segundo enfoque, se relaciona la educación
                        financiera por medio de la Ley 1328 de 2009, que la
                        promueve en Colombia, resaltando la importancia de
                        fomentar la alfabetización financiera en todos para la
                        toma de decisiones económicas. Además, se incluye el
                        CONPES 3674 de 2010 que busca incrementar la inclusión
                        financiera por medio de estrategias accesibles para toda
                        la población.
                      </p>
                      <p className="mb-8">
                        Para el tercer enfoque, se aseguran los principios de
                        responsabilidad, promoviendo un enfoque ético y
                        sostenible en el desarrollo del proyecto por medio de la
                        Ley 1901 de 2018. Incluso, respetando la propiedad
                        intelectual cumpliendo lineamientos establecidos en la
                        Ley 23 de 1982 sobre Derechos de Autor. Que prioriza que
                        las herramientas desarrolladas se utilicen y distribuyan
                        de manera ética, respetando la autoría donde se
                        requiera.
                      </p>
                      <p className="mb-8">
                        Finalmente, los Objetivos de Desarrollo Sostenible (ODS)
                        en sus numerales 4 “Educación de calidad” y 8 “Trabajo
                        decente y crecimiento económico” resaltan la importancia
                        de una educación equitativa y de calidad, que incluye la
                        alfabetización financiera como base esencial para el
                        desarrollo personal y profesional.
                      </p>
                    </div>
                  </article>
                </section>

                <section className="relative z-0 h-auto w-auto rounded bg-purple-900 shadow-lg sm:col-span-1">
                  <div
                    onClick={() => handleBox(boxes[5])}
                    className="group relative h-16 cursor-pointer"
                  >
                    <figure className="absolute z-[-1] h-16 w-full opacity-15 bg-blend-luminosity transition-all duration-200 ease-in-out group-hover:opacity-30">
                      <img
                        className="h-full w-full object-cover"
                        src={img5}
                        alt=""
                      />
                    </figure>
                    <div
                      className={`flex h-full justify-start align-middle transition-all duration-500 ease-in-out`}
                    >
                      {/* <div className="h-1 w-20 bg-purple-900"></div> */}
                      <h2 className="flex h-full w-48 flex-col justify-center bg-purple-900 px-8 text-base font-bold text-white sm:w-[220px] sm:text-xl">
                        <div className="h-max">ETICO</div>
                      </h2>
                    </div>
                    <figure
                      className={`absolute bottom-0 right-0 h-16 p-2 transition-all duration-500 ease-in-out ${activeBox == boxes[5] ? "rotate-180" : "rotate-0"}`}
                    >
                      <img className="h-full" src={down} alt="Pen SVG" />
                    </figure>
                  </div>

                  <article
                    className={`relative z-0 flex flex-col justify-start overflow-hidden overflow-y-scroll rounded bg-white text-black transition-all duration-500 ease-in-out ${activeBox == boxes[5] ? "h-64 border border-black" : "h-0 border-0"}`}
                  >
                    {/* <figure className="absolute z-[-1] h-full w-full opacity-25 transition-all duration-200 ease-in-out">
                    <img
                      className="h-full w-full object-cover"
                      src={img9}
                      alt=""
                    />
                  </figure> */}

                    <div
                      className={`px-8 ${activeBox == boxes[5] ? "py-8" : "py-0"} transition-all duration-500 ease-in-out`}
                    >
                      <h2 className="text-xl font-bold">DEBERES Y MORAL</h2>
                      <div className="my-4 h-0.5 bg-black"></div>
                      <p className="mb-8">
                        La educación financiera está relacionada con los
                        Derechos Fundamentales del Hombre, donde se nos deja
                        claro que la educación es un derecho fundamental para
                        todas las personas, y aquí, por supuesto, está incluido
                        el tema financiero. Es un deber ético para el Estado
                        promover estas herramientas de educación, o en su
                        contraparte, cada persona debería interesarse en aportar
                        al problema. También, se debe tener una confidencialidad
                        ética cuando se tratan los datos de las personas
                        estudiadas, sin usarlos para el fin para el cual están
                        supuestos. La equidad en una sociedad también responde a
                        una necesidad moral de la accesibilidad de recursos
                        igualitarios para todos.
                      </p>
                      <p className="mb-8">
                        De esta forma, contribuyendo de manera individual,
                        teniendo la ética en cuenta, podemos construir una
                        sociedad con una moral que no menosprecie los problemas
                        económicos. Además, como recurso ético indispensable, se
                        procederá a hacer un aclaramiento público a todos los
                        sujetos de estudio, puesto que, según el Decreto 1377 de
                        2013: “Desarrollar el derecho constitucional que tienen
                        todas las personas a conocer, actualizar y rectificar
                        las informaciones que se hayan recogido sobre ellas en
                        bases de datos o archivos”, todos tienen derecho a saber
                        que están siendo estudiados.
                      </p>
                    </div>
                  </article>
                </section>
              </div>
            </div>
            <figure className="relative z-10 flex h-[480px] w-full md:h-full">
              <img
                src={img8}
                alt="Proyecto"
                className="z-10 h-full object-cover shadow"
              />
              <div className="absolute bottom-[5%] left-[5%] z-0 h-full w-full border-2 border-purple-900"></div>
              <div className="absolute left-[2%] top-[2%] z-0 h-full w-full bg-black"></div>
            </figure>
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default FundamentosProyecto;
