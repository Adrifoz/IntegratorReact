import React from 'react';
import '../CSS/Login.css'

function Login () {
return ( 
<>
<div className='loginContainer'>
<div className='login'>
<label htmlFor="name">Username:</label>
<input type="name"/>

<label htmlFor="username">Password:</label>
<input type="password"/>
<div id="lower">
    <input type="checkbox"/><label className="check" htmlFor="checkbox">Keep me logged in</label>
    <input type="submit" value="Login"/>
    
</div>
<button href="#">Forgot your password?</button>
</div>
</div>
</>
);
}

export default Login;