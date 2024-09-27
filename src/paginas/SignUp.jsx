import React from 'react';
import '../CSS/SignUp.css'

function SignUp () {
return ( 
<>
<div className='SignUpContainer'>
<div className='SignUp'>
<label for="name">Username:</label>
<input type="name"/>

<label for="username">Password:</label>
<input type="password"/>
<label for="username">Repeat your password:</label>
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