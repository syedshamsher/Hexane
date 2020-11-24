import React, { Component } from 'react';
import styles from '../../../Component3/Component.module.css'
import trending from './trending.json'

class Trending extends Component {

    render() {
        console.log(covid)
        return (
        <div>
            {trending.map((item)=> (
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

export {Trending}