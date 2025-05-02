import React, { useState } from 'react'
import './slider.scss'

function Slider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className="slider">
            <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />

            {/* Affiche les flèches seulement s'il y a plus d'une image */}
            {images.length > 1 && (
                <div className="arrows">
                    <i className="fa-solid fa-chevron-left arrowLeft" onClick={goToPrevious}></i>
                    <i className="fa-solid fa-chevron-right arrowRight" onClick={goToNext}></i>
                </div>
            )}
        </div>
    )
}

export default Slider