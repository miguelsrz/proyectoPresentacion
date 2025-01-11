// import { useState, useEffect} from 'react'
import './App.css'
import './index.css'
// import axios from "axios";

function App() {



  return (
    <>
      <h1 className=' text-2xl'> HOLA MUNDO</h1>
      <p className=' bg-slate-500 text-lg text-red-400'>HOLA MUNDO</p>
      
    </>
  )
}

export default App


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