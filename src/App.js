import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import EditMapPage from './components/layout/EditMap';
import ProfilePage from './components/layout/ProfilePage/ProfilePage';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import Navbar from './components/layout/Navbar';



class App extends Component{

  state = { 
    uid: ""
  }
  setUid = (uid) => {
    this.setState({
      uid: uid
    })
    console.log(this.state.uid)
  }
  
  

  render() {
    // console.log(this.state.uid)
    const PublicRoute = ({ component: Component , ...rest})=>{
      return(
          <Route {...rest}  component={(props)=>(
              <div>
                <Navbar uid={this.state.uid} setUid={this.setUid}/> {/* Navbar ALWAYS VISIBLE */}
                
                <Component setUid={this.setUid} {...props} />
              </div>
          )}
    />
    )}
    const AdminRoute = ({ component: Component, ...rest }) => {
      return (
          <Route
              {...rest}
              component={(props)=> (<Component {...props} />)}
          />
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <PublicRoute exact path='/'  setUid={this.setUid} component={Dashboard} />
            <PublicRoute path='/map/:id' setUid={this.setUid} component={EditMapPage}/>
            <PublicRoute path='/signin' setUid={this.setUid} component={SignInPage} />
            <PublicRoute path='/signup' setUid={this.setUid} component={SignUpPage} />
            <AdminRoute path='/profile' setUid={this.setUid} component={ProfilePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
