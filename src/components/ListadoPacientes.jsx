import Paciente from './Paciente';

const ListadoPacientes = ( { pacientes, setPaciente, eliminarPaciente } ) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {
                pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        
                        <p className="text-center text-lg mt-2 mb-6">Administra tus { '' }
                            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                        </p>
                        
                        { 
                            pacientes.map(paciente => (
                                <Paciente
                                    key={ paciente.id }
                                    paciente={ paciente }
                                    setPaciente={ setPaciente }
                                    eliminarPaciente={ eliminarPaciente }
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

                        <p className="text-center text-lg mt-2 mb-6">Agrega un paciente { '' }
                            <span className="text-indigo-600 font-bold">y se mostrará en este apartado</span>
                        </p>
                    </>
                )
            }
        </div>
    );
}

export default ListadoPacientes;