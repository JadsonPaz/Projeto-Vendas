import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/page.jsx'
import Cart from './pages/cart/page.jsx'
import Profile from './pages/profile/page.jsx'
import Plates from './pages/plates/page.jsx'
import Auth from './pages/auth/page.jsx'

const pages = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cart', element: <Cart /> },
            { path: '/profile', element: <Profile /> },
            { path: '/plates', element: <Plates /> },
            { path: '/auth', element: <Auth /> },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={pages}></RouterProvider>
    </React.StrictMode>,
)
// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
