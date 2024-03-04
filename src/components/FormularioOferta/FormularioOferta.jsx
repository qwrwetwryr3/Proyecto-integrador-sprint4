import React from 'react'
import './FormularioOferta.css'

function FormularioOferta() {
  return (
    <>
    <div className="container mt-5">
        <form className="formulario">
            <h2>Añadir Oferta Laboral</h2>
            <div className="col-md-12 mb-8 form-floating nombre-cargo">
                <input className="form-control" type="text" id="nombre-cargo" placeholder="ingresa"/>
                <label className="form-label" for="nombre-cargo">Ingresa el cargo a publicar</label>
            </div>
            <div className="row area">
                <div className="col-md-6">
                    <label className="form-label" for="ciudad">Área</label>
                    <select id="ciudad" className="form-select mb-3">
                    <option value="administracion">Administración</option>
                    <option value="arte-diseño">Arte/Diseño</option>
                    <option value="comercial">Comercial</option>
                    <option value="economia">Economía</option>
                    <option value="educacion">Educación</option>
                    <option value="informatica">Informática</option>
                    <option value="logistica">Logística</option>
                    <option value="marketing">Marketing</option>
                    <option value="medicina-salud">Medicina/Salud</option>
                    <option value="operarios">Operarios</option>
                    <option value="rrhh">Recursos Humanos</option>
                    <option value="seguridad">Seguridad</option>
                    <option value="turismo">Turismo</option>
                    </select>
                </div>
                <div className="col-md-6 jornada">
                    <label className="form-label" for="ciudad">Jornada</label>
                    <select id="ciudad" className="form-select mb-3">
                    <option value="full">Full-Time</option>
                    <option value="part">Part-Time</option>
                    <option value="nocturno">Nocturno</option>
                    </select>
                </div>
            </div>
            <div className="col-md-12 mb-8 form-floating requisitos">
                <input className="form-control" type="text" id="nombre-cargo" placeholder="ingresa"/>
                <label className="form-label" for="nombre-cargo">Ingresa los requisitos del cargo</label>
            </div>

            <div className="col-md-12 mb-8 form-floating funciones">
                <input className="form-control" type="text" id="nombre-cargo" placeholder="ingresa"/>
                <label className="form-label" for="nombre-cargo">Ingresa las funciones del cargo</label>
            </div>

                <label className="form-label" for="comentarios">Descripción del cargo</label>
                <textarea id="comentarios" className="form-control mb-3" rows="4" cols="30"></textarea>

            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                <button type="reset" className="btn btn-danger btn-lg">Cancelar</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default FormularioOferta