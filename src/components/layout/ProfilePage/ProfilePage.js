import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "../ProfilePage/layouts/Admin.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/sass/react-profile.scss";
import "../../../assets/css/pe-icon-7-stroke.css";

class ProfilePage extends Component {
  render(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/profile" render={props => <AdminLayout {...props} />} />
            <Redirect from="/" to="/profile/user" />
          </Switch>
        </BrowserRouter>
    )
  }
}
export default ProfilePage;