import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Footer from "../../components/footer/footer.jsx"
import Banner from "../../components/banner/banner.jsx"
import SectionGrid from "../../components/SectionGrid/SectionGrid.jsx"
import Appartment from "../../assets/file.jsx"
import { Link } from "react-router-dom"
import './index.scss'

function Index() {
    return (
        <div>
            <Navbar />
            <Banner style={{backgroundImage: 'url("/bannerIndex.jpg")'}} title="Chez vous, partout et ailleurs" className="home-banner" />

            <SectionGrid>
                {Appartment.map((appart) => (
                    <figure key={appart.id}>
                        <Link to={`/details/${appart.id}`}>
                            <img src={appart.cover} alt={appart.title} />
                            <figcaption>{appart.title}</figcaption>
                        </Link>
                    </figure>
                ))}
            </SectionGrid>
                
            <Footer />
        </div>
    )
}

export default Index