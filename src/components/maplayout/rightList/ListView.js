import React, { Component } from "react";
import DayOverView from "./DayOverView";
import CurrentDay from "./CurrentDay";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayList: this.props.dayList,
      currentDayList: this.props.currentDayList,
    };
  }

  updateItem(list) {
    this.setState({
      currentDayList: list,
    });
  }

  reorder(list, startIndex, endIndex) {
    const result = this.state.currentDayList;
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.setState({
      currentDayList: result,
    });
    console.log(this.state.currentDayList)
  }

  reorder_day(list, startIndex, endIndex) {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.setState({
      dayList: result,
    });
  }

  deleteItem(index) {
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
      <div className="flexbox">
        <DayOverView
          items={this.state.dayList}
          updateItem={this.updateItem} 
          reorder={this.reorder_day} />
        <CurrentDay
          items={this.state.currentDayList}
          reorder={this.reorder}
          deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default ListView