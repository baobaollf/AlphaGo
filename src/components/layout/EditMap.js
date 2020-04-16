import React, { Component } from 'react';
import MapScreen from '../maplayout/MapScreen';
import ListView from '../maplayout/LeftList/ListView'
import TopList from '../maplayout/TopList';
import TripdataContextProvider from "../../contexts/TripdataContext"
//import { TopListData } from "../../testData/data format"
import TopListData from "../../testData/topPOIList.json"

class EditMapPage extends Component {

  render() {
    console.log(TopListData)
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