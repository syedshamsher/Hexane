import React, { Component } from 'react'

class TweetCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data : []
        }
    }
    
    

    render() {
        return (
            <div>
                <header>
                    <img src="" alt=""/>
                    <h3></h3>
                    <p></p>
                </header>
                <div>
                    body
                </div>
                <footer>
                    footer
                </footer>
            </div>
        )
    }
}

export { TweetCard }
