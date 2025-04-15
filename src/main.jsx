import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import Navbar from "./components/navbar.jsx"
import Footer from "./components/footer.jsx"
import About from "./components/about.jsx"
import Error from "./components/404.jsx"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}

const router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {   
                path:  "/about",
                element: <About />
            },
            {
                path: '*',
                element: <Error />
            }            
        ]
    }])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router = {router} />
    </StrictMode>,
)