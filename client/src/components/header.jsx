import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/presentacionContext";
import { Link } from "react-router-dom";

function Header() {
  const { activeComponent, setActiveComponent } = useContext(AppContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeOptions, setActiveOptions] = useState(false);

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

  const handleContent = (content) => {
    if (activeComponent !== content) {
      setActiveComponent(content);
    }
  };

  const closeMenu = () => {
    setActiveMenu(false);
  };

  const closeOptions = () => {
    setActiveOptions(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex h-[72px] w-full justify-center ${
          isScrolled
            ? "bg-black shadow-lg transition-all duration-1000 ease-out"
            : activeMenu || activeOptions
              ? "bg-black transition-all duration-0 ease-in"
              : "bg-transparent transition-all delay-[600ms] duration-1000 ease-in"
        }`}
      >
        <div className="flex w-full max-w-[1800px] items-center justify-between gap-2 px-8 py-5 sm:px-16 2xl:px-32">
          <div className="flex items-center">
            <a
              href="#home"
              className="w-[110px] select-none pr-4 font-schabo text-4xl tracking-widest text-white transition-all duration-200 hover:tracking-[0.15em]"
            >
              FOCUS
            </a>

            <div className="hidden h-10 w-0.5 bg-white xl:block"></div>

            <nav className="hidden gap-4 pl-4 text-sm font-semibold xl:flex">
              <a
                onClick={() => handleContent("introduccion")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent px-4 py-1 underline-offset-8 transition-all duration-200 hover:text-purple-500 ${activeComponent == "introduccion" ? "text-purple-500 underline" : "text-white no-underline"}`}
              >
                INTRODUCCION
              </a>
              <a
                onClick={() => handleContent("contexto")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent px-4 py-1 underline-offset-8 transition-all duration-200 hover:text-purple-500 ${activeComponent == "contexto" ? "text-purple-500 underline" : "text-white no-underline"}`}
              >
                CONTEXTO
              </a>
              <a
                onClick={() => handleContent("fundamentos")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent px-4 py-1 underline-offset-8 transition-all duration-200 hover:text-purple-500 ${activeComponent == "fundamentos" ? "text-purple-500 underline" : "text-white no-underline"}`}
              >
                FUNDAMENTOS
              </a>
              <a
                onClick={() => handleContent("metodologia")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent px-4 py-1 underline-offset-8 transition-all duration-200 hover:text-purple-500 ${activeComponent == "metodologia" ? "text-purple-500 underline" : "text-white no-underline"}`}
              >
                METODOLOGIA
              </a>
              <a
                onClick={() => handleContent("desarrollo")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent px-4 py-1 underline-offset-8 transition-all duration-200 hover:text-purple-500 ${activeComponent == "desarrollo" ? "text-purple-500 underline" : "text-white no-underline"}`}
              >
                DESARROLLO
              </a>
              <a
                onClick={() => handleContent("resultados")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent px-4 py-1 underline-offset-8 transition-all duration-200 hover:text-purple-500 ${activeComponent == "resultados" ? "text-purple-500 underline" : "text-white no-underline"}`}
              >
                RESULTADOS
              </a>
            </nav>
          </div>

          <button
            onClick={() => setActiveOptions(!activeOptions)}
            className="relative hidden h-11 w-max items-center rounded-sm border-2 border-transparent font-semibold text-white xl:flex"
          >
            <div className="flex h-full items-center justify-center rounded bg-purple-700 px-8 hover:bg-purple-600">
              <p className="line-clamp-1">SECCIONES</p>
            </div>
            <div
              className={`absolute left-0 top-[56px] h-full w-full text-left text-black ${activeOptions ? "block" : "hidden"}`}
            >
              <div
                onClick={() => closeOptions()}
                className={`z-40 transition-all duration-200`}
              >
                {/* <div
          onClick={() => closeMenu()}
          className="top[80px] relative h-full w-full bg-black/35"
        ></div> */}

                <aside
                  className={`z-10 flex w-full flex-col rounded-b border-b-2 border-black bg-white px-4 py-4 shadow-lg transition-all duration-1000 ease-in-out`}
                >
                  {/* <div className="relative flex items-center justify-center border-b border-white pb-4">
            <XMarkIcon className="absolute left-0 top-0.5 h-8 w-8 cursor-pointer transition-all duration-200 hover:rotate-90" />
            <h1 className="font-schabo text-6xl tracking-widest">MENU</h1>
          </div> */}

                  <section className="h-full w-full border-b border-black pb-2">
                    <nav className="flex h-full flex-col items-baseline justify-start gap-1 font-semibold">
                      <a
                        href="https://focus.42web.io/sesion_aprendizaje.php"
                        className={`rounded-sm border-2 border-transparent underline-offset-8 hover:text-purple-900 hover:underline`}
                      >
                        APRENDIZAJE
                      </a>
                      <a
                        href="https://focus.42web.io/"
                        className={`rounded-sm border-2 border-transparent underline-offset-8 hover:text-purple-900 hover:underline`}
                      >
                        GESTOR
                      </a>
                    </nav>
                  </section>
                </aside>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className="relative z-20 flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
            aria-label="Toggle menu"
          >
            {/* Hamburger lines */}
            <div
              className={`h-0.5 w-8 bg-white transition-transform duration-1000 ease-in-out ${
                activeMenu ? "translate-y-2 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 w-8 bg-white transition-opacity duration-1000 ease-in-out ${
                activeMenu ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`h-0.5 w-8 bg-white transition-transform duration-1000 ease-in-out ${
                activeMenu ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></div>
          </button>
        </div>
      </header>

      <div
        onClick={() => closeMenu()}
        className={`fixed z-40 transition-all duration-200 ${activeMenu ? "h-full w-full" : "h-0 w-0"}`}
      >
        {/* <div
          onClick={() => closeMenu()}
          className="top[80px] relative h-full w-full bg-black/35"
        ></div> */}

        <aside
          className={`fixed bottom-0 right-[32px] z-10 flex h-max w-[70%] max-w-[200px] flex-col rounded-b border-b-2 border-black bg-white px-6 py-4 shadow-lg transition-all duration-1000 ease-in-out ${activeMenu ? "top-[72px]" : "-top-[400px]"}`}
        >
          {/* <div className="relative flex items-center justify-center border-b border-white pb-4">
            <XMarkIcon className="absolute left-0 top-0.5 h-8 w-8 cursor-pointer transition-all duration-200 hover:rotate-90" />
            <h1 className="font-schabo text-6xl tracking-widest">MENU</h1>
          </div> */}

          <section className="mb-2 h-max border-b border-black pb-2">
            <nav className="flex h-full flex-col items-baseline justify-between font-semibold">
              <a
                onClick={() => handleContent("introduccion")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900 ${activeComponent == "introduccion" ? "text-purple-900 underline" : "text-black no-underline"}`}
              >
                INTRODUCCION
              </a>
              <a
                onClick={() => handleContent("contexto")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900 ${activeComponent == "contexto" ? "text-purple-900 underline" : "text-black no-underline"}`}
              >
                CONTEXTO
              </a>
              <a
                onClick={() => handleContent("fundamentos")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900 ${activeComponent == "fundamentos" ? "text-purple-900 underline" : "text-black no-underline"}`}
              >
                FUNDAMENTOS
              </a>
              <a
                onClick={() => handleContent("metodologia")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900 ${activeComponent == "metodologia" ? "text-purple-900 underline" : "text-black no-underline"}`}
              >
                METODOLOGIA
              </a>
              <a
                onClick={() => handleContent("desarrollo")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900 ${activeComponent == "desarrollo" ? "text-purple-900 underline" : "text-black no-underline"}`}
              >
                DESARROLLO
              </a>
              <a
                onClick={() => handleContent("resultados")}
                href="#contenido"
                className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900 ${activeComponent == "resultados" ? "text-purple-900 underline" : "text-black no-underline"}`}
              >
                RESULTADOS
              </a>
            </nav>
          </section>

          <section className="mt-2 flex flex-col gap-4">
            <Link
              to={"https://focus.42web.io/"}
              className="h-11 w-full items-center rounded-sm border-2 border-transparent bg-purple-700 px-8 font-semibold text-white hover:bg-purple-600"
            >
              <button className="h-full w-full">
                <div className="flex h-full items-center justify-center">
                  <p className="">APRENDIZAJE</p>
                </div>
              </button>
            </Link>
            <Link
              to={"https://focus.42web.io/"}
              className="h-11 w-full items-center rounded-sm border-2 border-transparent bg-purple-700 px-8 font-semibold text-white hover:bg-purple-600"
            >
              <button className="h-full w-full">
                <div className="flex h-full items-center justify-center">
                  <p className="">GESTOR</p>
                </div>
              </button>
            </Link>
          </section>
        </aside>
      </div>

      <div
        onClick={() => setActiveOptions(!activeOptions)}
        className={`fixed z-40 h-full w-full ${activeOptions ? "block" : "hidden"}`}
      ></div>
    </>
  );
}

export default Header;
