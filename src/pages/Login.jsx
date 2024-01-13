import React from 'react'
import {auth,provider} from '../forebase-config'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const signInWithGoogle = () =>{
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