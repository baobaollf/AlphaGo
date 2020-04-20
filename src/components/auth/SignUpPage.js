import React, { Component } from 'react';
import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

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
            <FormControl id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
          </FormGroup>
          
          {/*<TextArea className="text-muted">*/}
          <ControlLabel>By signing up, you agree to all user terms.</ControlLabel>
          {/*  By signing up, you agree to all user terms.*/}
          {/*</TextArea>*/}
          <Button className="button" size="sm" variant="warning" type="submit" >
            <p className="signup">Sign up</p>
          </Button>
        </Form>
      </div>

    )
  }
}



export default SignUpPage;