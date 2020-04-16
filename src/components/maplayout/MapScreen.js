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
    data: this.props.data,
    viewport: {
      latitude: this.props.data[0].lat,
      longitude: this.props.data[0].long,
      zoom: 12,
      pitch: 40
      
    },
    popupinfo: null,
  }

  _updateViewport = viewport => {
    this.setState({
      viewport
    })
  }

  _onClickMarker = pointInfo => {
    this.setState({ 
      popupInfo: pointInfo 
    });
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
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
    const curPoilist = this.createPoilist(cur.long, cur.lat)
    const nextPoilist = this.createPoilist(next.long, next.lat)
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
            <Pin data={this.state.data} onClickMarker={this._onClickMarker} color={"#FA6585"} />
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



