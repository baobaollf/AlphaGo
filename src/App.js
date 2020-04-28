import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import EditMapPage from './components/layout/EditMap';
import ProfilePage from './components/layout/ProfilePage/ProfilePage';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import Navbar from './components/layout/Navbar';
import AuthContextProvider from './contexts/AuthContext';


class App extends Component {

    state = {
        uid: ""
    }
    setUid = (uid) => {
        this.setState({
            uid: uid
        })
    }

    render() {
        const PublicRoute = ({component: Component, ...rest}) => {
            return (
                <Route {...rest} component={(props) => (
                    <div>
                        <Navbar uid={this.state.uid} setUid={this.setUid}/> {/* Navbar ALWAYS VISIBLE */}

                        <Component setUid={this.setUid} {...props} />
                    </div>
                )}
                />
            )
        }

        return (
            <BrowserRouter>
                <AuthContextProvider>
                    <div className="App">
                        <Switch>
                            <PublicRoute exact path='/' setUid={this.setUid} component={Dashboard}/>
                            <PublicRoute path='/map/:lat/:long/:days/:city/:planId' setUid={this.setUid} component={EditMapPage}/>
                            <PublicRoute path='/signin' setUid={this.setUid} component={SignInPage}/>
                            <PublicRoute path='/signup' setUid={this.setUid} component={SignUpPage}/>
                            <PublicRoute path='/profile' setUid={this.setUid} component={ProfilePage}/>
                        </Switch>
                    </div>
                </AuthContextProvider>

            </BrowserRouter>
        );
    }
}

export default App;
