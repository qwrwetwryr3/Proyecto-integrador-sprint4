import React, { useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const changeNav = () => {
      if (window.scrollY >= 56){
        setNavbar(true)
      } else{
        setNavbar(false)
      }
    };

    window.addEventListener('scroll', changeNav);
  return (
    <>
    <nav className={navbar ? 'navbar active navbar-expand-md fixed-top' : 'navbar navbar-expand-md fixed-top'}>
        <div className="container-fluid">

            <Link to="/"><a className="navbar-brand" href="#">
              <img src='../../public/Renca_B&W.png' height="50" />
            </a></Link>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                    <li className="nav-item">
                        <Link to="/"><a href="#" className="nav-link active"><img src="../../public/acaestamoslogo.png" alt="" height="100"/></a></Link>
                    </li>
                </ul>
            </div>
            <div>
              <Link to="inicio-sesion"><a href="#" className="usuario-button" >Ingresar</a></Link>
            </div>
        </div>
    </nav>
  </>
  )
}

export default Navbar