import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';



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
            // {
            //     path: '/news/:id',
            //     element: <PrivateRoute><News></News></PrivateRoute>,
            //     loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/news/${params.id}`)
            // },
         ]
     }
 ])

