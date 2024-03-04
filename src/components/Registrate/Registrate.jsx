import React, { useEffect } from 'react'
import './Registrate.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext.jsx';
import { registerRequest } from '../../api/auth.js';
import { Link, useNavigate } from 'react-router-dom';

function Registrate() {

    const { register, handleSubmit, formState:{errors}, } = useForm();
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate=useNavigate()
    useEffect(()=>{
        if(isAuthenticated) navigate('/perfil-usuarios_app')
    },[isAuthenticated])


    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });


    return (
        <div className='wrappers'>
            {
                RegisterErrors.map((error,i)=>(<div className='bg-red text-white' key={i}>{error}</div>))
            }
            <form action="" onSubmit={onSubmit}>
                <h1 className='tituloRegistros'>Registro</h1>
                <div className="input-boxs">
                    <input type="text" placeholder='Correo' required {...register("email", { required: true })} />
                    {errors.email && (<p className='text-red-500'>Email es requerido</p>)}
                    <FaUser className='iconss' />
                </div>
                <div className="input-boxs">
                    <input type="password" placeholder='Contraseña' required {...register("password", { required: true })} />
                    {errors.password && (<p className='text-red-500'>Contraseña es requerida</p>)}
                    <FaLock className='iconss' />
                </div>
                <div className="input-boxs">
                    <input type="password" placeholder='Repetir Contraseña' required />
                    <FaLock className='iconss' />
                </div>
                <div className="remember-forgots">
                    <label><input type="checkbox" /></label>
                    <a href="#"> Acepto términos y condiciones</a>
                </div>
                <button type="submit">Regístrate</button>
            </form>
            <p className='flex gap-x-2 justify-between'>Ya tienes una cuenta?{" "}<Link to="/registro-usuario_app">Ingresa</Link></p>

        </div>
    )
}

export default Registrate