import React from 'react'
import {auth,provider} from '../forebase-config'
import { signInWithPopup } from "firebase/auth";

const Login = ({setIsAuth}) => {
  const signInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result) =>{
      localStorage.setItem("isAuth",true)
      setIsAuth(true)
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