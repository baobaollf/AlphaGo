import React, {Component} from 'react';
import { Card, Avatar } from 'antd';
import {AuthContext} from "../../../../contexts/AuthContext";
import {getUserInfo} from "../../../firebase/UserInfo"

const { Meta } = Card;


class Profile extends Component {
    static contextType = AuthContext;
    constructor() {
        super();
        this.state = {
            email: null,
            username: null
        }
    }

    setUserInfo = async (uid) => {
        try {
            const result = await getUserInfo(uid);
            this.setState({
                email: result.email,
                username: result.username,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    componentDidMount() {
        const uid = localStorage.getItem('uid')
        this.setUserInfo(uid);
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
                        description={this.state.username}
                    />
                </Card>
            </div>
        );
    }
}

export default Profile;