// import { useState, useEffect} from 'react'
import "./App.css";
import "./index.css";
import { AppProvider } from "./context/presentacionContext";

import LandingPage from "./pages/landingPage";
// import axios from "axios";

function App() {
  return (
    <>
      <AppProvider>
        <LandingPage></LandingPage>
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
