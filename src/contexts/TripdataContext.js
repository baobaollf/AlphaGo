import React, { Component, createContext } from 'react'
// import * as TopPlacesData from "../testData/response.json";
//import backEndData from "../testData/dayPlannerTemplate.json"

export const TripdataContext = createContext();

class TripdataContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dayList: [],
      currentDayList: [],
      TopList: [],
      showplan: false,
      popupInfo: null,
      city: this.props.city
    }
  }

  showPlan() {
    this.setState({
      showplan: !this.state.showplan
    })
  }

  setTopList = (list) => {
    this.setState({
      TopList: list
    })
  }

  setPopupinfo = (info) => {
    this.setState({
      popupInfo: info
    })
  }

  closePopup = () => {
    this.setState({ popupInfo: null })
  }

  componentDidMount() {
    this.fetchTopListData()
    this.fetchDayPlanData()
  }

  fetchTopListData() {
    const url = "http://13.58.39.66/api/topPoi?cityName=New York&type=all"
    return fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ TopList: data   }))
      .catch(error => console.log("Load data failed"));
  }

  fetchDayPlanData() {
    const url = "http://13.58.39.66/api/dayPlan?cityName=New%20York&days=" + this.props.city.days
    return fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ dayList: data, currentDayList: data[0] }))
      .catch(error => console.log("Load data failed"));
  }

  updateItem = (list) => {
    if (list === this.state.currentDayList) {
      this.showPlan();
    } else if (this.state.showplan === false) {
      this.showPlan();
    }
    this.setState({
      currentDayList: list,
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
  
  render() {
    return (
      <TripdataContext.Provider value={{
          ...this.state,
          updateItem: this.updateItem,
          reorder: this.reorder,
          reorder_day: this.reorder_day,
          deleteItem: this.deleteItem,
          showPlan: this.showPlan,

          addItem: this.addItem,
          deleteByLoop: this.deleteByLoop,
          setPopupinfo: this.setPopupinfo,
          closePopup: this.closePopup,
          setTopList: this.setTopList
          }}>
        {this.props.children}
      </TripdataContext.Provider>
    )
  }
}

export default TripdataContextProvider
