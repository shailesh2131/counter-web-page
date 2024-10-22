import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import MyProfile from './components/MyProfile/MyProfile.jsx'
import ChangePassword from './components/ChangePassword/ChangePassword.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import SignIn from './components/SignIn/Signin.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import VerifyOtp from './components/VerifyOtp/VerifyOtp.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>},
        
        {
        path:'/about',
        element:<About/>
        },
        {
        path:'/SingUp',
        element:<SignUp/>
        },

        {
          path:'/MyProfile',
          element:<MyProfile/>
          },
        {
          path:'/ChangePassword',
          element:<ChangePassword/>
          },
         
        {
          path:'/ForgotPassword',
          element:<ForgotPassword/>
          },
          {
            path:'/SignIn',
            element:<SignIn/>
          },
          {
            path:'/VerifyOtp',
            element:<VerifyOtp/>
          },
        
    ]
    }
    ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
