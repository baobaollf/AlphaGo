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
      <div className="signinpage">
        <div className="signinform">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Group className="form-group" size="sm">
              <Form.Label className="label">Username</Form.Label>
              <Form.Control id="username" type="username" placeholder="please input username" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group className="form-group" size="sm">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control id="email" type="username" placeholder="please input email" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group  className="form-group" size="sm">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="please input password" onChange={this.handleChange}/>
            </Form.Group>
            <Button className="button" size="sm" variant="warning" type="submit">
              <p className="signup">Sign In</p>
            </Button>
            <Form.Group  className="newuser" size="sm">
              <p>
                "New User?"
                <a href="./signup">Sign Up Free!</a>
              </p>
            </Form.Group>
          </Form>
        </div>
      </div>

    )
  }
}

export default SignInPage;