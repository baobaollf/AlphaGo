import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";
import EditMapPage from './layout/EditMap';
import ProfilePage from './layout/ProfilePage/ProfilePage';
import SignInPage from './auth/Signin';
import SignUpPage from './auth/Signup';
import Navbar from './layout/Navbar';

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
            <PublicRoute exact path='/' component={Dashboard} />
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
