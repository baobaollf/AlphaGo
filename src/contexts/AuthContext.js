import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

class AuthContextProvider extends Component {

  state = {
    uid: "",
    email: '',
    username: '',
  }

  componentDidMount() {
    this.setState({
      uid: localStorage.getItem('uid'),
      email: localStorage.getItem('email')
    })
  }

  setUid = (id) => {
    this.setState({
      uid: id
    })
    localStorage.setItem('uid', id)
  }

  setOther =(email) => {
    this.setState({
      email: email,
    })
    localStorage.setItem('email', email)
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
