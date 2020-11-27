import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import styled from "styled-components"
import { DataContext } from "../../Context/DataContextProvider"

const FormContainer = styled.div`
  border: 1px solid #333333;
  background: whitesmoke;
  padding: 25px;
  width: 60%;
  margin: auto;
`

const FormRow = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  color: #333333;
`

const FormCol = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > input {
    width: 70%;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  & > input[type="submit"] {
    border: 0;
    background: #333333;
    color: #ffffff;
    cursor: pointer;
    padding: 10px 0px;
    &:hover {
      color: #ffffff;
      background: #999999;
    }
  }
`

const Form = styled.form`
  padding: 10px;
`

// Login Component takes in username and password from user through form and upon submission --> invokes autheticateUser function consumed from DataContextProvider
// upon successful authentication --> The isAuth state of DataContextProvider changes.
// If unsuccessful --> The error state of DataContextProvider will be set to true and error mesg will be displayed accordingly
// rendering ui is based on isAuth state of DataContextProvider --> If authorized ; User will be redirected to Homepage

export class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
    console.log( email, password )
    const { authenticateUser } = this.context
    authenticateUser({ email, password })

  }

  render() {
    const { isLoading, error, isAuth } = this.context
    const { email, password } = this.state
    return isLoading ? (
      <h1 style={{ textAlign: "center" }}>Loading...</h1>
    ) : !isAuth ? (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormRow>
            <FormCol>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <input
                type="text"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <input type="submit" value="submit" />
            </FormCol>
          </FormRow>
        </Form>
        {error && <h3>something went wrong</h3>}
      </FormContainer>
    ) : (
      <Redirect to="/home" />
    )
  }
}

Log.contextType = DataContext
