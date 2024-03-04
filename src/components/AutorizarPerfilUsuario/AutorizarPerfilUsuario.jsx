import React from 'react'
import './AutorizarPerfilUsuario.css'

function AutorizarPerfilUsuario() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className="container">
        {/* <div className="card position-absolute translate-middle" style="width: 10%;">
            <img className="card-img-top" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="Card image cap"/>
        </div> */}
        
        <div className="row">
            <div><br/><br/><br/></div>
            <div className="card" style={{backgroundColor: 'indianred',}}>
                <div className="card-header">
                    <h1>Nombre Completo</h1>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <h2>Celular:</h2>
                        <br/>
                        <h2>Email:</h2>
                        <br/>
                        <h2>Comuna de residencia: </h2>
                        <br/>
                        <h3>Acerca de mi</h3>
                        <br/>
                        <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</h4>
                    </blockquote>
                </div>
            </div>
            <div><br/></div>
            <div className="card" style={{backgroundColor: 'lightgreen'}}>
                <div className="card-header">
                    <h1>Educación</h1>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <h2>Institución educacional</h2>
                        <h2 style={{textAlign: 'right'}}>Fecha</h2>
                        <h2>Grado</h2>
                        <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</h4>
                        <br/>
                        <h2>Institución educacional</h2>
                        <h2 style={{textAlign: 'right'}}>Fecha</h2>
                        <h2>Grado</h2>
                        <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</h4>
                    </blockquote>
                </div>
            </div>

            <div><br/></div>


            <div className="card" style={{backgroundColor: 'lightsteelblue'}}>
                <div className="card-header">
                    <h1>Cursos y certificaciones</h1>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <h2>Institución</h2>
                        <h2 style={{textAlign: 'right'}}>Fecha</h2>
                        <h2>Nombre</h2>
                        <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</h4>
                    </blockquote>
                </div>
            </div>

            <div><br/></div>


            <div className="card" style={{backgroundColor: 'darkorange'}}>
                <div className="card-header">
                    <h1>Experiencia laboral</h1>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <h2>Empresa</h2>
                        <h2 style={{textAlign: 'right'}}>Fecha</h2>
                        <h2>Cargo</h2>
                        <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</h4>
                        <br/>
                        <h2>Empresa</h2>
                        <h2 style={{textAlign: 'right'}}>Fecha</h2>
                        <h2>Cargo</h2>
                        <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</h4>
                    </blockquote>
                </div>
            </div>

            <div><br/></div>


        </div>
    </div>

    <br/>

    <div className="container">

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-danger btn-lg" style={{width: '100%'}}>Rechazar</button>
            </div>
            <div className="col">
                <button type="button" className="btn btn-success btn-lg" style={{width: '100%'}}>Autorizar</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AutorizarPerfilUsuario