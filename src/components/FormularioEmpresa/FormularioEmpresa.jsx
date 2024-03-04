import React from 'react'
import './FormularioEmpresa.css'
import { Link } from 'react-router-dom'

function FormularioEmpresa() {
  return (
    <>
    <div className="fregistro">
        <p>Formulario de registro</p>
    </div>
    <div id="formulario-container">
        <div className="mb-3" id="primerFormulario">
            <label for="formGroupExampleInput" className="form-label">Nombre de la empresa</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Juan Perez"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Rut</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="11.111.111-1"/>
        </div>
        <div className="mb-3">
            <label for="exampleDataList" className="form-label">Giro o rubro</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Seleccione..."/>
                <datalist id="datalistOptions">
                    <option value="AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA"/>
                    <option value="EXPLOTACIÓN DE MINAS Y CANTERAS"/>
                    <option value="INDUSTRIA MANUFACTURERA"/>
                    <option value="SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO"/>
                    <option value="SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN"/>
                    <option value="CONSTRUCCIÓN"/>
                    <option value="COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS"/>
                    <option value="TRANSPORTE Y ALMACENAMIENTO"/>
                    <option value="ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS"/>
                    <option value="INFORMACIÓN Y COMUNICACIONES"/>
                    <option value="ACTIVIDADES FINANCIERAS Y DE SEGUROS"/>
                    <option value="ACTIVIDADES INMOBILIARIAS"/>
                    <option value="ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS"/>
                    <option value="ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO"/>
                    <option value="ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA"/>
                    <option value="ENSEÑANZA"/>
                    <option value="ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL"/>
                    <option value="ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS"/>
                    <option value="OTRAS ACTIVIDADES DE SERVICIOS"/>
                    <option value="ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES; ACTIVIDADES NO DIFERENCIADAS DE LOS HOGARES "/>
                    <option value="ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES"/>
                </datalist>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Cantidad de empleados</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Ejemplo: 60"/>
        </div>   
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Acerca de</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder=""/>
        </div>  
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Dirección</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Calle ejemplo 123, comuna Renca"/>
        </div>   
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Celular</label>
            <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="+569 1234 5678"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Correo</label>
            <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="Ejemplo@gmail.com"/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">URL de página web</label>
            <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="https://www.empresa.cl"/>
        </div>
        <div className="d-flex justify-content-end" id="Benviar">
            <Link to="/perfil-empresa"><button id="miBoton">Enviar</button></Link>
        </div>
    </div>
    </>
  )
}

export default FormularioEmpresa