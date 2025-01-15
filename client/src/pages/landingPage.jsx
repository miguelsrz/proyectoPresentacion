import "../index.css";

import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

import Footer from "../components/footer";
import InicioProyecto from "../components/inicioProyecto";
import ContextoProyecto from "../components/contextoProyecto";
import ResultadosProyecto from "../components/ResultadosProyecto";
import MetodologiaProyecto from "../components/metodologiaProyecto";
import FundamentosProyecto from "../components/fundamentosProyecto";
import DesarrolloProyecto from "../components/desarrolloProyecto";
import Header from "../components/header";
import Hero from "../components/hero";

const LandingPage = () => {
  const { activeComponent } = useContext(AppContext);

  console.log(activeComponent);

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
