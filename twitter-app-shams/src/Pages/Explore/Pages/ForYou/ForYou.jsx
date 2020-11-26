import React, { Component } from 'react';
import styles from '../../Component.module.css'
import foryou from './foryou.json'

class ForYou extends Component {

    render() {
        
        return (
        <div style={{width: "700px"}} >
            <div className={styles.container}>
                <img src="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240" alt="covidimage" width="100%" height="300px" />
                <div className={styles.bottom_left}>
                    <div style={{marginRight: "150px", marginBottom: "-20px"}}>COVID-19 .LIVE</div>
                    <h1>COVID-19 in India</h1>
                </div>
            </div>
            {foryou.map((item)=> (
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

export {ForYou}