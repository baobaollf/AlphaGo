import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CitiesPage from './components/layout/Cities';
import EditMapPage from './components/layout/EditMap';
import ProfilePage from './components/layout/Profile';
import SignInPage from './components/auth/Signin';
import SignUpPage from './components/auth/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
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
