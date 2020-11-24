import React, { Component } from 'react'
import styles from "./LoginPage.module.css"
import { Link } from "react-router-dom"


class LoginPage extends Component {
    render() {
        return (
                <div>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <img src="https://i.ibb.co/1RmTQpX/Screenshot-1028-v4-cropped-1.jpg" alt="Screenshot-1028-v4-cropped-1" border="0"/>
                        </div>
                        <div className={styles.rightWrapper}>
                            <div className={styles.right}>
                                <div className={styles.imgWrapper}>
                                    <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="logo"/>
                                </div>
                                <div>
                                    <h1>See what’s happening in <br/> the world right now</h1>
                                </div>
                                <div>
                                    <h3>Join Twitter today.</h3>
                                </div>
                                <div>
                                    <button className={styles.signinBtn}>Sign up</button>
                                </div>
                                <div>
                                    <button className={styles.loginBtn} onClick= {()=> this.props.history.push( "./login" )}>Log in</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <p>About</p>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Ads info</p>
                        <p>Blog</p>
                        <p>Status</p>
                        <p>Careers</p>
                        <p>Brand Resources</p>
                        <p>Advertising</p>
                        <p>Marketing</p>
                        <p>Twitter for Business</p>
                        <p>Developers</p>
                        <p>Directory</p>
                        <p>Settings</p>
                    </div>
                    <div className={styles.copyRight}>© 2020 Twitter, Inc.</div>
                </div>
        )
    }
}

export { LoginPage }
