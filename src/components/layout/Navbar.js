import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.jpg";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="brand-name">AlphaGo</div>
                </Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar