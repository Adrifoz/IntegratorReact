import React from 'react';
import '../CSS/Login.css'

function Login () {
return ( 
<>
<div className='loginContainer'>
<div className='login'>
<label for="name">Username:</label>
<input type="name"/>

<label for="username">Password:</label>
<input type="password"/>
<div id="lower">
    <input type="checkbox"/><label class="check" for="checkbox">Keep me logged in</label>
    <input type="submit" value="Login"/>
    
</div>
<button href="#">Forgot your password?</button>
</div>
</div>
</>
);
}

export default Login;