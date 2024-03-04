import React from 'react'
import './Footer.css'
import Iframe from 'react-iframe'

function Footer() {
  return (
  <>
  <div className="contenedor-fila">
	<div className="bloque naranjo"></div>
	<div className="bloque amarillo"></div>
	<div className="bloque verde"></div>
	<div className="bloque verdoso"></div>
	<div className="bloque aqua"></div>
	<div className="bloque azul"></div>
</div>
<footer>
	<div>
		<img src="../../public/Escudo_Renca.png" alt="escudo" className="escudo"/>
	</div>
  <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.718185307366!2d-70.7067472879191!3d-33.40451579505184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6a592ba9671%3A0xa769a671ce1c6268!2sIlustre%20Municipalidad%20de%20Renca!5e0!3m2!1ses!2scl!4v1706731664581!5m2!1ses!2scl" 
        width="268px"
        height="197px"
        id=""
        className=""
        display="block"
        position="relative"/>
	<div className="contactanos">
		<a href="">
			<i className="fa-solid fa-location-dot"></i>
		</a>
		<a href="">
			<i className="fa-solid fa-phone"></i>
		</a>
		<a href="">
			<i className="fa-solid fa-envelope"></i>
		</a>
	</div>
	<div className="contactanosTXT">
		<p className="numContacto">Blanco Encalada Nº 1335, Plaza de Renca, Renca</p>
		<p className="numContacto">+56 2 2685 6600</p>
		<p className="numContacto">contacto@renca.cl</p>
	</div>
	<div className="redes">
		<p id="encuentranos">Encuéntranos</p>
		<a href="">
			<i className="fa-brands fa-youtube"></i>
		</a>
		<a href="">
			<i className="fa-brands fa-instagram"></i>
		</a>
		<a href="">
			<i className="fa-brands fa-facebook"></i>
		</a>
	</div>
</footer>
<div className="derechos">
	<p>© Acá Estamos / Ilustre Municipalidad de Renca / Todos los derechos reservados.</p>
</div>
<div/>
  </>
  )
}

export default Footer