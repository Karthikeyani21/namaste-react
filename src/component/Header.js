import { useState } from "react"

export const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="header-detail">
                <img className="logo" width="80px" height="80px"
                     src="http://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png" 
                     alt="res-logo"></img>
                <h1>Devito</h1>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        setBtnName(btnName == "Login" ? "Logout" : "Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}