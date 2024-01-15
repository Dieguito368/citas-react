import { useState, useEffect } from "react";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/Header"; 
import Formulario from './components/Formulario';
import Paciente from "./components/Paciente";

function App() {
    const [ pacientes, setPacientes ] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? [] );
    const [ paciente, setPaciente ] = useState( {} );

    useEffect( () => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [ pacientes ]);

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id);

        setPacientes(pacientesActualizados);
    }

    return (
        <div className="w-11/12 mx-auto mt-10">
            <Header/>

            <div className="mt-12 md:flex gap-16">
                <Formulario
                    pacientes={ pacientes }
                    setPacientes={ setPacientes }
                    paciente={ paciente } 
                    setPaciente={ setPaciente } 
                />

                <ListadoPacientes 
                    pacientes={ pacientes }
                    setPaciente={ setPaciente }
                    eliminarPaciente={ eliminarPaciente }
                />
            </div>
        </div>
    )
}

export default App