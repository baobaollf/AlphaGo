import React, { Component } from "react";
import DayOverView from "./DayOverView";
import CurrentDay from "./CurrentDay";
import {TripdataContext} from "../../../contexts/TripdataContext";


class ListView extends Component {
  static contextType = TripdataContext;

  render() {
    const { dayList, currentDayList, updateItem, reorder, reorder_day, deleteItem} = this.context;
    return (
      <div className="flexbox">
        <DayOverView
          items={dayList}
          updateItem={updateItem.bind(this.context)}
          reorder={reorder_day.bind(this.context)} />
        <CurrentDay
          items={currentDayList}
          reorder={reorder.bind(this.context)}
          deleteItem={deleteItem.bind(this.context)} />
      </div>
    );
  }
}

export default ListView