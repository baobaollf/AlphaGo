import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

class AuthContextProvider extends Component {

  state = {
    uid: "1234",
  }

  setUid = (id) => {
    this.setState({
      uid: id
    })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        setUid: this.setUid
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
