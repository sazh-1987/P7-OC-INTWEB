import React, { useState } from 'react'
import './collapse.scss'

function Collapse({ name, className, description }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse-wrapper">
            <div className={`${className} collapse-container`} onClick={toggleCollapse}>
                <span>{name}</span>
                <i className={`fa-solid fa-angle-up ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            {isOpen && <p className="collapse-description">{description}</p>}
        </div>
    )
      
}

export default Collapse
