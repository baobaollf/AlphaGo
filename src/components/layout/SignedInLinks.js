import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {userLogout} from '../firebase/Authentication';
import {AuthContext} from "../../contexts/AuthContext";

class SignedInLinks extends Component {
    static contextType = AuthContext;
    handleOnclick = async () => {
        const { setUid } = this.context;
        try {
            const result = await userLogout();
            this.props.setUid("");
            setUid("");
        } catch (error) {
            return error.message;
        }
    }
    render() {
        return (
            <ul className="right">
                <li><NavLink to='/' onClick={this.handleOnclick} className="log-out-text">Log out</NavLink></li>
                <li><NavLink to='/profile' className="btn"><AccountCircleIcon></AccountCircleIcon></NavLink></li>


            </ul>
        )
    }

}


export default SignedInLinks;