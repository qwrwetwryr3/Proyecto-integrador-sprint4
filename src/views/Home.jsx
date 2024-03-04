import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import About from '../components/About/About.jsx'
import EmpresaL from '../components/Empresas/EmpresaL.jsx'
import EmpresaR from '../components/Empresas/EmpresaR.jsx'
import Background from '../components/Background/Background.jsx'
import CarruselEmpresas from '../components/carruselEmpresas/CarruselEmpresas.jsx'
import Cursos from '../components/cursos/Cursos.jsx'

function Home() {
  return (
    <>
    <Navbar />
    <Background />
    <About />
    <Cursos />
    <CarruselEmpresas />
    <br />
    <br />
    <br />
    <h1 id='conoce' style={{display: 'flex', justifyContent: 'center'}}>Conoce las empresas asociadas</h1>
    <EmpresaL />
    <EmpresaR />
    <EmpresaL />
    <EmpresaR />
    <EmpresaL />
    <EmpresaR />
    <Footer />
    </>
  )
}

export default Home