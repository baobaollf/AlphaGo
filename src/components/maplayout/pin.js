import React, { Component } from 'react'
import { Marker } from 'react-map-gl';
//import pin from '../../assets/images/pin2.svg';
//import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import RoomIcon from '@material-ui/icons/Room';

export class Pin extends Component {
  render() {
    const { data, onClickMarker} = this.props;
    const iconStyle = {
      color: this.props.color,
    }
    return data.map(point => (
      <Marker
        key={point.id}
        latitude={point.lat}
        longitude={point.long}
      >
          
        <RoomIcon style={iconStyle} className="marker-btn" fontSize = "large" 
            onClick={() => onClickMarker(point)}>
        </RoomIcon>
        
      </Marker>
    ));
  }
}

export default Pin
