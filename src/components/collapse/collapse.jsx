import React, { useState } from 'react'
import './collapse.scss'

function Collapse({ name, description }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse-wrapper">
            <div className={'collapse-container'}>
                <span>{name}</span>
                <i className={`fa-solid fa-angle-up ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse}></i>
            </div>
            {isOpen && <p className="collapse-description">{description}</p>}
        </div>
    )
      
}

export default Collapse
