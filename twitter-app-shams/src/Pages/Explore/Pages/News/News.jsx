
import React, { Component } from 'react';
import styles from '../../Component.module.css'
import news from './news.json'
//import ReactPlayer from "react-player"
//import YouTubePlayer from "react-player/lib/players/YouTube";

class News extends Component {

    render() {
        
        return (
        <div>
            <div className={styles.container}>
            {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=MkwLgT3PYos&ab_channel=HindustanTimes" width="100%"
            />
            <YouTubePlayer
            url='https://www.youtube.com/watch?v=MkwLgT3PYos&ab_channel=HindustanTimes'
            /> */}
                <img src="https://pbs.twimg.com/media/EnpyuECUUAIFXr9?format=jpg&name=small" alt="covidimage" width="100%" height="300px" />
                <div className={styles.bottom_left}>
                    <div style={{marginRight: "150px", marginBottom: "-20px"}}>COVID-19 .LIVE</div>
                    <h1>COVID-19 in India</h1>
                </div>
            </div>
            {news.map((item)=> (
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

export {News}