import React from 'react'
import './SectionGrid.scss'

function SectionGrid({ children }) {
    return (
        <div className="grid">
            <div className="grid__display">
                {children}
            </div>
        </div>
    )
}

export default SectionGrid