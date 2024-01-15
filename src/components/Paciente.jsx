import Swal from 'sweetalert2';
import 'animate.css'; 

const Paciente = ( { paciente, setPaciente, eliminarPaciente } )  => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podras revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Paciente eliminado correctamente",
                    showConfirmButton: false,
                    timer: 1500
                });

                setPaciente( {} );
            }
        });
    }

    return (
        <div className="animate__animated animate__fadeIn mb-10 bg-white shadow-md p-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: { '' }
                <span className="font-normal normal-case">{ nombre }</span>    
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: { '' }
                <span className="font-normal normal-case">{ propietario }</span>    
            </p>  

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: { '' }
                <span className="font-normal normal-case">{ email }</span>    
            </p>  

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: { '' }
                <span className="font-normal normal-case">{ fecha }</span>    
            </p>  

            <p className="font-bold mb-3 text-gray-700 uppercase text-justify">Síntomas: { '' }
                <span className="font-normal normal-case">{ sintomas }</span>    
            </p>  

            <div className="flex gap-5">
                <button 
                    type="button"
                    className="w-1/2 bg-indigo-600 py-2 px-10 text-white font-bold hover:bg-indigo-800 transition-all uppercase rounded-lg"
                    onClick={ () => setPaciente(paciente) }
                >
                    Editar
                </button>

                <button 
                    type="button"
                    className="w-1/2 bg-red-600 py-2 px-10 text-white font-bold hover:bg-red-700 transition-all uppercase rounded-lg"
                    onClick={ handleEliminar }
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;