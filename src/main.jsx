import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { EcommerceContextProvider } from './Context/EcommerceContext.jsx'
import './index.css'
import Category from './pages/Category.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import All from './components/Categories/All.jsx'
import Electronics from './components/Categories/Electronics.jsx'
import Mens from './components/Categories/Mens.jsx'
import Womens from './components/Categories/Womens.jsx'
import Jewelery from './components/Categories/Jewelery.jsx'
import ErrorPage from './components/ErrorPage.jsx'



const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"categories",
        element:<Category/>,
        children:[
          {
            path:"all",
            element:<All/>
          },
          {
            path:"electronics",
            element:<Electronics/>
          },
          {
            path:"mens",
            element:<Mens/>
          },
          {
            path:"womens",
            element:<Womens/>
          },
          {
            path:"jewelery",
            element:<Jewelery/>
          }
        ]
      },
      {
        path:"products/:slug",
        element:<Products/>
      },
      {
        path:"*",
        element:<ErrorPage/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <EcommerceContextProvider>
    <RouterProvider router={router}/>
    </EcommerceContextProvider>
  // </React.StrictMode>
)
