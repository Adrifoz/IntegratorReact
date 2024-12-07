import React from 'react';
import '../CSS/SignUp.css'

function SignUp () {
return ( 
<>
<div className='container'>

    <h3 className='titleSign'>Bienvenido!</h3>
    <h4> Regístrate aqui:</h4>
    <div className='SignUp'>
        <label htmlFor="username">Nombre de usuario:</label>
        <input name="username" type="username"/>

        <label htmlFor="password">Contraseña:</label>
        <input name="password" type="password"/>
        <label htmlFor="password">Repita su contraseña:</label>
        <input name="password" type="password"/>
        <div id="lower">
            <input type="submit" value="Entrar"/>
        </div>
        <button href="#">¿Olvidó su contraseña?</button>
    </div>

    <footer>
      <p className='description'>Para más información no dude en entrar en contacto con nosotros. </p>
      <p className='description'>¡Lo esperamos!</p>
      <p>Plomería y Gas Necochea ©copyright</p>
    </footer>

</div>
</>
);
}

export default SignUp;