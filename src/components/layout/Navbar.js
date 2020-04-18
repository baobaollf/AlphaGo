import React from "react";
import {Link} from 'react-router-dom'
import logo from "../../assets/images/logo 1.png";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper">
                <Link to='/' className="brand-logo">
                        <img src={logo} className="app-logo" alt="logo"/>
                        <div className="brand-name">AlphaGo</div>
                </Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </nav>
        </div>
    )
}

export default Navbar

