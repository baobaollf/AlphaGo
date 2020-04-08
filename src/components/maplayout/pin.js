import React, { Component } from 'react'
import { Marker } from 'react-map-gl';
import pin from '../../assets/images/pin2.svg';

export class Pin extends Component {
  render() {
    const { data, onClickMarker} = this.props;
    return data.map(point => (
      <Marker
        key={point.properties.PARK_ID}
        latitude={point.geometry.coordinates[1]}
        longitude={point.geometry.coordinates[0]}
      >
        <button
          className="marker-btn"
          onClick={() => onClickMarker(point)}
          >
          <img src={pin} alt={point.properties.NAME}/>
        </button>
        
      </Marker>
    ));
  }
}

export default Pin
