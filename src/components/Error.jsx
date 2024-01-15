import 'animate.css'; 

const Error = ( { children } ) => {
    return (
        <div className="animate__animated animate__fadeIn bg-red-800 text-white font-bold uppercase text-center p-3 mb-5 rounded-md">
            { children }
        </div>
    )
}

export default Error;