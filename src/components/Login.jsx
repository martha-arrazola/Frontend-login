// Login.js

import React, { useState } from 'react';


const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState(''); // Estado para mensaje de login


    const handleSubmit = (e) => {

        e.preventDefault();

        const usuarioValido = 'admin';

        const contraseñaValida = '123456';

        if (usuario.length == 0 || contraseña.length == 0) {
            setMensaje("Introduce el usuario o contraseña")
        } else {
            const resultado = (usuario === usuarioValido && contraseña === contraseñaValida);
            setMensaje(resultado ? `¡Bienvenido! ${usuario}` : 'Credenciales incorrectas.');
        }



    };

    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setContraseña(event.target.value)
    }
    return (

        <form onSubmit={handleSubmit}>
            <label>Usuario:</label>
            <input
                type="text"
                value={usuario}
                onChange={handleUsuarioChange}
            />
            <label>Contraseña:</label>
            <input
                type="password"
                value={contraseña}
                onChange={handlePasswordChange}

            />
            <button type="submit">Iniciar sesión</button>
            {mensaje && <p className="mensaje">{mensaje}</p>}
        </form>




    );

};

export default Login;
