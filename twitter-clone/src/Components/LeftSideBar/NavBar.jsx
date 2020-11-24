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
    // <div
    //   style={{
    //     width: "200px",
    //     height: "800px",
    //     border: "1px solid red"
    //   }}
    // >
    //   Hello
    // </div>
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
            <NavLink to="/home"> Home</NavLink>
          </div>
          <div className={styles.icons}>
            <BiHash color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/explore">Explore</NavLink>
          </div>
          <div className={styles.icons}>
            <BiBell color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/notifications">Notifications</NavLink>
          </div>
          <div className={styles.icons}>
            <MdMailOutline color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/messages">Messages</NavLink>
          </div>
          <div className={styles.icons}>
            <MdBookmarkBorder color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/bookmarks">Bookmarks</NavLink>
          </div>
          <div className={styles.icons}>
            <BsCardText color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/lists">Lists</NavLink>
          </div>
          <div className={styles.icons}>
            <FaUserCircle color="#1DA1F2" fontSize="2rem" />
            <NavLink to="/profile">Profile</NavLink>
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
