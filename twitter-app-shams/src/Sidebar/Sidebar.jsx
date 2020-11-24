import React, { Component } from 'react'
import "../Options.css"
import {Link, Switch, Route } from "react-router-dom"
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
              <FaTwitter className= "twitterLogo" />

              {/*  SidebarOption Components*/}
              <HomeOption active Icon={ BiHomeCircle } text="Home" />
              <ExploreOption Icon={ BiHash } text="Explore" />
              <NotificationOption Icon={ IoIosNotificationsOutline } text="Notification" />
              <MessageOption Icon={ FiMail } text="Message" />
              <BookmarkOption Icon={ BsBookmark } text="Bookmark" />
              <ListOption Icon={ RiFileList2Line } text="Lists" />
              <ProfileOption Icon={ FaRegUser } text="Profile" />
              <MoreOption Icon={ CgMoreO } text="More" />

              {/* Button for tweet */}
              <Button variant="outlined" className="btn__sidebar" fullWidth >Tweet</Button>

            </div>
        )
    }
}

export { Sidebar }

