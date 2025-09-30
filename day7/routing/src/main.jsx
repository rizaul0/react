import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contactus from './component/Contactus.jsx'
import User from './component/User.jsx'
import Github from './component/Github.jsx'
const router = createBrowserRouter([
    { path : "/",
      element : <Layout />,
      children : [

        {
          path: "",
          element : <Home />

        },
        {
          path :"about",
          element: <About />
        },
        {
          path: "Contactus",
          element: <Contactus />
        },
        {
          path: "user/:userid",
          element: <User />
        },
        {
          path: "Github",
          element: <Github />
        }
      ]

    }
  ]
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
