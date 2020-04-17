import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to='/' className="log-out-text">Log out</NavLink></li>
        <li><NavLink to='/profile/user' className="btn">name</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;