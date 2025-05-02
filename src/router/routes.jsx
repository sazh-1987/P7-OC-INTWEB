import { createBrowserRouter } from 'react-router-dom'
import Index from '../pages/index/index.jsx'
import Error from '../pages/404/404.jsx'
import About from '../pages/about/about.jsx'
import Details from '../pages/details/details.jsx'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/details/:id',
        element: <Details />
    },
    {
        path: '*',
        element: <Error />
    }
])

export default Router
