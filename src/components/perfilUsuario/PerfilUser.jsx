import React, { useEffect, useState } from 'react'
import './PerfilUser.css'
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createContext, useContext } from 'react';

export default function PerfilUsuario() {

  const { id } = useParams()
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/').then(res => {
      console.log(res);
      setData(res.data);
    }).catch(err => console.log(err));
  }, [])

  return (
    <>
      <div className='headerUsuario'>
        <div className="container-fluid header">
          <img className="imagen" src="https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg" alt="" />
        </div>

        <h1 className="nombre-usuario">NOMBRE APELLIDO APELLIDO</h1>
        <div className="perfil">
          <h3>Acerca de mí</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aliquam ex ipsa hic asperiores reiciendis. Nihil non, distinctio expedita molestiae perspiciatis dolorem, culpa nisi incidunt quam quod cumque repellendus repudiandae!</p>
        </div>
        <body>
          {
            data.map((formulariousuarios, index)=>{
              return 
              <div key={index}>
                <h1>{formulariousuarios.Nombre}</h1>
                <h1>{formulariousuarios.RUT}</h1>
                <h1>{formulariousuarios.EstadoCivil}</h1>
              </div>
            })
          }
        </body>
      </div>
    </>
  )
}