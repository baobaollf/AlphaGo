import React, { Component } from 'react';
import { MAPBOX_TOKEN, MAP_STYLE_URL } from '../../constants';
import MapGL, {
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    FlyToInterpolator
} from 'react-map-gl';
import { Pin } from './pin';
import CityInfo from './CityInfo';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { TripdataContext } from '../../contexts/TripdataContext';
//import WebMercatorViewport from 'viewport-mercator-project';
import { addHistory, generateNewPlanId } from '../../components/firebase/History';
import 'mapbox-gl/dist/mapbox-gl.css';

export class MapScreen extends Component {
    static contextType = TripdataContext;
    //40.730610, -73.935242
    //this.props.coordinates.latitude

    _onClickMarker = (pointInfo) => {
        const { setPopupinfo, setViewport } = this.context;
        this.setState({
            viewport: {
                latitude: pointInfo.lat,
                longitude: pointInfo.long,
                zoom: 13,
                pitch: 40,
                transitionDuration: 1000,
                transitionInterpolator: new FlyToInterpolator()
            }
        });
        setViewport(pointInfo.lat, pointInfo.long, 13);
        setPopupinfo(pointInfo);
    };

    getButton = (id) => {
        if (id !== '') {
            return (
                <button
                    className="save"
                    onClick={this.handleSubmit}
                    style={{ fontFamily: '-apple-system,system-ui' }}
                >
                    Save your plan
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.jumpFunc}
                    className="savInput"
                    style={{ fontFamily: '-apple-system,system-ui' }}
                >
                    Please Sign in
                </button>
            );
        }
    };

    findPOIinDayList(popupInfo) {
        const { currentDayList } = this.context;
        for (let i = 0; i < currentDayList.length; i++) {
            if (popupInfo.name === currentDayList[i].name) {
                currentDayList[i].inPlan = true;
                return currentDayList[i];
            }
        }
        popupInfo.inPlan = false;
        return popupInfo;
    }

    _renderPopup() {
        const { popupInfo, closePopup, addItem, deleteByLoop } = this.context;
        return (
            popupInfo && (
                <Popup
                    longitude={popupInfo.long}
                    latitude={popupInfo.lat}
                    closeOnClick={false}
                    onClose={() => closePopup()}
                >
                    <CityInfo
                        info={this.findPOIinDayList(popupInfo)}
                        addItem={addItem.bind(this.context)}
                        deleteByLoop={deleteByLoop.bind(this.context)}
                    />
                </Popup>
            )
        );
    }

    createPoilist = (longitude, latitude) => {
        return [longitude, latitude];
    };

    createLinearElement = (cur, next) => {
        const curPoilist = this.createPoilist(cur.long, cur.lat);
        const nextPoilist = this.createPoilist(next.long, next.lat);
        return {
            sourcePosition: curPoilist,
            targetPosition: nextPoilist
        };
    };

    createLinear = (list) => {
        const len = list.length;
        const result = [];
        for (let i = 1; i < len; i++) {
            result.push(this.createLinearElement(list[i - 1], list[i]));
        }
        return result;
    };

    handleSubmit = async (e) => {
        const { dayList, city, AroundList, setPlanId, planId } = this.context;
        e.preventDefault();
        var pId;
        try {
            if (planId === '') {
                pId = await generateNewPlanId(this.props.uid);
                setPlanId(pId);
            } else {
                pId = planId;
            }

            await addHistory(this.props.uid, pId, city, dayList, AroundList);
            alert('You have successfully saved your plan!');
        } catch (error) {
            console.log(error.message);
        }
    };

    jumpFunc = () => {
        window.location.replace('/signin');
    };

    render() {
        const { currentDayList, CurrentAround, viewport, _updateViewport } = this.context;
        const data = this.createLinear(currentDayList);
        const layers = [
            new LineLayer({ id: 'line-layer', data, getWidth: 6, getColor: [52, 63, 103] })
        ];
        return (
            <div className="MapGL">
                <MapGL
                    {...viewport}
                    width="100vw"
                    height="100vh"
                    mapStyle={MAP_STYLE_URL}
                    onViewportChange={_updateViewport}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    <DeckGL viewState={viewport} layers={layers}>
                        <Pin
                            data={CurrentAround}
                            onClickMarker={this._onClickMarker}
                            color={'#FA6585'}
                        />
                        <Pin
                            data={currentDayList}
                            onClickMarker={this._onClickMarker}
                            color={'#343F67'}
                        />
                        {this._renderPopup()}
                    </DeckGL>

                    <div className="scale">
                        <ScaleControl />
                    </div>

                    <div className="fullscreenControl">
                        <FullscreenControl />
                    </div>

                    {this.getButton(this.props.uid)}

                    <div className="navControl">
                        <NavigationControl />
                    </div>
                </MapGL>
            </div>
        );
    }
}

export default MapScreen;
