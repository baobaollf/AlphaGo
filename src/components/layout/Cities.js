import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class CitiesPage extends Component {
  render() {
    return(
      <div>
        <NavLink to={{
          pathname: '/map/3',
          details: {
            cities: 'Beijing',
            days: 4
          }
        }}>submit</NavLink>
      </div>
    );
  }
}

export default CitiesPage;