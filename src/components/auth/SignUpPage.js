import React, { Component } from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { userSignUp } from '../firebase/Authentication';
import { Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {AuthContext} from "../../contexts/AuthContext";

class SignUpPage extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''

    }
  }

  // functions handle state change and submit
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    const { setOther } = this.context;
    e.preventDefault();
    try {
      const result = await userSignUp(this.state.username, this.state.email, this.state.password);
      setOther(this.state.email, this.state.username);
      if (result !== 0) {
        this.props.history.push("/signin");
      }
    } catch (error) {
        return error.message;
      }
  }

  
  render() {
    
    return (

      <div className="signuppage">
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormGroup size="lg">
            <ControlLabel className="label">Username</ControlLabel>
            <FormControl id="username" type="username" placeholder="Username" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup size="lg">
            <ControlLabel className="label">Email address</ControlLabel>
            <FormControl id="email" type="emails" placeholder="Email" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup size="lg">
            <ControlLabel className="label">Password</ControlLabel>
            <FormControl id="password" minlength="6" type="password" placeholder="Password" onChange={this.handleChange}/>
          </FormGroup>
          <ControlLabel className="notice">By signing up, you agree to all user terms.</ControlLabel>
            <Button className="button" size="sm" variant="warning" type="submit" >
              <p className="signup">Sign up</p>
            </Button>
        </Form>
      </div>

    )
  }
}



export default SignUpPage;