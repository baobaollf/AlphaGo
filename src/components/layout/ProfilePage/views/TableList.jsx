import React, {Component} from "react";
import {Grid, Row, Col, Table} from "react-bootstrap";
import Card from "../Card/Card.jsx";
import {thArray, tdArray} from "../variables/Variables.jsx";
import data from "../../../../testData/dayScheduleList.json"
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import RouterHelper from "./RouterHelper";

// TODO: how to show save ROUTES?


class TableList extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Your Saved History"
                                category=""
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table id="table" striped hover>
                                        <thead>
                                        <tr>
                                            {thArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tdArray.map((prop, key) => {
                                            return (
                                                <a href="http://localhost:3000/map/3">
                                                    <tr key={key} onClick={(event) => {
                                                        console.log(prop[0]);
                                                    }}>
                                                        {prop.map((prop, key) => {

                                                            return <td key={key}>
                                                                {prop}</td>;
                                                        })}
                                                    </tr>
                                                </a>

                                            );
                                        })}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
