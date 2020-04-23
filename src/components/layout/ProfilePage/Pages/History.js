import React, {Component} from 'react';
import {Button, Table} from 'antd';
import {NavLink} from "react-router-dom";

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
        // render: (text, record) => (
        //     <span>
        //         <a onClick={console.log("text")}>{record.name}</a>
        //
        //     </span>
        // ),
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
        <a>Delete</a>
      </span>
        ),
    }

];

const navLinkHelper = (record) => {
    return (
        <NavLink to={
            {pathname: "https://www.google.com/"}
        }

        >
        </NavLink>
    );
}


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

                           // onClick: event => {
                           //     navLinkHelper(record)
                           //     // console.log(record.name)
                           // }, // click row

                       }}

                />

            </div>
        );
    }
}

export default History;