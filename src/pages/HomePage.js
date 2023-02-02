import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'
import EditSection from '../components/Edit/EditSection'
import ChatHeader from '../components/ChatHeader'


const Dashboard = () => {

    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Monica Hall',
            url: 'https://imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://imgur.com/oPj4A8u.jpg'
        }
    ]

    const handleLogout = () => {
        // Clear the user session and local storage
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    
        // Redirect the user to the login page
        this.props.history.push('/login');
      };
    
    

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            
            <div className="swipe-container">
                <div className='nav-home'>
            <ChatHeader/>
        
            </div>

                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard
                         className='swipe'
                          key={character.name} onSwipe={(dir) => swiped(dir, character.name)}
                          onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
                            className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}

                    <div className='swipe-info'>
                        {lastDirection ? <p>You swipes {lastDirection}</p> : <p/> }
                    </div>

                </div>
            </div>

            <ChatContainer/>

        </div>
    )
}

export default Dashboard