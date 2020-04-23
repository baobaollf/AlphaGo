import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class RouterHelper extends Component {
    constructor() {
        console.log("got here")
        super();
        this.state = {
            city: this.props.city,
            coordinates: {
                "latitude": 41.878113,
                "longitude": -87.629799,
            },
            days: this.props.days,
        }
    }
    render() {
        return (
            <div>
                <NavLink to={{
                    pathname: '/map/3',
                    details: {
                        city: this.state.city,
                        coordinates: this.state.coordinates,
                        days: this.state.days,
                    }
                }}>
                </NavLink>
            </div>
        );
    }
}

export default RouterHelper;