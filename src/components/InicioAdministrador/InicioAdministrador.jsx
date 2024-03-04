import React from 'react'
import './InicioAdministrador.css'
import { Link } from 'react-router-dom'

function InicioAdministrador() {
  return (
    <>
    <br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>

	<h1 className="text-center">Bienvenido</h1>

	<div className="card-group" id="primerBloque">
		<div className="card text-white bg-primary tarjeta_ventas">
			<i className="fa-solid fa-user icono"> 25 </i> 
			<div className="card-body">
				<h5 className="card-title">Usuarios Conectados</h5>
			</div>
		</div>
		<div className="card text-white bg-secondary ">
			<i className="fa-solid fa-list-check icono"> 65</i>
			<div className="card-body">
				<h5 className="card-title">Usuarios registrados</h5>
			</div>
		</div>
		<div className="card text-white bg-success ">
			<i className="fa-solid fa-suitcase icono"> 23 </i>
			<div className="card-body">
				<h5 className="card-title">Empresas registradas</h5>
			</div>
		</div>
	</div>

	<div className="card-group" id="segundoBloque">
		<div className="card text-white bg-danger ">
			<i className="fa-solid fa-circle-check icono"> 65 </i>
			<div className="card-body">
				<h5 className="card-title" >Postulaciones abiertas</h5>
			</div>
		</div>
		<div className="card text-white bg-warning ">
			<i className="fa-solid fa-list icono"> 62 </i>
			<div className="card-body">
				<h5 className="card-title">Postulaciones totales</h5>
			</div>
		</div>
		<div className="card text-white bg-info ">
			<i className="fa-solid fa-helmet-safety icono"> 89 </i>
			<div className="card-body">
				<h5 className="card-title">Postulantes aceptados</h5>
			</div>
		</div>
	</div>

	<div className="card-group">
		<div className="card text-white bg-success ">
			<i className="fa-solid fa-door-open icono"> 56 </i>
			<div className="card-body">
				<h5 className="card-title">Vacantes abiertas</h5>
			</div>
		</div>
		<div className="card text-white bg-primary tarjeta_ventas">
			<i className="fa-solid fa-clock icono"> 54 </i>
			<div className="card-body">
				<h5 className="card-title">Ofertas historicas</h5>
			</div>
		</div>
		<div className="card text-white bg-secondary ">
			<i className="fa-solid fa-chart-line icono"> 52 </i>
			<div className="card-body">
				<h5 className="card-title">Ver graficos</h5>
			</div>
		</div>
	</div>

	<div className="container-fluid text-center" id='dosBotones'>
		<Link to="autorizar-perfil-usuario "><button type="button" className="btn btn-primary btn-lg btn-block" style={{marginRight: '100px'}}>Aceptar o rechazar perfiles
			de usuario</button></Link>
		<button type="button" className="btn btn-secondary btn-lg btn-block">Reportar
			usuario/empresa</button>
	</div>
	<div/>
    </>
  )
}

export default InicioAdministrador