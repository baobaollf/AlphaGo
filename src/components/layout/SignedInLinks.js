import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div id="div_top_bar">
      <ul id="top_bar">
        <li>If user signedIn</li>
        <li><NavLink to='/profile/3'>Profile</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
      </ul>
    </div>
    
  )
}

export default SignedInLinks;