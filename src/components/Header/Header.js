import React, { useState } from "react";

import "./Header.scss";
// @ts-ignore
import logo from "../../assets/images/logo.svg";

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const handleMenuChange = () => {
        setMenuVisible(prevMenuVisible => !prevMenuVisible);
    }

    return (
        <section>
            <header role="banner" className="Header">
                <img src={logo} alt="Shortly URL shortnening" className="logo"/>
                <nav role="navigation">
                    <button className="menu-toggle" onClick={handleMenuChange} >&#9776;</button>
                    {menuVisible && 
                        <div className="menu">
                            <ul>
                                <li><a href="/features" className="menu-item">Features</a></li>
                                <li><a href="/pricing" className="menu-item">Pricing</a></li>
                                <li><a href="/resources" className="menu-item">Resources</a></li>
                                <div className="divider"></div>
                                <li><a href="/login" className="menu-item">Login</a></li>
                                <li><a href="/signup" className="menu-item button-button">Sign Up</a></li>
                            </ul>     
                        </div>
                    }
                </nav>
            </header>
        </section>
    )
}

export default Header;
