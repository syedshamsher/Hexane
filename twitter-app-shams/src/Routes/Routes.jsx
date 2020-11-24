import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { Log } from "../Pages/Log"
import { Home } from "../Pages/Home"

// login is a public route ; whereas the rest are private routes
// Private Route is a custom component which allows users only when isAuth status ( Authentication Status ) is true
// else it redirects to Login page

function Routes() {
  return (
    <>
    <Route path="/" exact render={(props) => <LoginPage {...props}/>} />
      <Switch>
        <Route path="/login" exact render={( props ) => <Log {...props} /> } />
        <Route path="/home" exact render =  {() =>  <Home/>} />
      </Switch>
    </>
  );
}

export { Routes };
