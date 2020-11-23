import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const links=[
    {
        to:"/",
        title:"Tweets"
    },
    
    {
        to:"/with_replies",
        title:"Replies"
    },
    {
        to:"/media",
        title:"Media"
    },
    {
        to:"/likes",
        title:"Likes"
    }
]

class Navbar extends Component {
    render() {
        return (
            <div>
                {links.map((link)=>(
                    <NavLink style={{padding:10}}
                    activeStyle={{fontWeight:"bold",color:"red"}}
                    key={link.to}
                    to={link.to}>{link.title}</NavLink>
                ))}
            </div>
        );
    }
}

export {Navbar}