import bgDecoration1 from "../../public/assets/deco/bgDecoration1.svg";
import bgDecoration2 from "../../public/assets/deco/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/deco/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.webp";
import banner from "../../public/assets/imgs/bannerUnal.webp";
import img2 from "../../public/assets/imgs/img2.webp";
import img3 from "../../public/assets/imgs/img3.webp";
import gradient from "../../public/assets/deco/pngGradient.png";
import left from "../../public/assets/icons/arrowLeft.svg";

function Hero() {
  return (
    <div
      id="home"
      className="relative z-0 flex h-[720px] w-full justify-center overflow-hidden bg-black text-white lg:h-[800px]"
    >
      <figure className="absolute z-[-1] h-full w-full brightness-[0.25]">
        <img className="h-full w-full object-cover" src={banner} alt="" />
      </figure>

      <figure className="absolute z-[-1] h-full w-full brightness-[.75]">
        <img
          className="h-full w-full animate-[pulse_4s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] object-fill"
          src={gradient}
          alt=""
        />
      </figure>

      <div className="flex-center flex max-w-[1800px] flex-col">
        {/* Hero Section */}
        <section className="h-[720px] pt-[72px] lg:w-3/5 xl:grid xl:w-full xl:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-4 px-8 py-16 sm:px-16 xl:col-span-1 2xl:px-32">
            <div>
              <h1 className="text-xl tracking-widest sm:text-3xl md:text-3xl">
                DESARROLLO DE
              </h1>
              <h1 className="font-schabo text-6xl tracking-widest text-white sm:text-8xl md:text-8xl lg:text-9xl">
                ESTRATEGIAS TECNOLOGICAS
              </h1>
            </div>
            <p className="mt-4 text-pretty sm:text-xl">
              Soluciones para el déficit de educación y gestión financiera de
              estudiantes de pregrado en Ingenieria de Sistemas y Computación en
              primer semestre de la Universidad Nacional de Colombia - Sede
              Bogotá.
            </p>
            <div className="mt-6 flex w-full flex-col justify-start gap-8 sm:flex-row">
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
          </div>

          {/* <figure className=' relative z-[-1] right-0 top-0 '>
                <img className='w-full h-full object-cover  absolute top-0 -right-6' src={pig} alt="pigBanner"/>
              </figure> */}
        </section>
      </div>
      <div id="contenido" className="absolute bottom-[64px]"></div>
    </div>
  );
}

export default Hero;
