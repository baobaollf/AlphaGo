import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        View your history
        <NavLink to='/map/3'>Edit</NavLink>
      </div>
      
    )
  }
}

export default ProfilePage;