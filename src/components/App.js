import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";
import EditMapPage from './layout/EditMap';
import ProfilePage from './layout/Profile';
import SignInPage from './auth/Signin';
import SignUpPage from './auth/Signup';
import Navbar from './layout/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/profile/:id' component={ProfilePage} />
            <Route path='/map/:id' component={EditMapPage}/>
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
