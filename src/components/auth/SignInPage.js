import React, { Component } from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {TripdataContext} from "../../contexts/TripdataContext";


class SignInPage extends Component {
  static contextType = TripdataContext


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    console.log(this.props.dayList)
    return (
      <div>
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormGroup className="form-group" size="sm">
            <ControlLabel className="label">Username</ControlLabel>
            <FormControl id="username" type="username" placeholder="Input Username" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup className="form-group" size="sm">
            <ControlLabel className="label">Email</ControlLabel>
            <FormControl id="username" type="username" placeholder="Input Email" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup  className="form-group" size="sm">
            <ControlLabel className="label">Password</ControlLabel>
            <FormControl id="password" type="password" placeholder="Input Password" onChange={this.handleChange}/>
          </FormGroup>
          <Button className="button" size="sm" variant="warning" type="submit">
            <p className="signup">Sign In</p>
          </Button>
          <FormGroup  className="newuser" size="sm">
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

export default SignInPage;