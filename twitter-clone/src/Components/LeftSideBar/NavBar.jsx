import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiHomeCircle, BiHash, BiBell } from "react-icons/bi";
import { MdMailOutline, MdBookmarkBorder } from "react-icons/md";
import { FaUserCircle, FaEllipsisH } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
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
            <BiHomeCircle color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/home" className={styles.navlink}>
              {" "}
              Home
            </NavLink>
          </div>
          <div className={styles.icons}>
            <BiHash color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/explore" className={styles.navlink}>
              Explore
            </NavLink>
          </div>
          <div className={styles.icons}>
            <BiBell color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/notifications" className={styles.navlink}>
              Notifications
            </NavLink>
          </div>
          <div className={styles.icons}>
            <MdMailOutline color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/messages" className={styles.navlink}>
              Messages
            </NavLink>
          </div>
          <div className={styles.icons}>
            <MdBookmarkBorder color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/bookmarks" className={styles.navlink}>
              Bookmarks
            </NavLink>
          </div>
          <div className={styles.icons}>
            <BsCardText color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/lists" className={styles.navlink}>
              Lists
            </NavLink>
          </div>
          <div className={styles.icons}>
            <FaUserCircle color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/profile" className={styles.navlink}>
              Profile
            </NavLink>
          </div>
          <div className={styles.icons}>
            <FaEllipsisH color="#1DA1F2" fontSize="2rem" />
            <div>More</div>
          </div>
          <div>
            <button className={styles.btn}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
