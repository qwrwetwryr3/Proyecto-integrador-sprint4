import React from 'react'
import RegularPerfiles from '../components/regularPerfiles/RegularPerfiles.jsx'
import Navbar from '../components/navbars/NavbarAdmin.jsx'
import Footer from '../components/Footer/Footer.jsx'
import RevisarCurriculum from '../components/curriculum/RevisarCurriculum.jsx'


function RegularLosPerfiles() {
  return (
    <>
    <Navbar />
    <RegularPerfiles />
    <RevisarCurriculum />
    <Footer />
    </>
  )
}

export default RegularLosPerfiles