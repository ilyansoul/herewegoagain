import React from 'react'
import './styles/login.css'


function Login() {
  return (
<div className='front'>
   <form action="http://localhost:5000/api/login" method='POST' >
<div class="box">
            <div class="form" >
                <h2>Connexion</h2>
                <div class="inputBox">
                    <input type="string" name='email' required="required"/>
                    <span>Email</span>
                    <i></i>
                </div>
                <div class="inputBox2">
                    <input type="password" name='password' required="required"/>
                    <span>Mot de passe</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href="/">Mot de passe oublie?</a>
                    <a href="/">Inscription</a>
                </div>
                <a href="/"><input type="submit" value="Login"/></a>
            </div>
        </div>
        </form>
    
    
    
    
</div>  )
}

export default Login