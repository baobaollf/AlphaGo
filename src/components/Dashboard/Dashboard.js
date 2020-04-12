import React, { Component } from "react";
import map from "../../assets/images/map.jpg"
import traveler from "../../assets/images/traveler.jpg"

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard-container">
                <img src={map} className="left-map" alt="map"/>
                <img src={traveler} className="right-traveler" alt="traveler"/>
            </div>
        )
    }
}

export default Dashboard