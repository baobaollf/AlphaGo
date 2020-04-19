import React, { Component } from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { width, height } from '@material-ui/system';


class SignUpPage extends Component {
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
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  
  render() {
    
    return (

      <div className="signuppage">
        {/* <div className="background" 
          style={{  
            backgroundImage: backgroundPic,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}> 
          </div> */}

        <div className="signupform">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Group size="lg">
              <Form.Label className="label">Username</Form.Label>
              <Form.Control id="username" type="username" placeholder="Username" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group size="lg">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control id="email" type="emails" placeholder="Email" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group size="lg">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Text className="text-muted">
              By signing up, you agree to all user terms.
            </Form.Text>
            <Button className="button" size="sm" variant="warning" type="submit" >
              <p className="signup">Sign up</p>
            </Button>
          </Form>
        </div>
      </div>

    )
  }
}



export default SignUpPage;