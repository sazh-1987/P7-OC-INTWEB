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
            <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />

            {/* Toujours afficher le span avec l'index / total */}
            <div className="arrows">
                {images.length > 1 && (
                    <i className="fa-solid fa-chevron-left arrowLeft" onClick={goToPrevious}></i>
                )}

                <span>{currentIndex + 1} / {images.length}</span>

                {images.length > 1 && (
                    <i className="fa-solid fa-chevron-right arrowRight" onClick={goToNext}></i>
                )}
            </div>
        </div>
    )
}

export default Slider
