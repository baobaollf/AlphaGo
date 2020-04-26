import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to='/' className="log-out-text">Log out</NavLink></li>

        <li><NavLink to='/profile/user' className="btn">
                <AccountCircleIcon className="AccountIcon"></AccountCircleIcon>
            </NavLink>
        </li>

    </ul>
  )
}

export default SignedInLinks;