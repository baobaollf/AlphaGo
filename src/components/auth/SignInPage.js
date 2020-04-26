import React, {Component} from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import {userSignIn} from './Authentication.js';
import { withRouter} from "react-router-dom";


class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            uid: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await userSignIn(this.state.email, this.state.password);
            console.log(result)
            this.setState({
                uid: result
            })
            if (result !== 0) {
                this.props.history.goBack();
            }
            this.props.setUid(this.state.uid);

        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        return (

            <div>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <FormGroup className="form-group" size="sm">
                        <ControlLabel className="label">Email</ControlLabel>
                        <FormControl id="email" type="username" placeholder="Input Email" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group" size="sm">
                        <ControlLabel className="label">Password</ControlLabel>
                        <FormControl id="password" type="password" placeholder="Input Password"
                                     onChange={this.handleChange}/>
                    </FormGroup>
                    <Button className="button" size="sm" variant="warning" type="submit">
                        <p className="signup">Sign In</p>
                    </Button>
                    <FormGroup className="newuser" size="sm">
                        <p>
                            "New User?"
                            <a href="./signup">Sign Up Free!</a>
                        </p>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default withRouter(SignInPage);