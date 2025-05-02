import React from 'react'
import './banner.scss'

function Banner({ style, title, className }) {
    return (
        <div className={`banner ${className || ''}`} style={style}>
            {title && <h1>{title}</h1>}
        </div>
    )
}
export default Banner