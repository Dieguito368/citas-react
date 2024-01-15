import { useState, useEffect } from 'react';
import Error from './Error'; 
import Swal from 'sweetalert2';

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {
    const [ nombre, setNombre ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fecha, setFecha ] = useState('');
    const [ sintomas, setSintomas ] = useState('');
    const [ error, setError ] = useState(false);

    useEffect( () => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        } else{
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
        }
    }, [paciente]);

    const generarID = () => {
        const fecha = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);

        return fecha + random;
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validación del formulario
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            setError(true);

            return;
        }

        setError(false);

        const objPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id) {
            // Editando el registro
            objPaciente.id = paciente.id;
            
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);
            setPacientes(pacientesActualizados);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Paciente actualizado correctamente",
                showConfirmButton: false,
                timer: 1500
            });

            setPaciente({});

        } else {
            // Nuevo registro
            objPaciente.id = generarID();
            setPacientes([ ...pacientes, objPaciente ]);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Paciente agregado correctamente",
                showConfirmButton: false,
                timer: 1500
            });
        }

        // Reiniciando el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            
            <p className="text-center text-lg mt-2 mb-6">
                Añade pacientes y { '' }
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>  
        
            <form 
                action="#" 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-12" 
                onSubmit={ handleSubmit }
            >
                { 
                    error && <Error> <p>Todos los campos son obligatorios</p> </Error> 
                } 
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

                    <input 
                        type="text" 
                        className="border-2 w-full p-2 mt-2 rounded-md" 
                        id="mascota"
                        value={ nombre }
                        onChange={ e => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

                    <input 
                        type="text" 
                        className="border-2 w-full p-2 mt-2 rounded-md" 
                        id="propietario"
                        value={ propietario }
                        onChange={ e => setPropietario(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

                    <input 
                        type="email" 
                        className="border-2 w-full p-2 mt-2 rounded-md" 
                        id="email"
                        value={ email }
                        onChange={ e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Día de alta</label>

                    <input 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 rounded-md" 
                        id="fecha"
                        value={ fecha }
                        onChange={ e => setFecha(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>

                    <textarea 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={ sintomas }
                        onChange={ e => setSintomas(e.target.value) }
                    ></textarea>
                </div>

                <input 
                    type="submit" 
                    className="bg-indigo-600 p-3 w-full text-white uppercase font-bold cursor-pointer hover:bg-indigo-900 transition-all" 
                    value={ paciente.id ? "Editar paciente" : 'Agregar Paciente' } 
                />
            </form> 
        </div>
    );
}

export default Formulario; 