import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './styles/register.css';


const AuthModal = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [ cookies, setCookie, removeCookie] = useCookies(null)

    let navigate = useNavigate()

    console.log(email, password, confirmPassword)




    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if ( password !== confirmPassword) {
                setError('Passwords need to match!')
                return
            }

            const response = await axios.post(`http://localhost:5000/signup`, { email, password })

            setCookie('AuthToken', response.data.token)
            setCookie('UserId', response.data.userId)

            const success = response.status === 201
            if (!success) navigate ('/acceuil')
            if (success) navigate ('/onboarding')

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="register-bak">

            <form onSubmit={handleSubmit}>
            <div className='container'>
                <input className='text'
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className='text'
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                   className='text'
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
                </div>
            </form>

            <hr/>

        </div>
    )
}
export default AuthModal
