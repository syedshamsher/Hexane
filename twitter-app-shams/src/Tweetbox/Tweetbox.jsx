import React, { Component } from 'react'
import "./Tweetbox.css"
import { Avatar, Button } from "@material-ui/core"

class Tweetbox extends Component {
    render() {
        return (
            <div className="tweetBox">
                <form>
                    <div className="tweetBox__input">
                        <Avatar src="" />
                        <input type="text" placeholder="What's happening?" />
                    </div>
                    <input type="submit" name="submit" value="Tweet" className="tweetBox__tweetButton" />
                </form>
            </div>
        )
    }
}

export { Tweetbox }

