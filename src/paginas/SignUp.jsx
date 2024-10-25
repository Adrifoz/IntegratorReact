import React from 'react';
import '../CSS/SignUp.css'

function SignUp () {
return ( 
<>
<div className='SignUpContainer'>
    <div className='SignUp'>
    <label htmlFor="name">Username:</label>
    <input type="name"/>

    <label htmlFor="username">Password:</label>
    <input type="password"/>
    <label htmlFor="username">Repeat your password:</label>
    <input type="password"/>
    <div id="lower">
        
        <input type="submit" value="Sign In"/>
    </div>
    <button href="#">Forgot your password?</button>
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