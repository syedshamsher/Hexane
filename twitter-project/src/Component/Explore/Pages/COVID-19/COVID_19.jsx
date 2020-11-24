import React, { Component } from 'react';
import covid from './Covid-19.json'
import styles from '../../../Component3/Component.module.css'

class COVID_19 extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         covid:[]
    //     }
    // }
    render() {
        console.log(covid)
        return (
        <div>
            {covid.map((item)=> (
                <div className={styles.covid} >
                    <div>
                        <div>{item.smallheading} </div>
                        <div> {item.heading} </div>
                    </div>
                    <div>
                        <img src={item.covidImg} alt="covidImage" width="100px" />
                    </div>
                </div>
            ))}
        </div>
        );
    }
}

export {COVID_19}