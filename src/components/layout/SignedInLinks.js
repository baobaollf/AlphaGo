import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul>
      <li>If user signedIn</li>
      <li><NavLink to='/profile/user'>Profile</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;