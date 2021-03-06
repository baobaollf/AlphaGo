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
            await userLogout();
            localStorage.setItem('uid', "")
            localStorage.removeItem('email')
            this.props.setUid("");
            setUid("");
        } catch (error) {
            return error.message;
        }
    }
    render() {
        return (
            <ul className="right">
                <li><NavLink to='/' onClick={this.handleOnclick} className="log-out-text">Logout</NavLink></li>
                <li><NavLink to='/profile' className="btn"><AccountCircleIcon className="AccountIcon"></AccountCircleIcon></NavLink></li>


            </ul>
        )
    }

}


export default SignedInLinks;