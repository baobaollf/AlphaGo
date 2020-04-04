import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CitiesPage extends Component {
  render() {
    return (
      <div>
        Select Cities
        <NavLink to='/map/3'>next</NavLink>
      </div>
    )
  }
}

export default CitiesPage;