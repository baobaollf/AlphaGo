import React, {Component} from 'react';
import { Card, Avatar } from 'antd';
import {AuthContext} from "../../../../contexts/AuthContext";


const { Meta } = Card;


class Profile extends Component {
    static contextType = AuthContext;
    constructor() {
        super();
        this.state = {
            email: null,
        }
    }
    componentDidMount() {
        const email = localStorage.getItem('email')
        if (email !== null || email!== '') {
            this.setState({
                email: email,
            })
        }
    }

    render() {
        return (
            <div style={{
                marginTop: 50,
                marginLeft: 400,
            }}>
                <Card
                    style={{
                        width: 300,

                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={this.state.email}
                    />
                </Card>
            </div>
        );
    }
}

export default Profile;