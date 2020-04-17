import React, { Component } from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class SignInPage extends Component {
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
    return (
      <div>
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormGroup className="form-group" size="sm">
            <ControlLabel className="label">Username</ControlLabel>
            <FormControl id="username" type="username" placeholder="Username" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup  className="form-group" size="sm">
            <ControlLabel className="label">Password</ControlLabel>
            <FormControl id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
          </FormGroup>
          <Button className="button" size="sm" variant="warning" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

export default SignInPage;