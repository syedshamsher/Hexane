import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../src/Components/PrivateRoute";
import { LoginPage } from "../Pages/LoginPage";
import { Log } from "../Pages/Log"
import { Sidebar } from "../Sidebar";
import { Feeds } from "../Feeds";
import { Widgets } from "../Widgets";
import "../Routes.css"
import { Explore } from "../Pages/Explore";
import { Profile } from "../Pages/Profile";
import { Notifications } from "../Pages/Notifications/Notifications";
import { Messages } from "../Pages/Messages";
import { Lists } from "../Pages/Lists";
import { More } from "../Pages/More";
// import { More } from "../Sidebar/More";

// login is a public route ; whereas the rest are private routes
// Private Route is a custom component which allows users only when isAuth status ( Authentication Status ) is true
// else it redirects to Login page

function Routes() {
  return (
    <>
      <Route path="/" exact render={(props) => <LoginPage {...props}/>} />
        <Route path="/login" exact render={( props ) => <Log {...props} /> } />
        
          <PrivateRoute>
          <div className="control">
          <Sidebar/>
                      <Route path="/home" exact component={ Feeds }/>
                      <Route path="/explore" exact component={ Explore }/>
                      <Route path="/messages" exact component={ Messages}/>
                      <Route path="/notifications" exact component={ Notifications }/>
                      <Route path="/bookmarks" exact component={ Feeds }/>
                      <Route path="/lists" exact component={ Lists }/>
                      <Route path="/profile" exact component={ Profile }/>
                      <Route path="/more" exact component={ More }/>
            <Widgets/>
          </div>
          </PrivateRoute>
    </>
  );
}

export { Routes };
