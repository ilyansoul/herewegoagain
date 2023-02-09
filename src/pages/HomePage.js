import { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'
import EditSection from '../components/Edit/EditSection'
import ChatHeader from '../components/ChatHeader'
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useRef } from 'react';



const HomePage = () => {
    const isInitialRender = useRef(true);
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [genderedUsers, setGenderedUsers] = useState(null)
    const [lastDirection, setLastDirection] = useState()
    const [user, setUser] = useState(null)
    const userId = cookies.UserId



    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:5000/user', {
                params: { userId }
            })
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getGenderedUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/gendered-users', {
                params: { gender: user?.gender_interest }
            })
            setGenderedUsers(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isInitialRender.current) {
            getUser();
            
            isInitialRender.current = false;
        }
    }, []);

    useEffect(() => {
        if (user) {
            getGenderedUsers()
        }
    }, [user])

    const updatedMatches = async (matchedUserId) => {
        try {
          await axios.put('http://localhost:5000/addmatch', {
            userId,
            matchedUserId
          });
          getUser();
        } catch (error) {
          console.log(error.response);
        }
      };
      
      const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId);
      
      const filteredGenderedUsers = genderedUsers
        ? genderedUsers.filter(genderedUser => !matchedUserIds.includes(genderedUser.id) && genderedUser.id !== userId)
        : null;
      
      const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {
          updatedMatches(swipedUserId);
        }
        setLastDirection(direction);
      };
      
      console.log(genderedUsers);
      console.log(user);
      
      const outOfFrame = (name) => {
        console.log(`${name} left the screen!`);
      };
      
      return (
        <div className="dashboard">
          <div className="swipe-container">
            <div className="nav-home">
              <ChatHeader user={user} />
            </div>
      
            <div className="card-container">
              {genderedUsers ? (
                filteredGenderedUsers.map(genderedUsers => (
                  <TinderCard
                    className="swipe"
                    key={genderedUsers.first_name}
                    onSwipe={dir => swiped(dir, genderedUsers.first_name)}
                    onCardLeftScreen={() => outOfFrame(genderedUsers.first_name)}
                  >
                    <div
                      className="taille"
                      style={{ backgroundImage: `url(${genderedUsers.url})` }}
                      classfirst_name="card"
                    >
                      <h3>{genderedUsers.first_name}</h3>
                    </div>
                  </TinderCard>
                ))
              ) : (
                <p>Loading...</p>
              )}
      
              <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
              </div>
            </div>
          </div>
      
          <ChatContainer user={user} />
        </div>
      );
}

export default HomePage