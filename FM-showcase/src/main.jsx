import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FrontPage from './components/FrontPage/index'
import VehiclesPage from './components/VehiclesPage/index.jsx'
import DriverPage from './components/DriverPage/index.jsx'
import FuelcardPage from './components/FuelcardPage/fuelcardpage.jsx'

const browserRouter = createBrowserRouter([

  {
    path: "/",
    element: <FrontPage/>,
    children: [

      {
        path: "/",
        element: <App/>
      },
      {
        path: "/Vehicles",
        element: <VehiclesPage/>
      },
      {
        path: "/Drivers",
        element: <DriverPage/>
      },
      {
        path: "/Fuelcards",
        element: <FuelcardPage/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}/>
  </React.StrictMode>,
)
