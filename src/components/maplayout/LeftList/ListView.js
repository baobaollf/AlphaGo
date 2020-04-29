import React, {Component} from "react";
import DayOverView from "./DayOverView";
import CurrentDay from "./CurrentDay";
import {TripdataContext} from "../../../contexts/TripdataContext";


class ListView extends Component {
    static contextType = TripdataContext;

    render() {
      const {loading, showPlan, dayList, currentDayList, updateItem, reorder, reorder_day, deleteItem, showplan, setPopupinfo} = this.context;
        return (
            <div className="flexbox">
                <DayOverView
                    items={dayList}
                    loading={loading}
                    updateItem={updateItem.bind(this)}
                    reorder={reorder_day.bind(this.context)}
                    showPlan={showPlan}/>
                {
                    showplan &&
                    <CurrentDay
                        items={currentDayList}
                        reorder={reorder.bind(this.context)}
                        deleteItem={deleteItem.bind(this.context)}
                        setPopupinfo={setPopupinfo.bind(this.context)}/>}
            </div>
        );
    }
}

export default ListView