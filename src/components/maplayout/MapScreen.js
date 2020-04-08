import React, { Component } from 'react';
import { MAPBOX_TOKEN, MAP_STYLE_URL } from '../../constants';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import * as parkData from "../../testData/skateboard-parks.json";
import {Pin} from './pin';
import CityInfo from './CityInfo';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import  ControlPanel  from './control-panel'

const data = [{ sourcePosition: [-75.3372987731628, 45.383321536272049], targetPosition: [-75.546518086577947, 45.467134581917357]},
  { sourcePosition: [-75.898610599532319, 45.295014379864874], targetPosition: [-75.546518086577947, 45.467134581917357] },
  { sourcePosition: [-75.468561642270757, 45.23032561834377], targetPosition: [-75.898610599532319, 45.295014379864874] }];

export class MapScreen extends Component {
  state = {
    data: data,
    viewport: {
      latitude: 45.4211,
      longitude: -75.6903,
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
          longitude={popupInfo.geometry.coordinates[0]}
          latitude={popupInfo.geometry.coordinates[1]}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {viewport , data} = this.state;
    const layers = [
      new LineLayer({ id: 'line-layer', data ,getWidth: 8})
    ];
    return (
      
      <MapGL
        {...viewport}
        width="100vw" 
        height="100vh"
        mapStyle= {MAP_STYLE_URL}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        
      
        <DeckGL viewState={viewport} layers={layers}>
          <Pin data={parkData.features} onClickMarker={this._onClickMarker} />
          {this._renderPopup()}
        </DeckGL>

        <ControlPanel />
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
      
    )
  }
}

export default MapScreen
