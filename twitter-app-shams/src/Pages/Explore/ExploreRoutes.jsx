import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {ForYou} from './Pages/ForYou/ForYou'
import {COVID_19} from './Pages/COVID-19/COVID_19'
import {Trending} from './Pages/Trending/Trending'
import {News} from './Pages/News/News'
import {Sports} from './Pages/Sports/Sports'
// import {Entertainment} from './Pages/Entertainment/Entertainment'
import { Entertainment } from "./Pages/Entertainment/Entertainment"
import {Navbar} from './Pages/Navbar/Navbar'


const ExploreRoutes = () => {
    return (
        <div>
            
            <div style={{padding: 20}} > 
                <Route path="/"  render={()=> <Navbar/>} />
            </div>
            
            <Switch>
                <Route path="/explore/for-you" exact render={()=> <ForYou/>} />
                <Route path="/explore/covid-19" exact render={()=> <COVID_19/>} />
                <Route path="/explore/trending" exact render={()=> <Trending/>} />
                <Route path="/explore/news" exact render={()=> <News/>} />
                <Route path="/explore/sports" exact render={()=> <Sports/>} />
                <Route path="/explore/entertainment" exact render={()=> <Entertainment/>} />
            </Switch>
        </div>
    );
}

export {ExploreRoutes}
