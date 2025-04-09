import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './screens/home'
import About from './screens/about'
import Contact from './screens/contact'
import Products from './screens/products'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: '/',
            element: <Home />,
        },
        {
            path: 'about',
            element: <About />,
        },
        {
            path: 'contact',
            element: <Contact />,
        },
        {
            path: 'products/:id', // dynamic route got define
            element: <Products />,
        },
        {
            path: '*',
            element: <Home/>
        }
  





        ]
    }
] ) 


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
