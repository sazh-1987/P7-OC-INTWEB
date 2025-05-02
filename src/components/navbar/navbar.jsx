import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="/logo.svg" alt="logo du site Kasa" />
            </div>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
export default Navbar
