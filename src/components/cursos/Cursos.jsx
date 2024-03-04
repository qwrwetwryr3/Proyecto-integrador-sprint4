import React from 'react'
import { Link } from 'react-router-dom'
import './Cursos.css'

function Cursos() {
  return (
    <div className='container-curso' data-aos="flip-up">
        <Link to='/'>
            <img id='img-curso' src="/group.jpg" alt="" />
        <div className='container-texto'>  
            <h2>Ingresa a nuestra plataforma de cursos online</h2>
        </div>
        </Link>
    </div>
  )
}

export default Cursos