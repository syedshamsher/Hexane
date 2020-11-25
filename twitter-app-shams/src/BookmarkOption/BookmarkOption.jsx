import React, { Component } from 'react'
import "../Options.css"

class BookmarkOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        const { Icon, text, active } = this.props

        return (
            <div className={`option ${active && `option--active`}`}>
                <Icon/> 
                <h2> { text } </h2>
            </div>
        )
    }
}

export { BookmarkOption }