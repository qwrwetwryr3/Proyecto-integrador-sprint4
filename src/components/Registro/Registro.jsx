import React from 'react'
import './Registro.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useTasks } from '../../context/TasksContext';


function Registro() {

    const {register, handleSubmit, formState: {errors},}=useForm();
    const {signin, errors: SigninErrors}=useAuth();

    const {createTask}=useTasks();
    console.log(createTask);


    const onSubmit=handleSubmit((data)=>{
        signin(data);
    });

  return (
    <div className='wrapper' >
        {SigninErrors.map((error, i)=>(<div className='bg-red-500 p-2 text-white' key={i}>{error}</div>))}
        <form className="ingreso"  action="" onSubmit={onSubmit}>
            <h1 className='tituloRegistro'>Ingresa</h1>
            <div className="input-box">
                <input type="text" placeholder='Usuario' required {...register("email", {required: true})}/>
                {errors.email && ( <p className='text-red-500'>Email es requerido</p>)}
                <FaUser className='icons' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Contraseña' required {...register("password", {required: true})}/>
                {errors.password && (<p className='text-red-500'>Contraseña es requerida</p>)}
                <FaLock className='icons'/>
            </div>
            <div id="remember-forgot">
                <label><input type="checkbox" />Recuerdame</label>
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            
            <button type="submit">Ingresa</button>
            <div className="register-link">
                <p>¿No tienes una cuenta? <Link to="/registrate_app">Regístrate</Link></p> 
            </div>
        </form>

    </div>
  )
}

export default Registro