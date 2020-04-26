import React, {Component} from "react";

import logo from "../../assets/images/logo 1.png";

import {Link} from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


class Navbar extends Component {

    render() {
        let links = <SignedInLinks setUid={this.props.setUid}/>;
        if (this.props.uid === "") {
            links = <SignedOutLinks/>;
        } else {
            links = <SignedInLinks setUid={this.props.setUid}/>;
        }
        return (
            <div className="navbar-fixed">
                <nav className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        <img src={logo} className="app-logo" alt="logo"/>
                        <div className="brand-name">AlphaGo</div>
                    </Link>
                    {links}
                </nav>
            </div>
        )
    }

}
export default Navbar;
