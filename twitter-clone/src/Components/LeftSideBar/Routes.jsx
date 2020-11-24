import React from "react";
import Navbar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { Lists } from "../../Pages/Lists";
function Routes() {
  return (
    <div>
      <div style={{ float: "left" }}>
        <Route path="/" component={Navbar} />
      </div>
      <div style={{ float: "left" }}>
        <Route path="/home" component={Home} />
        <Route path="/lists" component={Lists} />
      </div>
      {/* <Route path="/products" component={Explore} />
      <Route path="/contact" exact component={Notifications} />
      <Route path="/about-us" component={Messages} />
      <Route path="/faq" component={Bookmarks} />
      <Route path="/faq" component={Lists} />
      <Route path="/faq" component={Profile} /> */}
    </div>
  );
}

export { Routes };
