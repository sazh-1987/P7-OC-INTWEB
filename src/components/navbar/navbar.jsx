import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
            <NavLink to="/"><img src="/logo.svg" alt="logo du site Kasa" /></NavLink>
            </div>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
export default Navbar
