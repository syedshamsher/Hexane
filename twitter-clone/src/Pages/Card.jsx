import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { imageURL, name, bio, tweets } = props.user;
  return (
    <div className="">
      <div className={styles.card}>
        <img width="300px" src={imageURL} alt="img" />
        <div> {name} </div>
        <p>{bio} </p>
        <h3> {tweets} </h3>
      </div>
    </div>
  );
}
export default Card;
