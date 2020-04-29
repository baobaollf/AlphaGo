import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

class AuthContextProvider extends Component {

  state = {
    uid: "",
    email: '',
    username: '',
  }

  setUid = (id) => {
    this.setState({
      uid: id
    })
  }

  setOther =(email, username) => {
    this.setState({
      email: email,
      username: username,
    })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        setUid: this.setUid,
        setOther: this.setOther,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
