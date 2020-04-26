import React, {Component} from 'react';
import {Button, Collapse, List} from 'antd';
import {NavLink} from "react-router-dom";

const {Panel} = Collapse;

const dayList = [
    {
        created_time: 10.15,
        last_modified_time: 10.15,
        city: "Chicago",
        days: 4,
        simplify_dayPlan: [
            "Radio City Music Hall",
            "Museum of Modern Art",
            "Brooklyn Bridge",

        ]
    },
    {
        created_time: 10.15,
        last_modified_time: 10.15,
        city: "New York",
        days: 4,
        simplify_dayPlan: ["Radio City Music Hall",
            "Museum of Modern Art",
            "Brooklyn Bridge",
        ]
    },
    {
        created_time: 10.15,
        last_modified_time: 10.15,
        city: "Seattle",
        days: 4,
        simplify_dayPlan: ["Radio City Music Hall",
            "Museum of Modern Art",
            "Brooklyn Bridge",
        ]
    },
]

const makePoiList = (name) => {
    for (let i = 0; i < dayList.length; i++) {
        if (dayList[i].city === name) {
            return dayList[i].simplify_dayPlan
        }
    }
}

const makeCityList = () => {
    const array = [];
    for (let i = 0; i < dayList.length; i++) {
        array.push(dayList[i].city)
    }
    return array;
}

const findCity = (name) => {
    for (let i = 0; i < dayList.length; i++) {
        if (name === dayList[i].city) {
            return dayList[i];
        }
    }
}

const genExtra = (item) => (
    <NavLink to={{
        pathname: '/map/3',
        details: {
            city: item,
            coordinates: {
                "latitude": 41.878113,
                "longitude": -87.629799
            },
            days: findCity(item).days
        }
    }}>
        <Button type="primary" icon="thunderbolt">
            Let's Go
        </Button>
    </NavLink>
);

class History extends Component {
    render() {
        return (
            <div style={{
                marginTop: 50,
                marginLeft: 200,
            }}>
                <List
                    style={{
                        width: 800,
                    }}
                    size="small"
                    header={<h2>Your Saved Trips</h2>}
                    bordered
                    pagination={{
                        onChange: page => {
                            //console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={makeCityList()}
                    renderItem={item =>
                        (
                            <Collapse accordion >
                                <Panel key="1"
                                       header={item + " " + findCity(item).days + " Day(s)"}
                                       extra={genExtra(item)}>
                                    <List
                                        size="small"
                                        bordered
                                        dataSource={makePoiList(item)}
                                        renderItem={item =>
                                            <List.Item
                                                key={item}
                                            >
                                                {item}
                                            </List.Item>}
                                    />
                                </Panel>
                            </Collapse>
                        )
                    }
                />
            </div>
        );
    }
}

export default History;