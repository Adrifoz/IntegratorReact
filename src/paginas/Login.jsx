import React from 'react';
import '../CSS/Login.css'

function Login () {
return ( 
<>
<div className='loginContainer'>
<h3 className='titleSign'>Bienvenido!</h3>

<h4> Iniciar sesión</h4>
    <div className='login'>
    <label htmlFor="username">Nombre de usuario:</label>
    <input name="username" type="username"/>

    <label htmlFor="password">Contraseña:</label>
    <input name="password" type="password"/>
    <div className='buttonAndCheck'>
        <input name='submit' type="submit" value="Ingresar"/>
        <input name="checkbox" type="checkbox"/><label className="check" htmlFor="checkbox">Mantener mi sesión iniciada</label>
        
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

export default Login;