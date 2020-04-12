import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CitiesPage extends Component {
  render() {
    return(
      <div>
        <NavLink to='/map/3'>submit</NavLink>
      </div>
    );
  }
}

export default CitiesPage;