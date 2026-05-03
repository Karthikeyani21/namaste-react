import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

import { Header } from "./component/Header";
import { Body } from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestroMenu from "./component/RestroMenu";

const AppLayout = () =>{
    console.log("app renders")
    return (
        <div>
          <Header/>
          {/* dynamic component rendering based on route url  */}
           <Outlet/>
           {/* <Footer/> */}
        </div>
    )
}

const routeConfig = createBrowserRouter([
    {
        path : '/',
        element: <AppLayout/>,
        // fallback or wildcard route
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurants/:resId',
                element: <RestroMenu/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// render component
root.render( <RouterProvider router={routeConfig} />)

