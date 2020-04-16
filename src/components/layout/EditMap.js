import React, { Component } from 'react';
import MapScreen from '../maplayout/MapScreen';
import ListView from '../maplayout/LeftList/ListView'
import TopList from '../maplayout/TopList';
import TripdataContextProvider from "../../contexts/TripdataContext"
import { TopListData } from "../../testData/data format"

class EditMapPage extends Component {

  render() {
    return (
      <div className="EditMap">
        <TripdataContextProvider>
          <MapScreen data={TopListData}/>
          <ListView />
          <TopList className="TopList" data={TopListData} />
        </TripdataContextProvider>
      </div>
    )
  }
}

export default EditMapPage;