import React, {Component} from 'react';
import {Button, Table} from 'antd';
import {NavLink} from "react-router-dom";
import backEndData from "../../../../testData/dayScheduleList.json"

const dataSource = [
    {
        key: '1',
        name: 'Chicago',
        day: 2,
    },
    {
        key: '2',
        name: 'New York',
        day: 4,
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Day(s)',
        dataIndex: 'day',
        key: 'day',
    },
    {
        title: "Select",
        dataIndex: "select",
        key: "select",
        render: (text, record) => (
            <span>
        <NavLink to={{
            pathname: '/map/3',
            details: {
                city: record.name,
                coordinates: {
                    "latitude": 41.878113,
                    "longitude": -87.629799
                },
                days: record.day
            }
        }}>
                        Action
                    </NavLink>
      </span>
        ),
    }

];


class History extends Component {
    render() {
        return (
            <div>
                <Table columns={columns}
                       dataSource={dataSource}
                       style={{
                           width: 1200,
                       }}
                       onRow={(record, rowIndex) => {
                           return (
                               <NavLink to={{
                                   pathname: '/map/3',
                                   details: {
                                       city: record.name,
                                       coordinates: {
                                           "latitude": 41.878113,
                                           "longitude": -87.629799
                                       },
                                       days: record.day
                                   }
                               }}>
                                   <Button type="primary" icon="thunderbolt">
                                       Let's Go
                                   </Button>
                               </NavLink>
                           )
                       }}

                />

            </div>
        );
    }
}

export default History;