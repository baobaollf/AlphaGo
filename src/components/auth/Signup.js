import React, { Component } from 'react';
import "./Style.css";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';



class SignUpPage extends Component {
  render() {
    return (
      
      <div>
        <div className="form">
          <div className="form-group">
            <label className="label">Username</label>
            <TextField id="outlined-basic" type="text" label="Username" variant="filled" color="primary"/>
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <TextField id="outlined-basic" type="text" label="Email" variant="filled" color="primary"/>
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <TextField id="outlined-basic" type="password" label="password" variant="filled" color="primary"/>
          </div>
          <div>
            <Checkbox id="checkedbox"
              defaultChecked size="small" inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
            <label className="label" id="checkbox">By Signing up, you agree to User Agreement terms</label>
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