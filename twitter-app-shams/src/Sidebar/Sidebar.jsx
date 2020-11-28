import React, { Component } from 'react'
import "../Options.css"
import { NavLink } from "react-router-dom"
import { HomeOption } from "../HomeOption"
import { ExploreOption } from "../ExploreOption"
import { NotificationOption } from "../NotificationOption"
import { MessageOption } from "../MessageOption"
import { BookmarkOption } from "../BookmarkOption"
import { ListOption } from "../ListOption"
import { ProfileOption } from "../ProfileOption"
import { MoreOption } from "../MoreOption"
import { Button } from "@material-ui/core"

import { FaTwitter } from "react-icons/fa"
import { BiHomeCircle } from "react-icons/bi"
import { BiHash } from "react-icons/bi"
import { IoIosNotificationsOutline } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"
import { RiFileList2Line } from "react-icons/ri"
import { FaRegUser } from "react-icons/fa"
import { CgMoreO } from "react-icons/cg"



class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
              {/* Twitter icon */}
              <NavLink to="/home" exact ><FaTwitter className= "twitterLogo" /></NavLink>
              {/*  SidebarOption Components*/}
              <NavLink to="/home" exact style={{textDecoration: "none", color: "black"}}  > <HomeOption active  Icon={ BiHomeCircle } text="Home" /> </NavLink>
              <NavLink to="/explore" exact style={{textDecoration: "none", color: "black"}}  > <ExploreOption  Icon={ BiHash } text="Explore" /> </NavLink>
              <NavLink to="/notifications" exact style={{textDecoration: "none", color: "black"}}  > <NotificationOption  Icon={ IoIosNotificationsOutline } text="Notification" /> </NavLink>
              <NavLink to="/messages" exact style={{textDecoration: "none", color: "black"}}  > <MessageOption  Icon={ FiMail } text="Message" /> </NavLink>
              <NavLink to="/bookmarks" exact style={{textDecoration: "none", color: "black"}}  > <BookmarkOption  Icon={ BsBookmark } text="Bookmark" /> </NavLink>
              <NavLink to="/lists" exact style={{textDecoration: "none", color: "black"}}  > <ListOption  Icon={ RiFileList2Line } text="Lists" /> </NavLink>
              <NavLink to="/profile" exact style={{textDecoration: "none", color: "black"}}  > <ProfileOption  Icon={ FaRegUser } text="Profile" /> </NavLink>
              <NavLink to="/more" exact style={{textDecoration: "none", color: "black"}} > <MoreOption  Icon={ CgMoreO } text="More" /> </NavLink>
              
              {/* Button for tweet */}
              <Button variant="outlined" className="btn__sidebar" fullWidth >Tweet</Button>

            </div>
        )
    }
}

export { Sidebar }

