import React, {Component} from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {userSignIn} from "../firebase/Authentication";
// import background from '../../assets/images/background.jpg';

import {withRouter} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";

class SignInPage extends Component {
    static contextType = AuthContext;

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
        // console.log(this.state[e.target.id])
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const {setUid, setOther} = this.context;

        try {
            // console.log(this.state.email);
            const result = await userSignIn(this.state.email, this.state.password);
            this.setState({
                uid: result
            })
            // console.log(this.state.uid);
            if (result !== 0) {
                // console.log(this.props.history);
                // this.props.history.push("/");
                setUid(result);
                setOther(this.state.email);
                this.props.history.goBack();
            } else {
                alert("Sign-in fail. Try again!");
            }

            this.props.setUid(this.state.uid);
        } catch (error) {
            console.log(error.message);

        }

    }


    render() {
        // console.log(this.context)
        return (
            <div className="container">
                <Form className="form" onSubmit={this.handleSubmit}>
                    {/* <FormGroup className="form-group" size="sm">
                        <ControlLabel className="label">Username</ControlLabel>
                        <FormControl id="username" type="username" placeholder="Input Username" onChange={this.handleChange}/>
                    </FormGroup> */}
                    <FormGroup className="form-group" size="sm">
                        <ControlLabel className="label">Email</ControlLabel>
                        <FormControl id="email" type="username" placeholder="Input Email" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="form-group" size="sm">
                        <ControlLabel className="label">Password</ControlLabel>
                        <FormControl id="password" type="password" placeholder="Input Password"
                                     onChange={this.handleChange} required/>
                    </FormGroup>
                    {/* <NavLink to={{pathname: '/profile',}}> */}
                    <Button className="button" size="sm" variant="warning" type="submit">
                        <p className="signup">Sign In</p>
                    </Button>
                    {/* </NavLink> */}
                    <FormGroup className="newuser" size="sm">
                        <p className="fontsize">
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