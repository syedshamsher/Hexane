import React, { Component } from 'react';
import axios from 'axios'
import styles from './Component.module.css'

class Component3 extends Component {
    constructor(props){
        super(props)
        this.state={
            // news:[]
        }

    }

    // componentDidMount(){
    //     axios.get("http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=1ed6bc53bad74607b798ed577e833cd2")
    //     .then((res)=> {
    //         this.setState({
    //             news: [...res.data.articles]
    //         })
    //     })
    // }
    render() {
        // console.log(this.state.news)
        // const {news} = this.state
        return (
        <div>
            <input/>
            <h2>What's happening</h2>
            <div className={styles.card}>
                <div>COVID-19 .LIVE </div>
                <div className={styles.flex}>
                    <div>COVID-19 in India</div>
                    <img style={{float: "right"}} src="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240" width="60px"/>
                </div>
                
            </div>
            <div className={styles.card}>
                <div>K-pop .Trending </div>
                <div>JUNG HOSEOK</div>
                <div>38.1k Tweets</div>
            </div>
            <div className={styles.card}>
                <div>Sports .Trending </div>
                <div>Iyer</div>
                <div>2,399 Tweets</div>
            </div>
            <div className={styles.card}>
                <div>Entertainment .Live </div>
                <div>Big Boss season 14: Here's the latest from the house</div>
                
            </div>
            <div className={styles.card}>
                <div>Indian Premier League </div>
                <div>Big Boss season 14: Here's the latest from the house</div>
                
            </div>
        </div>
        );
    }
}

export {Component3}
