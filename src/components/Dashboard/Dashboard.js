import React, {Component} from "react";
import * as alphaCityList from '../../tests/alphacityFront.json';
import SearchBar from "./SearchBar";
import DaySeletcor from "./DaySelector";
import NextPageButton from "./NextPageButton";
import CityGrid from "./CityGrid";
import logo from "../../assets/images/logo2.png"


class Dashboard extends Component {
    state = {
        day: 1,
        city: "",
        coordinates: {latitude: "", longitude: ""},
    }

    setCity = (city) => {
        this.setState({
            city: city,
        })
    }

    setCoordinates = (lat, lon) => {
        this.setState({
            coordinates: {latitude: lat, longitude: lon}
        })
    }

    setDay = (day) => {
        this.setState({
            day: day
        })
    }

    render() {
        return (
          <div className="dashboard-container">
                {/* <body className="dashboard-container"> */}
                <div className="left-side">
                    <p className="promo-text">
                        Plan your own unique itinerary as detailed as you'd like.
                    </p>
                    <p className="small-promo-text">Experience the most visual and collaborative workspace to plan
                        travel itineraries. Coordinate anywhere, with anyone, at anytime.
                    </p>
                    <div>
                        <img src={logo} className="big-logo" alt="web-logo"/>
                        <p className="name-text">AlphaGo</p>
                    </div>
                    <div className="search-bar">
                        <SearchBar
                            data={alphaCityList}
                            city={this.state.city}
                            coordinates={this.state.coordinates}
                            setCity={this.setCity}
                            setCoordinates={this.setCoordinates.bind(this)}
                        />
                    </div>
                    <div>
                        <DaySeletcor
                            day={this.state.day}
                            setDay={this.setDay}
                        />
                        <NextPageButton
                            city={this.state.city}
                            coordinates={this.state.coordinates}
                            day={this.state.day}
                        />
                    </div>
                </div>
                <div className="right-side">
                    <CityGrid data={alphaCityList}
                              setCity={this.setCity}
                    />
                </div>
                {/* </body> */}
            </div>
        )
    }
}

export default Dashboard