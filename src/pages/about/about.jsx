import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Footer from "../../components/footer/footer.jsx"
import Banner from "../../components/banner/banner.jsx"
import Collapse from "../../components/collapse/collapse.jsx"
import "./about.scss"

const bannerImg = {
    backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZXIrv4gghiJPPc3y56HiLeR08x2FvaLuty86UC3LIMZ3zlu2nuPC892Su~V0QRwFxciKx0Z9qbqZKzn-kU21TwUPbKn9aY1hKjWXVNDFrTWFeZB8CyJahHmkcmoJYVykU3mG9MsRYGckLAbYFB1~qR2atrv2Y80XlJa4gY09MrFhPPmRJ9q~-F3nRqVbQDgfripq~2boTL3vyWcbKlA6-oR3WSM6yJ-qCr434687i384bq5NPIyu1n7FZkwZXoFFkPy5cXYGGcyJkOWqbwO2VpJLILw4DdCodCP2eJI6rRMUJ2YlQWL9rqsIdElLWgOJbQRhOMy4wb-JzQJoOySRHw__")',
}

function About() {
    return (

        

        <>  
            <Navbar />
            <Banner style={bannerImg} className="about-banner" />
            <div className="about">
                <Collapse name="Fiabilité" 
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale.
                                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
                />
                <Collapse name="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa.
                                Tout comportement discriminatoire ou de perturbations du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse name="Service"
                    description="La qualité du service est au coeur de notre engagement chez Kasa.
                                Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                />
                <Collapse name="Sécurité"
                    description="La sécurité est la priorité de Kasa.
                                Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
            <Footer />
        </>
    )
}
export default About
