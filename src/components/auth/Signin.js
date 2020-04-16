import React, { Component } from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';

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
          <Form.Group className="form-group" size="sm">
            <Form.Label className="label">Username</Form.Label>
            <Form.Control id="username" type="username" placeholder="Username" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group  className="form-group" size="sm">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
          </Form.Group>
          <Button className="button" size="sm" variant="warning" type="submit">
            Sign In
          </Button>
        </Form>
      </div>

    )
  }
}

export default SignInPage;