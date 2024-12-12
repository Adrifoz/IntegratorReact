import React from 'react';

function Login () {
return ( 
<>
<div className='container'>
  <div className='boxTitle'>
    <h2>Iniciar sesión</h2>
  </div>
  
    <div className='containerSessions'>
    <div className='sectionSession'>
      <label htmlFor="username">Nombre de usuario:</label>
      <input name="username" type="username"/>
    </div>

    <div className='sectionSession'>
      <label htmlFor="password">Contraseña:</label>
      <input name="password" type="password"/>
    </div>
    <div className='buttonAndCheck'>
        <input name='submit' type="submit" value="Ingresar"/>
        <input name="checkbox" type="checkbox"/><label className="check" htmlFor="checkbox">Mantener mi sesión iniciada</label>
    </div>
    <button className='buttonPassword' href="#">¿Olvidó su contraseña?</button>
  </div>

    <footer className='footerSessions'>
      <p className='description'>Para más información no dude en entrar en contacto con nosotros. </p>
      <p className='description'>¡Lo esperamos!</p>
      <p>Plomería y Gas Necochea ©copyright</p>
    </footer>

</div>
</>
);
}

export default Login;