import React, { Component, createContext } from 'react'
// import * as TopPlacesData from "../testData/response.json";
//import backEndData from "../testData/dayPlannerTemplate.json"
import { FlyToInterpolator } from 'react-map-gl';
//import WebMercatorViewport from 'viewport-mercator-project';
export const TripdataContext = createContext();

class TripdataContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dayList: [],
      currentDayList: [],
      AroundList: [],
      CurrentAround: [],
      TopList: [],
      showplan: false,
      popupInfo: null,
      city: this.props.details,
      poiList: [],
      loading: true,
      TopListLoading: true
    }
  }

  showPlan() {
    this.setState({
      showplan: !this.state.showplan
    })
  }

  setLoading() {
    this.setState({
      loading: false
    })
  }

  setTopList = (list) => {
    this.setState({
      TopList: list
    })
  }

  setPopupinfo = (info) => {
    this.setState({
      popupInfo: info,
      viewport: {
        latitude: info.lat,
        longitude: info.long,
        zoom: 13,
        pitch: 40,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator()
      }
    })
  }

  closePopup = () => {
    this.setState({ popupInfo: null })
    return true;
  }

  componentDidMount() {
    this.fetchTopListData()
    this.fetchDayPlanData()
    this.setState({
      viewport: {
        latitude: this.props.details.coordinates.latitude,
        longitude: this.props.details.coordinates.longitude,
        zoom: 13,
        pitch: 40,
      },
    })
  }

  _updateViewport = viewport => {
    this.setState({
      viewport
    })
  }

  fetchTopListData() {
    const url = "http://13.58.39.66/api/topPoi?cityName=" + this.state.city.city + "&type=all"
    return fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ TopList: data }))
      .catch(error => console.log("Load data failed"));
  }
  fetchMoreTopListData() {
    var len = this.state.TopList.length
    console.log(len)
    if (len % 10 === 0) {
      const url = "http://13.58.39.66/api/topPoi?cityName=" + this.state.city.city + "&type=all&score=" + 
        this.state.TopList[len - 1].score + "&poiId=" + this.state.TopList[len - 1].id;
      return fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
          TopList: this.state.TopList.concat(data),
          TopListLoading: data.length && true
        }))
        .catch(error => console.log("Load data failed"));
    } else {
      console.log("go here")
      this.setState({
        TopListLoading: false
      })
    }
  }

  fetchDayPlanData() {
    const url = "http://13.58.39.66/api/dayPlan?cityName="+ this.props.details.city + "&days=" + this.props.details.days
    return fetch(url)
      .then(response => response.json())
      .then(data => {this.setState({ dayList: data[0], currentDayList: data[0][0], AroundList: data[1], CurrentAround: data[1][0] })
              this.setLoading()
            })
      .catch(error => console.log("Load data failed"));
  }

  updateItem = (list,index) => {
    if (list === this.state.currentDayList) {
      this.showPlan();
    } else if (this.state.showplan === false) {
      this.showPlan();
    }
    let poilist = []
    for (var i = 0; i < list.length; i++) {
      let ele = []
      ele.push(list[i].lat)
      ele.push(list[i].long)
      poilist.push(ele)
    }
    // console.log(this.state.viewport)
    // const { longitude, latitude, zoom } = new WebMercatorViewport(this.state.viewport).fitBounds(poilist)
    // console.log(longitude + " " + latitude + " " + zoom)
    //this.setViewport(longitude, latitude, zoom)
    this.setState({
      currentDayList: list,
      CurrentAround: this.state.AroundList[index],
    });
    
  }

  reorder = (list, startIndex, endIndex) => {
    const result = this.state.currentDayList;
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.setState({
      currentDayList: result,
    });
  }

  reorder_day = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.setState({
      dayList: result,
    });
  }

  // delete by loop
  deleteByLoop = (item) => {
    const result = this.state.currentDayList;
    for (let i = 0; i < result.length; i++) {
      if (result[i].name === item.name) {
        this.deleteItem(i);
      }
    }
    this.setState({
      currentDayList: result,
    });
  }

  // delete by index
  deleteItem = (index) => {
    const result = this.state.currentDayList;

    result.splice(index, 1);
    this.setState({
      currentDayList: result,
    });
    // console.log(this.state.currentDayList)
  }

  addItem = (item) => {
    const result = this.state.currentDayList;
    item.inPlan = true;
    result.push(item);
    this.setState({
      currentDayList: result,
    });
  }

  setViewport = (lat, long, zoom) => {
    this.setState({
      viewport: {
        latitude: lat,
        longitude: long,
        zoom: zoom,
        pitch: 40,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator()
      }
    })
  }

  findCenter = (list) => {
    let len = list.length
    var lat = 0;
    var long = 0;
    for (var i = 0; i < len; i++) {
      lat += list[i].lat
      long += list[i].long
    }
    return [long / len, lat / len]
  }
  
  render() {
    return (
      <TripdataContext.Provider value={{
          ...this.state,
          updateItem: this.updateItem.bind(this),
          reorder: this.reorder,
          reorder_day: this.reorder_day,
          deleteItem: this.deleteItem,
          showPlan: this.showPlan,

          addItem: this.addItem,
          deleteByLoop: this.deleteByLoop,
          setPopupinfo: this.setPopupinfo,
          closePopup: this.closePopup,
          setTopList: this.setTopList,
          fetchMoreTopListData: this.fetchMoreTopListData.bind(this),
          _updateViewport: this._updateViewport,
          setViewport: this.setViewport
          }}>
        {this.props.children}
      </TripdataContext.Provider>
    )
  }
}

export default TripdataContextProvider
