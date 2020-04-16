import React, { Component } from 'react';
import "./Style.css";
import TextField from '@material-ui/core/TextField';


class SignInPage extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <div className="form-group">
            <label className="label">Username</label>
            <TextField id="outlined-basic" type="text" label="Username" variant="filled" color="primary"/>
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <TextField id="outlined-basic" type="password" label="password" variant="filled" color="primary"/>
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