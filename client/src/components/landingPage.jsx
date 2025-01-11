
import '../index.css'
import banner from '../assets/bannerUnal.jpg'
import techWave from '../assets/pngGradient.png'
// import pig from '../assets/bannerPig.png'
import { useEffect, useState } from 'react';


const LandingPage = () => {
  
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-dmsans">

      <div className='  relative overflow-hidden z-10 w-full h-[800px] text-white flex justify-center'>
        
        <figure className='absolute z-[-1] w-full h-full brightness-[0.25]'>
            <img className='w-full h-full object-cover' src={banner} alt=""/>
        </figure>

        <figure className='absolute z-[-1] w-full h-full brightness-[0.3] '>
            <img className='w-full h-full object-fill ' src={techWave} alt=""/>
        </figure>

        <div className='max-w-[1800px] flex flex-center flex-col'>
           
            <header id='inicio' className={`h-[90px] px-16 fixed top-0 w-full transition-all duration-300 ${ isScrolled ? "bg-black shadow-lg" : "bg-transparent"} `}>
              <div className=' py-5 flex items-center gap-2 justify-between  '>
                
                <div className='flex items-center '>
                  <a href='#inicio' className="text-5xl tracking-widest font-schabo text-center text-white pr-4 border-r-2 border-white ">FOCUS</a>
                  <nav href="#inicio" className="flex gap-4 text-sm font-semibold pl-4">
                    <a href="#inicio" className="py-1 px-4 rounded-sm border-2 border-transparent hover:border-white">INICIO</a>
                    <a href="#sobre" className="py-1 px-4 rounded-sm border-2 border-transparent hover:border-white">CONTEXTO</a>
                    <a href="#contacto" className="py-1 px-4 rounded-sm border-2 border-transparent hover:border-white">METODOLOGIA</a>
                    <a href="#facetas" className="py-1 px-4 rounded-sm border-2 border-transparent hover:border-white">FUNDAMENTOS</a>
                    <a href="#metodologia" className="py-1 px-4 rounded-sm border-2 border-transparent hover:border-white">DESARROLLO</a>
                    <a href="#equipo" className="py-1 px-4 rounded-sm border-2 border-transparent hover:border-white">RESULTADOS</a>
                  </nav>
                </div>
                

                <button className=" px-8 py-2 border-2 rounded-sm text-white border-transparent bg-purple-700  hover:bg-purple-600  font-semibold tracking-wider">INGRESAR</button>
              </div>
            
              
            </header>

            {/* Hero Section */}
            <section  className="  h-[710px] grid grid-cols-2 pt-[90px]">
              <div className='flex flex-col gap-6 justify-center col-span-1 p-16 ' >
                <div>
                  <h1 className=' text-3xl tracking-widest'>DESARROLLO DE</h1>
                  <h1 className="text-9xl font-schabo tracking-widest text-white">ESTRATEGIAS TECNOLOGICAS</h1>
                </div>
                <p className="mt-4 text-xl text-balance">Soluciones para el déficit de educación y gestión financiera de estudiantes de pregrado Ingenieria de Sistemas y Computación en primer semestre de la Universidad Nacional de Colombia Sede Bogotá.</p>
                <div className="mt-6 flex justify-start   gap-8 ">
                  <button className=" px-8 py-2 border-2 rounded-sm border-transparent bg-purple-700  hover:bg-purple-600 font-semibold">Ir a Aprendizaje</button>
                  <button className="px-8 py-2 border-2 rounded-sm border-transparent bg-purple-700  hover:bg-purple-600 font-semibold">Ir a Gestor Financiero</button>
                </div>
              </div>
  
              {/* <figure className=' relative z-[-1] right-0 top-0 '>
                <img className='w-full h-full object-cover  absolute top-0 -right-6' src={pig} alt="pigBanner"/>
              </figure> */}
            </section>
       
        </div>
        
      </div>
      

      {/* Sobre el Proyecto */}
      <section id="sobre" className="p-20 bg-gray-100 text-gray-700">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre el Proyecto</h2>
            <p>FOCUS nace para resolver las dificultades en la gestión financiera de estudiantes de pregrado, ofreciendo soluciones tecnológicas que combinan educación y herramientas prácticas.</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Identificación del problema financiero.</li>
              <li>Diseño de soluciones educativas personalizadas.</li>
              <li>Implementación de un gestor financiero práctico.</li>
            </ul>
          </div>
          <div>
            <img src="/assets/project-overview.png" alt="Proyecto" className="rounded shadow" />
          </div>
        </div>
      </section>

      {/* Facetas del Proyecto */}
      <section id="facetas" className="p-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Facetas del Proyecto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Faceta de Aprendizaje</h3>
            <p className="text-gray-700">Explora recursos educativos diseñados para mejorar la gestión financiera de estudiantes.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explorar</button>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Gestor Financiero</h3>
            <p className="text-gray-700">Herramientas prácticas para la planificación y seguimiento financiero.</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ir al Gestor</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>© 2025 FOCUS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;