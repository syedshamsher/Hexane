import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { Log } from "../Pages/Log"
import { Home } from "../Pages/Home"
import { Sidebar } from "../Sidebar";
import { ExploreOption } from "../ExploreOption";
import { Divider, Hidden } from "@material-ui/core";
import { Feeds } from "../Feeds";
import { Widgets } from "../Widgets";
import "../Routes.css"
import { Explore } from "../Pages/Explore/Explore";
import { Notification } from "../Pages/Notification";
import {BookMarks} from '../Pages/BookMarks'
import {Lists} from '../Pages/Lists'
import {Profile} from '../Pages/Profile'
import {More} from '../Pages/More'

import { ForYou } from "../Pages/Explore/Pages/ForYou/ForYou";
import {COVID_19} from '../Pages/Explore/Pages/COVID-19/COVID_19'

// login is a public route ; whereas the rest are private routes
// Private Route is a custom component which allows users only when isAuth status ( Authentication Status ) is true
// else it redirects to Login page

function Routes() {
  return (
    <>
    <Route path="/" exact render={(props) => <LoginPage {...props}/>} />
      <Switch>
        <Route path="/login" exact render={( props ) => <Log {...props} /> } />
        {/* <Route path="/home" render =  {() =>  <Home/>} /> */}
        <div className="control">
            <Sidebar/>
            <Switch>
              <Route path="/home" exact component={ Feeds }/>
              <Route path="/explore" exact component={ Explore }/>
              
                <Route path="/explore/for-you" component={ForYou} />
                <Route path="/explore/covid-19" component={COVID_19} />
                <Route path="/explore/" component={COVID_19} />
                <Route path="/explore/for-you" component={ForYou} />
              
              
              <Route path="/messages" exact component={ Feeds}/>
              <Route path="/notifications" exact component={ Notification }/>
              <Route path="/bookmarks" exact component={ BookMarks }/>
              <Route path="/lists" exact component={ Lists }/>
              <Route path="/profile" exact component={ Profile }/>
              <Route path="/more" exact component={ More }/>
            </Switch>
            <Widgets/>
        </div>
      </Switch>
    </>
  );
}

export { Routes };
