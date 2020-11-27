
import React, { Component } from 'react';
import styles from '../../Component.module.css'
import trending from './trending.json'

class Trending extends Component {

    render() {
        
        return (
        <div>
            <h2 style={{paddingLeft: 20}}>India trends</h2>
            <div className={styles.container}>
                
                
            </div>
            {trending.map((item)=> (
                <div className={styles.covid} >
                    <div>
                        <div>{item.smallheading} </div>
                        <div><b> {item.heading} </b></div>
                        <div> {item.tweets} </div>
                    </div>
                </div>
            ))}
        </div>
        );
    }
}

export {Trending}