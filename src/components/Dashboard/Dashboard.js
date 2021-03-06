import React, { Component } from "react";
import { cityList } from '../../testData/alphacityFront';
import SearchBar from "./SearchBar";
import DaySeletcor from "./DaySelector";
import NextPageButton from "./NextPageButton";
import CityGrid from "./CityGrid";
// import logo from "../../assets/images/logo 1.png"
import bigLogo from "../../assets/images/bigLogo.png"

class Dashboard extends Component {
  state = {
    day: 0,
    city: "",
    name: "Plan your own unique itinerary as detailed as you'd like.",
    snippet: "Experience the most visual and collaborative workspace to plan travel itineraries. Coordinate anywhere, with anyone, at anytime",
    coordinates: { latitude: "", longitude: "" },
  }

  setCity = (city) => {
    this.setState({
      city: city,
    })
  }

  setCoordinates = (lat, lon) => {
    this.setState({
      coordinates: { latitude: lat, longitude: lon }
    })
  }

  setDay = (day) => {
    this.setState({
      day: day
    })
  }

  setCityInfo = (snippet, cityName) => {
    this.setState({
      snippet: snippet,
      name: cityName,
    })
  }



  render() {
    return (
      <div className="dashboard-container">
        <div className="left-side">
          <p className="promo-text">
            {this.state.name}
          </p>
          <p className="small-promo-text">
            {this.state.snippet}
          </p>
          <div className="select-area">
            <div>
              <img src={bigLogo} className="big-logo" alt="web-logo" />
              <p className="name-text">AlphaGo</p>
            </div>

            <div className="bars">
              <SearchBar
                data={cityList}
                city={this.state.city}
                coordinates={this.state.coordinates}
                setCity={this.setCity}
                setCoordinates={this.setCoordinates.bind(this)}
                setCityInfo={this.setCityInfo.bind(this)}
              />
              <DaySeletcor
                day={this.state.day}
                setDay={this.setDay}
              />
              <NextPageButton
                data={cityList}
                city={this.state.city}
                coordinates={this.state.coordinates}
                day={this.state.day}
              />
            </div>

          </div>
        </div>

        <div className="right-side">
          <CityGrid data={cityList}
            setCity={this.setCity.bind(this)}
            setCoordinates={this.setCoordinates.bind(this)}
            setCityInfo={this.setCityInfo.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Dashboard