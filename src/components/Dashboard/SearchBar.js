import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {AutoComplete} from 'antd';


class SearchBar extends Component {

    getInfo = (city) => {
        this.props.setCity(city);
        for(let i = 0; i < this.props.data.default.length; i++) {
            if(this.props.data.default[i].name + ", " + this.props.data.default[i].country === city){
                this.props.setCoordinates(this.props.data.default[i].coordinates.latitude, this.props.data.default[i].coordinates.longitude)
            }
        }
    }

    cityList = (data) => {
        const cityName = [];
        for(var i = 0; i < data.length; i++) {
            cityName.push(data[i].name + ", " + data[i].country);
        }
        return cityName
    }

    render() {
        console.log(this.props.coordinates)
        return (
            <div className="search-box">
                <AutoComplete
                    style={{width: 300}}
                    dataSource={this.cityList(this.props.data.default)}
                    value={this.props.city}
                    placeholder="Enter your destination"
                    onSelect={this.getInfo}
                    onSearch={this.getInfo}
                    onChange={this.getInfo}
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    optionLabelProp="value"
                >
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;

