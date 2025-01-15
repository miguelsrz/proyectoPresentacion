import { useContext } from 'react'
import { AppContext } from '../context/presentacionContext';

const DesarrolloProyecto = () => {
    const {activeComponent} = useContext(AppContext)
     
    const thisComponent = 'desarrollo'

    if(activeComponent === thisComponent)
    {
        return (
    
            <>
                <section id="sobre" className="p-20 bg-gray-100 text-gray-700">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">DESARROLLO</h2>
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
            </>
          )
    } else
    {
        return null
    }
}

export default DesarrolloProyecto