import React, { Component } from 'react'
import "./Feed.css"
import { Tweetbox } from "../Tweetbox"

class Feeds extends Component {
    render() {
        return (
            <div className="feed">
                {/* header */}
                <div className="feed__header">
                     <h2>HOME</h2>
                </div>
                {/* tweetbox */}
                <Tweetbox/>
                <div style={{margin: "10px"}}>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                </div>
                
            </div>
        )
    }
}

export { Feeds }
