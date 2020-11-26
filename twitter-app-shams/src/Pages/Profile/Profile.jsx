import React, { Component } from 'react';
import styles from './Profile.module.css'
import users from '../../db.json'
import {ProfileRoutes} from './ProfileRoutes'
//import LocationOnIcon from '@material-ui/icons/LocationOn'

class Profile extends Component {
    render() {
        //console.log(users.users[0])
        const data = users.users[0]
        console.log(data)
        
        return (
        <div style={{padding: 10, width: 800}} >
            <div >
                <img src={data.backgroundimgURL} width="100%" height="200px" alt="background_image" />
            </div>
            <div className={styles.profile}>
                <img src={data.imageURL} width="150px" alt="profile" style={{borderRadius:"75px"}}/>
            </div>
            <h2>{data.name} </h2>
            <p className={styles.email} >{data.email} </p>
            <div style={{marginBottom: "10px"}} >{data.bio} </div>
            <div className={styles.location} >
                
                <div>{data.location} </div>
                <div>Joined {data.joined} </div>
            </div>
            <div className={styles.location}>
                <div><b>{data.following}</b> Following </div>
                <div><b>{data.followers}</b> Followers </div>
            </div>
            <ProfileRoutes/>
        </div>
        );
    }
}

export {Profile}
