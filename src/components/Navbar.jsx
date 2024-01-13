import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/createpost">Createpost</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar