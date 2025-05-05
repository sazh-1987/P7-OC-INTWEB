import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Footer from "../../components/footer/footer.jsx"
import Slider from "../../components/slider/slider.jsx"
import "./details.scss"
import Collapse from "../../components/collapse/collapse.jsx"
import { useParams, Navigate } from 'react-router-dom'
import Appartment from '../../assets/file.jsx'

function Details() {

    const { id } = useParams()
    const logement = Appartment.find(item => item.id === id)

    if (!logement) return <Navigate to="/404" />

    return (
        <div>
            <Navbar />
            <Slider  images={logement.pictures} />

            <div className="details">
                <div className="details__informations">

                    <div className="informations__name">
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        <div className="informations__button">
                            {logement.tags.map((tag, index) => (
                                <div key={index}>{tag}</div>
                            ))}
                    </div>    
                </div>

                    <div className="informations__host">
                        <div className="host__name">
                            <h3>{logement.host.name}</h3>
                            <div className="host__picture">
                                <img src={logement.host.picture} alt={logement.host.name} />
                            </div>
                        </div>
                        <div className="stars">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={index < logement.rating ? 'red__star' : 'grey__star'}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
  
                    </div>
                    
                </div>

                <div className="collapsecontainer">
                    <div className="collapsesize">
                        <Collapse name="Description"
                            description={logement.description}
                        />
                    </div>
                    
                    <div className="collapsesize">
                        <Collapse name="Équipements"
                            description={logement.equipments.join(', ')}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Details