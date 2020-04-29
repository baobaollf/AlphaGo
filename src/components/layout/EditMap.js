import React, { Component } from "react";
import MapScreen from "../maplayout/MapScreen";
import ListView from "../maplayout/LeftList/ListView";
import TopList from "../maplayout/TopList";
import TripdataContextProvider from "../../contexts/TripdataContext";
import {AuthContext} from "../../contexts/AuthContext";

class EditMapPage extends Component {
  static contextType = AuthContext;
  
  render() {
    const { lat, long, days, city, planId} = this.props.match.params
    const details = {
      city: city,
      coordinates: { latitude: parseFloat(lat), longitude: parseFloat(long)},
      days: days,
      planId: planId
    }
    const {uid} =  this.context;
    console.log(details)
    return (
      <div className="EditMap">
        <TripdataContextProvider details={details} >
          <MapScreen uid={uid}/>
          <ListView />
          <TopList className="TopList" />
        </TripdataContextProvider>
      </div>
    );
  }
}

export default EditMapPage;
