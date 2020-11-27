
import React, { Component } from 'react';
import styles from '../../Component.module.css'
import data from './Entertainment.json'

class Entertainment extends Component {

    render() {
        
        return (
        <div>
            <div className={styles.container}>
                <img src="https://pbs.twimg.com/semantic_core_img/1311626057942929408/PEGew4sm?format=jpg&name=small" alt="covidimage" width="100%" height="300px" />
                <div className={styles.bottom_left}>
                    <div style={{marginRight: "150px", marginBottom: "-20px"}}>ENTERTAINMENT .LIVE</div>
                    <h1>Big Boss Season 14: Here's the latest from the house</h1>
                </div>
            </div>
            {data.map((item)=> (
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

export {Entertainment}