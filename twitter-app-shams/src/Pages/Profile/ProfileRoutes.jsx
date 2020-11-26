import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Tweets} from './Pages/Tweets'
import {Replies} from './Pages/Replies'
import {Media} from './Pages/Media'
import {Likes} from './Pages/Likes'
import {Navbar} from './Pages/Navbar'

const ProfileRoutes = () => {
    return (
        <div>
            <Route path="/profile"  render={()=> <Navbar/>} />
            <Switch>
                <Route path="/profile" exact render={()=> <Tweets/>} />
                <Route path="/profile/with_replies" exact render={()=> <Replies/>} />
                <Route path="/profile/media" exact render={()=> <Media/>} />
                <Route path="/profile/likes" exact render={()=> <Likes/>} />
            </Switch>
        </div>
    );
}

export {ProfileRoutes}
