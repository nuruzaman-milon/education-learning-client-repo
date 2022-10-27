import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/Blog';
import Checkout from '../pages/Checkout';
import Courses from '../pages/Courses';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Signin from '../pages/Signin';
import SingleCourseDetails from '../pages/SingleCourseDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';



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
            },
            {
                path:'/course/:id',
                element:<SingleCourseDetails></SingleCourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
         ]
     },
     {
        path:'*',
        element:<NotFound></NotFound>
     }
 ])

