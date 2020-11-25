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
import { Explore } from "../Pages/Explore";

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
              <Route path="/home" exact component={ Feeds }/>
              <Route path="/explore" exact component={ Explore }/>
              <Route path="/messages" exact component={ Feeds}/>
              <Route path="/notifications" exact component={ Explore }/>
              <Route path="/bookmarks" exact component={ Feeds }/>
              <Route path="/lists" exact component={ Explore }/>
              <Route path="/profile" exact component={ Feeds }/>
              <Route path="/more" exact component={ Explore }/>
            <Widgets/>
        </div>
      </Switch>
    </>
  );
}

export { Routes };
