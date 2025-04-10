import { useState } from 'react'
import './App.scss'
import Navbar from "./components/navbar.jsx"
import Banner from "./components/banner.jsx"

function App() {
    return (
        <div>
            <Navbar />
            <Banner />
        </div>
    )
}

export default App