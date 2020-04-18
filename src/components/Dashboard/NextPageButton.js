import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button} from "antd";

class NextPageButton extends Component {
    render() {
        if (this.props.city) {
            return (
                <div className="next-page">
                    {/* const cityNames = this.props.city;
                    console.log(cityNames);
                    const cityNamesArray = cityNames.split(','); */}
                    <NavLink to={{
                        pathname: '/map/3',
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
                        Please enter city
                    </Button>
                </div>
            );
        }
        
    }
}

export default NextPageButton;