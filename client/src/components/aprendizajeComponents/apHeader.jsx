import { useContext, useEffect, useState } from "react";
import focus from "../../../public/assets/icons/focus.svg";
import { Link } from "react-router-dom";
import down from "../../../public/assets/icons/arrowDown.svg";
import user from "../../../public/assets/icons/user.svg";
import { UserContext } from "../../context/userContext";

function ApHeader() {
  const [activeMenu, setActiveMenu] = useState(false);
  const { deleteToken, usuario } = useContext(UserContext);

  const closeMenu = () => {
    setActiveMenu(false);
  };

  const handleLogout = () => {
    deleteToken();
    window.location.href = "https://proyectofocus.xyz/";
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex h-[72px] w-full justify-center bg-purple-950 shadow-lg transition-all duration-1000 ease-out`}
      >
        <div className="flex w-full max-w-[1800px] items-center justify-between gap-2 px-8 py-5 sm:px-16 2xl:px-24">
          <div className="flex items-center">
            <Link to={"/"} className="relative">
              <figure className="h-10 pr-4 transition-all duration-500 ease-in-out hover:scale-110">
                <img className="h-full" src={focus} alt="Focus LOGO" />
              </figure>
            </Link>
            <div className="block h-10 w-0.5 bg-white"></div>
            <Link to={"/aprendizaje"}>
              <p className="w-auto select-none pl-4 text-xl text-white transition-all duration-200 hover:tracking-wider">
                APRENDIZAJE
              </p>
            </Link>
          </div>

          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className="relative hidden rounded-sm border border-transparent px-4 py-2 text-base font-semibold text-white sm:block"
          >
            <div className="group z-0 flex h-full items-center justify-center gap-1">
              <img
                className={`mr-2 h-12 rounded-full border-2 border-white p-1 transition-all duration-300 ease-in-out group-hover:bg-purple-700`}
                src={user}
                alt=""
              />
              <p className="mr-1 max-w-48 truncate font-normal underline-offset-[6px] group-hover:underline">
                {usuario}
              </p>
              <img
                className={`h-7 transition-all duration-700 ease-in-out ${activeMenu ? "rotate-180" : null}`}
                src={down}
                alt=""
              />
            </div>
            <div
              onClick={() => closeMenu()}
              className={`absolute left-0 top-[68px] -z-10 h-max w-full text-black transition-all duration-200 ${activeMenu ? "block" : "hidden"}`}
            >
              <aside
                className={`flex flex-col rounded-b border-b-2 border-black bg-white px-4 py-4 shadow-lg transition-all duration-1000 ease-in-out ${activeMenu ? "top-[72px]" : "-top-[350px]"}`}
              >
                <section className="mb-2 h-full border-b border-black pb-2">
                  <nav className="flex h-full flex-col items-baseline justify-start gap-2 font-semibold">
                    <Link to={"/"}>
                      <a
                        className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900`}
                      >
                        PRESENTACION
                      </a>
                    </Link>
                    <Link to={"https://focus.42web.io/"}>
                      <a
                        className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900`}
                      >
                        GESTOR FINANCIERO
                      </a>
                    </Link>
                  </nav>
                </section>
                <section className="mt-2 flex flex-col gap-4">
                  <button
                    onClick={() => handleLogout()}
                    className="rounded-sm border-2 border-transparent bg-purple-700 py-2 font-semibold tracking-wider text-white hover:bg-purple-600"
                  >
                    CERRAR SESION
                  </button>
                </section>
              </aside>
            </div>
          </button>

          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className="sm:hidden"
            aria-label="Toggle menu"
          >
            {/* Hamburger lines */}

            <div className="relative z-20 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden">
              <div
                className={`h-0.5 w-8 bg-white transition-transform duration-500 ease-in-out ${
                  activeMenu ? "translate-y-2 rotate-45" : ""
                }`}
              ></div>
              <div
                className={`h-0.5 w-8 bg-white transition-opacity duration-500 ease-in-out ${
                  activeMenu ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`h-0.5 w-8 bg-white transition-transform duration-500 ease-in-out ${
                  activeMenu ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></div>
            </div>

            <div
              onClick={() => closeMenu()}
              className={`absolute right-0 top-[72px] -z-10 h-max w-full max-w-[240px] text-black transition-all duration-200 ${activeMenu ? "block" : "hidden"}`}
            >
              <aside
                className={`flex flex-col rounded-b border-b-2 border-black bg-white px-4 py-4 shadow-lg transition-all duration-1000 ease-in-out ${activeMenu ? "top-[72px]" : "-top-[350px]"}`}
              >
                <section className="mb-2 h-full border-b border-black pb-2">
                  <nav className="flex h-full flex-col items-baseline justify-start gap-2 font-semibold">
                    <Link to={"/"}>
                      <a
                        className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900`}
                      >
                        PRESENTACION
                      </a>
                    </Link>
                    <Link to={"https://focus.42web.io/"}>
                      <a
                        className={`rounded-sm border-2 border-transparent py-1 underline-offset-8 transition-all duration-200 hover:text-purple-900`}
                      >
                        GESTOR FINANCIERO
                      </a>
                    </Link>
                  </nav>
                </section>
                <section className="mt-2 flex flex-col gap-4">
                  <button
                    onClick={() => handleLogout()}
                    className="rounded-sm border-2 border-transparent bg-purple-700 py-2 font-semibold tracking-wider text-white hover:bg-purple-600"
                  >
                    CERRAR SESION
                  </button>
                </section>
              </aside>
            </div>
          </button>
        </div>
      </header>
      <div
        onClick={() => setActiveMenu(!activeMenu)}
        className={`fixed z-40 h-full w-full ${activeMenu ? "block" : "hidden"}`}
      ></div>
    </>
  );
}

export default ApHeader;
