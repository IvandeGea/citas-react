import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setDate(paciente.date)
            setSintomas(paciente.sintomas)
        }


    }, [paciente])

    useEffect(() => {

    }, [])

    const generarId = (() => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha

    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, date, sintomas].includes('')) {
            console.log(" Rellena todos los campos")
            setError(true)
            return;

        }
        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            date,
            sintomas,

        }

        if (paciente.id) {

            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})


        } else {
            objetoPaciente.id = generarId()

            setPacientes([...pacientes, objetoPaciente])
        }

        setNombre("")
        setPropietario("")
        setEmail("")
        setDate("")
        setSintomas("")




    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center"> Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añadir Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos     </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-5">
                {error &&
                    <Error> <p>Todos los campos son obligatorios</p> </Error>}
                <div className="mb-10">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">  Nombre Mascota </label>
                    <input id="mascota" type="text" placeholder="Nombre de la Mascota" className="borer-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    >

                    </input>

                </div>
                <div className="mb-10">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">  Nombre Propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre del Propietario" className="borer-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    >
                    </input>

                </div>
                <div className="mb-10">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">  email </label>
                    <input id="email" type="email" placeholder="Propietario@gmail.com" className="borer-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>

                    </input>

                </div>
                <div className="mb-10">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">  Alta </label>
                    <input id="alta" type="date" className="borer-2 w-full p-2 mt-2"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}>
                    </input>

                </div>
                <div className="mb-10">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">  Síntomas </label>
                    <textarea
                        id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />

                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-blod hover:bg-indigo-700 transition-colors"
                    value={paciente.id ? 'Editar Paciente' : "Agregar Paciente"}
                />

            </form>

        </div>
    )
}

export default Formulario
