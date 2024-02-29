import React from 'react'
import './Navbar.css'
import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from '../SignIn/SignIn'
import LogOut from '../LogOut/LogOut'


const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className="navbar">
        <h1 className="heading">Buzz-Chat</h1>
       {user ? <LogOut/> : <SignIn/>}
        
        
        
        
    </div>
  )
}

export default Navbar