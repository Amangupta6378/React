import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <nav  className='navlinks'>
                    <NavLink className='navUrl' to="/">Home</NavLink> 
                    <NavLink className='navUrl' to="/user/about">About</NavLink>
                    <NavLink className='navUrl' to="/name/profile">Profile</NavLink>
                    <NavLink className='navUrl' to="/contact">Contact</NavLink>
                    <NavLink className='navUrl' to="/users">User</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
