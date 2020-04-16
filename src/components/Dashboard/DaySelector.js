import React, {Component} from 'react';
import "antd/dist/antd.css"
import {Select} from "antd";

const { Option } = Select;

function onChange(value) {
    console.log('selected {value}');
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search', val);
}

class DaySelector extends Component {
    render() {
        return (
            <div className="selector">
                <Select
                    className="select-box"
                    showSearch
                    placeholder="How many days"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="1">1 day</Option>
                    <Option value="2">2 days</Option>
                    <Option value="3">3 days</Option>
                    <Option value="4">4 days</Option>
                    <Option value="5">5 days</Option>
                    <Option value="6">6 days</Option>
                    <Option value="7">7 days</Option>
                    <Option value="8">8 days</Option>
                    <Option value="9">9 days</Option>
                    <Option value="10">10 days</Option>
                    <Option value="11">11 days</Option>
                    <Option value="12">12 days</Option>
                    <Option value="13">13 days</Option>
                    <Option value="14">14 days</Option>
                    <Option value="15">15 days</Option>
                </Select>,
            </div>
        );
    }
}

export default DaySelector;