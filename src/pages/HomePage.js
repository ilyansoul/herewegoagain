import { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/Chat/ChatContainer'
import EditSection from '../components/Edit/EditSection'
import ChatHeader from '../components/Chat/ChatHeader'
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useRef } from 'react';
import EditLeft from '../components/Edit/EditLeft'

const HomePage = () => {
  const [user, setUser] = useState(null)
  const [genderedUsers, setGenderedUsers] = useState(null)
  const [lastDirection, setLastDirection] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [swipedUsers, setSwipedUsers] = useState([])
  
  const userId = cookies.UserId

  const getUser = async () => {
      try {
          const response = await axios.get('http://localhost:5000/user', {
              params: {userId}
          })
          setUser(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  const getGenderedUsers = async () => {
      try {
          const response = await axios.get('http://localhost:5000/gendered-users', {
              params: {gender: user?.gender_interest}
          })
          setGenderedUsers(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      getUser()
  }, [])

  useEffect(() => {
      if (user) {
          getGenderedUsers()
      }
  }, [user])

  const updateMatches = async (matchedUserId) => {
      try {
          await axios.put('http://localhost:5000/addmatch', {
              userId,
              matchedUserId
          })
          getUser()
      } catch (err) {
          console.log(err)
      }
  }

  const handleNotification = (swipedUser) => {
      if (swipedUser && !swipedUsers.includes(swipedUser.user_id)) {
          setSwipedUsers([...swipedUsers, swipedUser.user_id]);
          const notificationMessage = `You have been swiped right by ${user.first_name}!`
          alert(notificationMessage);
      }
  }

  const swiped = (direction, swipedUserId, swipedUser) => {
      if (direction === 'right') {
          updateMatches(swipedUserId)
      }
      setLastDirection(direction)
      handleNotification(swipedUser)
  }

  const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
  }

  const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

  const filteredGenderedUsers = genderedUsers?.filter(genderedUser => !matchedUserIds.includes(genderedUser.user_id))

  console.log('filteredGenderedUsers ', filteredGenderedUsers)
  return (
    <>
      {user &&
        <div className="dashboard">
          <EditLeft user={user} />

          <div className="swipe-container">
            <div className="nav-home">

            </div>
            <div className="card-container">
            

              {filteredGenderedUsers?.map((genderedUser) =>
                <TinderCard
                  className="swipe"
                  key={genderedUser.user_id}
                  onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                  onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                  <div
                    style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                    className="card">
                    <h3>{genderedUser.first_name}</h3>
                  </div>
                </TinderCard>
              )}
              <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
              </div>
            </div>

          </div>
          <ChatContainer user={user} />

        </div>}
    </>
  )
}

export default HomePage