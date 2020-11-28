import React from 'react';
import {Route, Switch} from 'react-router-dom'
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
