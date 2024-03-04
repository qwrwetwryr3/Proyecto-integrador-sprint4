import React from 'react'
import './RevisarCurriculum.css'

function RevisarCurriculum() {
  return (
    <div className='tarjeta-curriculum'>
        <div className='intro-usuario'>
            <h1>Nombre Nombre Apellido Apellido</h1>
            <h3>Sobre Mí</h3>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus omnis amet ad perferendis explicabo fugit nesciunt possimus, voluptatibus totam, doloribus error veniam. Temporibus non neque fugiat, quam voluptate illo deserunt!</h4>
            <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Datos Personales
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Rut: 12.345.678-9 <br/> Edad: 00 <br/> Nacionalidad: <br/> Estado Civil:</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Información Educacional
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className='educacion'>
                        <p>Institución Educacional <br/> 2020 - 2020 <br/> Grado</p>
                        <p>Institución Educacional <br/> 2020 - 2020 <br/> Grado</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Experiencia Laboral
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                <div className='experiencia'>
                        <p>Empresa <br/> 2020 - 2020 <br/> Cargo <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi molestias magni necessitatibus rem dicta enim eius voluptatibus eaque veniam explicabo, eum harum voluptatem dignissimos! Perspiciatis exercitationem natus error est aut? </p>
                        <p>Empresa <br/> 2020 - 2020 <br/> Cargo <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore exercitationem sequi illo quae ad officia explicabo accusamus? Eaque ad totam facilis laudantium eum dignissimos est repellat nulla, cum iste aspernatur?</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Cursos y Certificaciones
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                <div className='certificaciones'>
                        <p>Institución <br/> 2020 - 2020 <br/> Nombre curso <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <p>Institución <br/> 2020 - 2020 <br/> Nombre curso <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Contáctalo!
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <div className='contacto'>
                            <p>Teléfono: +569 9876 5432</p>
                            <p>Correo: correo@correo.com</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>    
  )
}

export default RevisarCurriculum