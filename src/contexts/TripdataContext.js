import React, { Component, createContext } from 'react'
// import * as TopPlacesData from "../testData/response.json";
import backEndData from "../testData/dayPlannerTemplate.json"

export const TripdataContext = createContext();

class TripdataContextProvider extends Component {

  state = {
    dayList: [],
    currentDayList: [],
  }

  componentDidMount() {
    this.setState({
      dayList: backEndData[0].days,
      currentDayList: backEndData[0].days[0].itinerary_items
    })
  }

  updateItem = (list) => {
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

  deleteItem = (index) => {
    // console.log(index);
    const result = this.state.currentDayList;
    result.splice(index, 1);
    this.setState({
      currentDayList: result,
    });
    // console.log(this.state.currentDayList)
  }



  render() {
    return (
      <TripdataContext.Provider value={{
          ...this.state,
          updateItem: this.updateItem,
          reorder: this.reorder,
          reorder_day: this.reorder_day,
          deleteItem: this.deleteItem,
          }}>
        {this.props.children}
      </TripdataContext.Provider>
    )
  }
}

export default TripdataContextProvider
