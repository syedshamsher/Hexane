import React, { Component } from 'react';
import users from '../../../../db.json'
import styles from '../../Profile.module.css'

class Replies extends Component {
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
    }
    // componentDidMount(){
    //     const data = users
    //     this.setState({
    //         datas: data
    //     })
    // }

    render() {
        //const mydata = users
        console.log(users)
        console.log(this.state.datas)
        //const tweet = users.users[0].user1[0].tweets
        return (
        <div>
            {/* {
                tweet.map((item)=> (
                    <div className={styles.tweet}>
                        <img src={mydata.imageURL} width="70px" alt="profile" style={{borderRadius: "35px"}} />
                        <h3>{mydata.name} </h3>
                        <p>{mydata.email} </p>
                        <h3>{item.tweet} </h3>
                    </div>
                ))
                
            } */}
        </div>
        );
    }
}

export {Replies}