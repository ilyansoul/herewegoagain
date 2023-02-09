import React from 'react'
import './styles/login.css'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import axios from 'axios'



function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (password !== confirmPassword) {
                setError('Passwords need to match!')
                return
            }

            const response = await axios.post(`http://localhost:5000/login`, { email, password })

            setCookie('AuthToken', response.data.token)
            setCookie('UserId', response.data.userId)

            const success = response.status === 201
            if (success) navigate('/homepage')
            if (!success) navigate('/acceuil')

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }

    const navigate = useNavigate()



    return (
        <div className='front'>
            <form onSubmit={handleSubmit}>
                <div class="box">
                    <div class="form" >
                        <h2>Connexion</h2>
                        <div class="inputBox">
                            <input type="string"
                                name='email'
                                required={true}
                                onChange={(e) => setEmail(e.target.value)}


                            />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div class="inputBox2">
                            <input
                                type="password"
                                name='password'

                                required={true}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div class="inputBox2">

                                <input
                                    type="password"
                                    name="password-check"
                                    placeholder="confirm password"
                                    required={true}
                                    onChange={(e) => setConfirmPassword(e.target.value)}


                                />
                            </div>
                            <span>Confirme Mot de passe</span>

                            <i></i>
                        </div>
                        <div class="links">
                            <a href="/">Mot de passe oublie?</a>
                            <a href="/">Inscription</a>
                        </div>
                        <input type="submit" />
                        <p>{error}</p>

                    </div>
                </div>
            </form>




        </div>)
}

export default Login