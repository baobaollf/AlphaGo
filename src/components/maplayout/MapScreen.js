import React, { Component } from 'react';
import { MAPBOX_TOKEN, MAP_STYLE_URL } from '../../constants';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import {Pin} from './pin';
import CityInfo from './CityInfo';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { TripdataContext } from "../../contexts/TripdataContext";


export class MapScreen extends Component {
  static contextType = TripdataContext

  state = {
    viewport: {
      latitude: 40.730610,
      longitude: -73.935242,
      zoom: 12,
      pitch: 40,
    },
  }

  _updateViewport = viewport => {
    this.setState({
      viewport
    })
  }

  _onClickMarker = pointInfo => {
    const { setPopupinfo } = this.context;
    this.setState({
      viewport: {
        latitude: pointInfo.lat,
        longitude: pointInfo.long,
        zoom: 12,
        pitch: 40
      },
    })
    setPopupinfo(pointInfo);
  };

  findPOIinDayList(popupInfo) {
    const { currentDayList } = this.context;
    for (let i = 0; i < currentDayList.length; i++) {
      if  (popupInfo.name === currentDayList[i].name) {
        console.log(currentDayList[i].inPlan)
        return currentDayList[i];
      }
    }
    console.log(popupInfo.inPlan)
    return popupInfo;
  }

  _renderPopup() {
    const { popupInfo, closePopup, addItem, deleteByLoop } = this.context;
    // {closePopup()}
    return (
      popupInfo && (
        <Popup
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          closeOnClick={true}
          closeOnMove={true}
          onClose={() => closePopup()}
        >
          <CityInfo info={this.findPOIinDayList(popupInfo)}
                    addItem={addItem.bind(this.context)}
                    deleteByLoop={deleteByLoop.bind(this.context)}
          />
        </Popup>
      )
    );
  }

  createPoilist = (longitude, latitude) => {
    return [longitude, latitude];
  }

  createLinearElement = (cur, next) => {
    const curPoilist = this.createPoilist(cur.long, cur.lat)
    const nextPoilist = this.createPoilist(next.long, next.lat)
    return {
      sourcePosition: curPoilist,
      targetPosition: nextPoilist
    }
  }

  createLinear = (list) => {
    const len = list.length;
    const result = [];
    for (let i = 1; i < len; i++) {
      result.push(this.createLinearElement(list[i-1], list[i]))
    }
    return result;
  }


  render() {
    const { currentDayList, TopList } = this.context;
    const data = this.createLinear(currentDayList)
    const {viewport} = this.state;
    const layers = [
      new LineLayer({ id: 'line-layer', data, getWidth: 6, getColor: [52,63,103]})
    ];
    return (
      
      <div className="MapGL">
        <MapGL
          {...viewport}
          width="100vw" 
          height="100vh"
          mapStyle= {MAP_STYLE_URL}
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >


          <DeckGL viewState={viewport} layers={layers}>
            <Pin data={TopList} onClickMarker={this._onClickMarker} color={"#FA6585"} />
            <Pin data={currentDayList} onClickMarker={this._onClickMarker} color={"#343F67"}/>
            {this._renderPopup()}
          </DeckGL>

          <div className="scale">
            <ScaleControl />
          </div>

          <div className="fullscreenControl">
            <FullscreenControl />
          </div>
          
          <div className="navControl">
            <NavigationControl />
          </div>
        
        </MapGL>

      </div>
    )
  }
}

export default MapScreen



