

export const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}