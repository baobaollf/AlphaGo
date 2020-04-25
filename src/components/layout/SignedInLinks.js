import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { userLogout } from '../../components/auth/Authentication';


class SignedInLinks extends Component {
  handleOnclick = async () =>  {
  
    try {
      const result = await userLogout();
      //console.log(result);
      this.props.setUid("");

    } catch (error) {
        return error.message;
    }
  }

  render () {
    return (
      <ul className="right">
          <li><NavLink to='/' onClick={this.handleOnclick} className="log-out-text">Log out</NavLink></li>
  
          <li><NavLink to='/profile/user' className="btn"><AccountCircleIcon></AccountCircleIcon></NavLink></li>
  
      </ul>
    )
  }
  
}


export default SignedInLinks;