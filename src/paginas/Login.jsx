import React from 'react';
import '../CSS/Login.css'

function Login () {
return ( 
<>
<div className='loginContainer'>
    <div className='login'>
    <label htmlFor="name">Nombre de usuario:</label>
    <input type="name"/>

    <label htmlFor="username">Contraseña:</label>
    <input type="password"/>
    <div className='buttonAndCheck'>
        <input type="submit" value="Ingresar"/>
        <input type="checkbox"/><label className="check" htmlFor="checkbox">Mantener mi sesión iniciada</label>
        
    </div>
    <button href="#">¿Olvidó su contraseña?</button>
    </div>

<footer>
    <p>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
    <p>Plomería y Gas Necochea ©copyright</p>
</footer>

</div>
</>
);
}

export default Login;