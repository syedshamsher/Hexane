import React, { Component } from 'react';
import styles from '../../../Component3/Component.module.css'
import entertainment from './entertainment.json'

class Entertainment extends Component {

    render() {
        
        return (
        <div>
            {entertainment.map((item)=> (
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

export {Entertainment}