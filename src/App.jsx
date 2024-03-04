import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import RegistroUsuario from './views/RegistroUsuario.jsx';
import RegistrateUsuario from './views/Registrate.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import PerfilUsuarios from './views/PerfilUsuarios.jsx';

import ProtectedRoute from './ProtectedRoute.jsx';
import { TaskProvider } from './context/TasksContext.jsx';


function App() {

  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/registrate_app' element={<RegistrateUsuario />} />

            <Route path='/registro-usuario_app' element={<RegistroUsuario />} />


            <Route element={<ProtectedRoute />}>
              {/*Rutas protegidas */}
              <Route path='/perfil-usuarios_app' element={<PerfilUsuarios />} />
              <Route path='/perfil-usuarios_app/:id' element={<PerfilUsuarios />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </TaskProvider>

    </AuthProvider>

  )
}

export default App
