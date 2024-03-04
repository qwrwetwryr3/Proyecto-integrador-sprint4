import React from 'react'
import Navbar from '../components/navbars/NavbarEmpresa.jsx'
import Footer from '../components/Footer/Footer.jsx'
import PerfilEmpresa from '../components/perfilEmpresa/PerfilEmpresa.jsx'
import FormularioOferta from '../components/FormularioOferta/FormularioOferta.jsx'

function PerfilDeEmpresa() {
  return (
    <>
    <Navbar />
    <PerfilEmpresa />
    <FormularioOferta />
    <Footer />
    </>
  )
}

export default PerfilDeEmpresa