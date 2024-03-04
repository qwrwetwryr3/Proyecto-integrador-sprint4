import React from "react";
import './InicioSesion.css'
import { Link } from 'react-router-dom'; 

function InicioSesion() {
    return (
        <>
            <body id="fondo2">
                <main>
                    <div class="cuadrado">
                        <div class="registro-flotante">
                            <h2>Inicia sesión</h2>
                            <form action="#">
                                <label for="correo">Correo electrónico:</label>
                                <input type="email" id="correo" name="correo" required />
                                <label for="correo">Contraseña:</label>
                                <input type="contraseña" id="contraseña" name="contraseña" required />
                                <Link to="inicio-administrador"><button type="submit">Ingresar</button></Link>
                            </form>
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}

export default InicioSesion