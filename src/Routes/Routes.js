import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Courses from '../pages/Courses';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
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
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            }
         ]
     },
     {
        path:'*',
        element:<NotFound></NotFound>
     }
 ])

