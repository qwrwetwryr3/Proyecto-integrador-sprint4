import React from 'react'
import './Background.css'
import { Link } from 'react-router-dom'; 



function Background() {
  return (
    <>
    <div className='hero-container '>
      <div className='video-container'>
        <video src='/abstract_line.mp4' autoPlay loop muted />
      </div>
      <div className='text-container'>
        <h1 id='acaestamostit'>Acá Estamos</h1>
        <p id='tituloSec'>Descubre tu camino profesional en nuestra plataforma</p>
        <div className='buttons'>
          <Link to="/formulario-empresa"><button id='boton-empresa'>Soy Empresa</button></Link>
          <Link to="/formulario-usuario"><button id='boton-usuario'>Soy Candidato</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Background