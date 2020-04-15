import React, { Component } from 'react';
import MapScreen from '../maplayout/MapScreen';
import ListView from '../maplayout/LeftList/ListView'
import TopList from '../maplayout/TopList';
import * as placeData from "../../testData/response.json";
import TripdataContextProvider from "../../contexts/TripdataContext"

class EditMapPage extends Component {

  constructor() {
    super();
    this.state = {
      //dayList: backEndData[0].days,
      //currentDayList: backEndData[0].days[0].itinerary_items,
    }
  }

  render() {
    //const id = this.props.match.params.id;
    console.log(this.props.location.details)
    return (
      <div className="EditMap">
        <TripdataContextProvider>
          <MapScreen />
          <ListView />
          <TopList className="TopList" data={placeData.results} />
        </TripdataContextProvider>
      </div>
      
    )
  }
}

export default EditMapPage;