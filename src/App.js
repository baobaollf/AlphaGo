import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CitiesPage from './components/layout/Cities';
import EditMapPage from './components/layout/EditMap';
import ProfilePage from './components/layout/ProfilePage/ProfilePage';
import SignInPage from './components/auth/Signin';
import SignUpPage from './components/auth/Signup';

class App extends Component{
  render() {
    const PublicRoute = ({ component: Component , ...rest})=>{
      return(
          <Route {...rest}  component={(props)=>(
              <div>
                <Navbar/> {/* Navbar ALWAYS VISIBLE */}
                <Component {...props} />
              </div>)}
    />
    )}
    const AdminRoute = ({ component: Component, ...rest }) => {
      return (
          <Route
              {...rest}
              component={(props)=> (<Component {...props} />)}
          />
      );
    };

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <PublicRoute exact path='/' component={CitiesPage} />
            <PublicRoute path='/map/:id' component={EditMapPage}/>
            <PublicRoute path='/signin' component={SignInPage} />
            <PublicRoute path='/signup' component={SignUpPage} />
            <AdminRoute path='/profile' component={ProfilePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
