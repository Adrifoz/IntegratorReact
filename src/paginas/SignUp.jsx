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
</div>
</>
);
}

export default SignUp;