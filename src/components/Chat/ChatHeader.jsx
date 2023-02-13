import React from 'react'
import '../styles/ChatHeader.css';
import  Logo from '../logo.png';
import { useCookies } from 'react-cookie'


const ChatHeader = ({ user }) => {

    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
    }

    return (
        <div className="chat-container-header">
            {user ? (
                <>
                    <div className="profile">
                        <img className='profile-img' src={Logo} alt="" />

                            <img className='profile-photo' src={user.url} alt={"photo of " + user.first_name}/>
                        </div>
                        <h3 className='user-name'>{user.first_name}</h3>
                    <i className="log-out-icon" onClick={logout}>⇦</i>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default ChatHeader
