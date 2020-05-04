import React, { Component } from 'react';
import { Button, Collapse, List } from 'antd';
import { NavLink } from 'react-router-dom';
import { getAllBriefHistory, delUserHistory } from '../../../firebase/History';
import { AuthContext } from '../../../../contexts/AuthContext';
import DeleteIcon from '@material-ui/icons/Delete';


const { Panel } = Collapse;

const makePoiList = (item) => {
    const array = [];
    const briefPlan = item.info.briefPlan;
    for (let i = 0; i < briefPlan.length; i++) {
        for (let j in briefPlan[i]) {
            for (let k = 0; k < briefPlan[i][j].length; k++) {
                array.push(briefPlan[i][j][k]);
            }
        }
    }
    return array;
};

class History extends Component {
    constructor() {
        super();
        this.state = {
            briefHistory: []
        };
    }

    static contextType = AuthContext;
    genExtra = (item) => {
        return (
            <>
                <NavLink
                    to={{
                        pathname:
                            '/map/' +
                            item.info.cityName.coordinates.latitude +
                            '/' +
                            item.info.cityName.coordinates.longitude +
                            '/' +
                            item.info.days +
                            '/' +
                            item.info.cityName.city +
                            '/' +
                            item.planId,
                        details: {
                            city: item.info.cityName.city,
                            coordinates: {
                                latitude: item.info.cityName.coordinates.latitude,
                                longitude: item.info.cityName.coordinates.longitude
                            },
                            days: item.info.days
                        }
                    }}
                >
                    <Button
                        type="primary"
                        style={{
                            background: '#FA6585',
                            borderColor: '#FA6585'
                        }}
                    >
                        Retrieve Trips
                    </Button>
                </NavLink>
                <DeleteIcon
                    // className="deleteIcon"
                    onClick={(event) => {
                        const { uid } = this.context;
                        this.delHistory(uid, item.planId);
                        event.stopPropagation();
                    }}
                    style={{
                        color: '#FA6585',
                        marginLeft: 15
                    }}
                />
            </>
        );
    };

    delHistory = async (uid, planId) => {
        try {
            const result = await delUserHistory(uid, planId);
            if (result === 1) {
                await this.getBriefHistory();
            } else {
                alert('Delete Fail');
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    getBriefHistory = async () => {
        const { uid } = this.context;
        try {
            const result = await getAllBriefHistory(uid);
            this.setState({
                briefHistory: result
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    componentDidMount() {
        this.getBriefHistory();
    }

    render() {
        // this.getBriefHistory();
        return (
            <div
                style={{
                    marginTop: 50,
                    marginLeft: 200
                }}
            >
                <List
                    style={{
                        width: 800
                    }}
                    size="small"
                    header={<h2>Saved Trips</h2>}
                    bordered
                    pagination={{
                        onChange: (page) => {},
                        pageSize: 3
                    }}
                    dataSource={this.state.briefHistory}
                    renderItem={(item) => (
                        <Collapse accordion>
                            <Panel
                                key="1"
                                header={item.info.cityName.city + ' ' + item.info.days + ' Day(s)'}
                                extra={this.genExtra(item)}
                            >
                                <List
                                    size="small"
                                    bordered
                                    dataSource={makePoiList(item)}
                                    renderItem={(item) => <List.Item key={item}>{item}</List.Item>}
                                />
                            </Panel>
                        </Collapse>
                    )}
                />
            </div>
        );
    }
}

export default History;
