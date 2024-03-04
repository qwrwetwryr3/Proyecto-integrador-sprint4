import React from 'react';
import './RegularPerfiles.css';

function RegularPerfiles() {
  const openModal = (imageSrc) => {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    // Establece la fuente de la imagen del modal
    modalImage.src = imageSrc;

    // Muestra el modal
    modal.style.display = 'block';
  };

  const closeModal = () => {
    const modal = document.getElementById('myModal');
    // Oculta el modal
    modal.style.display = 'none';
  };

  // Cierra el modal si se hace clic fuera de él
  const handleOutsideClick = (event) => {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  return (
    <>
        <div className='container-fluid' id='CVcontenedores'>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/CV.jpg')}>Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/CV.jpg')}>Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/CV.jpg')}>Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/CV.jpg')}>Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/CV.jpg')}>Ver CV</button>
            </div>
            <div className='perfil-revisar'>
                <p>Nombre Apellido | Fecha de Registro | <b> Por revisar </b></p>
                <button type="button" class="btn btn-info" onClick={() => openModal('/CV.jpg')}>Ver CV</button>
            </div>
        </div>
        <div id="myModal" className="modal" onClick={handleOutsideClick}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <img id="modalImage" src="" alt="Imagen del modal"/>
        </div>
      </div>
    </>
  )
}

export default RegularPerfiles