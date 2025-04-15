import { useState } from 'react'
import './App.scss'
import Navbar from "./components/navbar.jsx"
import Banner from "./components/banner.jsx"
import SectionGrid from "./components/sectiongrid.jsx"
import Footer from "./components/footer.jsx"

function App() {
    return (
        <div>
            <Banner />
            <SectionGrid />
        </div>
    )
}

export default App