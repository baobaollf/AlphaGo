import React, { Component } from 'react'
import { Marker } from 'react-map-gl';
//import pin from '../../assets/images/pin2.svg';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

export class PlanPin extends Component {
  render() {
    const { data, onClickMarker } = this.props;
    const iconStyle = {
      color: this.props.color,
    }
    return data.map(point => (
      <Marker
        key={point.poi.id}
        latitude={point.poi.coordinates.latitude}
        longitude={point.poi.coordinates.longitude}
      >
        {/* <button
          className="marker-btn"
          onClick={() => onClickMarker(point)}
          > */}
        {/* <img src={pin} alt={point.properties.NAME}/> primary for blue*/}

        <RoomOutlinedIcon style={iconStyle} className="marker-btn" fontSize="large"
          onClick={() => onClickMarker(point)}>
        </RoomOutlinedIcon>
        {/* </button> */}

      </Marker>
    ));
  }
}

export default PlanPin
