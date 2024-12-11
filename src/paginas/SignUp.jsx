import React from 'react';

function SignUp () {
return (
<>
<div className='container'>
    <div className='boxTitle'>
        <h2>Registrarse</h2>
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
        <div className='sectionSession'>
            <label htmlFor="password">Repita su contraseña:</label>
            <input name="password" type="password"/>
        </div>
        <div id="lower">
            <input type="submit" value="Registrarse"/>
        </div>
        
    </div>

    <footer className='footerSession'>
      <p className='description'>Para más información no dude en entrar en contacto con nosotros. </p>
      <p className='description'>¡Lo esperamos!</p>
      <p>Plomería y Gas Necochea ©copyright</p>
    </footer>

</div>
</>
);
}

export default SignUp;