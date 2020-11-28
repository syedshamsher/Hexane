import React from 'react';
import {Route, Switch} from 'react-router-dom'
// import {ForYou} from "./Pages/ForYou/ForYou"
// import {COVID_19} from './Pages/COVID-19/COVID_19'
// import {Trending} from './Pages/Trending/Trending'
// import {News} from './Pages/News/News'
// import {Sports} from './Pages/Sports/Sports'
// import {Entertainment} from './Pages/Entertainment/Entertainment'
import {Navbar} from './Pages/Navbar'
const ExploreRoutes = () => {
    return (
        <div>
            
            <div style={{padding: 20}} > 
                <Route path="/explore"  render={()=> <Navbar/>} />
            </div>
            
            <Switch>
                
            </Switch>
        </div>
    );
}
export {ExploreRoutes}