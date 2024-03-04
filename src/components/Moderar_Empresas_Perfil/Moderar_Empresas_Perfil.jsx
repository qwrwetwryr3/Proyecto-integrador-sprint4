import React from "react";
import './Moderar_Empresas_Perfil.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from "../Footer/Footer.jsx";

function Moderar_Empresas_Perfil() {
    return (
        <>

            <Navbar />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <!--Contenido-->  */}
            <div className="card tarjetaEmpresa">
                <img className="card-img-top imagenTarjetaEmpresa" src="../company-svgrepo-com.svg" alt="Card image cap" />
                <div className="card-body cuerpoTarjetaEmpresa">
                    <div className="text-section">
                        <h5 className="card-title">Razon social</h5>
                        <p className="card-text">Nombre de la empresa: </p>
                        <p className="card-text">RUT: </p>
                        <p className="card-text">Direccion: </p>
                        <p className="card-text">Rubro o Giro: </p>
                        <p className="card-text">Cantidad de empleados: </p>
                    </div>
                    <div className="cta-section">
                        <div><i className="fa-solid fa-square-pen"></i></div>
                    </div>
                </div>
            </div>

            <h1 className="postulacionesAbiertas">Postulaciones abiertas</h1>

            <div className="container">
                <div className="row">
                    <div><br /><br /><br /></div>
                    <div><br /></div>

                    <div><br /></div>

                    <div className="card tarjeta"  >

                        <h1>Cargo</h1>

                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <h2>Area</h2>
                                <h2>Full time</h2>
                                <p className="iconoEditar"><i className="fa-solid fa-calendar-days"></i>
                                    Publicada 01/01/2024</p>

                                <div className="position-absolute top-0 end-0 requisitoFuncion"  >
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Requisitos: </h5>
                                            <ul>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Funciones: </h5>
                                            <ul>
                                                <li>Función</li>
                                                <li>Función</li>
                                                <li>Función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <br />

                                <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                    <div><br /></div>

                    <div className="card tarjeta" >

                        <h1>Cargo</h1>

                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <h2>Area</h2>
                                <h2>Full time</h2>
                                <p className="iconoEditar"><i className="fa-solid fa-calendar-days"></i>
                                    Publicada 01/01/2024</p>

                                <div className="position-absolute top-0 end-0 requisitoFuncion " >
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Requisitos: </h5>
                                            <ul>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Funciones: </h5>
                                            <ul>
                                                <li>Función</li>
                                                <li>Función</li>
                                                <li>Función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <br />

                                <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                    <div><br /></div>

                    <div className="card tarjeta" >

                        <h1>Cargo</h1>

                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <h2>Area</h2>
                                <h2>Full time</h2>
                                <p className="iconoEditar"><i className="fa-solid fa-calendar-days"></i>
                                    Publicada 01/01/2024</p>

                                <div className="position-absolute top-0 end-0 requisitoFuncion" >
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Requisitos: </h5>
                                            <ul>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                                <li>Requisito</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Funciones: </h5>
                                            <ul>
                                                <li>Función</li>
                                                <li>Función</li>
                                                <li>Función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />

                                <h4>DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion
                                </h4>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>

    )
}

export default Moderar_Empresas_Perfil