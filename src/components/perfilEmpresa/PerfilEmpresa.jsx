import React from 'react'
import './PerfilEmpresa.css'

function PerfilEmpresa() {
  return (
<>
    <div>
          <div className="container-fluid header">
        <img className="logo" src="https://img.freepik.com/vector-premium/logotipo-cubo-generico_9569-169.jpg?w=740" alt=""/>

    </div>
    <h1 className="nombre-empresa">NOMBRE EMPRESA</h1>
    <ul className="redes">
        <li>
            <i className="bi bi-globe"></i>
            <a href="">Web</a></li>
        <li>
            <i className="bi bi-instagram"></i>
            <a href="">Instagram</a></li>
        <li>
            <i className="bi bi-facebook"></i>
            <a href="">Facebook</a></li>
    </ul>
    <div className="nosotros">
        <h3>Sobre Nosotros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aliquam ex ipsa hic asperiores reiciendis. Nihil non, distinctio expedita molestiae perspiciatis dolorem, culpa nisi incidunt quam quod cumque repellendus repudiandae!</p>
    </div>
    </div>
</>
  )
}

export default PerfilEmpresa