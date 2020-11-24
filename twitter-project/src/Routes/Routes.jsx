import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Tweets} from '../Pages/Tweets'
import {Replies} from '../Pages/Replies'
import {Media} from '../Pages/Media'
import {Likes} from '../Pages/Likes'
import {Navbar} from '../Pages/Navbar'

const Routes = () => {
    return (
        <div>
            <Route path="/"  render={()=> <Navbar/>} />
            <Switch>
                <Route path="/" exact render={()=> <Tweets/>} />
                <Route path="/with_replies" exact render={()=> <Replies/>} />
                <Route path="/media" exact render={()=> <Media/>} />
                <Route path="/likes" exact render={()=> <Likes/>} />
            </Switch>
        </div>
    );
}

export {Routes}
