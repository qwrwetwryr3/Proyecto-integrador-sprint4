import React, { useState } from 'react'
import './FormularioUser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useTasks } from '../../context/TasksContext';

function FormularioUser() {

    {/*Para capturar los datos */ }
    /* const [Nombre, setNombre]=useState()
    const [RUT, setRUT]=useState()
    const [EstadoCivil, setEstadoCivil]=useState()
    const [FechaNacimiento, setFechaNacimiento]=useState()
    const [Edad, setEdad]=useState()
    const [Celular, setCelular]=useState()
    const [Correo, setCorreo]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDeafault()
        axios.post('http://localhost:3000/create',{Nombre,RUT,EstadoCivil,FechaNacimiento,Edad,Celular,Correo}).then(res=>{
            console.log(res);
            navigate('/perfil-usuarios')
        })
        .catch(err=>console.log(err))
    } */

    const { register, handleSubmit } = useForm();
    const {tasks}=useTasks()
    console.log(tasks)
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <>
            <div className="fregistro">
                <p>Formulario de registro</p>
            </div>
            <form id="formulario-container" onSubmit={onSubmit}>
                <div className="mb-3" id="primerFormulario">
                    <label for="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Juan Perez" {...register("Nombre")} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Rut</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="11.111.111-1" {...register("RUT")} />
                </div>
                <div id="">
                    <label for="formGroupExampleInput" className="form-label">Estado civil</label>
                    <select className="form-select form-select-mb-3">
                        <option selected>Seleccione una opción</option>
                        <option {...register("Soltero")}>Soltero/a</option>
                        <option {...register("Casado")}>Casado/a</option>
                        <option {...register("Viudo")}>Viudo/a</option>
                        <option {...register("Divorciado")}>Divorciado/a</option>
                        <option {...register("Union civil")}>Unión civil</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Fecha de nacimiento</label>
                    <input type="Date" className="form-control" id="formGroupExampleInput4" placeholder="Seleccione" {...register("Fecha de nacimiento")} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Edad</label>
                    <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="" {...register("Edad")} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Celular</label>
                    <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="+569 1234 5678" {...register("Celular")} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="Ejemplo@gmail.com" {...register("Correo")} />
                </div>
                <div className="container mt-5">
                    <label for="formGroupExampleInput2" className="form-label">Certificado de estudios</label>
                    <form action="#" method="post" enctype="multipart/form-data">
                        <div className="input-group">
                            <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton" />
                            <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                        </div>
                    </form>
                </div>
                <div className="container mt-5">
                    <label for="formGroupExampleInput2" className="form-label">Certificado de cursos</label>
                    <form action="#" method="post" enctype="multipart/form-data">
                        <div className="input-group">
                            <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton" />
                            <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                        </div>
                    </form>
                </div>
                <div className="container mt-5">
                    <label for="formGroupExampleInput2" className="form-label">Certificado de antecedentes</label>
                    <form action="#" method="post" enctype="multipart/form-data">
                        <div className="input-group">
                            <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton" />
                            <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                        </div>
                    </form>
                </div>
                <div className="container mt-5">
                    <label for="formGroupExampleInput2" className="form-label">Currículum</label>
                    <form action="#" method="post" enctype="multipart/form-data">
                        <div className="input-group">
                            <input type="file" className="form-control" id="fileInput" name="fileInput" aria-describedby="uploadButton" />
                            <button className="btn btn-primary" type="submit" id="uploadButton">Subir Archivo</button>
                        </div>
                    </form>
                </div>

                <div className="d-flex justify-content-end" id="Benviar">
                    {/* <Link to="/perfil-usuarios"> */}<button id="miBoton">Enviar</button>{/* </Link>  */}
                </div>
            </form>
        </>
    )
}

export default FormularioUser