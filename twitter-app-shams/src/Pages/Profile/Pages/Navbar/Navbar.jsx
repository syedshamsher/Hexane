import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const links=[
    {
        to:"/profile",
        title:"Tweets"
    },
    
    {
        to:"/profile/with_replies",
        title:"Tweets & replies"
    },
    {
        to:"/profile/media",
        title:"Media"
    },
    {
        to:"/profile/likes",
        title:"Likes"
    }
]
class Navbar extends Component {
    render() {
        return (
            <div>
                {links.map((link)=>(
                    <NavLink style={{padding:10}}
                    activeStyle={{fontWeight:"bold",color:"#00BFFF", borderBottom:"2px solid #00BFFF"}}
                    style={{color:"grey", fontWeight:"bold", padding:"20px", textDecoration:"none"}}
                    key={link.to}
                    exact
                    to={link.to}>{link.title}</NavLink>
                ))}
            </div>
        );
    }
}
export {Navbar}