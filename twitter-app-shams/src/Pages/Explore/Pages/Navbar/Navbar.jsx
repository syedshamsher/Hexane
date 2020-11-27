import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const links=[
    {
        to:"/explore/for-you",
        title:"For you"
    },
    
    {
        to:"/explore/covid-19",
        title:"COVID-19"
    },
    {
        to:"/explore/trending",
        title:"Trending"
    },
    {
        to:"/explore/news",
        title:"News"
    },
    {
        to:"/explore/sports",
        title:"Sports"
    },
    {
        to:"/explore/entertainment",
        title:"Entertainment"
    }
]

class Navbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <input placeholder="Search Twitter"  style={{padding: 10,width:"100%",height:"10px", borderRadius: "20px", marginBottom: 20}} />
                </div>
            
                {links.map((link)=>(
                    <NavLink style={{padding:10, textDecoration:"none", color:"grey", fontWeight:"bold"}}
                    activeStyle={{fontWeight:"bold",color:"#00BFFF", textDecoration: "none", borderBottom:"2px solid #00BFFF"  }}
                    key={link.to}
                    
                    exact
                    to={link.to}>{link.title}</NavLink>
                ))}
            </div>
        );
    }
}

export {Navbar}