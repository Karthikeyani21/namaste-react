import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

import { Header } from "./component/Header";
import { Body } from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestroMenu from "./component/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

const AppLayout = () =>{
    console.log("app renders")
    const [userName, setUserName] = useState("")

    useEffect(()=>{
        setUserName("new user")
    },[])
    return (
        <div>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                  <Header/>
                  {/* dynamic component rendering based on route url  */}
                   <Outlet/>
                </UserContext.Provider>
            </Provider>
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
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// render component
root.render( <RouterProvider router={routeConfig} />)

