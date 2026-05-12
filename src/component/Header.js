import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    // accessing context
    const userName = useContext(UserContext);

    // redux selector
    const cartItems = useSelector((store) => store?.cart?.items)

    return (
        <div className="header flex justify-between items-center p-2 rounded-s-lg">
            <div className="header-detail">
                <img className="logo" width="80px" height="80px"
                     src="http://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png" 
                     alt="res-logo"></img>
                <h1>Devito</h1>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <button className="px-4 py-2 bg-sky-500 rounded-md text-white" onClick={() => {
                        setBtnName(btnName == "Login" ? "Logout" : "Login")
                    }}>{btnName}</button>
                    <li>{userName.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}