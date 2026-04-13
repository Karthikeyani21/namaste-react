import React from "react";
import ReactDOM from "react-dom/client"

import { Header } from "./component/Header";
import { Body } from "./component/Body";
import Footer from "./component/Footer";

const AppLayout = () =>{
    console.log("app renders")
    return (
        <div>
          <Header/>
           <Body/>
           <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// render component
root.render(<AppLayout/>)

