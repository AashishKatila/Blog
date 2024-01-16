import React from 'react'
import {auth,provider} from '../firebase-config'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

  const navigate = useNavigate()//For navigation 

  // To sign in using Google
  const signInWithGoogle = () =>{

    // Lets user signin in a popup window (used for ease), 
    // takes instance of Firebase Authentication and GoogleAuthProvider class
    signInWithPopup(auth,provider).then((result) =>{
      localStorage.setItem("isAuth",true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign In With Google </p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default Login