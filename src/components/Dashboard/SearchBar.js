import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {AutoComplete} from 'antd';
// import "../../styles/SearchBar.css";

class SearchBar extends Component {

    getInfo = (city) => {
        this.props.setCity(city);
        for(let i = 0; i < this.props.data.length; i++) {
            if(this.props.data[i].name + ", " + this.props.data[i].country === city){
                this.props.setCoordinates(this.props.data[i].coordinates.latitude, this.props.data[i].coordinates.longitude)
                this.props.setCityInfo(this.props.data[i].snippet, this.props.data[i].name);
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
        return (
            <div className="search-box">
                <AutoComplete id="userinput"
                    style={{width: 300,
                            paddingleft: 2
                    }}
                    dataSource={this.cityList(this.props.data)}
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

