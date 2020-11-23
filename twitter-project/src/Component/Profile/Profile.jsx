import React, { Component } from 'react';
import styles from './Profile.module.css'
import users from '../../db.json'
import {Routes} from '../../Routes/Routes'

class Profile extends Component {
    render() {
        const data = users.users[0].user1[0]
        console.log(users.users[0])
        return (
        <div>
            <div className={styles.profileImg} >
                <img src={data.backgroundimgURL} width="100%" height="200px" alt="background_image" />
            </div>
            <div className={styles.profile}>
                <img src={data.imageURL} width="150px" alt="profile" style={{borderRadius:"75px"}}/>
            </div>
            <h2>{data.name} </h2>
            <p>{data.email} </p>
            <div>{data.bio} </div>
            <div className={styles.location} >
                <div>{data.location} </div>
                <div>{data.joined} </div>
            </div>
            <div className={styles.location}>
                <div>{data.following} Following </div>
                <div>{data.followers} Followers </div>
            </div>
            <Routes/>
        </div>
        );
    }
}

export {Profile}
