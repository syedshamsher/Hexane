import React, { Component } from 'react';
import styles from '../../../Component3/Component.module.css'
import sports from './sports.json'

class Sports extends Component {

    render() {
        
        return (
        <div>
            {sports.map((item)=> (
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

export {Sports}