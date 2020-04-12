import React, { Component } from 'react';
import "./Style.css";
import TextField from '@material-ui/core/TextField';

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <div className="form-group">
            <label className="label">Username</label>
            <input className="input" type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input className="input" type="text" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input className="input" maxLength="8" type="password" name="password" placeholder="password" />
          </div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <div className="checkbox">
            <input type="checkbox" name="checkbox"/>
            <label className="label" id="checkbox">By checking this box, you agree to User Agreement terms</label>
          </div>
          <div className="footer">
            <button className="button" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>

    )
  }
}

export default SignUpPage;