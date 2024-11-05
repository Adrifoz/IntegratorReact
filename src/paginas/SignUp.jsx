import React from 'react';
import '../CSS/SignUp.css'

function SignUp () {
return ( 
<>
<div className='SignUpContainer'>
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
    <button href="#">!¿Olvidó su contraseña?</button>
    </div>

<footer>
    <p>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
    <p>Plomería y Gas Necochea ©copyright</p>
</footer>

</div>
</>
);
}

export default SignUp;