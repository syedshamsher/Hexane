import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styles from './Profile.module.css'
// import users from '../../db.json'
import {ProfileRoutes} from './ProfileRoutes'
//import LocationOnIcon from '@material-ui/icons/LocationOn'
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
           user: [],
        }

      }

      componentDidMount() {
        const { activeUser } = this.context;
        this.setState({
          user: activeUser,
   
        });
      }
    render() {
        const { user } = this.state
        console.log( user )
        return (
        <div style={{padding: 10, width: "575px"}} >
            <div >
                <img src={user.backgroundimgURL} width="100%" height="200px" alt="background_image" />
            </div>
            <div className={styles.profile}>
                <img src={user.imageURL} width="150px" alt="profile" style={{borderRadius:"75px"}}/>
            </div>
            <h2>{user.name} </h2>
            <p className={styles.email} >{user.email} </p>
            <div style={{marginBottom: "10px"}} >{user.bio} </div>
            <div className={styles.location} >
                
                <div>{user.location} </div>
                <div>Joined {user.joined} </div>
            </div>
            <div className={styles.location}>
                <div><b>{user.following}</b> Following </div>
                <div><b>{user.followers}</b> Followers </div>
            </div>
            <ProfileRoutes/>
        </div>
        );
    }
}
Profile.contextType = DataContext
export {Profile}
