import React, {Component} from 'react';
import {Menu} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import Navbar from "../Navbar";
import PageController from "./Pages/PageController";

const {SubMenu} = Menu;

class ProfilePage extends Component {

    constructor() {
        super();
        this.state = {
            page: "Profile"
        }
    }

    handleClick = e => {
        this.setState({
            page: e.key
        })
    };

    render() {
        return (
            <div style={{
                display: "flex"
            }}>
                <Menu
                    onClick={this.handleClick}
                    style={{width: 200}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
              <AppstoreOutlined/>
              <span>Menu</span>
            </span>
                        }
                    >
                        <Menu.Item key="Profile">Profile</Menu.Item>
                        <Menu.Item key="History">History</Menu.Item>
                        <Menu.Item key="About us">About us</Menu.Item>
                    </SubMenu>
                </Menu>
                <PageController page={this.state.page}/>


            </div>

        )
    }
}

export default ProfilePage;