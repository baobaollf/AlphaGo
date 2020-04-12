import React, { Component } from 'react';
import "./Style.css";


class SignInPage extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <div className="form-group">
            <label className="label">Username</label>
            <input className="input" type="text" name="username" placeholder="Please input your username" />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input className="input" maxLength="8" type="password" name="password" placeholder="Please input your password" />
          </div>
          <div className="footer">
          <button className="button" type="button">
            Log In
          </button>
        </div>
        </div>
      </div>

    )
  }
}

export default SignInPage;