import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Signin from '../pages/Signin';



export const router = createBrowserRouter([
     {
         path:'/',
         element: <Main></Main>,
         children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path:'/signin',
                element:<Signin></Signin>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
         ]
     }
 ])

