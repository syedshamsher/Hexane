import React, { Component } from "react"
import styled from "styled-components"
import { Sidebar } from "../../Sidebar"
import { Feeds } from "../../Feeds"
import { Widgets } from "../../Widgets"
import { DataContext } from "../../Context/DataContextProvider"



class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { activeUser } = this.context 
    console.log( activeUser )
    return (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Feeds/>
          <Widgets/>
        </div>
    )
  }
}

Home.contextType = DataContext
export { Home }
