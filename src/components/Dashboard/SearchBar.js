import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {AutoComplete, Input} from 'antd';

class SearchBar extends Component {

    onSearch = (value) => {
        this.props.setCity(value)
    }

    onSelect = (name) => {
        this.props.setCity(name);
    }

    cityList = (data) => {
        var cityName = []
        for(var i = 0; i < data.length; i++) {
            cityName.push(data[i].name + ", " + data[i].country);
        }
        return cityName
    }

    render() {
        return (
            <div className="search-box">
                <AutoComplete
                    style={{width: 300}}
                    dataSource={this.cityList(this.props.data.default)}
                    value={this.props.city}
                    placeholder="Enter your destination"
                    onSelect={this.onSelect}
                    onSearch={this.onSearch}
                    onChange={this.onSearch}
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    optionLabelProp="value"
                >
                    <Input onChange={(name) => console.log(name)}/>
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;

