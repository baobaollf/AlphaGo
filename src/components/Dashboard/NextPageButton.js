import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button} from "antd";

class NextPageButton extends Component {
    cityList = (data) => {
        const cityName = [];
        for (var i = 0; i < data.length; i++) {
            cityName.push(data[i].name + ", " + data[i].country);
        }
        return cityName
    }

    checkEnter = (input,day) => {
        for (let i = 0; i < this.cityList(this.props.data.default).length; i++) {
            if (input === this.cityList(this.props.data.default)[i] && day > 0) {
                return true;
            }
        }
        return false;
    }

    render() {
        if (this.checkEnter(this.props.city, this.props.day)) {
            return (
                <div className="next-page">
                    <NavLink to={{
                  pathname: '/map/' + this.props.coordinates.latitude + '/' + this.props.coordinates.longitude
                        + '/' + this.props.day + '/' + this.props.city.split(',')[0] + '/0',
                        details: {
                            city: this.props.city.split(',')[0],
                            coordinates: this.props.coordinates,
                            days: this.props.day
                        }
                    }}>
                        <Button type="primary" icon="thunderbolt">
                            Let's Go
                        </Button>
                    </NavLink>
                </div>
            );
        } else {
            return (
                <div className="next-page">
                    <Button type="primary" icon="thunderbolt">
                        Enter City & Day
                    </Button>
                </div>
            );
        }


    }
}

export default NextPageButton;