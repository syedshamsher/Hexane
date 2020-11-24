import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {ForYou} from './Pages/ForYou/ForYou'
import {COVID_19} from './Pages/COVID-19/COVID_19'
import {Trending} from './Pages/Trending/Trending'
import {News} from './Pages/News/News'
import {Sports} from './Pages/Sports/Sports'
import {Entertainment} from './Pages/Entertainment/Entertainment'
import {Navbar} from './Pages/Navbar/Navbar'


const ExploreRoutes = () => {
    return (
        <div>
            <Route path="/"  render={()=> <Navbar/>} />
            <Switch>
                <Route path="/explore/tabs/for-you" exact render={()=> <ForYou/>} />
                <Route path="/explore/tabs/covid-19" exact render={()=> <COVID_19/>} />
                <Route path="/explore/tabs/trending" exact render={()=> <Trending/>} />
                <Route path="/explore/tabs/news" exact render={()=> <News/>} />
                <Route path="/explore/tabs/sports" exact render={()=> <Sports/>} />
                <Route path="/explore/tabs/entertainment" exact render={()=> <Entertainment/>} />
            </Switch>
        </div>
    );
}

export {ExploreRoutes}
