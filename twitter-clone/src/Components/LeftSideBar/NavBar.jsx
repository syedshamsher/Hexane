import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiHomeCircle, BiHash, BiBell } from "react-icons/bi";
import { MdMailOutline, MdBookmarkBorder } from "react-icons/md";
import { FaUserCircle, FaEllipsisH } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { TweetButton } from "./TweetButton";
// import "../../Options.css";
function Navbar() {
  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <div className={styles.sidebarArea}>
          <div className={styles.Twitter}>
            <NavLink to="/home">
              <AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem" />
            </NavLink>
          </div>

          <div className={styles.icons}>
            <NavLink to="/home" className={styles.navlink}>
              <BiHomeCircle color="#1DA1F2" fontSize="2rem" /> Home
            </NavLink>
          </div>
          <div className={styles.icons}>
            <NavLink to="/explore" className={styles.navlink}>
              <BiHash color="#1DA1F2" fontSize="2rem" />
              Explore
            </NavLink>
          </div>
          <div className={styles.icons}>
            <NavLink to="/notifications" className={styles.navlink}>
              <BiBell color="#1DA1F2" fontSize="2rem" />
              Notifications
            </NavLink>
          </div>
          <div className={styles.icons}>
            <NavLink to="/messages" className={styles.navlink}>
              <MdMailOutline color="#1DA1F2" fontSize="2rem" />
              Messages
            </NavLink>
          </div>
          <div className={styles.icons}>
            <NavLink to="/bookmarks" className={styles.navlink}>
              <MdBookmarkBorder color="#1DA1F2" fontSize="2rem" />
              Bookmarks
            </NavLink>
          </div>
          <div className={styles.icons}>
            <NavLink to="/lists" className={styles.navlink}>
              <BsCardText color="#1DA1F2" fontSize="2rem" />
              Lists
            </NavLink>
          </div>
          <div className={styles.icons}>
            <NavLink to="/profile" className={styles.navlink}>
              <FaUserCircle color="#1DA1F2" fontSize="2rem" />
              Profile
            </NavLink>
          </div>
          <div className={styles.icons}>
            <FaEllipsisH color="#1DA1F2" fontSize="2rem" />
            <div>More</div>
          </div>
          <div>
            <TweetButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
