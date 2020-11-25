
import React, { Component } from 'react';
import styles from '../../Component.module.css'
import sports from './sports.json'

class Sports extends Component {

    render() {
        
        return (
        <div>
            <div className={styles.container}>
                <img src="https://pbs.twimg.com/semantic_core_img/1329754508512034816/o2gUFzPu?format=jpg&name=small" alt="covidimage" width="100%" height="300px" />
                <div className={styles.bottom_left}>
                    <div style={{marginRight: "150px", marginBottom: "-20px"}}>Indian Super League</div>
                    <h1>Here's the latest from Indian Super League</h1>
                </div>
            </div>
            {sports.map((item)=> (
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

export {Sports}