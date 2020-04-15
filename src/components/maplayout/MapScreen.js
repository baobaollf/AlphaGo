import React, { Component } from 'react';
import { MAPBOX_TOKEN, MAP_STYLE_URL } from '../../constants';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import * as placeData from "../../testData/response.json";
import {Pin} from './pin';
import CityInfo from './CityInfo';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { TripdataContext } from "../../contexts/TripdataContext";
import { PlanPin } from "./PlanPin";

//longtitude，latitude
const data = [{ sourcePosition: [116.3825557924188,39.92688614402743], targetPosition: [116.39065017431723,39.92429690589674]},
  { sourcePosition: [116.3825557924188, 39.92688614402743], targetPosition: [116.29725103615023, 40.00681320113558] },
  { sourcePosition: [116.28141283451184, 39.808964553296384], targetPosition: [116.29725103615023, 40.00681320113558] }];

export class MapScreen extends Component {
  static contextType = TripdataContext
  
  state = {
    data: data,
    viewport: {
      latitude: placeData.results[0].coordinates.latitude,
      longitude: placeData.results[0].coordinates.longitude,
      zoom: 10
    },
    popupinfo: null,
  }

  _updateViewport = viewport => {
    this.setState({
      viewport
    })
  }

  _onClickMarker = pointInfo => {
    this.setState({ popupInfo: pointInfo });
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          longitude={popupInfo.coordinates.longitude}
          latitude={popupInfo.coordinates.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  createPoilist = (longitude, latitude) => {
    return [longitude, latitude];
  }

  createLinearElement = (cur, next) => {
    const curPoilist = this.createPoilist(cur.poi.coordinates.longitude, cur.poi.coordinates.latitude)
    const nextPoilist = this.createPoilist(next.poi.coordinates.longitude, next.poi.coordinates.latitude)
    return {
      sourcePosition: curPoilist,
      targetPosition: nextPoilist
    }
  }

  createLinear = (list) => {
    var len = list.length;
    var result = [];
    for (var i = 1; i < len; i++) {
      result.push(this.createLinearElement(list[i-1], list[i]))
    }
    return result;
  }



  render() {
    const { currentDayList } = this.context;
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
            <Pin data={placeData.results} onClickMarker={this._onClickMarker} color={"#FA6585"} />
            <PlanPin data={currentDayList} onClickMarker={this._onClickMarker} color={"#343F67"}/>
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



