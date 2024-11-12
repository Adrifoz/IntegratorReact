import React from 'react';
import '../CSS/SignUp.css'

function SignUp () {
return ( 
<>
<div className='SignUpContainer'>

    <h3 className='titleSign'>Bienvenido!</h3>
    <h4> Regístrate aqui:</h4>
    <div className='SignUp'>
        <label htmlFor="name">Nombre de usuario:</label>
        <input type="name"/>

        <label htmlFor="username">Contraseña:</label>
        <input type="password"/>
        <label htmlFor="username">Repita su contraseña:</label>
        <input type="password"/>
        <div id="lower">
            <input type="submit" value="Entrar"/>
        </div>
        <button href="#">¿Olvidó su contraseña?</button>
    </div>

<footer>
    <p>Plomería y Gas Necochea ©copyright</p>
</footer>

</div>
</>
);
}

export default SignUp;