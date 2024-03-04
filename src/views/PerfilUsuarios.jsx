import React from 'react'
import Navbar from '../components/navbars/NavbarUsuario.jsx'
import Footer from '../components/Footer/Footer.jsx'
import PerfilUsuario from '../components/perfilUsuario/PerfilUser.jsx'
import BotonChat from '../components/botonChat/BotonChat.jsx'

function PerfilUsuarios() {
  return (
    <>
    <Navbar />
    <PerfilUsuario />
    <BotonChat />
    <Footer />
    </>
  )
}

export default PerfilUsuarios