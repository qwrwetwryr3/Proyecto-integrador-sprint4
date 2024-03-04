import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from '../views/Home.jsx'
import ModerarEmpresas from '../views/ModerarEmpresas.jsx';
import InicioAdmin from '../views/InicioAdmin.jsx';
import FormularioE from '../views/FormularioE.jsx';
import FormularioU from '../views/FormularioU.jsx';
/* import PublicarOferta from '../views/PublicarOferta.jsx'; */
import AutorizarPUsuario from '../views/AutorizarPUsuario.jsx';
import InicioSesion from '../components/inicioSesion/InicioSesion.jsx';
import PerfilDeEmpresa from '../views/PerfilDeEmpresa.jsx';
import RegularLosPerfiles from '../views/RegularLosPerfiles.jsx';
import PerfilUsuarios from '../views/PerfilUsuarios.jsx';
import RegistroUsuario from '../views/RegistroUsuario.jsx';
import RegistrateUsuario from '../views/Registrate.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';

const router = createBrowserRouter([


  {
    path: "/",
    element: <Home />
  },
  {
    path: "moderar-empresa",
    element: <ModerarEmpresas />
  },
  {
    path: "inicio-sesion/inicio-administrador",
    element: <InicioAdmin />
  },
  {
    path: "formulario-empresa",
    element: <FormularioE />
  },
  {
    path: "formulario-usuario",
    element: <FormularioU />
  },
  /* {
    path: "formulario-oferta",
    element: <PublicarOferta />
  }, */
  {
    path: "inicio-sesion/inicio-administrador/autorizar-perfil-usuario",
    element: <AutorizarPUsuario />
  },
  {
    path: "inicio-sesion",
    element: <InicioSesion />
  },
  {
    path: "perfil-empresa",
    element: <PerfilDeEmpresa />
  },
  {
    path: "regular-perfiles",
    element: <RegularLosPerfiles />
  },
  {
    path: "perfil-usuarios",
    element: <PerfilUsuarios />
  }/* ,
  {
    path: "registro-usuario",
    element: <RegistroUsuario />
  } *//* ,
  {
    path: "registrate",
    element: <RegistrateUsuario />
  } */
]);


export default router;