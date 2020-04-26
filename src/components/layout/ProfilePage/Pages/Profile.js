import React, {Component} from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;


class Profile extends Component {
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
                        title="User Name"
                        description="example@email.com"
                    />
                </Card>
            </div>
        );
    }
}

export default Profile;