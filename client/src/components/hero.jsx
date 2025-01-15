import banner from "../assets/bannerUnal.jpg";
import techWave from "../assets/pngGradient.png";

function Hero() {
  return (
    <div
      id="home"
      className="relative z-0 flex h-[800px] w-full justify-center overflow-hidden text-white"
    >
      <figure className="absolute z-[-1] h-full w-full brightness-[0.25]">
        <img className="h-full w-full object-cover" src={banner} alt="" />
      </figure>

      <figure className="absolute z-[-1] h-full w-full brightness-[.75]">
        <img
          className="h-full w-full animate-[pulse_4s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] object-fill"
          src={techWave}
          alt=""
        />
      </figure>

      {/* <figure className="absolute z-[-1] h-full w-full brightness-[0.01]">
          <img className="h-full w-full object-fill" src={techWave} alt="" />
        </figure> */}

      <div className="flex-center flex max-w-[1800px] flex-col">
        {/* Hero Section */}
        <section className="h-[710px] pt-[80px] lg:w-3/5 xl:grid xl:w-full xl:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-4 px-8 py-16 sm:px-16 xl:col-span-1 2xl:px-32">
            <div>
              <h1 className="text-xl tracking-widest sm:text-2xl md:text-3xl">
                DESARROLLO DE
              </h1>
              <h1 className="font-schabo text-6xl tracking-widest text-white sm:text-7xl md:text-8xl lg:text-9xl">
                ESTRATEGIAS TECNOLOGICAS
              </h1>
            </div>
            <p className="mt-4 text-balance sm:text-xl">
              Soluciones para el déficit de educación y gestión financiera de
              estudiantes de pregrado en Ingenieria de Sistemas y Computación en
              primer semestre de la Universidad Nacional de Colombia - Sede
              Bogotá.
            </p>
            <div className="mt-6 flex flex-col justify-start gap-8 sm:flex-row">
              <button className="rounded-sm border-2 border-transparent bg-purple-700 px-8 py-2 font-semibold hover:bg-purple-600">
                Ir a Aprendizaje
              </button>
              <button className="rounded-sm border-2 border-transparent bg-purple-700 px-8 py-2 font-semibold hover:bg-purple-600">
                Ir a Gestor Financiero
              </button>
            </div>
          </div>

          {/* <figure className=' relative z-[-1] right-0 top-0 '>
                <img className='w-full h-full object-cover  absolute top-0 -right-6' src={pig} alt="pigBanner"/>
              </figure> */}
        </section>
      </div>
      <div id="contenido" className="absolute bottom-20"></div>
    </div>
  );
}

export default Hero;
