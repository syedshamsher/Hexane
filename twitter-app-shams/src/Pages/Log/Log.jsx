import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import styled from "styled-components";
import { DataContext } from "../../Context/DataContextProvider";
import styles from "./Log.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
export class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    const { authenticateUser } = this.context;
    authenticateUser({ email, password });
  }
  render() {
    const { isLoading, error, isAuth } = this.context;
    const { email, password } = this.state;
    return isLoading ? (
      <h1 style={{ textAlign: "center" }}>Loading...</h1>
    ) : !isAuth ? (
      <div className={styles.main}>
        <form onSubmit={this.handleSubmit}>
          <AiOutlineTwitter color="#1DA1F2" fontSize="2.8rem" />
          <h2>Log in to Twitter</h2>
          <div>
            <input
              className={styles.inputBox}
              type="text"
              placeholder="Phone, email, or username"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className={styles.inputBox}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button className={styles.btn} type="submit" value="submit">
            Log in
          </button>
          <div className={styles.footer}>
            <a href="#">Forgot password?</a>.<a href="#">Sign up for Twitter</a>
          </div>
        </form>
        {error && <h3>Wrong email Or Password</h3>}
      </div>
    ) : (
      <Redirect to="/home" />
    );
  }
}
Log.contextType = DataContext;