import React, {Component} from "react";

import logo from "../../assets/images/logo 1.png";

import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";



class Navbar extends Component {  
 
// setUid = (id) => {
//   console.log("inside nacbar setuid")
//   this.props.setUid(id);
// }

  render () {
    let links = <SignedInLinks setUid={this.props.setUid}/>;
    if (this.props.uid === "") {
      links = <SignedOutLinks/>;
    } else {
      links = <SignedInLinks setUid={this.props.setUid}/>;
    }
    
    // this.props.setUid('');
    // console.log(this.props.uid + "inside navbar reset");
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img src={logo} className="app-logo" alt="logo" />
            <div className="brand-name">AlphaGo</div>
          </Link>
          {links}
          {/* <SignedInLinks />
          <SignedOutLinks /> */}
          
        </nav>
      </div>
    )
  }
  
}

export default Navbar;
