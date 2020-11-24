import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const links=[
    {
        to:"/explore/tabs/for-you",
        title:"For you"
    },
    
    {
        to:"/explore/tabs/covid-19",
        title:"COVID-19"
    },
    {
        to:"/explore/tabs/trending",
        title:"Trending"
    },
    {
        to:"/explore/tabs/news",
        title:"News"
    },
    {
        to:"/explore/tabs/sports",
        title:"Sports"
    },
    {
        to:"/explore/tabs/entertainment",
        title:"Entertainment"
    }
]

class Navbar extends Component {
    render() {
        return (
            <div>
                {links.map((link)=>(
                    <NavLink style={{padding:10}}
                    activeStyle={{fontWeight:"bold",color:"blue"}}
                    key={link.to}
                    exact
                    to={link.to}>{link.title}</NavLink>
                ))}
            </div>
        );
    }
}

export {Navbar}