import React, { Component } from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
import { Sidebar } from "../../Sidebar"
import { Feeds } from "../../Feeds"
import { Widgets } from "../../Widgets"
import { DataContext } from "../../Context/DataContextProvider"
import "./Home.css"


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: []
    }
    this.getData = this.getData.bind( this )
  }

  getData() {
    const { getActiveUserData, activeUser } = this.context 
    localStorage.setItem("user", JSON.stringify( activeUser) )
    var data = JSON.parse(localStorage.getItem("user"))
    this.setState({
      details: getActiveUserData()
    })
  }


  render() {
    const { activeUser } = this.context
    const { details } = this.state
    console.log( details )
    return (
      <div>
        <div className="home">
          <Sidebar />
          <Feeds/>
          <Widgets/>
        </div>
      </div>

    )
  }
}

Home.contextType = DataContext
export { Home }
