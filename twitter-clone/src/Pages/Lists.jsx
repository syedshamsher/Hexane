import React, { Component } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdLibraryAdd } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import styles from "./Lists.module.css";
import { CreateList } from "./CreateList";
class Lists extends Component {
  render() {
    return (
      <div>
        <div className={styles.icons}>
          <div style={{ float: "left" }}>
            <BiArrowBack color="#1DA1F2" fontSize="1.7rem" float="left" />
          </div>
          <div className={styles.listText}>
            <h1>Lists</h1>
          </div>
          <div className={styles.rightIcons}>
            <MdLibraryAdd fontSize="1.7rem" />
            <HiDotsHorizontal
              fontSize="1.7rem"
              style={{ marginLeft: "15px", marginTop: "15px" }}
            />
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div className={styles.pinBox1}>
          <h1>Pinned</h1>
        </div>
        <div className={styles.pinBox2}>
          Nothing to see here yet — pin up to five of your favorite Lists to
          access them
          <br /> quickly.
        </div>
        <div className={styles.yourList1}>
          <h1>Your Lists</h1>
        </div>
        <div className={styles.yourList2}>
          <h3>You haven't created any Lists yet</h3>
          <p>When you do, it'll show up here.</p>
          <CreateList />
        </div>
      </div>
    );
  }
}

export { Lists };
