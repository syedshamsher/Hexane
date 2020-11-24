import React, { Component } from "react"
import axios from "axios"

const DataContext = React.createContext()

class DataContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: false,
      isLoading: false,
      error: false,
      users: [],
      activeUser: []
    }
    this.authenticateUser = this.authenticateUser.bind(this)
    this.getActiveUserData = this.getActiveUserData.bind(this)
    // this.getProductById = this.getProductById.bind(this)
    // this.addProduct = this.addProduct.bind(this)
  }

  // makes axios call and update local state (users) of the component with users database
  componentDidMount() {
    axios
      .get(`http://localhost:5000/users`)
      .then((res) => {
        this.setState({
          users: [...res.data],
        })
      })
      .catch((err) => {
        this.setState({
          error: true,
 
        })
      })
  }

  // function which takes in email and password from login component and autheticates user
  authenticateUser({ email, password }) {
    this.setState({ isLoading: true })
    const { users, activeUser, isAuth } = this.state
      for( var i = 0; i < users.length; i++) {
          if( users[i].email === email && users[i].password === password ){
              this.setState({
                isAuth: true,
                activeUser: users[i],
                error: false,
                isLoading: false
              })
              break
          } else {
            this.setState({
              isAuth: false,
              activeUser: [],
              error: true,
              isLoading: false
            })
          }
      }
      return { isAuth, activeUser, users }
  }

  // function which gets the details of active user available in state(activeUser) of context provider
  getActiveUserData() {
    const { activeUser } = this.state
    return activeUser
  }

  render() {
    const { isAuth, isLoading, error, activeUser, users } = this.state
    const { authenticateUser, getActiveUserData } = this
    const value = {
      activeUser,
      users,
      authenticateUser,
      getActiveUserData,
      isAuth,
      isLoading,
      error,
    }
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export { DataContext, DataContextProvider }
