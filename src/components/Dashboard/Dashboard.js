import React, {Component} from "react";
import * as placeData from "../../tests/response.json";
import * as alphaCityList from '../../tests/alphacityFront.json';
import SearchBar from "./SearchBar";
import DaySeletcor from "./DaySelector";
import NextPageButton from "./NextPageButton";
import Navbar from "../layout/Navbar";
import CityGrid from "./CityGrid";
import logo from "../../assets/images/logo2.png"


class Dashboard extends Component {
    state = {
        day: 1,
        city: "",
    }

    setCity = (city) => {
        this.setState({
            city: city
        })
        console.log(this.state.city)
    }

    render() {
        return (
            <div>
                <Navbar/>
                <body className="dashboard-container">
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
                        <SearchBar data={alphaCityList} city={this.state.city} setCity={this.setCity} />
                    </div>
                    <div>
                        <DaySeletcor/>
                        <NextPageButton city={this.state.city}/>
                    </div>
                </div>
                <div className="right-side">
                    <CityGrid data={alphaCityList}
                              setCity={this.setCity}
                    />
                </div>
                </body>
            </div>
        )
    }
}

export default Dashboard