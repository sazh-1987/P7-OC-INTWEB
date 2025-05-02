import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/routes.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router = { Router } />
    </StrictMode>
)
