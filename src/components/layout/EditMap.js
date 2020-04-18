import React, { Component } from 'react';
import MapScreen from '../maplayout/MapScreen';
import ListView from '../maplayout/LeftList/ListView'
import TopList from '../maplayout/TopList';
import TripdataContextProvider from "../../contexts/TripdataContext"

class EditMapPage extends Component {

  render() {

    return (
      <div className="EditMap">
        <TripdataContextProvider>
          <MapScreen />
          <ListView />
          <TopList className="TopList"/>
        </TripdataContextProvider>
      </div>
    )
  }
}

export default EditMapPage;