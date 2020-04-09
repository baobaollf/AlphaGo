import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from "./Dashboard/Dashboard";
import CitiesPage from './layout/Cities';
import EditMapPage from './layout/EditMap';
import ProfilePage from './layout/Profile';
import SignInPage from './auth/Signin';
import SignUpPage from './auth/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Dashboard />
          <Switch>
            <Route exact path='/' component={CitiesPage} />
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
