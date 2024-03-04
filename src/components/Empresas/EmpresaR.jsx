import React from 'react'
import './EmpresaL.css'

function EmpresaR() {
  return (
<>
  <div data-aos="flip-right">
    <div className='row'>
      <div className='offset-lg-7 col-lg-5 order-lg-2 order-1'>
        <div className='card' id='carta-derecha'>
          <img src='/logo-generico.png' className='card-img-top'/>
          <div className='card-body'>
            <h5 className='card-title'>Nombre Empresa</h5>
            <p>Descripción Empresa</p>
            <a href='#' className='btn btn-primary'>Conocer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default EmpresaR