import React, { useState } from 'react';
import './EstadoUsuario.css';

const DisponibilidadTab = () => {
  const estadosDisponibilidad = [
    { nombre: "Disponible", color: "success" },
    { nombre: "En búsqueda activa", color: "warning" },
    { nombre: "No disponible", color: "danger" }
  ];

  const [estadoSeleccionado, setEstadoSeleccionado] = useState(estadosDisponibilidad[0]);
  const [estadoAnterior, setEstadoAnterior] = useState(estadosDisponibilidad[0]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleChangeEstado = (nuevoEstado) => {
    setEstadoAnterior(estadoSeleccionado);
    setEstadoSeleccionado(nuevoEstado);
    setMostrarModal(true);
  };

  const confirmarCambioEstado = () => {
    setMostrarModal(false);
  };

  const cancelarCambioEstado = () => {
    setEstadoSeleccionado(estadoAnterior);
    setMostrarModal(false);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Estado de Disponibilidad</h2>
      <div className="btn-group mt-3" role="group">
        {estadosDisponibilidad.map((estado, index) => (
          <button
            key={index}
            className={`btn btn-${estado.color} btn-lg`}
            onClick={() => handleChangeEstado(estado)}
          >
            {estado.nombre}
          </button>
        ))}
      </div>

      <p className="mt-3">Estado actual: {estadoSeleccionado.nombre}</p>

      {mostrarModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Cambio de Estado</h5>
                <button type="button" className="close" onClick={cerrarModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ¿Estás seguro de que deseas cambiar tu estado de disponibilidad a {estadoSeleccionado.nombre}?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelarCambioEstado}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary" onClick={confirmarCambioEstado}>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisponibilidadTab;