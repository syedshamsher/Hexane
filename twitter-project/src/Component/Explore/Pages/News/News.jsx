import React, { Component } from 'react';
import styles from '../../../Component3/Component.module.css'
import news from './news.json'

class News extends Component {

    render() {
        
        return (
        <div>
            {news.map((item)=> (
                <div className={styles.covid} >
                    <div>
                        <div>{item.smallheading} </div>
                        <div> {item.heading} </div>
                        <div> {item.tweets} </div>
                    </div>
                </div>
            ))}
        </div>
        );
    }
}

export {News}