// import { useState, useEffect} from 'react'
import "./index.css";
import { AppProvider } from "./context/presentacionContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";

import LandingPage from "./pages/landingPage";
import AprendizajePage from "./pages/aprendizajePage";
import Articulo from "./components/aprendizajeComponents/articulo";
import Video from "./components/aprendizajeComponents/video";
import Quiz from "./components/aprendizajeComponents/quiz";
import NotFound from "./components/notFound";
import ModuloPage from "./pages/moduloPage";
// import axios from "axios";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/presentacion", element: <LandingPage /> },
    { path: "/aprendizaje", element: <AprendizajePage /> },
    { path: "/aprendizaje/modulo/:moduleId", element: <ModuloPage /> },
    {
      path: "/aprendizaje/modulo/:moduleId/sections/:sectionId/articulo/*",
      element: <Articulo />,
    },
    {
      path: "/aprendizaje/modulo/:moduleId/sections/:sectionId/video/*",
      element: <Video />,
    },
    {
      path: "/aprendizaje/modulo/:moduleId/sections/:sectionId/quiz/*",
      element: <Quiz />,
    },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <AppProvider>
        <Router basename="">
          <AppRoutes></AppRoutes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;

/* 

const [exArray, setExArray] = useState([]);


  const fecthAPI = async () =>
  {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits)
    setExArray(response.data.fruits)
  }

  useEffect(() =>
  {
    fecthAPI();
  }, [])


   return (
    <>
      <p className='bg-black'>asdasd</p>
      {
          exArray.map((fruit, index)=>
          (
            <div key={index} className='bg-black'>
              <p className='bg-fuchsia-600'>{fruit}</p>
              <br></br>
            </div>
          ))
        }
    </>
  )



*/
