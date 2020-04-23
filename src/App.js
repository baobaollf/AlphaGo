import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import EditMapPage from './components/layout/EditMap';
import ProfilePage from './components/layout/ProfilePage/ProfilePage';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import Navbar from './components/layout/Navbar';

class App extends Component{
  render() {
    const PublicRoute = ({ component: Component , ...rest})=>{
      return(
          <Route {...rest}  component={(props)=>(
              <div>
                <Navbar/> {/* Navbar ALWAYS VISIBLE */}
                <Component {...props} />
              </div>
          )}
    />
    )}
    const AdminRoute = ({ component: Component, ...rest }) => {
      return (
          <Route {...rest}  component={(props)=>(
              <div>
                  <Navbar/> {/* Navbar ALWAYS VISIBLE */}
                  <Component {...props} />
              </div>
          )}
          />
      );
    }

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
