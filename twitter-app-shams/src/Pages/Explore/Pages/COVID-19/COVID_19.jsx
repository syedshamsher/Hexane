
import React, { Component } from 'react';
import styles from '../../Component.module.css'
import Covid from './Covid-19.json'

class COVID_19 extends Component {

    render() {
        
        return (
        <div>
            <div className={styles.container}>
                <img src="https://pbs.twimg.com/semantic_core_img/1256316756236177408/uhT6hUns?format=jpg&name=small" alt="covidimage" width="100%" height="300px" />
                <div className={styles.bottom_left}>
                    <div style={{marginRight: "150px", marginBottom: "-20px"}}>COVID-19 .LIVE</div>
                    <h1>COVID-19: How To Protect Yourself</h1>
                </div>
            </div>
            {Covid.map((item)=> (
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

export {COVID_19}