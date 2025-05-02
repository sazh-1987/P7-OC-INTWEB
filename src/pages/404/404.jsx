import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar/navbar.jsx"
import Footer from "../../components/footer/footer.jsx"
import "./404.scss"

function Error() {
    return (
        <>
            <Navbar />
            <div className="error404">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
            <Footer />
        </>
    )
}
export default Error