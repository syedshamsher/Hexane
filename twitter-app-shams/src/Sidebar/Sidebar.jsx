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
              <NavLink to="/home" exact > <HomeOption active Icon={ BiHomeCircle } text="Home" /> </NavLink>
              <NavLink to="/explore" exact > <ExploreOption Icon={ BiHash } text="Explore" /> </NavLink>
              <NavLink to="/notifications" exact > <NotificationOption Icon={ IoIosNotificationsOutline } text="Notification" /> </NavLink>
              <NavLink to="/messages" exact > <MessageOption Icon={ FiMail } text="Message" /> </NavLink>
              <NavLink to="/bookmarks" exact > <BookmarkOption Icon={ BsBookmark } text="Bookmark" /> </NavLink>
              <NavLink to="/lists" exact > <ListOption Icon={ RiFileList2Line } text="Lists" /> </NavLink>
              <NavLink to="/profile" exact > <ProfileOption Icon={ FaRegUser } text="Profile" /> </NavLink>
              <NavLink to="/more" exact > <MoreOption Icon={ CgMoreO } text="More" /> </NavLink>
              

              {/* Button for tweet */}
              <Button variant="outlined" className="btn__sidebar" fullWidth >Tweet</Button>

            </div>
        )
    }
}

export { Sidebar }
