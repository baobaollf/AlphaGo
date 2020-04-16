import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
      <ul className="right">
      <li><NavLink to='/signin' className="login-text">Login</NavLink></li>
      <li><NavLink to='/signup' className="signup-text">Sign up</NavLink></li>
      </ul>
  )
}

export default SignedOutLinks;