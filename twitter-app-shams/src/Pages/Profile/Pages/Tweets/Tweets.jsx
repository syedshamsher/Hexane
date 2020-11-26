import React, { Component } from 'react';
import users from '../../../../db.json'
import styles from '../../Profile.module.css'

class Tweets extends Component {
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
    }
    componentDidMount(){
        const data = users
        this.setState({
            datas: data
        })
    }

    render() {
        const mydata = users
        // const tweet = users.user1[0].tweets
        // console.log(tweet)
        console.log(mydata)
        return (
        <div>
            {/* {
                tweet.map((item)=> (
                    <div className={styles.tweet}>
                        <img src={mydata.imageURL} width="70px" alt="profile" style={{borderRadius: "35px"}} />
                        <h3>{mydata.name} </h3>
                        <p>{mydata.email} </p>
                        <h3>{item} </h3>
                    </div>
                ))
                
            } */}
        </div>
        );
    }
}

export {Tweets}