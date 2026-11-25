import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h1>Logo</h1>
            </div>
            <div className='navlinks'>
                <nav>
                    <Link to="/">Home</Link> 
                    <Link to="/about">About</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
