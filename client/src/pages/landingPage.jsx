import "../index.css";

import { useContext, useEffect } from "react";
// import { AppContext } from "../context/presentacionContext";

import Footer from "../components/footer";
import InicioProyecto from "../components/landingComponents/inicioProyecto";
import ContextoProyecto from "../components/landingComponents/contextoProyecto";
import ResultadosProyecto from "../components/landingComponents/ResultadosProyecto";
import MetodologiaProyecto from "../components/landingComponents/metodologiaProyecto";
import FundamentosProyecto from "../components/landingComponents/fundamentosProyecto";
import DesarrolloProyecto from "../components/landingComponents/desarrolloProyecto";
import Header from "../components/header";
import Hero from "../components/landingComponents/hero";
import { UserContext } from "../context/userContext";

const LandingPage = () => {
  // const { activeComponent } = useContext(AppContext);
  const { deleteToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      deleteToken();
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header></Header>

      <Hero></Hero>

      <section>
        {/* Seccion inicio */}
        <InicioProyecto></InicioProyecto>

        {/* Seccion contexto */}
        <ContextoProyecto></ContextoProyecto>

        {/* Seccion fundamentos */}
        <FundamentosProyecto></FundamentosProyecto>

        {/* Seccion metodologia */}
        <MetodologiaProyecto></MetodologiaProyecto>

        {/* Seccion desarollo */}
        <DesarrolloProyecto></DesarrolloProyecto>

        {/* Seccion resultados */}
        <ResultadosProyecto></ResultadosProyecto>

        {/* Footer */}
        <Footer></Footer>
      </section>
    </div>
  );
};

export default LandingPage;
