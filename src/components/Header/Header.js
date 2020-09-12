import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const handleMenuChange = () => {
        setMenuVisible(prevMenuVisible => !prevMenuVisible);
    }

    return (
        <header role="banner" className="Header">
            <img src={logo} alt="Shortly URL shortnening" className="logo"/>
            <nav role="navigation">
                <button className="menu-toggle" onClick={handleMenuChange} >&#9776;</button>
                {menuVisible && 
                
                    <div className="menu">
                        <a href="/features" className="menu-item">Features</a>
                        <a href="/pricing" className="menu-item">Pricing</a>
                        <a href="/resources" className="menu-item">Resources</a>
                        <div className="divider"></div>
                        <a href="/login" className="menu-item">Login</a>
                        <a href="/signup" className="menu-item button-button">Sign Up</a>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header;
